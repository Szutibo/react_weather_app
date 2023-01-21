import { useState } from 'react';
import InputComponent from './components/inputBox/Input';
import ResultComponent from './components/resultBox/Result';
import Error from './components/error/Error';

function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState({});
  const [error, setError] = useState('');

  return (
    <div
      className={(typeof weather.main !== 'undefined')
        ? (weather.main.temp > 25)
          ? 'app hot'
          : (weather.main.temp < 5)
            ? 'app cold'
            : 'app'
        : 'app'
      }>
      <InputComponent
        city={city}
        setCity={setCity}
        setError={setError}
        setWeather={setWeather}
      />
      {(typeof weather.main !== 'undefined')
        ? (<ResultComponent
          city={city}
          weather={weather}
        />)
        : (<Error error={error} />)}
    </div>
  );
}

export default App;
