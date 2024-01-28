import React from 'react';
import './styles/ProjectThumbnail.css'

function ProjectThumbnail() {
  return (
    <div className="project-thumbnail">
      <img src="https://via.placeholder.com/150" alt="Proyecto Ejemplo" />
      <h3>Nombre del Proyecto</h3>
      <p>Por: Nombre del Diseñador</p>
      {/* Agrega más información según sea necesario */}
    </div>
  );
}

export default ProjectThumbnail;
