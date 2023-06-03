// import React from 'react'
// import { useState } from 'react'
// import { useEffect } from 'react'
// import Axios from 'axios'


// function UseEffectTest() {
//     const [catFact,setCatFact]=useState("")

//     const changeFact=()=>{

//         Axios.get("https://catfact.ninja/fact").then((res)=>{
//           setCatFact(res.data.fact)
//         })
//     }

//     useEffect(()=>{
//         changeFact()
//     },[]);

//   return (
//     <div>
//       <button onClick={changeFact}>generate catfact</button>
//       <p>{catFact}</p>
//     </div>
//   )
// }

// export default UseEffectTest

//=========================age prediction==================

// import { useEffect, useState } from "react";
// import Axios from 'axios'

// import React from 'react'

// function UseEffectTest() {

//     const[name,setName]=useState("")
//     const [predictedAge,setPredictedAge]=useState(null)

//    const fechData=()=>{
//         Axios.get(`https://api.agify.io/?name=${name}`).then((res)=>{
//             setPredictedAge(res.data)
//         })
//     }

//   return (
//     <div>
//       <input type="text" onChange={(e)=>{setName(e.target.value)}} placeholder="enter ur name" />
//         <button onClick={fechData}>predict age</button>
//         <p>predicted age:{predictedAge?.name} </p>
//         <p>predicted age:{predictedAge?.age} </p>
//     </div>
//   )
// }

// export default UseEffectTest


