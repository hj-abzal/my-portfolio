import { combineReducers, createStore } from "redux";
import { dataReducer } from "./DataReducer";
import { portfolioReducer } from "./portfolioReducer";


let rootReducer = combineReducers({
    portfolio: portfolioReducer,
    data: dataReducer
  })

export let store = createStore(rootReducer)

export type AppStateType = ReturnType<typeof rootReducer>
