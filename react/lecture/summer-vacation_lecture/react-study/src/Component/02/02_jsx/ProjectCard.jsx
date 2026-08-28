function ProjectCard({ title, role, count, children }) {
  return (
    <div className="projectCard">
      <h2>{title}</h2>
      <ul>
        <li>모집 역할: {role}</li>
        <li>모집 인원: {count}명</li>
      </ul>
      {children}
    </div>
  );
}

export default ProjectCard;