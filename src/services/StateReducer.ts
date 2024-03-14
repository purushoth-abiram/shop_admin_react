import { userSession } from "./HelperService";

export const initialState = {
    user: userSession()
};

const Reducer = (state: any, action: any) => {
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }
        default:
            return state;
    }
};

export default Reducer;
