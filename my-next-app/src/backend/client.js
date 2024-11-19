import axios from "axios";

const createParamsStr = function (params = {}) {
    const entries = Object.entries(params);
    if (entries.length === 0) return ""; 
    return "?" + entries.map(([key, value]) => `${key}=${value}`).join("&");
  };

export const FETCH = async(apiUrl, params) =>{
    const paramsStr = await createParamsStr(params);
    const api = apiUrl + paramsStr;
    const res = await axios.get(api);
    return res;
}