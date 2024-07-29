export default {
  //Product List
  countries: {
    permission: 'ilocations.countries.manage',
    activated: true,
    path: '/locations/countries',
    name: 'qlocations.admin.countries.index',
    crud: import('modules/qlocations/_crud/countries'),
    page: () => import('modules/qcrud/_pages/admin/crudPage'),
    layout: () => import('layouts/master.vue'),
    title: 'ilocations.cms.sidebar.adminCountries',
    icon: 'fa-light fa-flag',
    authenticated: true,
    subHeader: {
      refresh: true
    }
  },
  provinces: {
    permission: 'ilocations.provinces.manage',
    activated: true,
    path: '/locations/provinces',
    name: 'qlocations.admin.provinces.index',
    crud: import('modules/qlocations/_crud/provinces'),
    page: () => import('modules/qcrud/_pages/admin/crudPage'),
    layout: () => import('layouts/master.vue'),
    title: 'ilocations.cms.sidebar.adminProvinces',
    icon: 'fa-light fa-building-flag',
    authenticated: true,
    subHeader: {
      refresh: true
    }
  },
  //Cities
  cities: {
    permission: 'ilocations.cities.manage',
    activated: true,
    path: '/locations/cities',
    name: 'qlocations.admin.cities.index',
    crud: import('modules/qlocations/_crud/cities'),
    page: () => import('modules/qcrud/_pages/admin/crudPage'),
    layout: () => import('layouts/master.vue'),
    title: 'ilocations.cms.sidebar.adminCities',
    icon: 'fa-light fa-city',
    authenticated: true,
    subHeader: {
      refresh: true
    }
  },
  //City create
  cityCreate: {
    permission: null,
    activated: true,
    path: '/locations/cities/create',
    name: 'qlocations.admin.cities.create',
    page: () => import('modules/qlocations/_pages/admin/cities/form'),
    layout: () => import('layouts/master.vue'),
    title: 'ilocations.cms.sidebar.adminCityCreate',
    icon: 'fa-light fa-city',
    authenticated: true,
    subHeader:{
      breadcrumb: ['qlocations.cities']
    }
  },
  //City edit
  cityEdit: {
    permission: null,
    activated: true,
    path: '/locations/cities/:id',
    name: 'qlocations.admin.cities.edit',
    page: () => import('modules/qlocations/_pages/admin/cities/form'),
    layout: () => import('layouts/master.vue'),
    title: 'ilocations.cms.sidebar.adminCityEdit',
    icon: 'fa-light fa-city',
    authenticated: true,
    subHeader:{
      refresh: true,
      breadcrumb: ['qlocations.cities']
    }
  },
  //Polygons
  polygons: {
    permission: 'ilocations.polygons.manage',
    activated: true,
    path: '/locations/polygons',
    name: 'qlocations.admin.polygons.index',
    crud : import('modules/qlocations/_crud/polygons'),
    page: () => import('modules/qcrud/_pages/admin/crudPage'),
    layout: () => import('layouts/master.vue'),
    title: 'ilocations.cms.sidebar.adminPolygons',
    icon: 'fa-light fa-draw-polygon',
    authenticated: true,
    subHeader: {
      refresh: true
    }
  },
  //Geozones
  geozones: {
    permission: 'ilocations.geozones.manage',
    activated: true,
    path: '/locations/geozones',
    name: 'qlocations.admin.geozones.index',
    crud : import('modules/qlocations/_crud/geozones'),
    page: () => import('modules/qcrud/_pages/admin/crudPage'),
    layout: () => import('layouts/master.vue'),
    title: 'ilocations.cms.sidebar.adminGeozones',
    icon: 'fa-light fa-chart-network',
    authenticated: true,
    subHeader: {
      refresh: true
    }
  },
  //Geozone create
  geozoneCreate: {
    permission: null,
    activated: true,
    path: '/locations/geozones/create',
    name: 'qlocations.admin.geozones.create',
    page: () => import('modules/qlocations/_pages/admin/geozones/form'),
    layout: () => import('layouts/master.vue'),
    title: 'ilocations.cms.sidebar.adminGeozoneCreate',
    icon: 'fa-light fa-chart-network',
    authenticated: true,
    subHeader:{
      breadcrumb: ['qlocations.geozones']
    }
  },
  //Geozone edit
  geozoneEdit: {
    permission: null,
    activated: true,
    path: '/locations/geozones/:id',
    name: 'qlocations.admin.geozones.edit',
    page: () => import('modules/qlocations/_pages/admin/geozones/form'),
    layout: () => import('layouts/master.vue'),
    title: 'ilocations.cms.sidebar.adminGeozoneEdit',
    icon: 'fa-light fa-chart-network',
    authenticated: true,
    subHeader: {
      refresh: true,
      breadcrumb: ['qlocations.geozones']
    }
  },
  //Neighborhoods
  neighborhoods: {
    permission: 'ilocations.neighborhoods.manage',
    activated: true,
    path: '/locations/neighborhoods',
    name: 'qlocations.admin.neighborhoods.index',
    crud : import('modules/qlocations/_crud/neighborhoods'),
    page: () => import('modules/qcrud/_pages/admin/crudPage'),
    layout: () => import('layouts/master.vue'),
    title: 'ilocations.cms.sidebar.adminNeighborhoods',
    icon: 'fa-light fa-house-building',
    authenticated: true,
    subHeader: {
      refresh: true
    }
  },
  //Polygon create
  neighborhoodCreate: {
    permission: null,
    activated: true,
    path: '/locations/neighborhoods/create',
    name: 'qlocations.admin.neighborhoods.create',
    page: () => import('modules/qlocations/_pages/admin/neighborhoods/form'),
    layout: () => import('layouts/master.vue'),
    title: 'ilocations.cms.sidebar.adminNeighborhoodCreate',
    icon: 'fa-light fa-house-building',
    authenticated: true,
    subHeader:{
      breadcrumb: ['qlocations.neighborhoods']
    }
  },
  //Polygon edit
  neighborhoodEdit: {
    permission: null,
    activated: true,
    path: '/locations/neighborhood/:id',
    name: 'qlocations.admin.neighborhoods.edit',
    page: () => import('modules/qlocations/_pages/admin/neighborhoods/form'),
    layout: () => import('layouts/master.vue'),
    title: 'ilocations.cms.sidebar.adminNeighborhoodEdit',
    icon: 'fa-light fa-house-building',
    authenticated: true,
    subHeader: {
      refresh: true,
      breadcrumb: ['qlocations.neighborhoods']
    }
  },
}
