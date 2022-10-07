import { ConditionClass } from "./condition";
import { AtmosphereClass } from "./atmosphere";
import { WindClass } from "./wind";
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
    public pubDate: Date
  ) {}

  static createCurrentObservation(obj: Object): CurrentObservationClass {
    return new CurrentObservationClass(
      WindClass.createWind(obj["wind"]),
      AtmosphereClass.createAtmosphere(obj["atmosphere"]),
      ConditionClass.createCondition(obj["condition"]),
      new Date(obj["pubDate"])
    );
  }

  getTemperature(): number {
    return this.condition.temperature;
  }

  getWeatherState(): string{
    return this.condition.getWeatherState()
  }

  getPubDate(): Date{
    return this.pubDate
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
