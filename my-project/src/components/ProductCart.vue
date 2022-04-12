<template>
  <div class="col-3 mt-2">
    <div class=" text-center" style="font-family:time new roman">
      <v-hover v-slot:default="{ hover }" open-delay="200">
        <v-card class="hoverItem" :elevation="hover ? 16 : 2" outlined tile>
          <v-img
            class="white--text align-end"
            :src="require('../assets/' + product.image)"
            style="height: 300px;"
          >
          </v-img>
          <div class="card-body">
            <h3 class="card-title ">
              <router-link
                style="text-decoration:none"
                :to="{ name: 'product', params: { id: product.id } }"
                >{{ product.productName }}</router-link
              >
            </h3>
            <strong>{{ product.price | toVND }} VNĐ</strong>
          </div>
          <div class="text-center">
            <v-btn icon fab class="mt-2 mb-2 mr-10 text-center" color="#fcba03" dark @click="addToCart()"
              ><v-icon class="mr-2">mdi-cart</v-icon>
              </v-btn>
              <v-btn icon fab class="mt-2 mb-2 text-center" color="#fcba03" dark @click="addToFavorite()"
              ><v-icon class="mr-2">mdi-heart</v-icon>
              </v-btn>
          </div>
          
        </v-card>
      </v-hover>
    </div>
    <v-divider></v-divider> 
  </div>
</template>

<script>
import axios from "axios";

// axios
//   .get("https://localhost:44350/api/Product/GetAllProduct")
//   .then((res) => {
//    return res.data;
//   })
//   .then((callback) => {

//     var img=callback.map(function (img,index) {
//       console.log(img.watchStrap)
//       return`
//          <img
//             style="height:200px; width:200px"
//             src="../img/${img.watchStrap}"
//             alt=""
//           />
//       `
//     })
//     document.querySelector('.imge').innerHTML=img.join('')
//   })
//   .catch((error) => {
//     console.log(error);
//   });

import Product from "../pages/Product.vue";
export default {
  components: { Product },
  props: ["product"],
  methods: {
    addToCart() {
      this.$store.dispatch("addProductToCart", {
        product: this.product,
        quantity: 1
      });
    },
    addToFavorite(){
      
    }
  },
  filters: {
    toVND(value) {
      return `${value.toLocaleString()}`;
    }
  }
};
</script>

<style>
/* .hoverItem{
  
} */
</style>
