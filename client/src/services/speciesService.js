import { request } from "../lib/request";

const baseUrl = 'http://localhost:3030/jsonstore/catalog'

export const getAll = async () => {
    const result = await request('GET', baseUrl);
    return result;
}

export const getLatest = async () => {
    const query = new URLSearchParams({
        // sortBy: `_createdOn desc`,        
        offset: 0,
        pageSize: 2,
    })

    const result = await request('GET', `${baseUrl}?${query}`);

    // const query = encodeURIComponent(`offset=0&pageSize=2`);
    // const result = await request('GET', `${baseUrl}?sortBy=_createdOn%20desc&${query}`);

    return result;
}

export const getOne = async (id) => {
    const result = await request('GET', `${baseUrl}/${id}`);
    return result;
}

export const create = async (speciesData) => {

    const result = await request('POST', baseUrl, speciesData);

    return result
}

export const edit = async (id, gameData) => {
    const result = await request('PUT', `${baseUrl}/${id}`, gameData);

    return result
}

export const remove = async (id) => request('DELETE', `${baseUrl}/${id}`);