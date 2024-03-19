import { selector } from "recoil";
import {userState} from "../atoms/User"

export const userEmail = selector({
    key:'userEmail',
    get:({get})=>{
        const user = get(userState)
        return user.username
    }
})