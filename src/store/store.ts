import { legacy_createStore as createStore } from "redux";
import { LOGIN_USER } from "./type";

interface Action {
    type: string;
}

interface State {
    authenticated: boolean;
}

const intitialState: State = {
    authenticated: localStorage.getItem('token') ? true : false
};

const reducer = (state: State = intitialState, action: Action) => {
    switch (action.type) {
        case LOGIN_USER:
            return { ...state, authenticated: true };

        default:
            return state;
    }
};

const store = createStore(reducer);

export type RootState = ReturnType<typeof reducer>;

export default store;