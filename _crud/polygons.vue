<template></template>

<script>
export default {
  data() {
    return {
      crudId: this.$uid()
    };
  },
  computed: {
    crudData() {
      return {
        crudId: this.crudId,
        entityName: config('main.qlocations.entityNames.polygon'),
        apiRoute: 'apiRoutes.qlocations.polygons',
        //permission: 'icommerce.manufacturers',
        create: {
          title: this.$tr('ilocations.cms.newPolygon')
        },
        read: {
          columns: [
            { name: 'id', label: this.$tr('isite.cms.form.id'), field: 'id', style: 'width: 50px' },
            { name: 'name', label: this.$tr('isite.cms.form.name'), field: 'name', align: 'left' },
            {
              name: 'created_at', label: this.$tr('isite.cms.form.createdAt'), field: 'createdAt', align: 'left',
              format: val => val ? this.$trd(val) : '-'
            },
            { name: 'actions', label: this.$tr('isite.cms.form.actions'), align: 'left' }
          ]
          //requestParams: {include: 'parent'}
          /*filters:{
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
            province: {
              value: null,
              type: 'select',
              props : {
                label: this.$tr('ilocations.cms.form.province'),
              },
              loadOptions: {
                apiRoute: 'apiRoutes.qlocations.provinces',
                select: {label: 'name', id: 'id'},
              }
            },
          }*/
        },
        update: {
          title: this.$tr('ilocations.cms.updatePolygon')
        },
        delete: true,
        formLeft: {
          name: {
            value: '',
            type: 'input',
            isTranslatable: true,
            props: {
              label: `${this.$tr('isite.cms.form.title')}*`,
              rules: [
                val => !!val || this.$tr('isite.cms.message.fieldRequired')
              ]
            }
          },
          description: {
            name: 'description',
            value: '',
            type: 'html',
            isTranslatable: true,
            props: {
              label: `${this.$tr('isite.cms.form.description')}*`,
              rules: [
                val => !!val || this.$tr('isite.cms.message.fieldRequired')
              ]
            }
          },
          points: {
            type: 'positionMarkerMap',
            props: {
              polygonControls: true,
              rules: [val => val.length || this.$tr('isite.cms.message.fieldRequired')]
            }
          }
        }
      };
    },
    //Crud info
    crudInfo() {
      return this.$store.state.qcrudComponent.component[this.crudId] || {};
    }
  }
};
</script>
