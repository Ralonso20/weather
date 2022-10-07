import axios from "axios";

export const options = {
  method: 'GET',
  url: 'https://yahoo-weather5.p.rapidapi.com/weather',
  params: {location: 'buenos aires', format: 'json', u: 'f'},
  headers: {
    'X-RapidAPI-Key': 'ccee2dfbeemshb4062132fc3e0e1p1ea7d1jsn0dc108ad8bd3',
    'X-RapidAPI-Host': 'yahoo-weather5.p.rapidapi.com'
  }
};

export default axios.create({
  url: 'https://yahoo-weather5.p.rapidapi.com/weather',
  params: {location: '', format: 'json', u: 'f'},
  headers: {
    'X-RapidAPI-Key': 'ccee2dfbeemshb4062132fc3e0e1p1ea7d1jsn0dc108ad8bd3',
    'X-RapidAPI-Host': 'yahoo-weather5.p.rapidapi.com'
  }
});

