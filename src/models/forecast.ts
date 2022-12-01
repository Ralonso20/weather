import { months } from "../helpers/months"

export class ForecastClass{
    constructor(    
        public dataForecast: Array<DataForecast>){
        
    }
    
    static createForecast(obj: Array<DataForecast>){
        return new ForecastClass(
            obj.map(d => {return DataForecast.createDataForecast(d)}),
        )
    }

    public getDataForecast(): Array<DataForecast>{
        return this.dataForecast
    }

    
}

export class DataForecast{
    constructor(
        public day:  string,
        public date: Date,
        public low:  number,
        public high: number,
        public text: string,
    ){

    }

    static createDataForecast(obj: Object){
        return new DataForecast(
            obj["day"] ,
            new Date(obj["date"] * 1000),
            obj["low"] ,
            obj["high"],
            obj["text"],
        )
    }

    getMinTemperature(): number{
        return Math.round((this.low - 32) * 5/9)
    }

    getMaxTemperature(): number{
        return Math.round((this.high - 32) * 5/9)
    }

    getDate(): string{
        return `${months[this.date.getMonth()]} ${this.date.getDate()}`
    }

    getText(): string{
        return this.text
    }
}