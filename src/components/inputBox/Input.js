import { fetchWeather } from '../utility/UtilityFunctions';

const InputComponent = (props) => {
    const { city, setCity, setWeather, setError } = props;

    return (
        <div className='inputContainer'>
            <input
                type='text'
                placeholder='Keresés...'
                value={city}
                className='searchBar'
                onChange={(e) => setCity(e.target.value)}
                onKeyUp={(e) => {
                    e.key === 'Enter' && fetchWeather(city, setCity, setWeather, setError);
                }}
                onClick={() => setWeather({})}
            />
        </div>
    )
}

export default InputComponent;