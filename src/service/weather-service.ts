import { Weather } from './../interfaces/weather';
import http from "./http-common";
import "../interfaces/weather"

export class weatherService{
    async getAll(searchLocation: string){
        return http.get<Weather>('https://yahoo-weather5.p.rapidapi.com/weather', { params: { location: searchLocation } })
    }
}