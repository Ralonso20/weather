import { ConditionClass } from "./condition";
import { AtmosphereClass } from "./atmosphere";
import { WindClass } from "./wind";
import * as dateHelper from "../helpers/dateHelper"
import {
  Atmosphere,
  Condition,
  CurrentObservation,
  Wind,
} from "./../interfaces/weatherInterface";
export class CurrentObservationClass {
  constructor(
    public wind: WindClass,
    public atmosphere: AtmosphereClass,
    public condition: ConditionClass,
    public pubDate: number
  ) {}

  static createCurrentObservation(obj: Object): CurrentObservationClass {
    return new CurrentObservationClass(
      WindClass.createWind(obj["wind"]),
      AtmosphereClass.createAtmosphere(obj["atmosphere"]),
      ConditionClass.createCondition(obj["condition"]),
      obj["pubDate"]
    );
  }

  getTemperature(): number {
    return this.condition.temperature;
  }

  getWeatherState(): string{
    return this.condition.getWeatherState()
  }

  getPubDate(): string{
    return dateHelper.convertMillisecondsToDateAndTime(1669863600)
  }

  getHumidity(): number{
    return this.atmosphere.getHumidity()
  }

  getPressure(): number{
    return this.atmosphere.getPressure()
  }

  getWindSpeed(): number{
    return this.wind.getWindSpeed()
  }
}
