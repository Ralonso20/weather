import { Weather } from '../interfaces/weatherInterface';
import http from "./http-common";
import "../interfaces/weatherInterface"
import { WeatherClass } from '../models/weather';

const defaultUrl = http.defaults.url
let dataList: Array<any> = [];
class WeatherService{
    
    async getAll(searchLocation: string | boolean | undefined){
        return http.get<any>(`${defaultUrl}`, { params: { location: searchLocation } })
    }

    async gel(searchLocation: string | boolean | undefined){
        dataList.pop()
        const forecastJSON = await http.get<any>(`${defaultUrl}`, { params: { location: searchLocation } })
        dataList.push(forecastJSON.data)
        dataList = dataList.map((forecast) => WeatherClass.createWeather(forecast))
        return dataList
    }

    getStorage(){
        return dataList
    }
}

export const weatherService = new WeatherService();

