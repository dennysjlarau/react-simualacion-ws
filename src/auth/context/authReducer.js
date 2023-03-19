import { types } from "../types/types";

export const authReducer = ( state = {}, action) => {
    switch (action.type) {
        case types.login:
            return {
                ...state,
                autenticado: true,
                usuario: action.payload
            };
        case types.logout:
            return {
                autenticado: false,
                usuario: null
            };
        default:
            return state;
    }
}