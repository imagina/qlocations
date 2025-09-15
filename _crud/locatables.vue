<template></template>

<script>
export default {
  data() {
    return {
      crudId: this.$uid(),
    };
  },
  computed: {
    crudData() {
      return {
        crudId: this.crudId,
        apiRoute: 'apiRoutes.qlocations.locatables',
        permission: 'ilocation.locatables',
        create: {
          title: this.$tr('ilocation.cms.newLocatable'),
        },
        read: {
          columns: [
            {
              name: 'id',
              label: this.$tr('isite.cms.form.id'),
              field: 'id',
              style: 'width: 50px',
            },
            {
              name: 'title',
              label: this.$tr('isite.cms.form.title'),
              field: 'title',
              align: 'left',
            },
            {
              name: 'systemName',
              label: this.$tr('isite.cms.form.systemName'),
              field: 'systemName',
              align: 'left',
            },
            {
              name: 'country',
              label: this.$tr('ilocation.cms.form.country'),
              field: 'country',
              align: 'left',
              format: (val) => val.name || '-',
            },
            {
              name: 'province',
              label: this.$tr('ilocation.cms.form.province'),
              field: 'province',
              align: 'left',
              format: (val) => val.name || '-',
            },
            {
              name: 'city',
              label: this.$tr('ilocation.cms.form.city'),
              field: 'city',
              align: 'left',
              format: (val) => val.name || '-',
            },
            {
              name: 'address',
              label: this.$tr('isite.cms.form.address'),
              classes: 'ellipsis',
              style: 'max-width : 300px',
              field: 'address',
              align: 'left',
            },
            {
              name: 'created_at',
              label: this.$tr('isite.cms.form.createdAt'),
              field: 'createdAt',
              align: 'left',
              format: (val) => (val ? this.$trd(val) : '-'),
            },
            {
              name: 'actions',
              label: this.$tr('isite.cms.form.actions'),
              align: 'left',
            },
          ],
          requestParams: {
            include:
              'translations,country.translations,province.translations,city.translations',
          },
          filters: {
            countryId: {
              value: null,
              type: 'select',
              props: {
                label: this.$tr('ilocation.cms.form.country'),
              },
              loadOptions: {
                apiRoute: 'apiRoutes.qlocations.countries',
                requestParams: { include: 'translations' },
                select: { label: 'name', id: 'id' },
                filterByQuery: true,
              },
            },
            provinceId: {
              value: null,
              type: 'select',
              props: {
                label: this.$tr('ilocation.cms.form.province'),
              },
              loadOptions: {
                apiRoute: 'apiRoutes.qlocations.provinces',
                requestParams: { include: 'translations' },
                select: { label: 'name', id: 'id' },
                filterByQuery: true,
              },
            },
            cityId: {
              value: null,
              type: 'select',
              props: {
                label: this.$tr('ilocation.cms.form.city'),
              },
              loadOptions: {
                apiRoute: 'apiRoutes.qlocations.cities',
                requestParams: { include: 'translations' },
                select: { label: 'name', id: 'id' },
                filterByQuery: true,
              },
            },
          },
        },
        update: {
          title: this.$tr('ilocation.cms.updateLocatable'),
          requestParams: { include: 'translations' },
          mapData(formData) {
            if (formData.latitude && formData.longitude) {
              formData.coordinates = {
                lat: formData.latitude,
                lng: formData.longitude,
              };
            }
            return formData;
          },
        },
        delete: true,
        formLeft: {
          title: {
            type: 'input',
            isTranslatable: true,
            required: true,
            props: {
              label: `${this.$tr('isite.cms.form.title')}*`,
            },
          },
          description: {
            value: '',
            type: 'input',
            isTranslatable: true,
            props: {
              label: `${this.$tr('isite.cms.form.description')}*`,
              type: 'textarea',
              rows: '3',
              rules: [
                (val) => !!val || this.$tr('isite.cms.message.fieldRequired'),
              ],
            },
          },
          systemName: {
            value: '',
            type: 'input',
            props: {
              label: `${this.$tr('isite.cms.form.systemName')}*`,
              rules: [
                (val) => !!val || this.$tr('isite.cms.message.fieldRequired'),
              ],
            },
          },
          countryId: {
            value: null,
            type: 'select',
            props: {
              label: `${this.$tr('ilocation.cms.form.country')}*`,
            },
            loadOptions: {
              apiRoute: 'apiRoutes.qlocations.countries',
              requestParams: { include: 'translations' },
              select: { label: 'name', id: 'id' },
              filterByQuery: true,
            },
          },
          provinceId: {
            value: null,
            type: 'select',
            props: {
              label: `${this.$tr('ilocation.cms.form.province')}*`,
              disable: this.crudInfo.countryId ? false : true,
            },
            loadOptions: {
              apiRoute: 'apiRoutes.qlocations.provinces',
              requestParams: { include: 'translations' },
              select: { label: 'name', id: 'id' },
              filterByQuery: true,
            },
          },
          cityId: {
            value: null,
            type: 'select',
            props: {
              label: `${this.$tr('ilocation.cms.form.city')}*`,
              disable: this.crudInfo.provinceId ? false : true,
            },
            loadOptions: {
              apiRoute: 'apiRoutes.qlocations.cities',
              requestParams: { include: 'translations' },
              select: { label: 'name', id: 'id' },
              filterByQuery: true,
            },
          },
          address: {
            type: 'input',
            required: true,
            props: {
              label: `${this.$tr('isite.cms.form.address')}*`,
            },
          },
        },
        formRight: {
          coordinates: {
            value: null,
            type: 'positionMarkerMap',
            props: {
              label: `${this.$tr('isite.cms.label.search')}...`,
            },
          },
        },
        getDataForm(data) {
          return new Promise((resolve, reject) => {
            console.log('>>>>>', data);
            if (data.coordinates) {
              data.latitude = data.coordinates.lat;
              data.longitude = data.coordinates.lng;
            }
            resolve(data);
          });
        },
      };
    },
    //Crud info
    crudInfo() {
      return this.$store.state.qcrudComponent.component[this.crudId] || {};
    },
  },
};
</script>
