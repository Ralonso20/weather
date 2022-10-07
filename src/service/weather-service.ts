import { Weather } from '../interfaces/weatherInterface';
import http from "./http-common";
import "../interfaces/weatherInterface"

const defaultUrl = http.defaults.url
export class weatherService{
    async getAll(searchLocation: string){
        
        return http.get<Weather>(`${defaultUrl}`, { params: { location: searchLocation } })
    }
}