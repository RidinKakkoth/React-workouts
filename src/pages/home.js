import { useContext } from "react"
import { Changename } from "../components/changeprofile"
import { MyContext } from "../RouterSample" 

export const Home=()=>{
    const {username}=useContext(MyContext)
    return (
        <div>
            <h1>this is home page of {username}</h1>
            <Changename />
        </div>
    )
}