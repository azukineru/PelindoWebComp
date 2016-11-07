function initMap() 
{
    var center = {lat: -6.18424616, lng: 113.21411133}; //1
    var tanjungintan = {lat: -7.7329215, lng: 108.9979021}; //1
    var petikemassmg = {lat: -6.9544645, lng: 110.4306044}; //2
    var tanjungperak = {lat: -7.22195, lng: 112.73213}; //3
    var gresik = {lat: -7.1652437, lng: 112.6519882}; //4
    var tanjungtembaga = {lat: -7.7298237, lng: 113.2182895}; //5
    var tanjungwangi = {lat: -8.1160384, lng: 114.4009389}; //6
    var celukanbawang = {lat: -8.1989471, lng: 114.8522973}; //7
    var benoa = {lat: -8.7394546, lng: 115.2131946}; //8
    var lembar = {lat: -8.729116, lng: 116.0773889}; //9
    var bima = {lat: -8.4642661, lng: 118.7449028}; //10
    var maumere = {lat: -8.6171156, lng: 122.2181724}; //11
    var tenaukupang = {lat: -10.191054, lng: 123.5421577}; //12
    var kotabaru = {lat: -3.2382376, lng: 116.2286665}; //13
    var banjarmasin = {lat: -3.287674, lng: 114.589958}; //14
    var sampit = {lat: -2.5394654, lng: 112.9586863}; //15
    var kumai = {lat: -2.745797, lng: 111.715698}; //16

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 6, 
        scrollwheel:  false,
        center: center                      
    });

    var contentString = 
            '<div id="content">'+
                '<h3>Tanjung Perak</h3>'+
                '<div id="bodyContent">'+
                    '<img src="img/tperak.jpg">'+
                    '<p>Jl. Perak Timur No. 620<br>'+
                    'Surabaya, 60165, Jawa Timur<br>'+
                    'Telp. +62 31 3291992 – 96<br>'+
                    'Fax. +62 31 3293994<br>'+
                    'Email   : tu.perak@pp3.co.id'+
                    '</p>'+
                '</div>'+
            '</div>';

        var infowindow = new google.maps.InfoWindow({
          content: contentString
        });

            var img = 'https://s16.postimg.org/55750v6th/marker.png';                        
            var marker1 = new google.maps.Marker({
                position: tanjungintan,
                map: map,
                icon: img
            });
            var marker2 = new google.maps.Marker({
                position: petikemassmg,
                map: map,
                icon: img
            });
            var marker3 = new google.maps.Marker({
                position: tanjungperak,
                map: map,
                icon: img
            });
            var marker4 = new google.maps.Marker({
                position: gresik,
                map: map,
                icon: img
            });
            var marker5 = new google.maps.Marker({
                position: tanjungtembaga,
                map: map,
                icon: img
            });
            var marker6 = new google.maps.Marker({
                position: tanjungwangi,
                map: map,
                icon: img
            });
            var marker7 = new google.maps.Marker({
                position: celukanbawang,
                map: map,
                icon: img
            });
            var marker8 = new google.maps.Marker({
                position: benoa,
                map: map,
                icon: img
            });
            var marker9 = new google.maps.Marker({
                position: lembar,
                map: map,
                icon: img
            });
            var marker10 = new google.maps.Marker({
                position: bima,
                map: map,
                icon: img
            });
            var marker11 = new google.maps.Marker({
                position: maumere,
                map: map,
                icon: img
            });
            var marker12 = new google.maps.Marker({
                position: tenaukupang,
                map: map,
                icon: img
            });
            var marker13 = new google.maps.Marker({
                position: kotabaru,
                map: map,
                icon: img
            });
            var marker14 = new google.maps.Marker({
                position: banjarmasin,
                map: map,
                icon: img
            });
            var marker15 = new google.maps.Marker({
                position: sampit,
                map: map,
                icon: img
            });
            var marker16 = new google.maps.Marker({
                position: kumai,
                map: map,
                icon: img
            });

    marker3.addListener('click', function() {
        infowindow.open(map, marker3);
    });

}