
// initMap();

async function processData(map, directory, latlng) {
//        var allTextLines = allText.split(/\r\n|\n/);
//        var headers = allTextLines[0].split(',');
    var allTextLines = latlng;
    var latLongOutput = {};
    var errorOutput = {};
    for (var address in latlng) {
//            var data = allTextLines[i].split(',');
        var fullAddress = address.split(',');
        var name = fullAddress[0];
        var location = fullAddress[1] + fullAddress[2];
//            var address = data[0] + data[1] + data[2];
//            var open_year_round = data[3];
        var open_year_round = "test";
//            var handicap_accessible = data[4];
        var handicap_accessible = "test";
        var contentString = '<div id="content">' +
            '<div id="siteNotice">' +
            '</div>' +
            '<h1 id="firstHeading" class="firstHeading">' + name + '</h1>' +
            '<div>' + location + '</div>' +
            '<h2>Open Year Round: ' + open_year_round + '</h2>' +
            '<h2>Handicap Accessible: ' + handicap_accessible + '</h2>' +
            '</div>';

        addMarker(contentString, map, latlng, address);
    }
}

function addMarker(contentString, map, allText, address) {
    var infowindow = new google.maps.InfoWindow({
        content: contentString
    });
    var marker = new google.maps.Marker({
        map: map,
        position: new google.maps.LatLng(allText[address]["lat"], allText[address]["lng"]),
//                position: new google.maps.LatLng(allTextLines[i].lat, allTextLines[i].lng),
        title: "natmpa"
    });
    marker.addListener('click', function () {
        infowindow.open(map, marker);
    });
}


