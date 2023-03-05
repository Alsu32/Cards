const initialState = {
    status: false
}

//reducer
export const AppReducer = (state: InitialStateType = initialState, action: AppActionType):InitialStateType => {
    switch (action.type) {
        default:
            return state
    }
}

//actions

// type
type InitialStateType = typeof initialState
export type AppActionType = any