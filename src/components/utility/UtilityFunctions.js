export const fetchWeather = (input, cityState, weatherState, errorState) => {
    const api = {
        key: '157fc462119cb5574e840d8d54023784',
        base: 'https://api.openweathermap.org/data/2.5/'
    };

    if (!input) errorState('Please provide a valid city!');
    else {
        fetch(`${api.base}weather?q=${input}&units=metric&lang=hu&APPID=${api.key}`)
            .then(res => res.json())
            .then(result => {
                if (result.cod === 200) {
                    weatherState(result);
                    cityState('');
                    errorState('');
                } else {
                    weatherState({});
                    cityState('');
                    errorState(result.message + '!');
                }
            });
    }
};

export const buildCurrentDate = (currentDate) => {
    const months = ['Január', 'Február', 'Március', 'Április', 'Május', 'Június', 'Július', 'Augusztus', 'Szeptember', 'Október', 'November', 'December'];
    const days = ['Vasárnap', 'Hétfő', 'Kedd', 'Szerda', 'Csütörtök', 'Péntek', 'Szombat'];

    let day = days[currentDate.getDay()];
    let date = currentDate.getDate();
    let month = months[currentDate.getMonth()];
    let year = currentDate.getFullYear();

    return `${year} ${month} ${date} ${day}`;
};