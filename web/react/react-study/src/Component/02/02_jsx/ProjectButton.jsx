function ProjectButton({onClick, children}) {
  <div className="button_container" >
    <button className="btn" onClick={onClick}>
      {children}
    </button>
  </div>
}

export default ProjectButton;