import {createStore, combineReducers} from 'redux'
import {gifsReducer} from "./gifsreducer";

const rootReducer = combineReducers({
    gifs: gifsReducer,
})

export const store: AppRootStateType = createStore(rootReducer)


export type AppRootStateType = ReturnType<typeof rootReducer>
