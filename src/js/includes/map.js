export function map() {
  const mapContainer = document.getElementById("map");

  initMap(mapContainer);

  async function initMap(container) {
    await ymaps3.ready;

    const { YMap, YMapMarker, YMapDefaultFeaturesLayer, YMapDefaultSchemeLayer } = ymaps3;

    console.log(ymaps3);

    const map = new YMap(container, {
      location: {
        center: [30.325457, 59.943383],
        zoom: 13,
      },
      behaviors: ["drag", "pinchZoom", "dblClick"],
    });

    map.addChild(new YMapDefaultSchemeLayer());

    map.addChild(new YMapDefaultFeaturesLayer());

    const markerElement = createMarker();
    const markerElement2 = createMarker();

    const marker = new YMapMarker(
      {
        coordinates: [30.255602, 59.944751],
        draggable: false,
      },
      markerElement
    );

    map.addChild(marker);

    const marker2 = new YMapMarker(
      {
        coordinates: [30.317307, 59.941607],
        draggable: false,
      },
      markerElement2
    );

    map.addChild(marker2);
  }

  function createMarker(text = "marker") {
    const marker = document.createElement("div");
    marker.className = "map__marker";
    marker.innerHTML = `<svg  viewBox="0 0 28 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14 0C6.27 0 0 6.27 0 14C0 24.5 14 40 14 40C14 40 28 24.5 28 14C28 6.27 21.73 0 14 0ZM14 19C11.24 19 9 16.76 9 14C9 11.24 11.24 9 14 9C16.76 9 19 11.24 19 14C19 16.76 16.76 19 14 19Z" fill="#FF711F"/>
</svg>
`;
    const markerText = document.createElement("div");
    markerText.className = "map__marker-text";
    markerText.textContent = text;
    marker.prepend(markerText);
    return marker;
  }
}
