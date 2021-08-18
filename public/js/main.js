let searchButton = document.getElementById('submit-btn');
let cityName = document.getElementById('city-name');
let city_country = document.getElementById('city');
let temp_val = document.getElementById('temp-val');
let temp_status = document.getElementById('temp-status');
let temp_status_name = document.getElementById("temp_status_name");
let min_max = document.getElementById("min-max-temp");
let vis_val = document.getElementById("vis-val");
let humidity_val = document.getElementById("humidity-val");

const getTemperature = async (event) => {
    event.preventDefault();
    let city = cityName.value;
    if (city === "") {
        city_country.innerText = `Please enter the city name`;
    }
    else {
        try {
            let api = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=6bcea63f80f50465d52fef3477c9aa17&units=metric`;
            const data = await fetch(api);
            const finalData = await data.json();
            const arr = [finalData];
            temp_val.innerHTML = arr[0].main.temp;
            city_country.innerHTML = `${arr[0].name}, ${arr[0].sys.country}`;
            min_max.innerHTML = `Max: ${arr[0].main.temp_max}<sup>o</sup>C | Min: ${arr[0].main.temp_min}<sup>o</sup>C`;
            vis_val.innerHTML = `${arr[0].visibility/1000} km`;
            humidity_val.innerHTML = `${arr[0].main.humidity}%`;

            let temp_status_val = arr[0].weather[0].main;
            if(temp_status_val == "Clouds"){
                temp_status.innerHTML = "<i class='fas fa-cloud'>";
                temp_status_name.innerHTML = temp_status_val;
            }
            else if(temp_status_val == "Mist"){
                temp_status.innerHTML = "<i class='fas fa-smog'></i>";
                temp_status_name.innerHTML = temp_status_val;
            }
            else if(temp_status_val == "Rain"){
                temp_status.innerHTML = "<i class='fas fa-cloud-showers-heavy'></i>";
                temp_status_name.innerHTML = temp_status_val;
            }
            else if(temp_status_val == "Clear"){
                temp_status.innerHTML = "<i class='fas fa-sun' style = 'color: #ffd700'></i>";
                temp_status_name.innerHTML = temp_status_val;
            }

            else if(temp_status_val == "Haze"){
                temp_status.innerHTML = "<i class='fas fa-smog'></i>";
                temp_status_name.innerHTML = temp_status_val;
            }
        }
        catch{
            alert("Enter the correct city name");
            city_country.innerText = "Enter the correct city name";
        }
    }
}
searchButton.addEventListener('click', getTemperature);