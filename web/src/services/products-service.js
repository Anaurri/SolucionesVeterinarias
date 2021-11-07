import http from './base-api-service';

//const list = () => http.get('/products')

const list = () => http.get('/products')


const detail = (id) => http.get(`/products/${id}`)

const service = {
    list,
    detail
}

export default service;


