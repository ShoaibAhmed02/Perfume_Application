import React from 'react';

const Front = () => {
  return (
    <div class="container-fluid" style={{ height:"100%"}}>
      <div
       
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1523293182086-7651a899d37f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
        //   filter: 'blur(8px)',
        //   WebkitFilter: 'blur(8px)',
        filter: 'blur(8px)',
        WebkitFilter: 'blur(8px)',
         height:"100%",
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          
        }}
      ></div>

      <div
        className="bg-text"
        style={{
          backgroundColor: 'rgb(0, 0, 0)',
          backgroundColor: 'rgba(0, 0, 0, 0.4)',
          color: 'white',
          fontWeight: 'bold',
          border: '3px solid #f1f1f1',
          position: 'absolute',
          top: '50%',
          left: '60%',
          transform: 'translate(-50%, -50%)',
          zIndex: 2,
          width: '50%',
          padding: '20px',
          textAlign: 'center'
        }}
      >
        <h2>Al Jiddah Perfume Center</h2>
        <h1 style={{ fontSize: '50px' }}>Quality Guarrantee</h1>
        <p>perfume seller</p>
      </div>
    </div>
  );
};

export default Front;
