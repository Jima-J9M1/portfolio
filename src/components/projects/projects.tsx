'use client'
import { useState } from "react"
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from "../../../public/data/projects/projects";
import { ProjectProps } from "../../../types";


const ProjectShowCase = ()=>{
const [selectedId, setSelectedId] = useState("")
const [selectProject, setSelectedPorject] = useState<ProjectProps | null>(null)
const handleClick = (project:ProjectProps)=>{
    setSelectedId(String(project.id))
    setSelectedPorject(project)

}

return(
    <>
    {projects.map((project:any) => (
      <motion.div layoutId={project.id} onClick={()=>handleClick(project)} key={project.id}>
        <motion.h5>{project.subtitle}</motion.h5>
        <motion.h2>{project.title}</motion.h2>
      </motion.div>
    ))}
    <AnimatePresence>
  {selectedId && (
    <motion.div layoutId={selectedId}>
      <motion.h5>{selectProject && selectProject.title}</motion.h5>
      <motion.h2>{selectProject && selectProject.description}</motion.h2>
      <motion.button onClick={() => setSelectedId("")} />
    </motion.div>
  )}
</AnimatePresence>
</>

)



}

export default ProjectShowCase;