import { getJwt } from '../ApiServices/JwtService';

export const get = async (url: string, headers?: HeadersInit) => {
  try {
    const res = await fetch(url, {
      method: 'GET',
      headers: { 
        Authorization: `Bearer ${getJwt()}`,
        Platform: 'mobile',
        ...headers 
      },
    });

    return res.json();
  } catch (err) {

  }
}

export const post = async (url: string, body: any, headers?: HeadersInit): Promise<any> => {
  try {
    console.log(`Bearer ${getJwt()}`)
    const res = await fetch(url, {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        Authorization: `Bearer ${getJwt()}`,
        ...headers 
      },
      // credentials: 'include',
      body: JSON.stringify(body)
    });

    return res.json();
  } catch (err) {
    
  }
}

export const put = async (url: string, headers?: HeadersInit) => {
  try {
    const res = await fetch(url, {
      method: 'GET',
      headers: { ...headers }
    });

    return res.json();
  } catch (err) {
    
  }
}

export const remove = async (url: string, headers?: HeadersInit) => {
  try {
    const res = await fetch(url, {
      method: 'GET',
      headers: { ...headers }
    });

    return res.json();
  } catch (err) {
    
  }
}