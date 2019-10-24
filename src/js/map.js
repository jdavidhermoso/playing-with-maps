(function (listener) {
    let map;

    loadScript();

    function loadScript() {
        const script = document.createElement('script');
        script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyC_mg2mVphmrUPNHx1ZhLNSC6YvciqfO3I';
        script.addEventListener('load', (e) => {
            initMap(null, e);
        });

        document.head.appendChild(script);
    }

    function initMap() {
        const lat = 40.416775;
        const lng = -3.703790;
        let mapElement = document.getElementById('map');
        this.map = new google.maps.Map(mapElement, {
            zoom: 4,
            streetViewControl: false,
            panControl: false,
            center: new google.maps.LatLng(lat, lng),
            scrollWheel: true
        });
        loadTeams().then((res) => {
            console.log(res);
        })
    }

    async function loadTeams() {
        return await fetch('https://www.quiddkids.com/api/public/getTeams');
    }

    function addMarker(lat, lng) {
        let marker = new google.maps.Marker({
            position: new google.maps.LatLng(lat, lng)
        });

        let infoWindow = new google.maps.InfoWindow();
        marker.addListener('click', (e) => {
            infoWindow.setPosition(e.latLng);
            infoWindow.setContent('Hey!');
            infoWindow.open(map, marker);
        });

        marker.setMap(this.map);
    }
})();