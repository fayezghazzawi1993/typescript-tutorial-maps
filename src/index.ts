// import { User } from './User';
// import { Company } from './Company';

const mapDiv = document.getElementById('map');

if (mapDiv) {
  new google.maps.Map(mapDiv, {
    zoom: 3,
    center: {
      lat: 0,
      lng: 0,
    },
  });
}
