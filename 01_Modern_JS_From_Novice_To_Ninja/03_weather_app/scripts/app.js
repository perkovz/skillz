const cityForm = document.querySelector('form');
const card = document.querySelector('.card');
const details = document.querySelector('.details');

const updateCity = async (city) => {
	const cityDetails = await getCity(city);
	const weather = await getWeather(cityDetails.Key);

	return { cityDetails, weather };
};

cityForm.addEventListener('submit', e => {
	e.preventDefault();

	const city = cityForm.city.value.trim();
	cityForm.reset();

	updateCity(city).then(data => console.log(data)).catch(err => console.log(err));
});