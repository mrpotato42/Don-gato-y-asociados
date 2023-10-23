import React, { useState } from 'react'
import logo from '../../assets/img/favicon.png';
import './Register.css';

export const Register = () => {
  //almacenamiento de datos para el post para usuarios
  const [userName,setUserName]= useState("")
  const [nombre,setNombre]= useState("")
  const [apellido,setApellido]= useState("")
  const [telefono,setTelefono]=useState("")
  const [correo,setCorreo]=useState("")
  const [password,setPassword]= useState("")
  const [cPassword,setcPassword]= useState("")
  
const handleCorreoExist=async()=>{


}

// cuando se da click al boton registrar y se cumplen la condiciones para que se active 
/**
 * funcion  se encarga de ejecutarce cuando se hace submit en el form y primero busca si el correo 
 * que se digito existe en la base de datos y si no le permite ejecutar un paticion post que 
 * sube los datos a la base de datos
 */

  const handleSubmit= async(event)=>{
    event.preventDefault();
    const respoGet= await fetch(`http://localhost:3000/existCorreo/${correo}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((data) => data)
  
    if(respoGet.length>0){
      console.log("Este correo ya existe")
    }else{
      console.log("no existe este usuario")
      fetch("http://localhost:3000/newuser", {
                            method: "POST",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify({userName, nombre, apellido, telefono, correo, password}),
                          })
                          .then((response2) => response2.json())
                          .then((data2) => console.log(data2));
                          console.log("usuario registrado")
      
    }

  }
  return (
    <div>
      <div className="register">

        <div className="left-content">

          {/*<div className="elipses"> 
            <div className="Ellipse1"></div>
            <div className="Ellipse2"></div>
          </div>*/}

          <div className="container">

            <div className="container-logo-dongato">
              <img className='logo-dongato' src={logo} alt="Logo de Don gato y Asociados" />
            </div>
            <h1>Don gato y Asociados</h1>
            <h2>La plataforma web de compra y venta de productos y servicios de confianza</h2>
            <button className="btn-conocenos">Conócenos</button>

          </div>
        </div>

        <div className="right-content">
          <div className='container'>

            <h2>Regístrate para empezar a disfrutar</h2>
            <form onSubmit={handleSubmit}>
            <input className='user-name' type="text" placeholder="Nombre de usuario"  value={userName} onChange={(e)=>setUserName(e.target.value)}/>
            <input className='user-fullname' type="text" placeholder="Nombre completo" value={nombre} onChange={(e)=>setNombre(e.target.value)} />
            <input className='user-lastname' type="text" placeholder="Apeliidos" value={apellido} onChange={(e)=>setApellido(e.target.value)}/>
            <input className='user-phone' type="text" placeholder="Teléfono" value={telefono} onChange={(e)=>setTelefono(e.target.value)}/>
            <input className='user-email' type="email" placeholder="Correo electrónico" value={correo} onChange={(e)=>setCorreo(e.target.value)}/>
            <input className='user-password' type="password" placeholder="Contraseña" value={password} onChange={(e)=>setPassword(e.target.value)}/>
            <input className='user-repasword' type="password" placeholder="Confirmación de la contraseña" value={cPassword} onChange={(e)=>setcPassword(e.target.value)}/>

            <button type='submit' disabled={password!=cPassword && correo!=""} onClick={(e)=>handleCorreoExist(e)}className='btn-registrarse'>Registrarse</button>
            </form>
          </div>

        </div>
      </div>
    </div >
  )
}

export default Register;