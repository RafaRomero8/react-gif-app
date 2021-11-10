export const getGifs = async(category) =>{
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
      //console.log(gifs)
      //setImages(gifs)//el esatdo sera los gifs que estoy recibiendo

      return gifs //en ves de regresar setImages(gifs) poruqe no tenemos esa funcion solo retornamos gifs
  }