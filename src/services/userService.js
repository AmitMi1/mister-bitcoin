import { storageService } from "./storageService"

export const userService = {
    getUser,
    signUp,
    addMove
}

const STORAGE_KEY = 'logged_in_user'
// signUp('Amit Miz')
// addMove({
//     email: "faulknerflores@renovize.com",
//     name: "Faulkner Flores",
//     phone: "+1 (952) 501-2678",
//     _id: "5a566402f90ae30e97f990db"}, 100)  


// const gUser = null

function getUser() {
    const user = storageService.load(STORAGE_KEY)
    return user
}

function signUp(name) {
    const user = {
        name: name,
        coins: 10000000,
        moves: [],
        imgUrl: "https://ca.slack-edge.com/T02L3AYJGN4-U02K3QJLCBH-762de20f3035-512"
    }
    storageService.store(STORAGE_KEY, user)
}

function addMove(contact, amount) {
    const user = getUser()
    user.moves.unshift({
        toId: contact._id,
        to: contact.name,
        at: Date.now(),
        amount: amount
    })
    user.coins -= amount
    storageService.store(STORAGE_KEY, user)
    return Promise.resolve(user)
    // console.log(user);
}