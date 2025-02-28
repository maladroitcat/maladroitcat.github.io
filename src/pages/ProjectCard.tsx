// src/pages/ProjectCard.tsx
import { motion } from 'framer-motion';
import './ProjectCard.css';

interface ProjectCardProps {
  title: string;
  description: string;
}

function ProjectCard({ title, description }: ProjectCardProps) {
  return (
    <motion.div
      className="project-card"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <h2>{title}</h2>
      <p>{description}</p>
    </motion.div>
  );
}

export default ProjectCard;
