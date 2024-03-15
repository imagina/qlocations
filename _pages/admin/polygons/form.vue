<template>
  <div id="pageId" class="q-layout-page layout-padding">

    <div class="relative-position q-mb-lg backend-page">
      <div class="box" v-if="success">
        <div class="col-12">
          <locales v-model="locale" ref="localeComponent" :form="$refs.formContent"/>
        </div>
        <!--Form-->
        <q-form autocorrect="off" autocomplete="off" ref="formContent" class="full-width q-my-sm" v-if="locale.success"
                @submit="itemId?updateItem():createItem()" @validation-error="$alert.error($tr('isite.cms.message.formInvalid'))">
          <div class="row q-col-gutter-md">
            <div class="col-12">
              <q-input outlined dense v-model="locale.formTemplate.name"
                       :label="`${$tr('isite.cms.form.name')} (${locale.language})*`"
                       :rules="[val => !!val || $tr('isite.cms.message.fieldRequired')]"/>
              <div class="input-title">{{ `${$tr('isite.cms.form.description')} (${locale.language})*` }}</div>
              <q-field borderless v-model="locale.formTemplate.description" :rules="[val => !!val || $tr('isite.cms.message.fieldRequired')]">
                <q-editor class="full-width" v-model="locale.formTemplate.description"/>
              </q-field>
            </div>
            <div class="col-12">
              <dynamic-field v-model="modelMap" @update:modelValue=" val => locale.formTemplate.points = val.points" class="q-mb-md" :field="mapField"/>
            </div>
          </div>
          <q-page-sticky
                  position="bottom-right"
                  :offset="[18, 18]">
            <!--Update button-->
            <q-btn v-if="$route.params.id" color="green" :loading="loading"
                   icon="fas fa-edit" :label="$tr('isite.cms.label.update')" type="submit"/>
            <!--Save button-->
            <q-btn v-else color="green" :loading="loading" icon="fas fa-edit"
                   :label="$tr('isite.cms.label.create')" type="submit"/>
          </q-page-sticky>
        </q-form>
      </div>
      <inner-loading :visible="loading"/>
    </div>
  </div>
</template>

<script>
  export default {
    components: {},
    mounted() {
      this.$nextTick(function () {
        this.initForm()
      })
    },
    data() {
      return {
        locale: {
          fields: {
            points: [],
            options: {},
          },
          fieldsTranslatable: {
            name: '',
            description: '',
          }
        },
        modelMap: {},
        loading: false,
        success: false,
        itemId: false,
        mapField: {
          //value: null,
          //value: {lat: '6.194971473195364', lng: '-75.5691021855033' },
          type: 'positionMarkerMap',
          help: {description: this.$tr('icommerce.cms.form.mapHelp')},
          required: false,
          isFakeField: false,
          props: {
            polygonControls: true,
          }
        }
      }
    },
    props:{
      id:{
        default: null
      }
    },
    computed: {      
      token(){
        this.$getSetting('isite::api-maps')
      }
    },
    methods: {
      async initForm() {
        this.loading = true
        this.success = false
        this.itemId = this.id !==null ? this.id : this.$route.params.id
        await this.getData()
        this.success = true
        this.loading = false
      },
      getData() {
        return new Promise((resolve, reject) => {
          const itemId = this.$clone(this.itemId)
          if (itemId) {
            let configName = 'apiRoutes.qlocations.polygons'
            //Params
            let params = {
              refresh: true,
              params: {
                filter: {allTranslations: true}
              }
            }
            //Request
            this.$crud.show(configName, itemId, params).then(response => {
              this.locale.form = this.$clone(response.data)
              this.modelMap.points = this.$clone(response.data.points)
              //this.points = response.data.points
              resolve(true)//Resolve
            }).catch(error => {
              this.$apiResponse.handleError(error, () => {
                this.$alert.error({message: this.$tr('isite.cms.message.errorRequest'), pos: 'bottom'})
                this.loading = false
                reject(false)//Resolve
              })
            })
          } else {
            resolve(true)//Resolve
          }
        })
      },
      async updateItem() {
        if (await this.$refs.localeComponent.validateForm()) {
          this.loading = true
          let configName = 'apiRoutes.qlocations.polygons'
          this.$crud.update(configName, this.itemId, this.getDataForm()).then(response => {
            this.$alert.success({message: `${this.$tr('isite.cms.message.recordUpdated')}`})
            //this.initForm()
            this.loading = false
          }).catch(error => {
            this.loading = false
            this.$alert.error({message: this.$tr('isite.cms.message.recordNoUpdated'), pos: 'bottom'})
          })
        }
      },
      async createItem() {
        if (await this.$refs.localeComponent.validateForm()) {
          this.loading = true
          let configName = 'apiRoutes.qlocations.polygons'
          this.$crud.create(configName, this.getDataForm()).then(response => {
            this.$alert.success({message: `${this.$tr('isite.cms.message.recordCreated')}`})
            this.$router.push({name: 'qlocations.admin.polygons.index'})
            //this.initForm()
            this.loading = false
          }).catch(error => {
            this.loading = false
            this.$alert.error({message: this.$tr('isite.cms.message.recordNoUpdated'), pos: 'bottom'})
          })
        }
      },
      getDataForm() {
        let response = this.locale.form
        for (var item in response) {
          let valueItem = response[item]
          if (valueItem == null || valueItem == undefined)
            delete response[item]
        }
        //response.selectable = JSON.stringify(response.selectable)
        return response
      }
    }
  }
</script>
