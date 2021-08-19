
import { Effect, put, call, takeLatest, takeEvery, SagaReturnType } from "redux-saga/effects";

// Import all actions
import {
    HIT_LOGIN,
    DO_LOGIN,
    GET_EVENT,
    HIT_EVENT,
    HIT_PHASE,
    GET_PHASE,
    HIT_TEAM,
    GET_TEAM,
    HIT_FAV,
    POST_FAV,
    HIT_FAV_REMOVE,
    HIT_DETAIL_TEAM,
    GET_DETAIL_TEAM,
    HIT_ASPECT_PHASE_EVENT,
    GET_ASPECT_PHASE_EVENT,
    HIT_SUBMIT_SCORE,
    POST_SUBMIT_SCORE,
    RESET_DETAIL_TEAM,
    HIT_LOADING,
    DO_LOADING,
    HIT_PHASE_EVENT,
    GET_PHASE_EVENT
} from "redux/actions/index";
// Import all actions

//Import api call
import {
    apiLogin
} from "redux/api/auth";

import {
    apiGetAspectByPhaseEvent,
    apiGetDetailTeam,
    apiGetEvent, apiGetPhase, apiGetPhaseByEvent, apiGetTeamByPhase, apiPostFavTeam, apiPostFavTeamRemove, apiPostSubmitScore
} from "redux/api/event";
//Import api call

type LoginServiceResponse = SagaReturnType<typeof apiLogin>
function* postLogin({ payload }: any) {
    try {
        const login: LoginServiceResponse = yield call(apiLogin, payload);
        localStorage.setItem('token', login.data.token)
        yield put({ type: DO_LOGIN, payload: login });
    } catch (error) {
        yield put({ type: DO_LOGIN, payload: { message: error.raw.description[0], status: 400 } });
        console.log(error)
    }
}

type GetEvent = SagaReturnType<typeof apiGetEvent>
function* getEvent({ payload }: any) {
    try {
        const event: GetEvent = yield call(apiGetEvent, payload);
        yield put({ type: GET_EVENT, payload: event });
    } catch (error) {
        console.log(error)
    }
}

type GetPhase = SagaReturnType<typeof apiGetPhase>
function* getPhase({ payload }: any) {
    console.log(payload, 'active phase 0')
    try {
        const event: GetPhase = yield call(apiGetPhase, payload);
        yield put({ type: GET_PHASE, payload: event });
    } catch (error) {
        console.log(error)
    }
}
type getPhaseByEvent = SagaReturnType<typeof apiGetPhaseByEvent>
// eslint-disable-next-line @typescript-eslint/no-redeclare
function* getPhaseByEvent({ payload }: any) {
    // alert('masuk')
    try {
        // alert('sini')
        const event: getPhaseByEvent = yield call(apiGetPhaseByEvent, payload[0]);
        console.log(event, "denjori")
        yield put({ type: GET_PHASE_EVENT, payload: [event, payload[1]] });
    } catch (error) {
        alert('error nih')
        console.log(error, 'error nih')
    }
}

type GetTeam = SagaReturnType<typeof apiGetTeamByPhase>
function* getTeam({ payload }: any) {
    yield put({ type: DO_LOADING, payload: true });
    try {
        const team: GetTeam = yield call(apiGetTeamByPhase, payload);
        yield put({ type: GET_TEAM, payload: team });
        // yield put({ type: GET_DETAIL_TEAM, payload: 'reset' });
        yield put({ type: DO_LOADING, payload: false });
    } catch (error) {
        yield put({ type: DO_LOADING, payload: false });
        console.log(error)
    }
}

type GetDetailTeam = SagaReturnType<typeof apiGetDetailTeam>
function* getDetailTeam({ payload }: any) {
    yield put({ type: DO_LOADING, payload: true });
    try {
        const team: GetDetailTeam = yield call(apiGetDetailTeam, payload);
        yield put({ type: GET_DETAIL_TEAM, payload: team });
        yield put({ type: DO_LOADING, payload: false });
    } catch (error) {
        yield put({ type: DO_LOADING, payload: false });
        console.log(error)
    }
}
function* resetDetailTeam({ payload }: any) {

    try {

        yield put({ type: GET_DETAIL_TEAM, payload: 'reset' });
    } catch (error) {
        console.log(error)
    }
}

type PostFav = SagaReturnType<typeof apiPostFavTeam>
function* postFav({ payload }: any) {
    try {
        const team: PostFav = yield call(apiPostFavTeam, payload);
        yield put({ type: POST_FAV, payload: team });
        yield put({ type: DO_LOADING, payload: false });
    } catch (error) {
        console.log(error)
    }
}

type GetAspectPhaseEvent = SagaReturnType<typeof apiGetAspectByPhaseEvent>
function* getAspectPhaseEvent({ payload }: any) {
    try {
        const team: GetAspectPhaseEvent = yield call(apiGetAspectByPhaseEvent, payload);
        yield put({ type: GET_ASPECT_PHASE_EVENT, payload: team });
    } catch (error) {
        console.log(error)
    }
}

type PostFavRemove = SagaReturnType<typeof apiPostFavTeamRemove>
function* postFavRemove({ payload }: any) {
    try {
        const team: PostFavRemove = yield call(apiPostFavTeamRemove, payload);
        console.log(team, 'hepi');

        yield put({ type: POST_FAV, payload: team });
        yield put({ type: DO_LOADING, payload: false });
    } catch (error) {
        console.log(error)
    }
}
type postSubmitScoreSagas = SagaReturnType<typeof apiPostSubmitScore>
function* postSubmitScoreSaga({ payload }: any) {
    try {
        const score: postSubmitScoreSagas = yield call(apiPostSubmitScore, payload);
        console.log(score, 'hasilnya ngab');
        yield put({ type: POST_SUBMIT_SCORE, payload: score });

        // yield put({ type: POST_SCORE, payload: score });
    } catch (error) {
        console.log(error)
    }
}
function* loading({ payload }: any) {
    try {

        yield put({ type: DO_LOADING, payload: payload });
    } catch (error) {
        console.log(error)
    }
}




export default function* scora() {

    yield takeEvery(HIT_LOGIN, postLogin);
    yield takeEvery(HIT_EVENT, getEvent);
    yield takeEvery(HIT_PHASE, getPhase);
    yield takeEvery(HIT_PHASE_EVENT, getPhaseByEvent);
    yield takeEvery(HIT_TEAM, getTeam);
    yield takeEvery(HIT_FAV, postFav);
    yield takeEvery(HIT_FAV_REMOVE, postFavRemove);
    yield takeEvery(HIT_DETAIL_TEAM, getDetailTeam);
    yield takeEvery(HIT_ASPECT_PHASE_EVENT, getAspectPhaseEvent);
    yield takeEvery(HIT_SUBMIT_SCORE, postSubmitScoreSaga);
    yield takeEvery(RESET_DETAIL_TEAM, resetDetailTeam);
    yield takeLatest(HIT_LOADING, loading);
}