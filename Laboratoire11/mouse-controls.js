// 1. Survol : curseur pointeur sur les commerces
map.on('mouseenter', 'commerces', () => {
    map.getCanvas().style.cursor = 'pointer';
  });
  
  map.on('mouseleave', 'commerces', () => {
    map.getCanvas().style.cursor = '';
  });
  
  // 2. Fonction compteur
  function mettreAJourCompteur() {
    const features = map.queryRenderedFeatures({ layers: ['commerces'] });
    document.getElementById('compteur').innerText = `Commerces visibles : ${features.length}`;
  }
  
  // 3. Filtre + compteur dans le même bloc
  document.getElementById('filtreType').addEventListener('change', function () {
    const type = this.value;
  
    if (type === 'Tous') {
      map.setFilter('commerces', ['==', ['get', 'statut'], 'Ouvert']);
    } else {
      map.setFilter('commerces', ['all',
        ['==', ['get', 'statut'], 'Ouvert'],
        ['==', ['get', 'type'], type]
      ]);
    }
  
    // 🔁 Mise à jour du compteur après filtrage
    mettreAJourCompteur();
  });
  
  // 4. Mise à jour du compteur après déplacement/zoom
  map.on('moveend', mettreAJourCompteur);
  
  // 5. Clic sur un commerce = popup + zoom + panneau latéral
  map.on('click', 'commerces', (e) => {
    var feature = e.features[0];
    var props = feature.properties;
    var coords = feature.geometry.coordinates;
  
    new maplibregl.Popup()
      .setLngLat(coords)
      .setHTML(`<strong>${props.nom}</strong><br>Type : ${props.type}`)
      .addTo(map);
  
    map.flyTo({
      center: coords,
      zoom: 15,
      speed: 0.8
    });
  
    // 🧾 Mise à jour du panneau latéral
    document.getElementById('sidebar').innerHTML = `
      <h3>${props.nom}</h3>
      <p><strong>Type :</strong> ${props.type}</p>
      <p><strong>Statut :</strong> ${props.statut}</p>
    `;
  });