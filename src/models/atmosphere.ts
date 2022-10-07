export class AtmosphereClass {
  static createAtmosphere(obj: Object): AtmosphereClass{
    return new AtmosphereClass(obj["humidity"],
    obj["visibility"],
    obj["pressure"],
    obj["rising"],)
  }
  constructor(
    public humidity: number,
    public visibility: number,
    public pressure: number,
    public rising: number
  ) {}
}
