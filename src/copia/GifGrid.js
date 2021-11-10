//este sera una coleccion de todos los lementos que coinciden con al categoria
import React ,{useState,useEffect} from 'react'
import { getGifs } from '../helpers/getGifs'
import { GifGriditem } from './GifGriditem'
//en esta funcion (GifGrid) necesitamos recibir la categoria y hace runa peticion http
export const GifGrid = ({category}) => {
 //const [count, setCount] = useState(0) solo era un ejemplo para ver los del useEfect con el boton

  const  [Images, setImages] = useState([])

 //el useEffect me va a permitir poder ejecutar cierto codigo de manera condicional
    useEffect( () =>{//recibe una funcion que quiero ejecutar
       getGifs(category)//si utilizamos la funcion getGifs() fuera de nuestro componente en otro archivo se le pasa argumento
       .then(imgs => setImages(imgs))//podemos poner solo  setImagens ya que retorna el mismo parametro
        //getGifs()ponemos la funcion o instruccion que queremos cuando el componente es renderisado por primera vez
        //si utilizamos la funcion dentro de nuestro componenete solo ponemos getGifs()

    },[category])//el segundo argumento es un arreglo de dependencias,esto para que no se dispare las peticiones fetch (http)al apretar el boton

    //la funcion getGifs() no deberia de estar en nuestro componenete ya que solo hace la peticion http trae la s imagenes
    //las procesa en ocaciones si las podemo llegar a necesitar 
    //lo que se hace es extraer la funcion para que nuestro componente quede sencillo 
/*
    const getGifs = async() =>{
  //buscar los endpoints pra consumir el API del GIPHY  en la pagina
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=b4BqK3IwDaii8W8ofgf7ZJyybUSBCARy`
    //remplazamos  en el q= por ${encodeURI(category)} le pasamos la category y la funcion encodeURI que sirev por si tiene espacios lo repmplaza
    //ponerle + en los espacios de la url
    const resp = await fetch(url) 
    const {data} = await resp.json() //recibimos la respuesta en formato json

    const gifs = data.map(img => {//barremos las imagenes
        return {//solo extraemos la informacion o los datos que queremos
            //y retornamos el objeto
            id:img.id,
            title:img.title,
            url:img.images?.downsized_medium.url//ponemos ?(es una condicion) para preguntar que si tiene las imagenes la utilice 
        }
    })
    console.log(gifs)
    setImages(gifs)//el esatdo sera los gifs que estoy recibiendo
}
//getGifs() //llamamos la funcion
*/
    return (
        <>
        <h3>{category}</h3>
        <div className="card-grid">
           
            <ol>
                {
                    Images.map( imag =>(//barremos para  que nos muestre  los id dell img y podemos retornar un objeto

                        //<li key={imag.id}>{ imag.title }</li> y retornamos lo que queremos mostar
                        //podemos hacer una desestrucuturacion ya no ponemso imag
                        //Images.map(({id,title}) => {
                        //  <li key={id}>{ title }</li>   })
                        <GifGriditem 
                        key={imag.id}
                        { ...imag }//utilizamos el operador spreg,mandamso cada una de las propiedades de las imagenes como una propiedad independiente obtenemos el id,title y el url
                         
                        />
                    ))
                }
            </ol>
            {/*<button onClick={ () => setCount(count+1)}></button> incrementador damos clik y se dispara la peticion http*/}
        </div>
        </>
    )
}
