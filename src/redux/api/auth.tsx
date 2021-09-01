import { data } from 'dummy-data/scoring-data';
import defaultAxios from "axios";
import { api_logged, api_non_logged } from 'helper/api';
import { http } from 'helper/http';
import { useState } from 'react';
const axios = defaultAxios.create({
    timeout: 60000,
    withCredentials: false,
    headers: {
        // "Content-Type": "application/json",
        // 'Accept': 'application/json',
        // 'Access-Control-Allow-Origin': '*',
        // 'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS'
        // Authorization: `token ${localStorage.getItem("token")}`,
    },
});

export const apiLogin = async (iData: any) => {

    const currentPosition = 'state/'
    const datas = await http.post(`${api_non_logged}authentication/event/login/`, iData);
    console.log(datas, "kokogtg")
    // console.log()
    await localStorage.setItem('token', datas.data.token)
    let url = 'default'
    if (datas.data.status === 200) {
        if (localStorage.getItem('token')) {
            // alert('sini gengs')
            const post = await axios.get(`${api_logged}${currentPosition}`, {
                headers: { 'Authorization': `token ${localStorage.getItem('token')}` }
            }).then(function (response) {
                console.log(response.data.results.length, 'Authenticated');
                if (response.data.results.length === 0) {
                    // alert('masuk')
                    // window.location.href = "/list-event";
                    // return
                    url = '/list-event'
                }
            }).catch(function (error) {
                return datas
            });

        }
        if (url !== 'default') {

            window.location.href = url
        }
        else {
            window.location.href = '/'

        }
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

