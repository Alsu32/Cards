const initialState = {}

//reducer
export const ProfileReducer = (state: InitialStateType = initialState, action: ProfileActionType):InitialStateType => {
    switch (action.type) {
        default:
            return state
    }
}

//actions

// type
type InitialStateType = typeof initialState
export type ProfileActionType = any