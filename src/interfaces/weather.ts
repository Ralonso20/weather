export interface Itinerarios {
    location:            Location;
    current_observation: CurrentObservation;
    forecasts:           Forecast[];
}

export interface CurrentObservation {
    wind:       Wind;
    atmosphere: Atmosphere;
    astronomy:  Astronomy;
    condition:  Condition;
    pubDate:    number;
}

export interface Astronomy {
    sunrise: string;
    sunset:  string;
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
    day:  string;
    date: number;
    low:  number;
    high: number;
    text: string;
    code: number;
}

export interface Location {
    city:        string;
    region:      string;
    woeid:       number;
    country:     string;
    lat:         number;
    long:        number;
    timezone_id: string;
}
