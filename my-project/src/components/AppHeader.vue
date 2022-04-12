<template>
  <div style="z-index:10">
    <v-app class="inspite">
      <v-app-bar class="elevation-0" app color="#fff">
        <v-toolbar-title style="width: 350px;font-size: 35px;">
          <a
            @click="runNow"
            class="ml-5 "
            style="text-decoration:none; color:#000 !important ;font-size:30px mr-3 "
            ><v-icon class="mr-5  " style="color:#fcba03;font-size:35px"
              >mdi-flower</v-icon
            >PANTIO-JN</a
          >
        </v-toolbar-title>
        <v-text-field
          label="Search"
          prepend-inner-icon="mdi-magnify"
          solo-inverted
          flat
          hide-details
          class="col-lg-7"
        ></v-text-field>
        <v-spacer></v-spacer>
        <v-btn icon>
          <v-icon color="#fcba03">mdi-account-circle</v-icon>
        </v-btn>
        <v-btn icon>
          <v-menu offset-y>
            <template v-slot:activator="{ attrs, on }">
              <v-btn @click="cart" icon v-bind="attrs" v-on="on">
                <v-badge color="#fcba03" :content="cartItemCount" overlap>
                  <v-icon color="#fcba03">mdi-cart</v-icon>
                </v-badge>
              </v-btn>
            </template>
            <v-list> </v-list>
          </v-menu>
        </v-btn>

        <div class="col-lg-1">
          <div class="header__cart"></div>
        </div>
      </v-app-bar>
      <v-content class="elevation-0">
        <v-bottom-navigation class="elevation-0">
          <v-btn @click="runNow">TRANG CHỦ</v-btn>
          <v-btn>CỬA HÀNG</v-btn>
          <v-btn>BỘ SƯU TẬP</v-btn>
          <v-btn @click="post">TIN TỨC</v-btn>
          <v-btn>CLEARANCE SALE</v-btn>
        </v-bottom-navigation>
      </v-content>
      <v-divider></v-divider>
      <router-view />
    </v-app>
  </div>
</template>

<script>
export default {
  components: {},
  computed: {
    cartItemCount() {
      return this.$store.getters.cartItemCount;
    }
  },
  methods: {
    runNow() {
      this.$router.push("/");
    },

    post() {
      this.$router.push("/postlist");
    },
    fav() {
      this.$router.push("/favorite");
    },
    cart() {
      this.$router.push("/cart");
    }
  }
};
</script>

<style></style>
