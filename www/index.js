async function getaddr(fdata){
    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(fdata)
        }
        let response = await fetch("/cords", options)
        let data = await response.json()
        console.log(data)
        let house_num = data.address.house_number
        let street = data.address.road
        let city_district = data.address.city_district
        let suburb = data.address.suburb
        if (house_num == undefined){
            house_num = "unknown"
        }
        document.getElementById("street").innerText = street + " " + house_num
        document.getElementById("city-district").innerText = city_district
        document.getElementById("suburb").innerText = suburb
       
}
async function main(){
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition((position) => {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;
            const data = {"lat":lat, "lon":lon}
            console.log(data)
            getaddr(data)
            
            
        })
        } else {
        document.write("<h3>geolocation not available</h3>");
        }
}
main()