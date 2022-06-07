import React,{useState} from 'react'
import PropTypes from 'prop-types'

//esta funcion es para poder escribir añadirun inputo o caja de texto
export const AddCategory = ({setCategories}) => {//hacemos la desestructuracion {setCategories} que estaa en el archivo o funcio padre

    const [inputValue, setInputValue] = useState('')//ejarlo como string vacio 

    const handleInputChange = (e) =>{//para poder cambiar el texto en la caja de texto
        //para que la person escriba algo
        //console.log(e.target.value)
        setInputValue(e.target.value)//el target lo vemos aparece en el navegador
       //el iinputValue se esta actualizando con el ultimo valor que la persona escribio se vuelve a renderizar
    }

    const handleSubmit  = (e)=>{//es para cuando hacemos enter 
        //esta funcion es para que no se recargue toda la pagina
        //digamos solo el fragmento de la caja de texto al hacer enter
        //le pasamos el onSubmit={handleSubmit} al form
        e.preventDefault()//prevenir eL comportamiiento del formulario
        //console.log('submit echo')
        //VALIDACION en el submit
        if(inputValue.trim().length >2)//si es mayor a dos letras
        {
            setCategories(cats => [inputValue,...cats])//con solo pasarle el SetCategories podemos acceder al arreglo del categories(que esta en el GifExpertApp.js) y poder insertarle un elemento
        //colocamos cats => [ 'El perro cobarde',...cats] porque no se tiene acceso  las categorias(el arreglo)
        setInputValue('')//par que no haga un doble posteo a la hora de escribir en la caj de texto  se quita el texto
        }
        
    }


    return (
        <form onSubmit={handleSubmit}>
            {/* <h1> {inputValue}</h1>*/}
          <input 
          type="text"
          value = {inputValue}
          onChange = { handleInputChange } {/*el onChange para que valla cambiando cuando disparemos el enter*/}
          
          />
  {/*si teneos un fragemnto que agrupe todo lo demas en este caso un <form></form> no es necesario poner <></>*/}
        </form>
    )
}

//para hecer mi funcion del proptypes lo cual debe de ser requerida  en 
//<AddCategory setCategories = {setCategories}/> en mi archivo principal
//para que otra gente utilice nuestra funcion o componente con los argumentos que estoy esperando
//se debe de importar import PropTypes from 'prop-types'
AddCategory.propTypes ={
    setCategories:PropTypes.func.isRequired
}