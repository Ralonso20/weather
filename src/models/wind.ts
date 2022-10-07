export class WindClass {
  static createWind(obj: Object): WindClass {
    return new WindClass(
        obj["chill"],
        obj["direction"],
        obj["speed"],
    )
  }
  constructor(
    public chill: number,
    public direction: number,
    public speed: number
  ) {}

  getWindSpeed(): number{
    return this.speed
  }
}
