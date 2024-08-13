import axios from 'axios';

const BASE_URL = "https://youtube-v31.p.rapidapi.com"

const options = {
  
  url: BASE_URL,
  params: {
    maxResults: '50'
  },
  headers: {
    'x-rapidapi-key': import.meta.env.VITE_RAPID_API_KEY,
    'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
  }
};

const fetchFromAPI = async (url) => {
try {
    const {data} = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
  } catch (error) {
    console.error("Error fetching data from API: ", error);
  }
}

export default fetchFromAPI;