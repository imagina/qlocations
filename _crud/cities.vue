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
        entityName: config("main.qlocations.entityNames.city"),
        apiRoute: 'apiRoutes.qlocations.cities',
        //permission: 'icommerce.manufacturers',
        create: {
          title: this.$tr('ilocation.cms.newCity')
        },
        read: {
          columns: [
            {name: 'id', label: this.$tr('isite.cms.form.id'), field: 'id', style: 'width: 50px'},
            {name: 'name', label: this.$tr('isite.cms.form.title'), field: 'title', align: 'left'},
            {name: 'code', label: this.$tr('ilocation.cms.form.code'), field: 'code', align: 'left'},
            {
              name: 'country', label: this.$tr('ilocation.cms.form.country'), field: 'country', align: 'left',
              format: val => val.title || '-'
            },
            {
              name: 'province', label: this.$tr('ilocation.cms.form.province'), field: 'province', align: 'left',
              format: val => val.title || '-'
            },
            {
              name: 'created_at', label: this.$tr('isite.cms.form.createdAt'), field: 'createdAt', align: 'left',
              format: val => val ? this.$trd(val) : '-',
            },
            {name: 'actions', label: this.$tr('isite.cms.form.actions'), align: 'left'},
          ],
          requestParams: {include: 'translations,country,province'},

          filters: {
            country: {
              value: null,
              type: 'select',
              props: {
                label: this.$tr('ilocation.cms.form.country'),
              },
              loadOptions: {
                apiRoute: 'apiRoutes.qlocations.countries',
                select: {label: 'name', id: 'id'},
              }
            },
            province: {
              value: null,
              type: 'select',
              props: {
                label: this.$tr('ilocation.cms.form.province'),
              },
              loadOptions: {
                apiRoute: 'apiRoutes.qlocations.provinces',
                select: {label: 'name', id: 'id'},
              }
            },
          }
        },
        update: {
          title: this.$tr('ilocation.cms.updateCity'),
          requestParams: {include: 'translations'}
        },
        delete: true,
        formLeft: {
          title: {
            type: 'input',
            isTranslatable: true,
            required: true,
            props: {
              label: `${this.$tr('isite.cms.form.title')}*`
            }
          },
          code: {
            type: 'input',
            required: true,
            props: {
              label: `${this.$tr('ilocation.cms.form.code')}*`
            }
          },
          countryId: {
            value: null,
            type: 'crud',
            props: {
              crudType: 'select',
              crudData: import('modules/qlocations/_crud/countries'),
              crudProps: {
                label: `${this.$tr('ilocation.cms.form.country')}*`,
              },
              config: {
                filterByQuery: true,
                options: {
                  label: 'title', value: 'id'
                }
              }
            },
          },
          provinceId: {
            value: null,
            type: 'crud',
            props: {
              crudType: 'select',
              crudData: import('modules/qlocations/_crud/provinces'),
              crudProps: {
                label: `${this.$tr('ilocation.cms.form.province')}*`,
                vIf: this.crudInfo.countryId ? true : false,
              },
              config: {
                filterByQuery: true,
                options: {
                  label: 'title', value: 'id'
                },
                requestParams: {filter: {countryId: this.crudInfo.countryId}}
              }
            },
          },
        }
      }
    },
    //Crud info
    crudInfo() {
      return this.$store.state.qcrudComponent.component[this.crudId] || {}
    }
  }
}
</script>
