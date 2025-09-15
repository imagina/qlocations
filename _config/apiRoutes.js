const moduleName = 'ilocation';
const moduleVersion = 'v1';
const urlBase = `/${moduleName}/${moduleVersion}`;

export default {
  countries: `${urlBase}/countries`,
  cities: `${urlBase}/cities`,
  provinces: `${urlBase}/provinces`,
  polygons: `${urlBase}/polygons`,
  geozones: `${urlBase}/geozones`,
  neighborhoods: `${urlBase}/neighborhoods`,
  locatables: `${urlBase}/locatables`
};
