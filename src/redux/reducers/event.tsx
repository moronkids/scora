/* eslint-disable import/no-anonymous-default-export */
import { GET_ASPECT_PHASE_EVENT, GET_DETAIL_TEAM, GET_EVENT, GET_PHASE, GET_TEAM, POST_FAV, POST_SUBMIT_SCORE } from 'redux/actions'

// Define your state here
const initialState = {

    results: [],
    phase: null,
    team: null,
    detail_team: [],
    aspect: [],
    fav: 'reset'


};
// This export default will control your state for your application
export default (state = initialState, { type, payload }: any) => {
    switch (type) {
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
        case GET_TEAM: {
            if (payload === undefined) return { ...state }
            if (payload.status !== 200) return { ...state };
            state['team'] = payload.data.results;
            return {
                ...state,
            };
        }
        case GET_DETAIL_TEAM: {
            console.log(payload, "hohoho")
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
            if (payload === undefined) return { ...state }
            if (payload.status !== 200) return { ...state };
            // state['detail_team'] = payload.data.results;
            state['detail_team'][0]['last_updated'] = new Date();
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
                return { ...state};
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
                state['fav'] = 'Success remove to Favorite'
            }
            else {
                state['fav'] = 'Success add to Favorite'
            }
            return {
                ...state,
            };
        }
        default:
            return state;
    }
};