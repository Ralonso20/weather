import { CurrentObservationClass } from './currentObservation';
import { DataForecast, ForecastClass } from './forecast';
import { LocationClass } from './location';
export class WeatherClass{
    constructor(public location: LocationClass, public current_observation: CurrentObservationClass, public forecasts: ForecastClass){
        
    }
    
    static createWeather(obj: Object){
        return new WeatherClass(
            LocationClass.createLocation(obj["location"]),
            CurrentObservationClass.createCurrentObservation(obj["current_observation"]),
            ForecastClass.createForecast(obj["forecasts"])
        )
    }

    getTemperature(): number{
        return Math.round((this.current_observation.getTemperature() - 32) * 5/9)
    }

    getLocation(): string{
        return `${this.location.city}, ${this.location.country}`
    }

    getWeatherState(): string{
        return this.current_observation.getWeatherState()
    }

    getPubDate(): string{
        return this.current_observation.getPubDate().toUTCString()
    }

    getHumidity(): number{
        return this.current_observation.getHumidity()
    }

    getPressure(): number{
        return this.current_observation.getPressure()
    }

    getWindSpeed(): number{
        return this.current_observation.getWindSpeed()
    }

    getDataForecast(): Array<DataForecast> {
        return this.forecasts.getDataForecast()
    }
}

