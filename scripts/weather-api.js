const apiUrl = "https://api.open-meteo.com/v1/forecast?latitude=41.3888&longitude=2.159&hourly=temperature_2m,relative_humidity_2m,precipitation,cloud_cover,wind_speed_10m"

fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        const time = data.hourly.time;
        const currentGmeTime = new Date().toISOString().slice(0, 13) + ":00";
        const index = time.indexOf(currentGmeTime);
        
        const temp = data.hourly.temperature_2m;
        const hum = data.hourly.relative_humidity_2m;
        const prec = data.hourly.precipitation;
        const cloud = data.hourly.cloud_cover;
        const wind = data.hourly.wind_speed_10m;
        console.log(data);

        document.getElementById("temperature").innerHTML = `Current temperature: <b>${temp[index]}°C</b>`;
        document.getElementById("humidity").innerHTML = `Current humidity: <b>${hum[index]}%</b>`;
        document.getElementById("precipitation").innerHTML = `Current precipitation: <b>${prec[index]}mm</b>`;
        document.getElementById("clouds").innerHTML = `Current cloud coverage: <b>${cloud[index]}%</b>`;
        document.getElementById("wind").innerHTML = `Current wind speeds: <b>${wind[index]}km/h </b>`;
    })
    .catch(error => {
        console.error("Error fetching weather data:", error);
        document.getElementById("temperature").textContent = "Error fetching data.";
        document.getElementById("humidity").textContent = "Error fetching data.";
        document.getElementById("precipitation").textContent = "Error fetching data.";
        document.getElementById("clouds").textContent = "Error fetching data.";
        document.getElementById("wind").textContent = "Error fetching data.";

    });
