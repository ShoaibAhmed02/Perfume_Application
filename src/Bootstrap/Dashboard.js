import React from "react";

function Dashboard() {
  const spanStyle = {
   
    width: "17%",
    paddingLeft: "5px",
    marginLeft: "20px",
    height: "80px",
    fontFamily: "sans-serif", // Apply the sans-serif font family
  };
  return (
    <>
      <div
        className="container"
        style={{
          backgroundColor: "darkgray",
          color: "red",
          height: "80px",
          marginTop: "20px",
    
        }}
      >
        <div className="row" style={{ marginTop: "20px" }}>
          <div className="col-lg-12" style={{ marginTop: "10px" }}>
            <span style={spanStyle}>My Open Perfume List </span>
            <span style={spanStyle}>Attar </span>
            <span style={spanStyle}>Gulab</span>
            <span style={spanStyle}>Shabab</span>
            <span style={spanStyle}>Jaam</span>
            <span style={spanStyle}>Dubai Attar</span>
            <span style={spanStyle}>Jaam</span>
            <span style={spanStyle}>Dubai Attar</span>
            <span style={spanStyle}>Jaam</span>
          </div>
        </div>
      </div>

      <div
        className="container"
        style={{
          backgroundColor: "darkgray",
          color: "red",
          height: "80px",
          marginTop: "20px",
        }}
      >
        <div
          className="row"
          style={{
            width: "600px",
            marginTop: "20px",
            height:"80px",
            width:"600px"
          }}
        >
          <div className="col-lg-12" style={{ marginTop: "20px" }}>
            <span style={spanStyle}>Attar </span>
            <span style={spanStyle}>Gulab</span>
            <span style={spanStyle}>Shabab</span>
          </div>
        </div>
        <div
          className="row"
          style={{
            width: "700px",
            marginTop: "20px",
            height:'600px',marginTop:"20px"
          }}
        >
          <div className="col-lg-12"style={{ marginTop: "20px", }}>
            hi
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
