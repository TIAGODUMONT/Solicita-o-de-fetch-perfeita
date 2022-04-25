import React, {useState} from 'react'

function Fetch() {
    const [data, setData]= useState(null) ;
    const [error,setError] = useState(null) ;
    const [loading,setLoading] = useState(null) ;


     const request = React.useCallback (async   (url,options) => {

        let response;
        let json;
         try {
        setError(null)
        setLoading(true)
        response = await fetch(url,options)
        json = await response.json()
         
        
     }  catch (erro) {
         json= null
         setError('Erro ao Buscar a api , verifique o caminho certo...')
     } finally {
        setData(json)
        setLoading(false)

        return {response,json}

     }

     },[])

    return {data, error, loading, request}
  
    return (
    <div>Fetch</div>
  )
}

export default Fetch