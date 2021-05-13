import { combineReducers, createStore } from "redux";
import { portfolioReducer } from "./portfolioReducer";


let rootReducer = combineReducers({
    portfolio: portfolioReducer
  })

export let store = createStore(rootReducer)

export type AppStateType = ReturnType<typeof rootReducer>
