import { buildCurrentDate } from '../utility/UtilityFunctions';

const ResultComponent = (props) => {
    const { weather } = props;

    return (
        <div className='resultContainer'>
            <div className='locationContainer'>
                <p>{weather.name}, {weather.sys.country}</p>
            </div>
            <div className='currentDate'>
                <p>{buildCurrentDate(new Date())}</p>
            </div>
            <div className='weatherContainer'>
                <div className='temperature'>
                    <p>{Math.round(weather.main.temp)}°C</p>
                </div>
                <div className='weather'>
                    <p>{weather.weather[0].description}</p>
                </div>
            </div>
        </div>
    )
}

export default ResultComponent;