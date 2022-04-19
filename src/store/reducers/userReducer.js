const INITIAL_STATE = {
    loggedInUser: null
}

export function userReducer(state = INITIAL_STATE, action) {
    // console.log(action);
    switch (action.type) {
        case 'SPEND_BALANCE':
            const { loggedInUser } = state
            console.log(loggedInUser);
            console.log(loggedInUser.coins - action.amount);
            return {
                ...state,
                loggedInUser: { ...loggedInUser, coins: loggedInUser.coins - action.amount }
            }

        case 'SET_USER':
            return {
                ...state,
                loggedInUser: { ...action.loggedInUser }
            }

        default:
            return state;
    }
}