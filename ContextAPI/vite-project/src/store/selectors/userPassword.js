import { selector } from "recoil";
import {userState} from "../atoms/User"

export const userPassword = selector({
    key:'userPassword',
    get:({get})=>{
        const user = get(userState)
        return user.password
    }
})