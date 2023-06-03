import { useState } from "react"
import { useContext } from "react"
import { MyContext } from "../RouterSample"

export const Changename=()=>{
    const {setUsername}=useContext(MyContext)
    const [newName,setNewName]=useState("")
  return(
    <div>
    <input onChange={(e)=>{setNewName(e.target.value)}} type="text" />
    <button onClick={()=>{setUsername(newName)}}>change</button>
    </div>
  )
}