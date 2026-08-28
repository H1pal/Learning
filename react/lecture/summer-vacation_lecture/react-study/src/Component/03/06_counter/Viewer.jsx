function Viewer({count, onClicked, children}) {
  return(
    <div onClick={onClicked} style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    }}>
      {children}
    </div>
  );
}

export default Viewer;