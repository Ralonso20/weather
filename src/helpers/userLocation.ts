//function to get user location
export const getUserLocation = async (): Promise<[number, number]> => {
   return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(
             (position) => {
                resolve([position.coords.latitude, position.coords.longitude]);
             },
             (err) => {
                alert('no se pudo obtener la ubicación');
                reject();
             }
        );
   });
}

//function to validate if the user has allowed the location
export const validateUserLocation = async (): Promise<boolean> => {
    return new Promise((resolve, reject) => {
          navigator.permissions.query({ name: "geolocation" }).then((result) => {
                 if (result.state === "granted") {
                 resolve(true);
                 } else if (result.state === "prompt") {
                 resolve(false);
                 } else if (result.state === "denied") {
                 resolve(false);
                 }
          });
    });
};

//function to get the city name from the coordinates
export const getCityName = async (lat: number, lon: number): Promise<string> => {
    let cityName: string = "";
    const url = `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lon}`;
    const response = await fetch(url);
    const data = await response.json();
    cityName = data.address.town;
    return cityName;
};

//function to validate if the browser supports geolocation
export const validateGeolocation = (): boolean => {
    if (navigator.geolocation) {
        return true;
    } else {
        return false;
    }
}
