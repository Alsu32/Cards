const initialState = {
    isAuthrized: false
}

//reducer
export const AuthReducer = (state: InitialStateType = initialState, action: AuthActionType):InitialStateType => {
    switch (action.type) {
        default:
            return state
    }
}

//actions

// type
type InitialStateType = typeof initialState
export type AuthActionType = any