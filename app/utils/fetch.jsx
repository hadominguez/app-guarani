export default function myFetch (route, method, body, content) {
    let myRequest = {};
    if(method == 'GET' || method == 'DELETE'){
        myRequest = {
            cache: "no-store",
            method: method,
            headers: {
                'Content-Type': content === undefined ? 'application/json' : content
            }
        }
    }else{
        myRequest = {
            cache: "no-store",
            method: method,
            body: body === undefined ? {} : body,
            headers: {
                'Content-Type': content === undefined ? 'application/json' : content
            }
        }
    }
    return fetch('http://'+ process.env.API_HOST +':'+ process.env.API_PORT +'/'+ process.env.API_ROUTE + route, myRequest ).then(res => res.json());
}
