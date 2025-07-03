import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { projectsData } from './data'
import { projectsNav } from './data'
import WorksItems from './worksItems'

const Works = () => {
    const [item, setItem] = useState({name : 'all'});
    const [projects, setProjects]= useState([]);
    const [active, setActive] = useState(0);

    useEffect(()=>{
        if(item.name === "all"){
            setProjects(projectsData);
        }
        else{
            const newProjects = projectsData.filter((project)=>{
                return project.category.toLowerCase() === item.name;
            });
            setProjects(newProjects);
        }
    },[item]);

  const handleClick = (e, index) => {
    setItem({name: e.target.textContent.toLowerCase()});
    setActive(index);
  };  

  
  return (
   <div>
    <div className="work__filters">
    {projectsNav.map((item, index)=>{
        return (
            <span onClick={(e)=>{handleClick(e,index);
            }} 
            className={`${active === index ? 'active-work':""} work__item `} 
            key={index}
            >
            {item.name}
            </span>
        )
    })}
   </div>
   <div className="work__container container grid">
    {projects.length > 0 ? (projects.map((item)=>{
        return <WorksItems item={item} key={item.id}  />
    })):(
         <div className="work__no-data-card">
          <h3>No Project Found</h3>
          <p>For this category...</p>
        </div>
    )}
   </div>
   </div>
  )
}

export default Works