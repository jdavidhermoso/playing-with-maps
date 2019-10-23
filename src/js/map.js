(function () {
    function loadScript() {
        const script = document.createElement('script');
        script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyC_mg2mVphmrUPNHx1ZhLNSC6YvciqfO3I';
        script.addEventListener('load', (e) => {
            initMap(null, e);
        });

        document.head.appendChild(script);
    }

    function initMap() {
        let mapElement = document.getElementById('map');
        let map = new google.maps.Map(mapElement, {
            zoom: 4,
            streetViewControl: false,
            panControl: false,
            center: new google.maps.LatLng(40.416775, -3.703790),
            scrollWheel: true
        });
    }

    loadScript();
})();

