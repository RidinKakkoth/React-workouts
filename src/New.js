// import React from 'react'
// import {Planet} from './components/planet';


// function New() {
//     const planets=[
//         {name:"Mars", isGasPlanet:false},
//         {name:"Earth", isGasPlanet:false},
//         {name:"Jupiter", isGasPlanet:true},
//         {name:"Venus", isGasPlanet:false},
//         {name:"Neptune", isGasPlanet:true},
//         {name:"Uranus", isGasPlanet:true}
//     ];

//   return (
//     <div>
//         { planets.map((planet,key)=> planet.isGasPlanet? <Planet name={planet.name} />:null )}
//     </div>
//   )
// }

//----------------------------------------------------------------

// import React from 'react'

// import {useState} from 'react'

// function New() {

//     const[age,setAge]=useState(0)
    

//     const increment=()=>{
//         // age<20?
//         setAge(age+1)
//         // :setAge(0)
//     }
//     const decrement=()=>{
//         setAge(age-1)
//     }

//   return (
//     <div>
//        <h1 style={{color:age<5?'red':'green'}}> {age}</h1>
//       {age<20?<button onClick={increment} >increase</button>: <button onClick={decrement}>decrement</button> }   
//       {/* {age<10&&<button onClick={increment} >increase</button>}    */}
//     </div>
//   )
// }

// export default New





//--------------------------------------------------------------------

// import React from 'react'
// import { useState } from 'react'

// function New() {
// const [color,setColor]=useState("black")

// const updateColor=()=>{
//         setColor(color==="red"?"black":"red")
// }

//   return (
//     <div>
//     <button onClick={updateColor}>show/hide</button>
//      <h1 style={{color:color}}>HI I AM RIDIN</h1>
//     </div>
//   )
// }

// export default New

//=====================================

// import React from 'react'
// import { useState } from 'react'
 
// function New() {

//     const[count,setCount]=useState(0)

//     const alterCount=(num)=>{
//         // num!==0?setCount(count+num):setCount(0)
//         setCount(count+num)
//     }

//     return (
//     <div>
//       <button onClick={()=> alterCount(1)}>Increase</button>
//       <button onClick={()=>alterCount(-1)}>Decrease</button>
//       {/* <button onClick={()=>alterCount(0)}>Zero</button> */}
//       <button onClick={()=> setCount(0)}>Zero</button>
//       {count}
//     </div>
//   )
// }

// export default New

//=================================================

// import React from 'react'
// import { useState } from 'react'

// function New() {

// const [input,setInput]=useState("")

// const inputUpdate=(e)=>{
//       setInput(e.target.value)
// }

//     return (
//     <div>
//       <input onChange={inputUpdate} type="text" />
//       {input}
//     </div>
//   )
// }

// export default New

//======================================= 

// import React from 'react'
// import { useState } from 'react'

// function New() {

//     const [toDos,setToDos]=useState([])
//     const [toDo,setToDo]=useState('')

//   return (
//     <div>
//         <div>

//       <input onChange={(e)=>setToDo(e.target.value)}  type="text" />
//       <button onClick={()=>setToDos([...toDos,{key:Date.now(),text:toDo,status:false}])}  >add</button>
//       {toDo}
//         </div>

//         <div>
//             {
//                 toDos.map((obj)=>{
//                     return(
//                         <div>
//                             <p>{obj.text}</p>
//                         </div>
//                     )
//                 })
//             }
//         </div>
//     </div>


//   )
// }

// export default New
