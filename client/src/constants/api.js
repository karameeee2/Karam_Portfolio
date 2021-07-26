export const HOST = process.env.NODE_ENV === 'development' ? 'http://localhost:8080/' : 'https://karameeee.dev/';
export const API = 'api/'
export const API_LIST = {
    //COMMON
    SURVEY_EACH: HOST + API + 'selectSurveyEach',
    SELECT_QUESTION: HOST + API + 'selectQuestion',
    SELECT_ANSWER: HOST + API + 'selectAnswer',

    // PROGRESS
    PROGRESS_LIST: HOST + API + 'selectSurveyList',
    PROGRESS_JOIN_CHECK: HOST + API + 'joinSurveyCheck',
    JOIN_SURVEY: HOST + API + 'insertJoinSurvey',
    NEW_SURVEY: HOST + API + 'insertSurvey',

    END_LIST: HOST + API + 'selectEndList',
    COUNT_JOINED_USER: HOST + API + 'countJoinedUser',
    AGE_COUNT: HOST + API + 'selectAgeCount',

    NOTICE_LIST: HOST + API + 'noticeList',
    NOTICE_DETAIL: HOST + API + 'noticeDetail',
    UPDATE_HIT:HOST + API + 'updateHit',

    GET_SEARCH_RESULT: HOST + API + 'search',
    
    LOGIN: HOST + API + 'login',
    LOGOUT: HOST + API + 'logout',
    EX: HOST + API + 'ex',
    REGISTER_ID_CHECK: HOST+ API + 'idCheck',
    REGISTER: HOST + API + 'register',
}