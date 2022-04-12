import axios from "axios";


export const getProducts = ({ commit }) => {
    axios.get('https://localhost:44306/api/Product/GetAllProduct')
    .then(respone =>{
        commit('SET_PRODUCT',respone.data)
    })
}

export const getProduct = ({ commit }, id) => {
    axios.get("https://localhost:44306/api/Product/GetProduct?id=" + id)
    .then(res =>{
        commit('SET_PRODUCTS',res.data);
    })
}
export const getPosts = ({ commit }) => {
    axios.get('https://localhost:44350/api/Post/GetAllPost')
    .then(respone =>{
        commit('SET_POSTS',respone.data)
    })
}


export const removeProductFromCart = ({commit},product) =>{
    commit('REMOVE_PRODUCT_FROM_CART',product);
}

export const addProductToCart = ({commit}, {product, quantity}) => {
    commit('ADD_TO_CART', {product, quantity});
}