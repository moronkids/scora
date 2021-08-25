/* eslint-disable import/no-anonymous-default-export */
import { DO_LOGIN } from 'redux/actions'
import { Redirect } from 'react-router-dom'

// Define your state here
const initialState = {
    data: Object
};
// This export default will control your state for your application
export default (state = initialState, { type, payload }: any) => {
    switch (type) {
        case DO_LOGIN: {
            if (payload.status === 400) {
                return {
                    ...state, error: payload.message
                }
            }
            if (payload === 'reset') {
                return {
                    state: null
                }
            }
            if (payload.status !== 200) return { ...state };
            state = null
            return {
                ...state,
                ...payload,
                logged: true,

            };
        }
        default:
            return state;
    }
};