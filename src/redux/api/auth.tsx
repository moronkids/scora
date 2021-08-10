import { data } from 'dummy-data/scoring-data';
import { api_non_logged } from 'helper/api';
import { http } from 'helper/http';

export const apiLogin = async (iData: any) => {
    const datas = await http.post(`${api_non_logged}authentication/event/login/`, iData);
    if (datas.data.status === 200) {
        window.location.href = "/"
    }
    return datas;
}



// import defaultAxios from "axios";
// import { Redirect, Link } from "react-router-dom";
// import { api_non_logged } from 'helper/api'

// const axios = defaultAxios.create({
//     baseURL: api_non_logged,
//     headers: {},
//     withCredentials: false,
//     timeout: 60000
// });
// export const apiLogin = async (data: any, props: any) => {

//     const todos = await axios.post("authentication/event/login/", data).catch(function (error) {

//     });
//     return await todos

// };

