import React from 'react';
import ProjectThumbnail from './ProjectThumbnail';
import './styles/ProjectGrid.css';

function ProjectGrid() {
  return (
    <section className="project-grid">
      <h2>Explora Proyectos</h2>
      {/* Mapear y renderizar miniaturas de proyectos */}
      <ProjectThumbnail />
      <ProjectThumbnail />
      {/* Repetir según la cantidad de proyectos */}
    </section>
  );
}

export default ProjectGrid;
