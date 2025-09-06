const ipAddressElement = document.getElementById("ip-address");
const getLocationButton = document.getElementById("get-location-button");
const currentLocationElement = document.getElementById("current-location");
const currentWeatherElement = document.getElementById("current-weather");

async function getIP() {
  try {
    const response = await fetch("https://api.ipify.org");
    const data = await response.text();
    // console.log(response);
    console.log(data);
    ipAddressElement.innerText = data;
    console.log(`https://www.ip2location.com/demo/${data}`);
  } catch (error) {
    log.error("Failed to fetch Ip:", error);
  }
}

const getUserIp = async () => {
  const response = await fetch("https://ipapi.co/json");
  const data = await response.json();
  console.log(data.ip);
  ipAddressElement.innerText = data.ip;
};

// https://www.weatherapi.com/ [free weather API]

getLocationButton.addEventListener("click", () => {
  navigator.geolocation.getCurrentPosition(
    async (position) => {
      console.log(position);
      const promise = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=678ccea753e34e9dbd350314250609&q=${position.coords.latitude},${position.coords.longitude}&api=yes`
      );
      const result = await promise.json();
      console.log("Result", result);
      currentLocationElement.innerHTML = `${result.location.name} ${result.location.region} ${result.location.country}`
      currentWeatherElement.innerHTML = `${result.current.condition.text} <img src="${result.current.condition.icon}"> ${result.current.dewpoint_c}°C`
    },
    () => {
      s;
      console.log("There are some issue");
    }
  );
});

// getIP();
getUserIp();
