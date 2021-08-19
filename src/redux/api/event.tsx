import { data } from 'dummy-data/scoring-data';
import { api_logged, api_logged_api } from 'helper/api';
import { http } from 'helper/http';

//endpoint GET
const getEvent = 'event';
const getPhase = 'phase';
const getPhaseByEvent = 'phase?event=';
const getAspect = 'aspect';
const getAspectByEvent = 'aspect?event=ukode-2021';
const getAspectByPhaseEvent = 'aspect?event=dailysocial-hackathon&phase=6';
const getTeamByPhase = 'team?phase=';
const getDetailTeam = 'participation/team?team_id=';
// const getDetailTeam = 'participation/team?search=';
// const getTeamByPhase = 'team?phase=11&order=sequence';
//endpoint GET

//endpoint POST
const postCurrent = 'master/event/set-current-event/'
const postTeamFav = 'team/favorite/set/';
const postTeamFavRemove = 'team/favorite/remove/'
const postSubmitScore = 'team/'
//endpoint POST

export const apiGetEvent = async (iData: any) => {
    const datas = await http.get(`${api_logged + getEvent}`, iData);
    return datas;
}

export const apiGetPhase = async (iData: any) => {
    const datas = await http.get(`${api_logged + getPhase}`, iData);
    return datas;
}
export const apiGetPhaseByEvent = async (iData: any) => {
    // alert('sampe sini',)
    console.log('sampeee', api_logged + getPhaseByEvent, iData)
    const datas = await http.get(`${api_logged + getPhaseByEvent + iData}`);
    console.log(datas, "heho")
    return datas;
}

export const apiGetTeamByPhase = async (iData: any) => {
    // const phasex = ;
    const phasex = iData && iData[0] ? iData[0] : 1;

    const order = iData && iData[1] ? iData[1] : 'sequence';
    const datas = await http.get(`${api_logged + getTeamByPhase + phasex + `&order=` + order}`);


    return datas;
}

export const apiGetDetailTeam = async (iData: any) => {


    const datas = await http.get(`${api_logged_api + getDetailTeam + iData}`);
    console.log('nkri', datas)
    return datas;
}

export const apiPostFavTeam = async (iData: any) => {
    const send = new FormData();
    send.append('team', iData[0][0])
    send.append('phase', iData[0][1])
    const datas = await http.post(`${api_logged + postTeamFav}`, send);
    return datas;
}

export const apiPostFavTeamRemove = async (iData: any) => {
    const send = new FormData();
    send.append('team', iData[0][0])
    send.append('phase', iData[0][1])
    const datas = await http.post(`${api_logged + postTeamFavRemove}`, send);
    return datas;
}

export const apiGetAspectByPhaseEvent = async (iData: any) => {
    const datas = await http.post(`${api_logged + `aspect?event=${iData.event}&phase=${iData.phase}`}`);
    return datas;
}

export const apiPostSubmitScore = async (iData: any) => {
    const datas = await http.post(`${api_logged + postSubmitScore}`, iData);
    return datas;
}

export const apiPostSetCurrent = async (iData: any) => {
    console.log(iData, "heha")
    const datas = await http.post(`${api_logged_api + postCurrent}`, iData);
    return datas;
}



