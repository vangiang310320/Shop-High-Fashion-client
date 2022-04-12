import Home from "./pages/Home.vue";
import Product from "./pages/Product.vue";
import MiniCart from "./components/MiniCart.vue";
import Cart from "./components/Cart.vue";
import success from "./components/success.vue";


export default [
    {
        path: '/cart',
        component: Cart,
        name: 'cart'
    },
    {
        path: '/',
        component: Home,
        name: 'home'
    },
    {
        path: '/product/:id',
        component: Product,
        name: 'product',
        props: true
    }
    ,
    {
        path: '/cart',
        component: MiniCart,
        name: 'minicart',
    }
    ,
    {
        path: '/success',
        component: success,
        name: 'success',
    }
    
]