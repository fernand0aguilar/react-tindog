const API_URL = 'https://barkwire-api.now.sh/dogs';

export async function getDogs(){
    const response = await fetch(API_URL);
    return response.json();
}

export async function getSingleDog(id){
    const response = await fetch(`${API_URL}/${id}`);
    return response.json();
}