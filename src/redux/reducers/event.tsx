/* eslint-disable import/no-anonymous-default-export */
import { GET_ASPECT_PHASE_EVENT, GET_CURRENT_PHASE_EVENT, GET_DETAIL_TEAM, GET_EVENT, GET_PHASE, GET_PHASE_EVENT, GET_RESET_SCORING, GET_STATE, GET_TEAM, POST_FAV, POST_SUBMIT_SCORE } from 'redux/actions'

// Define your state here
const initialState = {

    results: [],
    phase: null,
    phase_arr: [],
    team: null,
    detail_team: [],
    aspect: [],
    fav: 'reset',
    event_active: 'default',
    phase_active: [],
    scoring: ''


};
// This export default will control your state for your application
export default (state = initialState, { type, payload }: any) => {
    // console.log(payload, 'hasilnya ngab');
    switch (type) {
        case GET_STATE: {
            console.log(payload.data.results.length, 'statex')
            if (payload.data.results.length === 0) {

                state['event_active'] = 'failed'
                return {
                    ...state
                }
            }
            state['event_active'] = payload.data.results[0].event.display_name
            state['phase_active'] = [payload.data.results[0].phase.id, payload.data.results[0].phase.name]
            return { ...state }
        }
        case GET_RESET_SCORING: {

            state['scoring'] = 'reset'
            return { ...state }
        }
        case GET_CURRENT_PHASE_EVENT: {

            let data = null
            state['results'].map((val, i) => {
                return Object.keys(val).find((key) => {
                    console.log(val['is_current'], "SDfds")
                    if (val['id'] === payload.event) {
                        console.log(val['display_name'], "masuok")
                        data = val['display_name']
                    }
                });
            })
            // console.log(data, "sdsd")
            state['event_active'] = data
            state['phase_active'] = payload.id
            return {
                ...state,
            };
        }
        case GET_EVENT: {

            if (payload === undefined) return { ...state }
            if (payload.status !== 200) return { ...state };
            state['results'] = payload.data.results;
            let data = null
            payload.data.results.map((val, i) => {
                return Object.keys(val).find((key) => {
                    console.log(val['is_current'], "SDfds")
                    if (val['is_current'] === true) {
                        console.log(val['display_name'], "masuok")
                        data = val['display_name']
                    }
                });
            })
            // console.log(data, "sdsd")
            state['event_active'] = data
            return {
                ...state,
            };
        }
        case GET_PHASE: {
            if (payload === undefined) return { ...state }
            if (payload.status !== 200) return { ...state };
            state['phase'] = payload.data.results;
            console.log('pehung', state['phase_active'])
            if (state['phase_active']?.length <= 0) {
                // state['phase_active'] = [payload.data.results[0].id, payload.data.results[0].name]
                let data = null
                payload.data.results.map((val, i) => {
                    return Object.keys(val).find((key) => {
                        console.log(val['is_active'], val, "cespleng")
                        if (val['is_active'] === true) {
                            console.log(val['name'], "masuok")
                            data = [val['id'], val['name']]
                        }
                    });
                })
                state['phase_active'] = data
            }

            // console.log(state, "sdsd");
            // alert('masuk')
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
            if (payload[0] === undefined) return { ...state }
            if (payload[0].status !== 200) return { ...state };
            state['team'] = payload[0].data.results;

            // state['phase_active'] = payload[1];
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
            // alert(payload)
            if (payload === undefined) return { ...state }
            if (payload === 'reset') return { ...state, scoring: '' };
            if (payload === 'failed') return { ...state, scoring: payload };
            if (payload.status !== 200) return { ...state };
            // state['detail_team'] = payload.data.results;
            state['detail_team'][0]['last_updated'] = new Date();
            state['detail_team'][state['detail_team'].length - 1]['score'] = payload.data.data.total


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
                state['fav'] = 'Removed to your favorite team'
            }
            else {
                state['fav'] = 'Added to your favorite team'
            }
            return {
                ...state,
            };
        }
        default:
            return state;
    }
};