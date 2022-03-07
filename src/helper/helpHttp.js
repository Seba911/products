// 

export const helpHttp = () =>{
    const customFetch = (endpoint, options) =>{
        const defaultHeaders = {
            accept: "applications/json",
        };
              
        const controller = new AbortController();
        options.signal = controller.signal
        // si el usuario en el objeto de opciones trae method, dejarlo, pero , si no llegase a venir el option method, asignar el metodo GET (por default)
        options.method = options.method || 'GET'
        options.headers = options.headers ? {...defaultHeaders, ...options.headers} : defaultHeaders;


        // transformar en cadena el envio de datos del usuario. SI se hace una peticion get, no es necesario mandar un body,
        // pero no se pueden mandar dentro del objeto de opciones de la peticion fetch un body vacio o falso, por ello, al 
        // estar declarado el falso, intencionalmente se hace el delete del mismo y asi que no haya error
        options.body = JSON.stringify(options.body) || false
            if(!options.body) delete options.body;
        
        
        console.log(options)
        setTimeout(() => controller.abort(), 3000);

    

        return fetch(endpoint,options)
        .then((res)=> res.ok ? res.json() : Promise.reject(
            {
                err: true,
                status: res.status || "00",
                statusText: res.statusText || "Ocurrio un error"
            }
          )
        ).catch((err) => err)

    }

    const get = (url, options = {}) => customFetch(url, options);

    const post = (url, options = {}) =>{
        options.method = "POST"
        return customFetch(url, options)
    }

    const put = (url, options = {}) =>{
        options.method = "PUT"
        return customFetch(url, options)
    }

    const del = (url, options = {}) =>{
        options.method = "DELETE"
        return customFetch(url, options)
    }
    
    return{
        get,
        post,
        put,
        del
    }
}