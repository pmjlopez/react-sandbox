export interface IApplication {
    loading: boolean
    typing: boolean
    settings: {
        notifications: boolean
        priority: boolean
        language: string
    }
}
