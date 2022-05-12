import axios from "axios";

const {data_me} = axios.get("https://api.spotify.com/v1/me");
const {data_search} = axios.get("https://api.spotify.com/v1/search");
 
export default {data_me, data_search};