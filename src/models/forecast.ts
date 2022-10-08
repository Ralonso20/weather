export class ForecastClass{
    constructor(    
        public day:  string,
        public date: number,
        public low:  number,
        public high: number,
        public text: string,){
        
    }
    
    static createWeather(obj: Object){
        return new ForecastClass(
            obj["day"],
            obj["date"],
            obj["low"],
            obj["high"],
            obj["text"],
        )
    }
}