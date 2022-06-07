//al poner o al tener la palbara use en el nombre del archivo le indicamos que es un hook
//todos lo hooks empiezan con use
//los hooks son funciones,funcionan como si fueran funcionals components pueden tener efectos,usar reducer,cotextos tec.

//

import {useState,useEffect} from 'react'
import {getGifs} from '../helpers/getGifs'

//lo que hace es un estado que si lo llamamos nos retorna el objeto
//se encarga de realiazar la peticion automatica cuando  se cargue el componente por primera vez
export const useFetchGifs = (category) =>{
//cuando se utilice el useFetchGifs se tiene un estado que va estar cargando por defecto
    const [state, setState] = useState({ //el estado inicial va a ser un objeto,un arreglo vacio 
        data:[],
        loading:true     //este es el esatdo
    })

    useEffect( () =>{
        //aqui adentro vamos a ejecutar el cuerpo de mi peticion http
        //para traer las imagenes
        //cuando se carga el componente por primera ves ance la peticion  para obtener los gifs y los colca en ela imagenes
        //Esta instruccion nos permite que cuando se crga la imagen ,realiza la peticion fetch y asu ves indicarme  cuando estoy cargando  y cuando termino la carga
        getGifs(category)//esta es la funcion para haccer la peticion    
        .then( imag => {//es como una promesa pero no ponemos el async solo el then
            //traemos las imgenes
                //console.log(imag)
                setState({ //llamaos el setState de arriba
                    data:imag,//la data serian las imagenes
                    loading:false //seria en false porque ya termina de cargar
                })     
        })
     },[category])//LE mandamos un arreglo para que no se dipare la peticion fetch cuando le demos enter digamos que se ejecuta una vez 
     
return state //recordemos que el state es la data que es un arreglo en true {data:[],loading:true}

}