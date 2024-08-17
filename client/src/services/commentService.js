import { request } from "../lib/request";

const baseUrl = 'http://localhost:3030/data/comments';

export const create = async (id, text) => {
    const newComment = await request('POST', baseUrl, {
        id,
        text,
    });

    return newComment;
}

export const getAll = async (id) => {
    const query = new URLSearchParams({
        where: `id="${id}"`,
        load: `owner=_ownerId:users`
    });

    const result = await request('GET', `${baseUrl}?${query}`);
    return result;
}
