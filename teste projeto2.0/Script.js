var map = L.map('map').setView([-23.46878, -46.52632], 60);


L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

map.on("click", e=>{
const{lat1, lng} = e.latlng
console.log(e)    

})


