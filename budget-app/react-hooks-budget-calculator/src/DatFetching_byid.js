import React, { useState, useEffect } from 'react'
import Axios from 'axios'

function DatFetching_byid() {
const [post, setpost]=useState({})
const [id, setid]=useState(1)
const [idfrombuttonclick, setidfrombuttonclick]=useState(1)

useEffect(()=>{
    Axios.get(`https://jsonplaceholder.typicode.com/posts/${idfrombuttonclick}`)
.then(res=>{
    console.log(res)
    setpost(res.data)
})
.catch(err=>{
    console.log(err)
})
}, [idfrombuttonclick])

const handleClick=()=>{
    setidfrombuttonclick(id)
}

    return (
        <div>
            <input type="text" value={id} onChange={e=>setid(e.target.value)}/>
       <ul>
           <li>{post.title}</li>
       </ul>

       <button type="button" onClick={handleClick}>fetch</button>
       
        </div>
    )
}

export default DatFetching_byid
