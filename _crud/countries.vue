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
          entityName: config("main.qlocations.entityNames.country"),
          apiRoute: 'apiRoutes.qlocations.countries',
          //permission: 'icommerce.manufacturers',
          create: {
            title: this.$tr('ilocations.cms.newCountry'),
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
          },
          update: {
            title: this.$tr('ilocations.cms.updateCountry'),
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
            fullName: {
              value: '',
              type: 'input',
              isTranslatable: true,
              props : {
                label: `${this.$tr('ilocations.cms.form.fullName')}*`,
                rules: [
                  val => !!val || this.$tr('isite.cms.message.fieldRequired')
                ],
              }
            },
            status: {
              value: null,
              type: 'select',
              isTranslatable: false,
              props : {
                label: `${this.$tr('isite.cms.form.status')}*`,
                options : [
                  {label: this.$tr('isite.cms.label.enabled'), value: 1},
                  {label: this.$tr('isite.cms.label.disabled'), value: 0}
                ],
                rules: [
                  val => !!val || this.$tr('isite.cms.message.fieldRequired')
                ],
              }
            },
            regionCode: {
              value: '',
              type: 'input',
              isTranslatable: false,
              props : {
                label: `${this.$tr('ilocations.cms.form.regionCode')}*`,
                rules: [
                  val => !!val || this.$tr('isite.cms.message.fieldRequired')
                ],
              }
            },
            subRegionCode: {
              value: '',
              type: 'input',
              isTranslatable: false,
              props : {
                label: `${this.$tr('ilocations.cms.form.subRegionCode')}*`,
                rules: [
                  val => !!val || this.$tr('isite.cms.message.fieldRequired')
                ],
              }
            },
            countryCode: {
              value: '',
              type: 'input',
              isTranslatable: false,
              props : {
                label: `${this.$tr('ilocations.cms.form.countryCode')}*`,
                rules: [
                  val => !!val || this.$tr('isite.cms.message.fieldRequired')
                ],
              }
            },
            callingCode: {
              value: '',
              type: 'input',
              isTranslatable: false,
              props : {
                label: `${this.$tr('ilocations.cms.form.callingCode')}*`,
                rules: [
                  val => !!val || this.$tr('isite.cms.message.fieldRequired')
                ],
              }
            },
          },
          formRight: {
            currency: {
              value: '',
              type: 'input',
              isTranslatable: false,
              props : {
                label: `${this.$tr('ilocations.cms.form.currency')}*`,
                rules: [
                  val => !!val || this.$tr('isite.cms.message.fieldRequired')
                ],
              }
            },
            currencySymbol: {
              value: '',
              type: 'input',
              isTranslatable: false,
              props : {
                label: `${this.$tr('ilocations.cms.form.currencySymbol')}*`,
                rules: [
                  val => !!val || this.$tr('isite.cms.message.fieldRequired')
                ],
              }
            },
            currencyCode: {
              value: '',
              type: 'input',
              isTranslatable: false,
              props : {
                label: `${this.$tr('ilocations.cms.form.currencyCode')}*`,
                rules: [
                  val => !!val || this.$tr('isite.cms.message.fieldRequired')
                ],
              }
            },
            currencySubUnit: {
              value: '',
              type: 'input',
              isTranslatable: false,
              props : {
                label: `${this.$tr('ilocations.cms.form.currencySubUnit')}*`,
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
            iso_3: {
              value: '',
              type: 'input',
              isTranslatable: false,
              props : {
                label: `${this.$tr('ilocations.cms.form.iso3')}*`,
                rules: [
                  val => !!val || this.$tr('isite.cms.message.fieldRequired')
                ],
              }
            },
          },
        }
      },
      //Crud info
      crudInfo() {
        return this.$store.state.qcrudComponent.component[this.crudId] || {}
      }
    }
  }
</script>
