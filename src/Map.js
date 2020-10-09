import React from 'react';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1Ijoic2F3MjkiLCJhIjoiY2s3M2EycW01MDZ2bzNycGYwODl1YmlwcCJ9.F2jl96HEog6QORZnIvE8Gw';

class Map extends React.Component {
constructor(props) {
  super(props);
  this.state = {
    lng: -0.882597,
    lat: 51.040269,
    zoom: 10
  };
}
componentDidMount() {
  const map = new mapboxgl.Map({
    container: this.mapContainer,
    style: 'mapbox://styles/saw29/ckfy958pd01iv19qx5mdmde0c',
    center: [this.state.lng, this.state.lat],
    zoom: this.state.zoom
  });

  map.on('move', () => {
    this.setState({
      lng: map.getCenter().lng.toFixed(4),
      lat: map.getCenter().lat.toFixed(4),
      zoom: map.getZoom().toFixed(2)
    });
  });

  const marker = new mapboxgl.Marker()
  .setLngLat([-0.882597, 51.040269])
  .addTo(map);
}

render() {
  return (
    <div>
      <div ref={el => this.mapContainer = el} className="mapContainer" />
    </div>
  )
}
}

export default Map;


