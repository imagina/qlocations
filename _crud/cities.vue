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
          title: this.$tr('ilocations.cms.newCity')
        },
        read: {
          columns: [
            {name: 'id', label: this.$tr('isite.cms.form.id'), field: 'id', style: 'width: 50px'},
            {name: 'name', label: this.$tr('isite.cms.form.name'), field: 'name', align: 'left'},
            {name: 'code', label: this.$tr('ilocations.cms.form.code'), field: 'code', align: 'left'},
            {
              name: 'country', label: this.$tr('ilocations.cms.form.country'), field: 'country', align: 'left',
              format: val => val.name || '-'
            },
            {
              name: 'province', label: this.$tr('ilocations.cms.form.province'), field: 'province', align: 'left',
              format: val => val.name || '-'
            },
            {
              name: 'created_at', label: this.$tr('isite.cms.form.createdAt'), field: 'createdAt', align: 'left',
              format: val => val ? this.$trd(val) : '-',
            },
            {name: 'actions', label: this.$tr('isite.cms.form.actions'), align: 'left'},
          ],
          requestParams: {include: 'country,province'},
          filters: {
            country: {
              value: null,
              type: 'select',
              props: {
                label: this.$tr('ilocations.cms.form.country'),
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
                label: this.$tr('ilocations.cms.form.province'),
              },
              loadOptions: {
                apiRoute: 'apiRoutes.qlocations.provinces',
                select: {label: 'name', id: 'id'},
              }
            },
          }
        },
        update: {
          title: this.$tr('ilocations.cms.updateCity')
        },
        delete: true,
        formLeft: {
          name: {
            type: 'input',
            isTranslatable: true,
            required: true,
            props: {
              label: `${this.$tr('isite.cms.form.name')}*`
            }
          },
          code: {
            type: 'input',
            required: true,
            props: {
              label: `${this.$tr('ilocations.cms.form.code')}*`
            }
          },
          countryId: {
            value: null,
            type: 'crud',
            props: {
              crudType: 'select',
              crudData: import('modules/qlocations/_crud/countries'),
              crudProps: {
                label: `${this.$tr('ilocations.cms.form.country')}*`,
              },
              config: {
                filterByQuery: true,
                options: {
                  label: 'name', value: 'id'
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
                label: `${this.$tr('ilocations.cms.form.province')}*`,
                vIf: this.crudInfo.countryId ? true : false,
              },
              config: {
                filterByQuery: true,
                options: {
                  label: 'name', value: 'id'
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
