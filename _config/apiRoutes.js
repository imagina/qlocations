const moduleName = 'ilocations';
const moduleVersion = 'v1';
const urlBase = `/${moduleName}/${moduleVersion}`;

export default {
  countries: `${urlBase}/countries`,
  cities: `${urlBase}/cities`,
  provinces: `${urlBase}/provinces`,
  polygons: `${urlBase}/polygons`,
  geozones: `${urlBase}/geozones`,
  neighborhoods: `${urlBase}/neighborhoods`,
}
