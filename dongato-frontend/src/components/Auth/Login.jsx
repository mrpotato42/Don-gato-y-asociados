import React, { useState } from 'react'
import {Navigate, Link} from 'react-router-dom'
import logo from '../../assets/img/favicon.png';
import './Login.css';

export const Login = () => {
  //almacenamiento de datos para el Get que pregunta si existe el usuario
  const [userName,setUserName]= useState("")
  const [password,setPassword]= useState("")
  const [trueL,setTrueL]= useState(false)

  const handleloginGet = async(event)=>{

 // cuando se da click al boton Ingresar y se cumplen la condiciones para que se active 
/**
 * funcion  se encarga de ejecutarce cuando se hace submit en el form y primero busca si el username 
 * que se digito existe en la base de datos y si no le permite ingresar hasta que coincidan los datos
 * ingresados con los que hay en la base de datos
 */   
    const respoGet= await fetch(`http://localhost:3200/loginUser/${userName}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((data) => data)
  
    if(respoGet.length>0){

      if(respoGet[0].contraseña!=password){
        console.log("contraseña incorrecta")
      }else{
        console.log("login correcto")
        setTrueL(true)
        console.log(respoGet)
      }
    }else{
      console.log(respoGet)
      console.log("No existe este usuario")
    }
  }
  if(trueL){
    return <Navigate to={"/cart"}/>
  }
  return (
    <div>
      <div className="login">

        <div className="left-content">

          {/*<div className="Group2"> 
            <div className="Ellipse1"></div>
            <div className="Ellipse2"></div>
          </div>*/}

          <div className="container-top">

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

            <h2>¡Bienvenido de nuevo!</h2>
            <p>Iniciar sesión</p>

            <input className='user-name' type="text" placeholder="Nombre de usuario" onChange={(e)=>setUserName(e.target.value)}/>
            <input className='user-name' type="text" placeholder="Contraseña" onChange={(e)=>setPassword(e.target.value)}/>
            <button className='btn-ingresar' disabled={password=="" || userName==""} onClick={(e)=>handleloginGet(e)} >Ingresa</button>

            <a className="olvide-contraseña" href='#'>Olvidé mi contraseña</a>

            <div className="foot">
              <p>¿Aún no tienes cuenta?</p>
              <Link to={`/register`}> 
                    <button className="registrate-aqui">Regístrate aquí</button>
              </Link>
            </div>

          </div>

        </div>
      </div>
    </div>
  )
}

export default Login;