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
        entityName: config("main.qlocations.entityNames.neighborhood"),
        apiRoute: 'apiRoutes.qlocations.neighborhoods',
        permission: 'ilocations.neighborhoods',
        create: {
          title: this.$tr('ilocations.cms.newNeighborhood')
        },
        read: {
          columns: [
            {name: 'id', label: this.$tr('isite.cms.form.id'), field: 'id', style: 'width: 50px'},
            {name: 'name', label: this.$tr('isite.cms.form.name'), field: 'name', align: 'left'},
            {
              name: 'city', label: this.$tr('isite.cms.form.city'), field: 'city', align: 'left',
              format: val => val ? val.name : '-',
            },
            {
              name: 'province', label: this.$tr('ilocations.cms.form.province'), field: 'province', align: 'left',
              format: val => val ? val.name : '-',
            },
            {
              name: 'country', label: this.$tr('isite.cms.label.country'), field: 'country', align: 'left',
              format: val => val ? val.name : '-',
            },
            {
              name: 'created_at', label: this.$tr('isite.cms.form.createdAt'), field: 'createdAt', align: 'left',
              format: val => val ? this.$trd(val) : '-',
            },
            {
              name: 'updatedAt', label: this.$tr('isite.cms.form.updatedAt'), field: 'updatedAt', align: 'left',
              format: val => val ? this.$trd(val) : '-',
            },
            {name: 'actions', label: this.$tr('isite.cms.form.actions'), align: 'left'},
          ],
          requestParams: {include: 'city,province,country'},
          filters: {
            countryId: {
              value: null,
              type: 'select',
              props: {
                label: this.$tr('ilocations.cms.form.country'),
                clearable: true
              },
              loadOptions: {
                apiRoute: 'apiRoutes.qlocations.countries',
                select: {label: 'name', id: 'id'},
              }
            },
            provinceId: {
              value: null,
              type: 'select',
              props: {
                label: this.$tr('ilocations.cms.form.province'),
                clearable: true
              },
              loadOptions: {
                apiRoute: 'apiRoutes.qlocations.provinces',
                select: {label: 'name', id: 'id'},
              }
            },
            cityId: {
              value: null,
              type: 'select',
              props: {
                label: this.$tr('isite.cms.form.city'),
                clearable: true
              },
              loadOptions: {
                apiRoute: 'apiRoutes.qlocations.cities',
                select: {label: 'name', id: 'id'},
              }
            },
          }
        },
        update: {
          title: this.$tr('ilocations.cms.updateNeighborhood'),
          requestParams: {include: 'city,province,country'}
        },
        delete: true,
        formLeft: {
          name: {
            value: null,
            type: 'input',
            required: true,
            isTranslatable: true,
            props: {
              label: `${this.$tr('isite.cms.form.name')}*`
            }
          },
          countryId: {
            value: null,
            type: 'select',
            required: true,
            props: {
              label: `${this.$tr('isite.cms.label.country')}*`
            },
            loadOptions: {
              apiRoute: 'apiRoutes.qlocations.countries',
              select: {label: 'name', id: 'id'},
              //filterByQuery: true
            }
          },
          provinceId: {
            value: null,
            type: 'select',
            required: true,
            props: {
              label: `${this.$tr('ilocations.cms.form.province')}*`,
              readonly: (this.crudInfo.countryId ? false : true)
            },
            loadOptions: {
              apiRoute: 'apiRoutes.qlocations.provinces',
              requestParams: {filter: {country_id: this.crudInfo.countryId}},
              select: {label: 'name', id: 'id'},
              //filterByQuery: true
            }
          },
          cityId: {
            value: null,
            type: 'select',
            required: true,
            props: {
              label: `${this.$tr('isite.cms.form.city')}*`,
              readonly: (this.crudInfo.provinceId ? false : true)
            },
            loadOptions: {
              apiRoute: 'apiRoutes.qlocations.cities',
              requestParams: {filter: {province_id: this.crudInfo.provinceId}},
              select: {label: 'name', id: 'id'},
              //filterByQuery: true,
            }
          }
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
