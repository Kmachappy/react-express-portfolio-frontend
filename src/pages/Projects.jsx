import React from 'react'
import { useState, useEffect } from 'react'

export default function Projects({url}){
    const [projects,setProjects] = useState(null)



    async function getProjects(){
        const data =  await fetch(`${url}projects`).then(res=>res.json())
        setProjects(data)
    }

    console.log(projects)
    useEffect(()=>getProjects(),[])

    function loaded(){
        return(
            <div className='project-container'>
                {projects.map((e,i)=>{
                    return(
                        <div key={i} className='project-card'>
                            <h1>{e.name}</h1>
                            <img src={e.image} />
                            <a href={e.git}>
                                <button>GitHub</button>
                            </a>
                            <a href={e.live}>
                                <button>Live Website</button>
                            </a>
                        </div>
                    )
                })}
            </div>
        )
    }

    return  projects ? loaded() : <h1>loaded....</h1>
}