import { IAction } from '../../redux/action'

export class ApplicationActions {
    public static SET_LOADING = 'SET_LOADING'
    public static SET_NOTIFICATIONS = 'SET_NOTIFICATIONS'
    public static SET_PRIORITY = 'SET_PRIORITY'
    public static SET_LANGUAGE = 'SET_LANGUAGE'
    public static SET_TYPING = 'SET_TYPING'

    public static setLoading(loading: boolean): IAction {
        return {
            type: ApplicationActions.SET_LOADING,
            payload: loading
        }
    }
    public static setTyping(typing: boolean): IAction {
        return {
            type: ApplicationActions.SET_TYPING,
            payload: typing
        }
    }
    public static setNotifications(notifications: boolean): IAction {
        return {
            type: ApplicationActions.SET_NOTIFICATIONS,
            payload: notifications
        }
    }
    public static setPriority(priority: boolean): IAction {
        return {
            type: ApplicationActions.SET_PRIORITY,
            payload: priority
        }
    }
    public static setLanguage(lang: string): IAction {
        return {
            type: ApplicationActions.SET_LANGUAGE,
            payload: lang
        }
    }
}
