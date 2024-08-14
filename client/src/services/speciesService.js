import { request } from "../lib/request";

const baseUrl = 'http://localhost:3030/data/catalog'

export const getAll = async () => {
    const result = await request('GET', baseUrl);
    return result;
}

export const getOne = async (id) => {
    const result = await request('GET', `${baseUrl}/${id}`);
    return result;
}

export const create = async (speciesData) => {
    const result = await request('POST', baseUrl, speciesData);
    return result;
}

export const edit = async (id, speciesData) => {
    const result = await request('PUT', `${baseUrl}/${id}`, speciesData);
    return result;
}

export const remove = async (id) => request('DELETE', `${baseUrl}/${id}`);