import { data } from 'dummy-data/scoring-data';
import defaultAxios from "axios";
import { api_logged, api_non_logged } from 'helper/api';
import { http } from 'helper/http';
import { useState } from 'react';
import { apiGetEvent, apiPostPosition } from './event';
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

    const currentPosition = 'state/';
    const getEvent = 'event';
    const datas = await http.post(`${api_non_logged}authentication/event/login/`, iData);
    console.log(datas, "kokogtg")
    // console.log()
    await localStorage.setItem('token', datas.data.token)
    let url = 'default'
    if (datas.data.status === 200) {
        if (localStorage.getItem('token')) {
            // get position
            await axios.get(`${api_logged}${currentPosition}`, {
                headers: { 'Authorization': `token ${localStorage.getItem('token')}` }
            }).then(function (response) {
                if (response.data.results.length === 0) {
                    url = '/list-event'
                    localStorage.setItem('phase', '0')
                }
                else {
                    // alert()
                    localStorage.setItem('phase', response.data.results[0].phase.id)

                }
            }).catch(function (error) {
                console.log(error, "err")
                return datas
            });
            // get event
            await axios.get(`${api_logged}${getEvent}`, {
                headers: { 'Authorization': `token ${localStorage.getItem('token')}` }
            }).then(function (response) {
                console.log(response, "event")
                if (response.data.results.length === 0) {
                    url = '/list-event?sort=current'
                }
                else {

                    response.data.results.map((val) => {
                        if (val.is_active) {
                            url = '/list-event?sort=current'
                        }
                        else {
                            url = '/list-event?sort=previous'
                        }
                    })
                }
            }).catch(function (error) {
                console.log(error, "err")
                return datas
            });

        }

        console.log(url, 'tes url')
        // alert('masuk sini')
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

