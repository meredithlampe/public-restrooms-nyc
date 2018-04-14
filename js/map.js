
// initMap();

var openInfoWindow = null;

async function processData(map, directory) {
    var data = JSON.parse(directory);
    for (var address in data) {
        let bathroom = data[address];
        let directions_url =
            "https://www.google.com/maps/dir/?api=1&destination="
            + bathroom.lat_long.lat + "," + bathroom.lat_long.lng;
        var contentString =
            '<div class="tooltip_content">' +
                '<div id="siteNotice">' +
                '</div>' +
                '<div class="tooltip_name">' + bathroom.name + '</div>' +
                '<div class="tooltip_address">' + address + '</div>' +
                '<div class="tooltip_details">' +
                    '<div class="tooltip_info_label">Open Year Round: ' +
                        '<span class="tooltip_info_content">' +
                (bathroom.open_year_round ? bathroom.open_year_round : 'Unknown') +
                        '</span>' +
                    '</div>' +
                    '<div class="tooltip_info_label">Handicap Accessible: ' +
                        '<span class="tooltip_info_content">' +
                (bathroom.handicap_accissible ? bathroom.handicap_accessible : 'Unknown') +
                        '</span>' +
                    '</div>' +
                '</div>' +
        '<div class="tooltip_directions">' +
            '       <a target="_blank" href=' + directions_url +
                    '>' +
            '           Directions' +
                    '</a>' +
                '</div>' +
            '</div>';

        console.log(bathroom.lat_long);
        addMarker(contentString, bathroom.name, map, bathroom.lat_long.lat, bathroom.lat_long.lng, address);
    }
}

function addMarker(contentString, name, map, lat, long, address) {
    var infoWindow = new google.maps.InfoWindow({
        content: contentString
    });
    var marker = new google.maps.Marker({
        map: map,
        position: new google.maps.LatLng(lat, long),
        title: name,
    });
    marker.addListener('click', function () {
        if (openInfoWindow) {
            openInfoWindow.close();
        }
        infoWindow.open(map, marker);
        openInfoWindow = infoWindow;
    });
}


function initMap() {

    // Create a new StyledMapType object, passing it an array of styles,
    // and the name to be displayed on the map type control.
    var styledMapType = new google.maps.StyledMapType(
        [
            {
                "featureType": "administrative",
                "elementType": "geometry",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "administrative",
                "elementType": "labels.text",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "administrative.land_parcel",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "administrative.neighborhood",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "administrative.neighborhood",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#000000"
                    }
                ]
            },
            {
                "featureType": "administrative.neighborhood",
                "elementType": "labels",
                "stylers": [
                    {
                        "color": "#000000"
                    },
                    {
                        "visibility": "simplified"
                    }
                ]
            },
            {
                "featureType": "poi",
                "stylers": [
                    {
                        "visibility": "off",
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "labels.text",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#69ffc7"
                    },
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "road",
                "stylers": [
                    {
                        "color": "#fbfffb"
                    },
                    {
                        "visibility": "simplified"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "labels",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "transit",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#3074ff"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "labels.text",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            }
        ],
        {name: 'Styled Map'});

    // Create a map object, and include the MapTypeId to add
    // to the map type control.
    var map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 40.730069, lng: -73.975766},
        zoom: 12,
        mapTypeControlOptions: {
            mapTypeIds: ['roadmap', 'satellite', 'hybrid', 'terrain',
                'styled_map']
        }
    });

    $.ajax({
        type: "GET",
        url: "js/bathroom_info_full_sample.json",
        dataType: "text",
        success: function(directory) {processData(map, directory);}
    });

    //Associate the styled map with the MapTypeId and set it to display.
    map.mapTypes.set('styled_map', styledMapType);
    map.setMapTypeId('styled_map');
}
