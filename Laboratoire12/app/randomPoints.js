const randomPoints = {
  type: "FeatureCollection",
  features: Array.from({ length: 50 }, (_, i) => ({
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [
        -73.55 + (Math.random() - 0.5) * 0.1,
        45.55 + (Math.random() - 0.5) * 0.1
      ]
    },
    properties: {
      id: i + 1
    }
  }))
};