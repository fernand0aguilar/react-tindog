const API_URL = 'https://barkwire-api.now.sh/dogs';

export async function getDogs(){
    const response = await fetch(API_URL);
    return response.json();
}