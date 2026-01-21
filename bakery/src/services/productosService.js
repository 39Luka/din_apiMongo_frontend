import axios from "axios"

export function getAllProducts() {
    return axios.get(`${import.meta.env.VITE_API_URL}/productos`)
}

export function getOneProduct(id){
    return axios.get(`${import.meta.env.VITE_API_URL}/productos/${id}`)
}

export function postOneProduct(data) {
    return axios.post(`${import.meta.env.VITE_API_URL}/productos`, data, {
        headers: {
            "Content-Type": "application/json"
        }
    });
}


export function deleteOneProduct(id){
        return axios.delete(`${import.meta.env.VITE_API_URL}/productos/${id}`)

}