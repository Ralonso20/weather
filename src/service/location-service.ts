import * as locationHelper from "../helpers/userLocation";

class LocationService {
    getLocation = async () => {
        const location = await locationHelper.getUserLocation();
        const cityName = await locationHelper.getCityName(location[0], location[1]);
        console.log(cityName);
    }
    
    locationPermission = async () => {
        return await locationHelper.validateUserLocation();
    }
}

export const locationService = new LocationService();

