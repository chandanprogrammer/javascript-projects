const showLocationDetails = document.querySelector('.show-location-details');
let apiEndPoint = 'https://api.opencagedata.com/geocode/v1/json';
let apiKey = '40b8efa930e046e9a5251618e311f221';

// Api call from https://opencagedata.com/
const getUserCurrentAddress = async (latitude, longitude) => {
    const currentLocationBox = document.querySelector("#currentLocation");
    let query = `${latitude}, ${longitude}`;
    let apiUrl = `${apiEndPoint}?key=${apiKey}&q=${query}&pretty=1`;
    try {
        const res = await fetch(apiUrl);
        const data = await res.json();
        console.log(data);
        currentLocationBox.innerHTML = `<strong> Current Location is : </strong> ${data.results[0].formatted}`;
    }
    catch (error) {
        console.log(error);
        currentLocationBox = `Current Location is ${error}`;
    }
}
document.querySelector('.location-btn').addEventListener("click", (e) => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            // https://www.latlong.net/Show-Latitude-Longitude.html
            const { latitude, longitude } = position.coords;
            showLocationDetails.textContent = `the latituse ${latitude} and longitude ${longitude}`;
            getUserCurrentAddress(latitude, longitude);
        }, (error) => {
            showLocationDetails.textContent = error.message;
        })
    }
})