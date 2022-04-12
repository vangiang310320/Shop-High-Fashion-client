<template>
  <div style="font family: time new roman">
    <v-list-item link v-for="item in cart" :key="item.product.id" class="mt-1">
      <router-link :to="{ name: 'product', params: { id: item.product.id } }">
        <v-list-item-title>
          <div style="width:500px">
            <v-row align="center" justify="center">
              <v-col class="col-2"
                ><img  
                  :src="require('../assets/'+item.product.image)"
                  style="border-radius:14px"
                  height="80px"
                  alt=""
              /></v-col>
              <v-col
                ><h4 style="color:#000">
                  {{ item.product.productName }}
                </h4></v-col
              >
              <v-col align="right" class="mr-2" style="color:#000"
                >{{ item.quantity }} x
                {{ item.product.price | toVND }}
                VNĐ</v-col
              >
              <v-col align="right" class="mr-2" style="color:#000">
                <v-btn
                  icon
                  fab
                  v-bind="attrs"
                  v-on="on"
                  @click.prevent="removeProductFromCart(item.product)"
                  color="#eb4034"
                  ><v-icon>mdi-delete</v-icon></v-btn
                >
              </v-col>
            </v-row>
            <v-divider></v-divider>
          </div> 
        </v-list-item-title>
      </router-link>
    </v-list-item>
    <div class="row ma-0 pa-0">
      <h4 class="ml-4 mt-5" style="color:#000">
        Tổng tiền cần phải thanh toán: {{ cartTotalPrice | toVND }} VNĐ
      </h4>

     <v-col align="right" class="mr-2"><v-btn fab elevation="0" rounded @click="tocart"><v-icon color="#eb4034" >mdi-check</v-icon></v-btn></v-col>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    cart() {
      return this.$store.state.cart;
    },
    cartTotalPrice() {
      return this.$store.getters.cartTotalPrice;
    }
  },
  filters: {
    toVND(value) {
      return `${value.toLocaleString()}`;
    }
  },
  methods:{
      tocart(){
          this.$router.push("/cart");
      }
  }
};
</script>

<style>
a {
  text-decoration: none;
}
</style>
