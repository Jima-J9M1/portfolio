'use client'
import { useState } from "react"
import { project } from "../../../public/data/projects/projects"
import { motion, AnimatePresence } from 'framer-motion';


const ProjectShowCase = ()=>{
const [selectedId, setSelectedId] = useState(null)
 

return(
    <>
    {project.map((project:any) => (
      <motion.div layoutId={project.id} onClick={() => setSelectedId(project.id)} key={project.id}>
        <motion.h5>{project.subtitle}</motion.h5>
        <motion.h2>{project.title}</motion.h2>
      </motion.div>
    ))}
    <AnimatePresence>
  {selectedId && (
    <motion.div layoutId={selectedId}>
      <motion.h5>{project.title}</motion.h5>
      <motion.h2>{project.description}</motion.h2>
      <motion.button onClick={() => setSelectedId(null)} />
    </motion.div>
  )}
</AnimatePresence>
</>

)



}

export default ProjectShowCase;