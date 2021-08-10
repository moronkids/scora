import { DO_LOADING } from 'redux/actions'
const initialState = {
    loading: false

};
// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, { type, payload }: any) => {
    switch (type) {
        case DO_LOADING: {

            if (payload === true) {
                return {
                    ...state, loading: true
                }
            }
            else {
                return {
                    ...state, loading: false
                }
            }
        }
        default:
            return state;
    }
};