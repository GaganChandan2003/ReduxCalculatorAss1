import { legacy_createStore } from "redux";
import { reducer } from "./reducer";
export const initialstate=
{
    count:0,
}


export const store=legacy_createStore(reducer,initialstate);