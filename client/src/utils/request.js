export default async function request(method, url, data, options = {}){
    if(method !== 'GET'){
        options.method = method;
    }

    if(data){
     options = {
        ...options,
        headers: {
            "Content-Type": "application/json",
            ...options.headers
        },
        body: JSON.stringify(data)
    }
}

    const response = await fetch(url, options);

    if(!response.ok){
        throw await response.json();
    }

    if(response.status === 204){
        return;
    }

    const result = await response.json();

    return result;
}