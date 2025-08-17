import React, { useEffect, useState } from 'react'
import axios from "axios"

const App = () => {
  const [data,setData]= useState([])
  useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/posts")
    .then((res)=>setData(res.data))
  },[])
  return (
    <div>
      <ul>
        {data.map((post, id)=>(
          <li key={id}>{post.title}</li>
        ))}
      </ul>

      
    </div>
  )
}

export default App
