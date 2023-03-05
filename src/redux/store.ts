import {applyMiddleware, combineReducers, Dispatch, legacy_createStore} from "redux";
import {AuthActionType, AuthReducer} from "./AuthReducer";
import {AppActionType, AppReducer} from "./AppReducer";
import {ProfileActionType, ProfileReducer} from "./ProfileReducer";
import thunk, {ThunkDispatch} from "redux-thunk";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";

const rootReducer = combineReducers({
    app: AppReducer,
    auth: AuthReducer,
    profile: ProfileReducer
})

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk))

type AppRootStateType = ReturnType<typeof rootReducer>
type RootActionType = ProfileActionType | AppActionType | AuthActionType
type AppThunkDispatchType = ThunkDispatch<AppRootStateType,any, RootActionType>

const useAppDispatch = () => useDispatch<AppThunkDispatchType>()
const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector