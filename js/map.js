    google.maps.event.addDomListener(window, 'load', init);
 
       function init() {
 
    // opcje mapy
    var mapOptions = {
        // wielkość zoomu
        zoom: 15,
        // współrzędne punktu, na którym wyśrodkowana jest mapa
        center: new google.maps.LatLng(49.6508509,19.8353522), // Jordanów
        styles: [
    {
        "featureType": "administrative",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#444444"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
            {
                "color": "#f2f2f2"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "all",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "lightness": 45
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "color": "#88e9ad"
            },
            {
                "visibility": "on"
            }
        ]
    }
]
    };
 
    // pobranie mapy do zmiennej
    var mapElement = document.getElementById('map');
 
    // Utworzenie mapy Google używając elementu #map i opcji zdefiniowanych w tablicy
    var map = new google.maps.Map(mapElement, mapOptions);
 
    // dodanie znacznika
    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(49.6508509,19.8353522),
        map: map,
        title: 'Tatra House Bis'
    });
}