import * as Redux from 'redux'
import { IStore } from './IStore'
import { ApplicationReducer } from '../services/application/reducer'

const rootReducer: Redux.Reducer<IStore> = Redux.combineReducers<IStore>({
    application: ApplicationReducer,
})

export default rootReducer
