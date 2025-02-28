// src/pages/Projects.tsx
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import './Projects.css';

function Projects() {
  return (
    <motion.div
      className="projects-container"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1>My Projects</h1>
      <div className="cards-container">
        <ProjectCard title="Project One" description="This is my first project." />
        <ProjectCard title="Project Two" description="This is my second project." />
        {/* Add more ProjectCards as needed */}
      </div>
    </motion.div>
  );
}

export default Projects;
