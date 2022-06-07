import React,{useState} from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

export const GifExpertApp = () => {//esta es nuestra funcion PADRE 

   // const categories = ['One Punch','Dragon Ball','Inuyasha']
 
   //la instruccion para ñadir un elemento o fuera de otro archivo es mediante setCategories
   const [categories, setCategories] = useState(['one punch'])//useState para poder renderizar  o que haya algun cambio
/*
   const handleAdd = () =>{
    //categories.push('El perro cobarde') no se utiliza el push para  insertar otro eleemnto
    //se utiliza el setCategories 
    //setCategories('El perro cobarde') asi NO sse agregan los elementos ya que se crea un nuevo estado un string('El perro cobarde')
    //setCategories([...categories,'El perro cobarde'])//asi podemos agregar un nuevo elemento al arreglo
    //hay varias formas de hacerlo en este caso utilizando el operador spred(...)la cual extraemos las categorias
    // y añadimos uno nuevo
    //si queremos que se añada primero  setCategories(['El perro cobarde',...categories])
    //LA OTRA SOLUCION PARA AGREGAR UN ELEMENTO utilizamos un callbak
    setCategories(cats => [ 'El perro cobarde',...cats])

    //NOTA si incertamos dos veces al dar clik lanzara el error
    //por que se estan duplicando los elemntos('El perro cobarde')
   }
*/

    return (
        <>
         <h2>Gif Expert App</h2>
         <AddCategory setCategories = {setCategories}/>{/*importamos el AddCategory para poder mostar las cajas de texto */}
         <hr/>
             {/*no se puede colocar una estructura ciclcica como el  for,se necesita una expresion que regrese algo
             .Podemos utilizar metodos como el map digamos para barer el arreglo 
             El map es como un pequeño ciclo*/}

            {/*<button onClick={handleAdd} >Agregar</button> */} 
           
            <ol>
                {  //el map recibe la categoria y un indice asi (category,i) pero solo necesitamos la categoria
                    categories.map(category => (
                       //  <li key={category}> {category}</li>) 
                                           //en el key ponemos el id unico del elemento(category) 
                      <GifGrid 
                      key={category}//se necesita el key sino llanzara un errrpr
                      //al poner un nombre en el buscador se le va asignando su key o id
                      category={category}
                      />                                           
                    ) ) //lo ponemos en parentesis para decirle que  regresa un obeto                                         
                    
                }
            </ol>
        </>
    )
}

 
