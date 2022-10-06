import axios from "axios";

const options = {
  method: 'GET',
  url: 'https://yahoo-weather5.p.rapidapi.com/weather',
  params: {location: 'buenos aires', format: 'json', u: 'f'},
  headers: {
    'X-RapidAPI-Key': 'ccee2dfbeemshb4062132fc3e0e1p1ea7d1jsn0dc108ad8bd3',
    'X-RapidAPI-Host': 'yahoo-weather5.p.rapidapi.com'
  }
};

export const getData = () => {
    return axios.request(options).then(function (response) {
        console.log(response.data);
    }).catch(function (error) {
        console.error(error);
    });
}

