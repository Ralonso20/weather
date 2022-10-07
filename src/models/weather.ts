import { CurrentObservation, Forecast, Location, Weather } from './../interfaces/weatherInterface';
import { CurrentObservationClass } from './currentObservation';
import { LocationClass } from './location';
export class WeatherClass{
    constructor(public location: Location, public current_observation: CurrentObservation, public forecasts: Forecast[]){
        
    }
    
    static createWeather(obj: Object){
        return new WeatherClass(
            LocationClass.createLocation(obj["location"]),
            CurrentObservationClass.createCurrentObservation(obj["current_observation"]),
            obj["forectas"]
        )
    }
}

