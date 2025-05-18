

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




const cities = ['Delhi', 'Mumbai', 'Chennai', 'Kolkata', 'Bangalore', 'Ahmedabad', 'Pune', 'Jaipur'];

const tableBody = document.querySelector('tbody');

const options = {
  method: 'GET',
  headers: {
		'x-rapidapi-key': '6c890fe773mshbb90622c9069e3ap16ff6cjsn97147df5d969',
		'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com'
	}
};

cities.forEach((city, index) => {
  fetch(`https://weatherapi-com.p.rapidapi.com/current.json?q=${city}`, options)
    .then(res => res.json())
    .then(data => {
      const rowHTML = `
        <tr>
          
          <td class="px-4 py-4 text-center">${data.location.name}</td>
          <td class="px-4 py-4 text-center">${data.current.temp_c}°C</td>
          <td class="px-4 py-4 text-center">${data.current.feelslike_c}°C</td>
          <td class="px-4 py-4 text-center">${data.current.humidity}%</td>
          <td class="px-4 py-4 text-center">${data.current.condition.text}</td>
          <td class="px-4 py-4 text-center ">${data.current.wind_kph}</td>
        </tr>
      `;
      tableBody.innerHTML += rowHTML;
    })
    .catch(err => console.error(`Failed to load weather for ${city}:`, err));
});
