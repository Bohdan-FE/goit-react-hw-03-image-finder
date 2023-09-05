import axios from 'axios';

axios.defaults.baseURL = "https://pixabay.com/api";

export const fetchItems = async (value, page) => {
    const resp = await axios.get(`?key=38388037-1512b522da0d657b891be2adb&q=${value}&page=${page}`);
    return resp.data
}