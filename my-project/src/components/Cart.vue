<template>
  <div style="margin: 0 230px font-family:time new roman">
    <v-container grid-list-xs>
      <div>
        <p style="">
          Đơn hàng
        </p>
      </div>
      <v-row class="px-5 mx-0 mb-0 mt-5">
        <v-col class="col-1 ml-3 mr-8"><h4>Ảnh</h4></v-col>
        <v-col class="col-4 mr-8"><h4>Tên sản phẩm</h4></v-col>
        <v-col><h4>Đơn giá</h4></v-col>
        <v-col class="col-1 ml-1" style="text-align:center"
          ><h4>Số lượng</h4></v-col
        >
        <v-col style="text-align:center"><h4>Thành tiền</h4></v-col>
        <v-col align="right"><h4>Thao tác</h4></v-col>
      </v-row>
      <v-divider></v-divider>
      <div link v-for="item in cart" :key="item.product.id" class="mt-2">
        <v-row align="center" justify="center">
          <router-link
            :to="{ name: 'product', params: { id: item.product.id } }"
          >
            <v-col class="col-1 mr-10"
              ><img
                class="idimgg"
                :src="require('../assets/' + item.product.image)"
                width="120px"
                alt=""/></v-col
          ></router-link>

          <v-col class="col-4"
            ><h4 style="color:#333333">
              {{ item.product.productName }}
            </h4></v-col
          >
          <v-col>{{ item.product.price | toVND }} </v-col>
          <v-col class="col-sm" style="text-align:center">
            <v-btn
              elevation="0"
              x-small
              color=""
              class="mr-2"
              fab
              @click="item.quantity--"
              ><v-icon>mdi-minus</v-icon></v-btn
            >
            {{ item.quantity }}
            <v-btn
              @click="item.quantity++"
              elevation="0"
              x-small
              color=""
              class="ml-2"
              fab
              ><v-icon>mdi-plus</v-icon></v-btn
            >
          </v-col>
          <v-col style="color:#000;text-align:center">
            {{ (item.quantity * item.product.price) | toVND }}
            VNĐ</v-col
          >
          <v-col align="right" class="mr-8"
            ><v-btn
              elevation="0"
              color="white"
              style="color:red"
              @click.prevent="removeProductFromCart(item.product)"
              ><v-icon>mdi-delete</v-icon></v-btn
            ></v-col
          >
        </v-row>
        <v-divider></v-divider>
      </div>

      <div class="">
        <v-divider class="mt-2"></v-divider>
        <div style=" text-align:center" class="row mt-1 ">
          <v-col class="col-6 row pt-4">
            <v-col class="mt-1"
              ><p style="font-size:20px">
                Tổng tiền:
                <strong style="color:#000; font-size:24px"
                  >{{ cartTotalPrice | toVND }} VNĐ</strong
                >
              </p></v-col
            >
          </v-col>
          <v-col align="right">
            <v-btn @click="success" color="#fcba03" dark large elevation="0"
              >Mua hàng</v-btn
            ></v-col
          >
        </div>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Cart",
  data() {
    return {
      snackbar: false,
      snackbarText: ""
    };
  },
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
  methods: {
    removeProductFromCart(product) {
      this.$store.dispatch("removeProductFromCart", product);
      this.snackbar = true;
    },

    success() {
      this.$router.push("/success");
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
#nhanfree {
  margin-top: 10px;
  width: 100%;
  background: #1dc2e2;
  border-radius: 6px;
  padding: 6px 12px;
}
#txtfree {
  color: white;
  font-size: 16px;
  margin-top: 2px !important;
}
.totalfixed {
  margin: 20px 0 0 0;
  border-radius: 14px;
  background: #f5f5f7;
  width: 1315px;
}
#tongtt {
  color: #000;
}
.idimgg {
  border-radius: 14px;
  transition: 0.5s ease;
}
.idimgg:hover {
  filter: brightness(90%);
}
</style>
