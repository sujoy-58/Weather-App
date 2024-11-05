
function updateDateTime() {
    // create a new `Date` object
    const now = new Date();

    // get the current date and time as a string
    const currentDateTime = now.toLocaleString();

    // update the `textContent` property of the `span` element with the `id` of `datetime`
    document.querySelector('.time-date').textContent = currentDateTime;
}

// call the `updateDateTime` function every second
setInterval(updateDateTime, 1000);


const condition = document.getElementById('condition');







const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '6c890fe773mshbb90622c9069e3ap16ff6cjsn97147df5d969',
		'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com'
	}
};

// async function fetchWeather() {
// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }
// }


const getWeather = (city) =>{
	
  	
	var url = 'https://weatherapi-com.p.rapidapi.com/current.json?q='+city;

	cityName.innerHTML = city;
	fetch(url, options)
	.then(response => response.json())
	.then((response) => {
		console.log(response)
		console.log(response.current.condition.text)
		
		temp_c.innerHTML = response.current.temp_c;
		temp_f.innerHTML = response.current.temp_f;
		feelslike_c.innerHTML = response.current.feelslike_c;
		feelslike_f.innerHTML = response.current.feelslike_f;
		
		wind_mph.innerHTML = response.current.wind_mph
		wind_kph.innerHTML = response.current.wind_kph
		wind_degree.innerHTML = response.current.wind_degree
		wind_dir.innerHTML = response.current.wind_dir
		
		pressure_mb.innerHTML = response.current.pressure_mb
		humidity.innerHTML = response.current.humidity
		heatindex_c.innerHTML = response.current.heatindex_c
		uv.innerHTML = response.current.uv
		condition.innerHTML = response.current.condition.text;
		
	})
	.catch(err => console.error(err));
	// fetchWeather();
}

submit.addEventListener("click", (e)=>{
	e.preventDefault();
	getWeather(city.value);
});

getWeather("hyderabad");
	