<template>
  <v-app id="app">
    <app-header />
    <v-card style="background-color:#fff font-family:time new roman">
      <v-container style="color: #000">
        <v-row no-gutters>
          <v-col class="col-12 col-md-4 col-sm-12">
            <v-row>
              <v-col class="col-12 col-sm-20 pr-4">
                <h3
                  style="text-decoration:none"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-wpel-link="internal"
                >
                  HỖ TRỢ MUA HÀNG
                </h3>
                <h4 class="font-weight-thin">Tìm kiếm</h4>
                <h4 class="font-weight-thin">Chính sách mua hàng online</h4>
                <h4 class="font-weight-thin">Chính sách đổi trả</h4>
                <h4 class="font-weight-thin">Chính sách bảo hành</h4>
                <h4 class="font-weight-thin">
                  Chính sách thẻ thành viên - thẻ VIP
                </h4>
                <h4 class="font-weight-thin">Điều khoản dịch vụ</h4>
              </v-col>
            </v-row>
          </v-col>
          <v-col class="col-12 col-md-4 col-sm-12">
            <v-row>
              <v-col class="col-12 col-sm-3 pr-4" align="right">
                <v-icon class="display-2" style="color: #fcba03"></v-icon>
              </v-col>
              <v-col class="col-12 col-sm-20 pr-4">
                <h3 class="font-weight-light"></h3>
                <p class="font-weight-thin"></p>
              </v-col>
            </v-row>
          </v-col>
          <v-col class="col-12 col-md-4 col-sm-12">
            <v-row>
              <v-col class="col-12 col-sm-20 pr-4">
                <h3
                  style="text-decoration:none"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-wpel-link="internal"
                >
                  THÔNG TIN LIÊN HỆ
                </h3>
                <h4 class="font-weight-thin">CSKH 0968801921</h4>
                <h4 class="font-weight-thin">
                  MUA HÀNG 0905 801 386 – 0168 748 1968
                </h4>
                <h4 class="font-weight-thin">WEBSIBE: lidaco.vn</h4>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
    <v-footer
      :padless="true"
      style="background-color:#B22222 font-family:time new roman"
    >
      <v-card
        flat
        tile
        width="100%"
        class="white--text text-center"
        style="background-color: #a89e32"
      >
        <v-card-text class="white--text pt-5">
          PANTIO-JN ĐƯỢC VINH DANH TOP 10 SẢN PHẨM – DỊCH VỤ TIN DÙNG VIỆT NAM
          2021
        </v-card-text>
        <v-card-text class="white--text pt-0">
          Là 1 hoạt động thường niên nhằm vinh danh những thương hiệu & sản phẩm
          dịch vụ có hoạt động & và đóng góp tích cực cho ngành tiêu dùng tại
          Việt Nam được tổ chức bởi cơ quan báo chí Kinh tế Việt Nam, vượt qua
          hơn 5.000 sản phẩm và dịch vụ đề cử, thương hiệu thời trang cao cấp
          PANTIO-JN vinh dự khi được xướng tên vào TOP 10 TIN DÙNG VIỆT NAM –
          COOL PRODUCT AWARD 2021. Với chủ đề “Vượt bão: Sáng tạo để thích
          nghi”, Tiêu chí đánh giá và bình chọn tập trung vào các sản phẩm –
          dịch vụ sáng tạo, đổi mới để tìm thấy cơ hội trong thách thức, mang
          đến cho khách hàng những trải nghiệm tốt được người tiêu dùng ưa
          chuộng và đánh giá cao. Suốt 2 năm qua tựa như 1 hành trình vượt bão
          để tồn tại, tự “lột xác” để thích nghi, mặc dù gặp rất nhiều khó khăn
          và thách thức trải qua đại dịch, thương hiệu thời trang cao cấp
          PANTIO-JN tự hào khi được ghi nhận và vinh danh vào Top 10 TIN DÙNG
          VIỆT NAM – Nhóm ngành Làm đẹp – Mỹ phẩm – Thời trang do các chuyên gia
          kinh tế và người tiêu dùng trên khắp cả nước đánh giá.
        </v-card-text>
        <v-divider></v-divider>

        <v-card-text class="white--text">
          {{ new Date().getFullYear() }} —
          <strong>PANTIO-JN </strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script>
import AppHeader from "./components/AppHeader.vue";
import Home from "./pages/Home.vue";
export default {
  name: "app",
  components: { Home, AppHeader }
};
</script>

<style></style>
