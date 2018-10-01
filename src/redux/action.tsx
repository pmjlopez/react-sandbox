export interface IAction {
    type: string
    payload?: any
    trunkrsNr?: string
    token?: string
    shipmentId?: number
    onFetchSucceeded?: () => void
    onFetchFailed?: () => void
}
export type IActionReducer<T> = (state: T, action: IAction) => T
