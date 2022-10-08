export interface Weather {
    location:            Location;
    current_observation: CurrentObservation;
    forecasts:           Forecast;
}

export interface CurrentObservation {
    wind:       Wind;
    atmosphere: Atmosphere;
    condition:  Condition;
}


export interface Atmosphere {
    humidity:   number;
    visibility: number;
    pressure:   number;
    rising:     number;
}

export interface Condition {
    code:        number;
    text:        string;
    temperature: number;
}

export interface Wind {
    chill:     number;
    direction: number;
    speed:     number;
}

export interface Forecast {
    data: Array<dataForecast>
}

export interface dataForecast {
    day:  string;
    date: number;
    low:  number;
    high: number;
    text: string;
}

export interface Location {
    city:        string;
    region:      string;
    country:     string;
}
