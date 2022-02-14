import axios from 'axios';

// var axios = require("axios").default;
const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'

var options = {
  method: 'GET',
  params: {
    bl_latitude: '11.847676',
    tr_latitude: '12.838442',
    bl_longitude: '109.095887',
    tr_longitude: '109.149359',
  },
  headers: {
    'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
    'x-rapidapi-key': 'e938d20ab9mshb217ead1e5e2b1fp139079jsn281d7e2e0bfe'
  }
};

export const getPlacesData = async () => {
    try{
        const { data: { data }} = await axios.get(URL, options);

        return data;
    } catch(error){
        console.log(error);
    }
}