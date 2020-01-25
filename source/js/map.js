document.addEventListener("DOMContentLoaded", function(event) {
  var mapEl = document.querySelector('#map');

  if (mapEl) {
    ymaps.ready(init);
    var map;
    function init() {
      if (document.body.clientWidth < 768) {
        map = new ymaps.Map("map", {
        center: [59.938727, 30.323004],
        zoom: 17,
        controls: []
        });

        map.behaviors.disable('scrollZoom');
        var placemark = new ymaps.Placemark([59.938727, 30.323047], {}, {
          iconLayout: "default#image",
          iconImageHref: "img/map-pin.png",
          iconImageSize: [55, 53],
          iconImageOffset: [-27, -53]
        });
        map.geoObjects.add(placemark);
      } else if (document.body.clientWidth >= 768 && document.body.clientWidth < 1300) {
        map = new ymaps.Map("map", {
        center: [59.938727, 30.323047],
        zoom: 18,
        controls: []
        });

        map.behaviors.disable('scrollZoom');
        var placemark = new ymaps.Placemark([59.938609, 30.322994], {}, {
          iconLayout: "default#image",
          iconImageHref: "img/map-pin.png",
          iconImageSize: [113, 106],
          iconImageOffset: [-56, -106]
        });
        map.geoObjects.add(placemark);
      } else if (document.body.clientWidth >= 1300) {
        map = new ymaps.Map("map", {
        center: [59.939066, 30.319829],
        zoom: 17,
        controls: []
        });

        map.behaviors.disable('scrollZoom');
        var placemark = new ymaps.Placemark([59.938727, 30.323047], {}, {
          iconLayout: "default#image",
          iconImageHref: "img/map-pin.png",
          iconImageSize: [113, 106],
          iconImageOffset: [-56, -106]
        });
        map.geoObjects.add(placemark);
      }
    }
  }
});
