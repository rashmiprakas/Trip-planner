
const mapboxgl = require("mapbox-gl");

const iconURLs = {
    hotels: "http://i.imgur.com/D9574Cu.png",
    restaurants: "http://i.imgur.com/cqR6pUI.png",
    activities: "http://i.imgur.com/WbMOfMl.png"
};

const buildMarker = function(type, coords) {
    // Your Code Here
    let markerDomEl = document.createElement("div");// should create it
    markerDomEl.style.width = '32px';
    markerDomEl.style.height = '39px';
    markerDomEl.style.backgroundImage = `url(${iconURLs[type]})`;
    // markerDomEl.style.backgroundColor = 'red';
   return new mapboxgl.Marker(markerDomEl).setLngLat(coords);
};

module.exports = buildMarker;
