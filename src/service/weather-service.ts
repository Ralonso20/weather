import { Weather } from '../interfaces/weatherInterface';
import http from "./http-common";
import "../interfaces/weatherInterface"

const defaultUrl = http.defaults.url
export class weatherService{
    async getAll(searchLocation: string | false | undefined){
        return http.get<any>(`${defaultUrl}`, { params: { location: searchLocation } })
    }
}