function initMap() {

    console.log("init map");

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
                        "visibility": "off"
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

    var latlng = {"100% Playground,\"Glenwood Road, East 100 & East 101 streets\"":{"lat":40.6465901,"lng":-73.89905540000001},"174th Street Playground,\"East 174 Street, Stratford Avenue":{"lat":40.8343419,"lng":-73.87774130000003},"227 Street Playground,Bronx Boulevard between East 226 and East 228 streets,Yes":{"lat":40.8395226,"lng":-73.9269807},"Abe Lincoln,\"East 135 Street, between Madison & 5 avenues\"":{"lat":40.8127628,"lng":-73.93764629999998},"Abigail Playground,\"East 156 Street, Tinton Avenue\"":{"lat":40.8173278,"lng":-73.9048429},"Agnes Haywood Playground,\"East 215 Street, Barnes Avenue":{"lat":40.88039819999999,"lng":-73.8615704},"Albemarle Park,Albermarle Road & Dahill Road,Yes":{"lat":40.645759,"lng":-73.9807073},"Albert J. Parham Playground,\"Adelphi Street, Clermont":{"lat":40.6903424,"lng":-73.97082060000002},"Alexander Hamilton Playground,\"Hamilton Place, West 140 to West 141 streets\"":{"lat":40.8230502,"lng":-73.9512464},"Alfred E. Smith Park,\"Catherine Slip, Madison & South streets\"":{"lat":40.7110333,"lng":-73.99730970000002},"Alley Pond Park (Alley Athletic Field),\"Grand Central Parkway, Winchester Boulevard":{"lat":40.7400174,"lng":-73.73528199999998},"Alley Pond Park (Alley Pond Spring),\"Springfield Boulevard, 73rd Avenue":{"lat":40.74239470000001,"lng":-73.7384341},"Alley Pond Park (Horatio Playground),Horatio Parkway and 50 Avenue,Yes":{"lat":40.7585912,"lng":-73.75423180000001},"Alstyne Playground,Alystine Avenue & 102 Street,Yes":{"lat":40.7443069,"lng":-73.86183799999998},"American Playground,\"Noble, Franklin Milton Streets\"":{"lat":40.728831,"lng":-73.957855},"Andrews Playground,\"49 Avenue, Vernon Boulevard":{"lat":40.7434498,"lng":-73.9548102},"Annunciation Park,\"Convent and Amsterdam Av, W 135 St\"":{"lat":40.8182893,"lng":-73.95244120000001},"Arcilla Playground,\"Teller Avenue, Park Avenue":{"lat":40.8271436,"lng":-73.91421270000001},"Arrochar Playground,\"Sand Lane, Major Avenue":{"lat":40.59773759999999,"lng":-74.0712484},"Arrow Community Garden,\"35th Street, between 35th and 36th Avenue\"":{"lat":40.7558396,"lng":-73.9262506},"Asser Levy,Asser Levy Place & East 24-25 streets,Yes":{"lat":40.7361601,"lng":-73.9756582},"Asser Levy Park,\"Boardwalk, Surf":{"lat":40.5751863,"lng":-73.97138970000003},"Astoria Heights Playground,\"30 Road, 45 to 46 streets\"":{"lat":40.7605192,"lng":-73.91154879999999},"Athens Sq (PS 17),\"29 Street, 30 Street":{"lat":40.7675827,"lng":-73.92228840000001},"Audubon Playground,West 170 Street & Audubon Avenue,Yes":{"lat":40.8416455,"lng":-73.9380342},"Augustus St. Gaudens,\"East 19 to East 20 streets, 2 Avenue\"":{"lat":40.7355845,"lng":-73.98226349999999},"Baisley Pond Park,\"Rockaway Boulevard, 125th Avenue":{"lat":40.6737751,"lng":-73.786025},"Baisley Pond Park,\"150th Street, Rockaway Boulevard":{"lat":40.6737751,"lng":-73.786025},"Baisley Pond Park (157th Street Playground),157 Street & 116 Avenue,Yes":{"lat":40.6737751,"lng":-73.786025},"Bartlett Playground,Bartlett Street & Throop Avenue,Yes":{"lat":40.7008946,"lng":-73.94608519999997},"Battery Park (Battery Gardens),\"Battery Place, State & Whitehall streets\"":{"lat":40.7014409,"lng":-74.01513950000003},"Bay Terrace Playground (PS 169),23 Avenue & 212 Street,Yes":{"lat":40.7823459,"lng":-73.77843989999997},"Bayview Playground,Seaview Avenue & East 99 Street,Yes":{"lat":40.6347704,"lng":-73.88720430000001},"Bedford Playground,\"Bedford Avenue & South 9 Street, Division Avenue\"":{"lat":40.7083436,"lng":-73.9638875},"Behagen Playground,\"Tinton Avenue, East 165 Street":{"lat":40.8253722,"lng":-73.90126020000002},"Bellaire Playground,\"89 Avenue, 207 & 208 streets\"":{"lat":40.7215072,"lng":-73.757902},"Belmont Playground,\"Crotona Avenue, East 181 Street\"":{"lat":40.8502451,"lng":-73.88766369999996},"Bendheim Playground,100th Street and Fifth Ave,":{"lat":40.7905138,"lng":-73.95434439999997},"Bennett Park,\"West 185 Street, Ft Washington Avenue\"":{"lat":40.8528053,"lng":-73.93800279999999},"Bensonhurst Park,\"Gravesend Bay, 21 & Cropsey avenues":{"lat":40.59726,"lng":-74.00075500000003},"Betsy Head Playground,\"Livonia, Dumont":{"lat":40.664667,"lng":-73.91184499999997},"Bildersee Playground,Flatlands Avenue between East 81 & East 82 streets,Yes":{"lat":40.6356534,"lng":-73.9118244},"Bill Brown Memorial Playground,\"Bedford Avenue, Avenue X to Avenue Y":{"lat":40.5922828,"lng":-73.94571780000001},"Bleecker Playground,Hudson & West 11 streets,Yes":{"lat":40.7359572,"lng":-74.0051449},"Bloomingdale Park,\"Richmond Pkwy, Bloomingdale Rd.":{"lat":41.95136249999999,"lng":-88.07147029999999},"Bloomingdale Playground,\"Amsterdam Avenue, West 104 & West 105 streets\"":{"lat":40.7993583,"lng":-73.96621149999999},"Blue Heron Park Preserve (Nature Center),Poillon Avenue,Yes":{"lat":40.5308104,"lng":-74.1777308},"Bowne Park,\"159 Street, 29 Avenue":{"lat":40.7706177,"lng":-73.80726070000003},"Breininger Park,Braddock Avenue & 240 Street,Yes":{"lat":40.7258447,"lng":-73.72902979999998},"Breukelen Playground,Louisiana & Flatlands Avenue,Yes":{"lat":40.6509784,"lng":-73.89143130000002},"Brevoort Playground,Ralph Avenue & Chauncy Street,Yes":{"lat":40.6805498,"lng":-73.92257169999999},"Bridge Park 2,Bridge & Prospect streets,Yes":{"lat":40.7002913,"lng":-73.99669949999998},"Broadway Malls,\"Broadway, Columbus Circle to West 110 Street\"":{"lat":40.768593,"lng":-73.98316699999998},"Bronx Park (Ben Abrams Playground),Lydig Avenue & Bronx Park East,Yes":{"lat":40.8544373,"lng":-73.87011540000003},"Bronx Park (River Park Playground),\"East 180th Street, Boston Road\"":{"lat":40.843445,"lng":-73.87728190000001},"Bronx Park (Rosewood Playground),Bronx River Parkway & Rosewood Street,Yes":{"lat":40.8728984,"lng":-73.87094109999998},"Bronx River Parkway (Parque de los Ninos),\"Bronx River Parkway, Bronx Park":{"lat":40.8275344,"lng":-73.87342919999998},"Brookville Park,\"Conduit Avenue, Brookville Boulevard":{"lat":40.6628935,"lng":-73.7429353},"Brower Park,\"Brooklyn, St. Mark's":{"lat":40.6753765,"lng":-73.94857630000001},"Brower Park (Museum),\"Brooklyn, St. Mark's":{"lat":40.6753765,"lng":-73.94857630000001},"Brownsville Playground,Linden Boulevard & Hegeman Avenue,Yes":{"lat":40.6563588,"lng":-73.90608370000001},"Bushwick Playground & Pool,\"Flushing Avenue, Bushwick Avenue & Humboldt Street\"":{"lat":40.7016585,"lng":-73.93927020000001},"Bushwick Playground & Pool,Flushing & Bushwick Avenue between Garden & Beaver,Yes":{"lat":40.7016585,"lng":-73.93927020000001},"Cabbell Park/Cambria Playground,121 Avenue & 220 Street,Yes":{"lat":40.6889572,"lng":-73.74300490000002},"Cadman Plaza & Brooklyn War Memorial,\"Tillary, Cadman Plaza West":{"lat":40.6984595,"lng":-73.99067029999998},"Campiz Playground,Hope Street & Metropolitan Avenue,Yes":{"lat":40.713785,"lng":-73.9541673},"Canarsie Park,\"Paerdegat Avenue, Seaview Avenue":{"lat":40.6362807,"lng":-73.88598780000001},"Capt. Rivera Playground,\"East 156 Street, Forest Avenue\"":{"lat":40.8178344,"lng":-73.90677199999999},"Capt. Tilly Park,\"Highland Avenue, Upland Parkway":{"lat":40.71244129999999,"lng":-73.79889579999997},"Carl Schurz Park,East 84 Street & East End Avenue,Yes":{"lat":40.7751302,"lng":-73.9436973},"Carl Schurz Promenade,\"Stone Wall to East River, East 84 to East 90 streets\"":{"lat":40.7751302,"lng":-73.9436973},"Carmansville Playground,\"Amsterdam Avenue, West 151 to West 152 streets\"":{"lat":40.8293431,"lng":-73.94424830000003},"Carroll Park,Court & Smith Streets,Yes":{"lat":40.681062,"lng":-73.99557500000003},"Carver Playground,Ralph Avenue & Sumpter Street,No":{"lat":40.6802881,"lng":-73.9207346},"Caserta Playground,\"St. Raymond Avenue, Puroy Street\"":{"lat":40.8373952,"lng":-73.85385209999998},"Castle Hill Playground,\"Parker Street, Castle Hill Avenue":{"lat":40.8394422,"lng":-73.85324910000003},"Castlewood Playground (PS 186),Little Neck Parkway & 72 Avenue,Yes":{"lat":40.7492728,"lng":-73.72238149999998},"Cavanaugh Triangle (Angelo Campanero Playground),\"East Gun Hill Road, Eastchest Road":{"lat":40.8683359,"lng":-73.84290390000001},"Cedar Playground,\"West 179 Street, West Burnside Avenue":{"lat":40.8551112,"lng":-73.91742779999998},"Central Park (Ancient Playground),85 ST & 5TH AVE,":{"lat":40.7807557,"lng":-73.96161219999999}};

    $.ajax({
        type: "GET",
        url: "Directory_Of_Toilets_In_Public_Parks.csv",
        dataType: "text",
        success: function(directory) {processData(map, directory, latlng);}
    });

    //Associate the styled map with the MapTypeId and set it to display.
    map.mapTypes.set('styled_map', styledMapType);
    map.setMapTypeId('styled_map');
}