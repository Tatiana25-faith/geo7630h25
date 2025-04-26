const randomPoints = {
  type: "FeatureCollection",
  features: Array.from({ length: 2000 }, (_, i) => ({
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [
        -74.1 + Math.random() * 1.2,  // Longitudes entre -74.1 et -72.9
        45.3 + Math.random() * 0.8    // Latitudes entre 45.3 et 46.1
      ]
    },
    properties: {
      id: i + 1
    }
  }))
};