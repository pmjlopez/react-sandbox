import { IAction, IActionReducer } from '../../redux/action'
import { ApplicationActions } from './actions'

import { IApplication } from '../../models'
const initialState: IApplication = {
    loading: false,
    settings: {
        language: 'nl',
        notifications: false,
        priority: false,
    },
    typing: false,
};

export const ApplicationReducer: IActionReducer<IApplication> = (
    state: IApplication = initialState,
    action: IAction
) => {
    switch (action.type) {
        case ApplicationActions.SET_LOADING:
            return { ...state, loading: action.payload };
        case ApplicationActions.SET_TYPING:
            return { ...state, typing: action.payload };
        case ApplicationActions.SET_NOTIFICATIONS:
            return {
                ...state,
                settings: {
                    ...state.settings,
                    notifications: action.payload
                }
            };
        case ApplicationActions.SET_PRIORITY:
            return {
                ...state,
                settings: {
                    ...state.settings,
                    priority: action.payload
                }
            };
        case ApplicationActions.SET_LANGUAGE:
            return {
                ...state,
                settings: {
                    ...state.settings,
                    language: action.payload
                }
            };
        default:
            return state
    }
};
