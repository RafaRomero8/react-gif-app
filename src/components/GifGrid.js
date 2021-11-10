//este sera una coleccion de todos los lementos que coinciden con al categoria
import React  from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
//import { getGifs } from '../helpers/getGifs'
import { GifGriditem } from './GifGriditem'
//en esta funcion (GifGrid) necesitamos recibir la categoria y hace runa peticion http
export const GifGrid = ({category}) => {
 //const [count, setCount] = useState(0) solo era un ejemplo para ver los del useEfect con el boton

const {data:images,loading} = useFetchGifs(category);
//para renombrar es con dos puntos : y el nombre que le queremos dar (data:images)


    return (
        <>
        <h3 className="animate__animated animate__fadeIn">{category}</h3>
        
        {/* aplicamos un ternario 
        {loading ? 'Cargando...' : 'Data cargada'}
         {loading && <p>loading</p>} forma corta de ternario
                 */}

      {loading && <p className="animate__animated animate__flash">Loading</p>}
        
        <div className="card-grid">
                {
                    images.map( img =>(//barremos para  que nos muestre  los id dell img y podemos retornar un objeto
                        <GifGriditem 
                          key={img.id}
                          { ...img }//utilizamos el operador spreg,mandamso cada una de las propiedades de las imagenes como una propiedad independiente obtenemos el id,title y el url
                         
                        />
                    ))
                }
         
             </div>
        
            {/*<button onClick={ () => setCount(count+1)}></button> incrementador damos clik y se dispara la peticion http*/}
       
        </>
    )
}
