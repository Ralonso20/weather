import { Weather } from '../interfaces/weatherInterface';
import http from "./http-common";
import "../interfaces/weatherInterface"
import { WeatherClass } from '../models/weather';

const defaultUrl = http.defaults.url
let dataList: Array<any> = [];
let noData: boolean = true;
class WeatherService{
    
    async getAll(searchLocation: string | boolean | undefined){
        noData = false
        await http.get<any>(`${defaultUrl}`, { params: { location: searchLocation } })
        .then(response => {
            dataList.pop()
            dataList.push(response.data)
            dataList = dataList.map((forecast) => WeatherClass.createWeather(forecast))
            return dataList
        })
    }

    getStorage(){
        return dataList
    }

    getNoData(){
        return noData
    }
}

export const weatherService = new WeatherService();

