import { useContext } from "react"
import{Changename} from "../components/changeprofile"
import { MyContext } from "../RouterSample"
export const Profile=()=>{
    const {username}=useContext(MyContext)
    return (
          <div>
             <h1>this is profile page of {username} </h1>
             <Changename />
          </div>
    )
}