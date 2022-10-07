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
    public wind: Wind,
    public atmosphere: Atmosphere,
    public condition: Condition
  ) {}

  static createCurrentObservation(obj: Object): CurrentObservation {
    return new CurrentObservationClass(
      WindClass.createWind(obj["wind"]),
      AtmosphereClass.createAtmosphere(obj["atmosphere"]),
      ConditionClass.createCondition(obj["condition"])
    );
  }
}
