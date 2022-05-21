import React from 'react'
import { useState, useEffect } from 'react'

export default function About({url}){
    const[about,setAbout] = useState(null)

    async function getAbout(){
        const data = await fetch(`${url}about`).then(res=>res.json())
        setAbout(data)
    }
    console.log(about)
    useEffect(()=>getAbout(),[])

    function loaded(){
        return(
        <div className='about'>
            <h2>{about.name}</h2>
            <h3>{about.email}</h3>
            <p>{about.bio}</p>
        </div>
        )
    }

    return about ? loaded() : <h1>loading....</h1>
}