import { createSlice } from '@reduxjs/toolkit';
import { combineReducers } from '@reduxjs/toolkit';



const removeBackground = createSlice({
    name: 'removeBg',
    initialState: null,
    reducers: {
        setActionStatus: (state, action) => {
            return { ...state, bgRemoved: action.payload };
        },
    },
});

const authData = {
    loggedIn: null
}

const userAuthentication = createSlice({
    name: 'auth',
    initialState: authData,
    reducers: {

        setAuthStatus: (state, action) => {

            return { ...state, loggedIn: action.payload };
        },
    },
});


const otherContent = createSlice({
    name: 'content',
    initialState: null,
    reducers: {

        setContentStatus: (state, action) => {

            return { infoContent: action.payload };
        },
    },
});

const onLogoutContent = createSlice({
    name: 'logout',
    initialState: null,
    reducers: {

        setLogoutStatus: (state, action) => {

            return { logoutContent: action.payload };
        },
    },
});

export const { setActionStatus } = removeBackground.actions;
export const { setAuthStatus } = userAuthentication.actions;
export const { setContentStatus } = otherContent.actions;
export const { setLogoutStatus } = onLogoutContent.actions;
// export default removeBackground.reducer;



export default combineReducers({
    isBackroundWorking: removeBackground.reducer,
    userLogin: userAuthentication.reducer,
    otherContent: otherContent.reducer
});