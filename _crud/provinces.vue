<template></template>

<script>
  export default {
    data() {
      return {
        crudId: this.$uid()
      }
    },
    computed: {
      crudData() {
        return {
          crudId: this.crudId,
          entityName: config("main.qlocations.entityNames.province"),
          apiRoute: 'apiRoutes.qlocations.provinces',
          //permission: 'icommerce.manufacturers',
          create: {
            title: this.$tr('ilocations.cms.newProvince'),
            //to: {name: 'qcommerce.admin.taxRates.create'}
          },
          read: {
            columns: [
              {name: 'id', label: this.$tr('isite.cms.form.id'), field: 'id', style: 'width: 50px'},
              {name: 'name', label: this.$tr('isite.cms.form.name'), field: 'name', align: 'left'},
              {
                name: 'created_at', label: this.$tr('isite.cms.form.createdAt'), field: 'createdAt', align: 'left',
                format: val => val ? this.$trd(val) : '-',
              },
              {name: 'actions', label: this.$tr('isite.cms.form.actions'), align: 'left'},
            ],
            //requestParams: {include: 'parent'}
            filters:{
              country: {
                value: null,
                type: 'select',
                props : {
                  label: this.$tr('ilocations.cms.form.country'),
                },
                loadOptions: {
                  apiRoute: 'apiRoutes.qlocations.countries',
                  select: {label: 'name', id: 'id'},
                }
              },
            }
          },
          update: {
            title: this.$tr('ilocations.cms.updateProvince'),
            //to: 'qcommerce.admin.taxRates.edit'
            //requestParams: {include: 'parent'}
          },
          delete: true,
          formLeft: {
            id: {value: ''},
            name: {
              value: '',
              type: 'input',
              isTranslatable: true,
              props : {
                label: `${this.$tr('isite.cms.form.name')}*`,
                rules: [
                  val => !!val || this.$tr('isite.cms.message.fieldRequired')
                ],
              }
            },
            iso_2: {
              value: '',
              type: 'input',
              isTranslatable: false,
              props : {
                label: `${this.$tr('ilocations.cms.form.iso2')}*`,
                rules: [
                  val => !!val || this.$tr('isite.cms.message.fieldRequired')
                ],
              }
            },
            countryId: {
              value: 48,
              type: 'crud',
              props: {
                crudType: 'select',
                crudData: import('modules/qlocations/_crud/countries'),
                crudProps: {
                  label: `${this.$tr('ilocations.cms.form.country')}*`,
                  rules: [
                    val => !!val || this.$tr('isite.cms.message.fieldRequired')
                  ],
                },
                config: {
                  options: {label: 'name', value: 'id'},
                }
              },
            },
          },
          /*formRight: {

          },*/
        }
      },
      //Crud info
      crudInfo() {
        return this.$store.state.qcrudComponent.component[this.crudId] || {}
      }
    }
  }
</script>
