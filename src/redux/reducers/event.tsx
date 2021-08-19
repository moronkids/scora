/* eslint-disable import/no-anonymous-default-export */
import { GET_ASPECT_PHASE_EVENT, GET_CURRENT_PHASE_EVENT, GET_DETAIL_TEAM, GET_EVENT, GET_PHASE, GET_PHASE_EVENT, GET_TEAM, POST_FAV, POST_SUBMIT_SCORE } from 'redux/actions'

// Define your state here
const initialState = {

    results: [],
    phase: null,
    phase_arr: [],
    team: null,
    detail_team: [],
    aspect: [],
    fav: 'reset',
    event_active: null,
    phase_active: null,


};
// This export default will control your state for your application
export default (state = initialState, { type, payload }: any) => {
    console.log(payload, 'hasilnya ngab');
    switch (type) {

        case GET_CURRENT_PHASE_EVENT: {

            // if (payload === undefined) return { ...state }
            // if (payload.status !== 200) return { ...state };
            // state['results'] = payload.data.results;
            return {
                ...state,
            };
        }
        case GET_EVENT: {

            if (payload === undefined) return { ...state }
            if (payload.status !== 200) return { ...state };
            state['results'] = payload.data.results;
            return {
                ...state,
            };
        }
        case GET_PHASE: {
            if (payload === undefined) return { ...state }
            if (payload.status !== 200) return { ...state };
            state['phase'] = payload.data.results;
            return {
                ...state,
            };
        }
        case GET_PHASE_EVENT: {
            if (payload[0] === undefined) return { ...state }
            if (payload[0].status !== 200) return { ...state };

            // let phase_arr = state['phase_arr'].length
            console.log(payload, "ndanku")
            state['phase_arr'][payload[1]] = payload[0].data.results

            return {
                ...state,
            };
        }
        case GET_TEAM: {
            if (payload === undefined) return { ...state }
            if (payload.status !== 200) return { ...state };
            state['team'] = payload.data.results;
            return {
                ...state,
            };
        }
        case GET_DETAIL_TEAM: {
            console.log(payload, "nkri")
            if (payload === undefined) return { ...state }
            if (payload === 'reset') {
                state['detail_team'][0] = []
                return state;
            }
            if (payload.status !== 200) return { ...state };
            state['detail_team'] = payload.data.results;
            state['detail_team'][0]['last_updated'] = null
            // alert("masuk sini")

            return {
                ...state,
            };
        }
        case POST_SUBMIT_SCORE: {
            console.log(payload, 'hasilnya ngab')
            if (payload === undefined) return { ...state }
            if (payload.status !== 200) return { ...state };
            // state['detail_team'] = payload.data.results;
            state['detail_team'][0]['last_updated'] = new Date();
            state['detail_team'][state['detail_team'].length - 1]['score'] = payload.data.data.total
            // state['team']
            // alert("masuk sini")

            return {
                ...state,
            };
        }

        case GET_ASPECT_PHASE_EVENT: {
            if (payload === undefined) return { ...state }
            if (payload.status !== 200) return { ...state };
            state['aspect'] = payload.data.results;
            return {
                ...state,
            };
        }
        case POST_FAV: {
            if (payload === 'reset') {
                state['fav'] = 'reset'
                return { ...state };
            }
            if (payload.status !== 200) {
                state['fav'] = 'Failed hit to server!';
                return { ...state };
            }
            const data = state['team'];

            for (let i in data) {
                if (data[i].id === payload.data.data.id) {
                    data[i].is_favorite = payload.data.data.is_favorite
                }
            }
            console.log(payload, "hepi");

            if (payload.data.description == 'favorite_removed') {
                state['fav'] = 'The team removed from your favorite list'
            }
            else {
                state['fav'] = 'The team added to your favorite list'
            }
            return {
                ...state,
            };
        }
        default:
            return state;
    }
};