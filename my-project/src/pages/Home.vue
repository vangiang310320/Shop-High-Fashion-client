<template>
  <div class="mt-7">
    <v-carousel hide-delimiters>
      <v-carousel-item :src="require('../img/bannerz/bannerz1.jpg')">
        <v-row class="fill-height" align="center" justify="center">
          <div class="display-2 white--text pl-5 pr-5 hidden-sm-only"></div>
          <br />
        </v-row>
      </v-carousel-item>
      <v-carousel-item :src="require('../img/bannerz/bannerz2.jpg')">
        <v-row class="fill-height" align="center" justify="center">
          <div class="display-2 white--text pl-5 pr-5 hidden-sm-only"></div>
          <br />
        </v-row>
      </v-carousel-item>
      <v-carousel-item :src="require('../img/bannerz/bannerz3.jpg')">
        <v-row class="fill-height" align="center" justify="center">
          <div class="display-2 white--text pl-5 pr-5 hidden-sm-only"></div>
          <br />
        </v-row>
      </v-carousel-item>
      <v-carousel-item :src="require('../img/bannerz/bannerz4.jpg')">
        <v-row class="fill-height" align="center" justify="center">
          <div class="display-2 white--text pl-5 pr-5 hidden-sm-only"></div>
          <br />
        </v-row>
      </v-carousel-item>
    </v-carousel>

    <product-list />
  </div>
</template>

<script>
import ProductList from "../components/ProductList";
export default {
  components: {
    ProductList
  }
};
</script>

<style></style>
