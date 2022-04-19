import { storageService } from "../../services/storageService";
import { userService } from "../../services/userService"

export function spendBalance(contact, amount) {
    return async (dispatch) => {
        try {
            const loggedInUser = await userService.addMove(contact, amount)
            console.log(loggedInUser);
            // dispatch({ type: 'SPEND_BALANCE', amount })
            dispatch({ type: 'SET_USER', loggedInUser })

        } catch (error) {
            console.log('err>>', error);
        }
    }
}

export function loadUser() {
    return async (dispatch, getState) => {
        try {
            // const { filterBy } = getState().contactModule
            const loggedInUser = await userService.getUser()
            // console.log('user>>', loggedInUser);
            dispatch({ type: 'SET_USER', loggedInUser })
        } catch (err) {
            console.log('err:', err)
        }

    }
}