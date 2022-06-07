import React from 'react'

//se crea un nuevo componente para mostrar la imagen ,el titulo etc.
//
export const GifGriditem = ({id,title,url}) => {//recibimos una imagen(img) o un gif(un props)
 // es como si pusieramos en ves de props {id,title,url}
   // console.log(id,title,url)
    
    return (
        <div className="card animate__animated animate__fadeIn">{/*se le pone className en react(ya que class es una palabra reservada en JS) es del css o archivo index.css*/}
           
           <img src={url} alt={title}/>
           <p>{title}</p>

        </div>
    )
}
