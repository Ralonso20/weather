import * as locationHelper from "../helpers/userLocation";
import toast,{ Toaster } from "react-hot-toast";
class LocationService {
    constructor(public location?: string | boolean) {}
    getLocation = async () => {
        if(locationHelper.validateGeolocation()){
            const location = await locationHelper.getUserLocation();
            return await locationHelper.getCityName(location[0], location[1]);
        }else{
            return false
        }
    }
    
    locationPermission = async () => {
        return await locationHelper.validateUserLocation();
    }

    setLocation = (location: string | undefined) => {
        this.location = location;
    }

    getStorageLocation = () => {
        return this.location;
    }
}

export const locationService = new LocationService();

