<template>
  <div
    style="font-weight: 400; font-family: 'times new roman', times, serif; font-size: 15pt;"
  >
    <v-container class="mt-16">
      <div class="row">
        <div class="row mt-5 ml-5" v-if="product">
          <div class="col-md-5 col-sm-5 col-xs-12 mt-10">
            <v-img :src="require('../assets/' + product.image)"></v-img>
          </div>
          <div class="col-6 pa-0">
            <div>
              <div class="pl-6">
                <h2>Thông tin về sản phẩm</h2>
                <p class="display-1 mb-2">{{ product.productName }}</p>
                <v-card-actions class="pa-0">
                  <p class="headline font-weight-light pt-3">
                    Giá tiền: {{ product.price }} VNĐ
                  </p>
                  <v-spacer></v-spacer>
                </v-card-actions>
                <p>Mã số sản phẩm: {{ product.id }}</p>
                <p class="subtitle-1 font-weight-thin">
                  <strong>Chọn màu sản phẩm: </strong>
                  <strong
                    class="primary white--text mt-10"
                    outlined
                    tile
                    dense
                    height="50px"
                    width:100px
                    >Xanh</strong
                  >
                  <strong
                    class="primary white--text mt-10"
                    outlined
                    tile
                    dense
                    height="50px"
                    width:100px
                    >Vàng</strong
                  >
                  <strong
                    class="primary white--text mt-10"
                    outlined
                    tile
                    dense
                    height="50px"
                    width:100px
                    >Đỏ</strong
                  >
                </p>
                <p class="subtitle-1 font-weight-thin">
                  <strong>Tình trạng: Còn hàng</strong>
                </p>
                <p class="title"><strong>ITEMS</strong></p>

                <v-text-field
                  outlined
                  style="width:100px"
                  :value="1"
                  dense
                ></v-text-field>
                <v-btn class="primary white--text mt-10" outlined tile dense
                  ><v-icon>mdi-cart</v-icon> Thêm vào giỏ hàng</v-btn
                >
              </div>
            </div>
          </div>
          <div class="row mb-8">
            <div class="col-sm-12 col-xs-12 col-md-12">
              <v-tabs>
                <v-tab>Mô tả</v-tab>
                <v-tab>Chế độ bảo hành </v-tab>
                <v-tab>Dánh giá</v-tab>
                <v-tab-item>
                  <div class="vc_column-inner">
                    <div class="wpb_wrapper">
                      <div class="wpb_text_column wpb_content_element ">
                        <div class="wpb_wrapper">
                          <div
                            class="thong-tin-san-pham mt-5"
                            style="font-size:15px"
                          >
                            <p>
                              <strong>Thương Hiệu:</strong>
                              <a
                                style="text-decoration:none"
                                target="_blank"
                                rel="noopener noreferrer"
                                data-wpel-link="internal"
                                >PINTIO-JN</a
                              >
                            </p>
                            <p>
                              <strong>Số Hiệu Sản Phẩm:</strong>
                              <a
                                style="text-decoration:none"
                                target="_blank"
                                rel="noopener noreferrer"
                                data-wpel-link="internal"
                              >
                                {{ product.id }}</a
                              >
                            </p>
                            <strong>Xuất Xứ:</strong>
                            <a
                              style="text-decoration:none"
                              target="_blank"
                              rel="noopener noreferrer"
                              data-wpel-link="internal"
                            >
                              Việt Nam
                            </a>
                            <br>
                            <br>
                            <strong>Giới Tính:</strong>
                            <a
                              style="text-decoration:none"
                              target="_blank"
                              rel="noopener noreferrer"
                              data-wpel-link="internal"
                            >
                              Nữ </a
                            ><br />

                            <br><strong>Bảo Hành Quốc Tế</strong>
                            <a
                              style="text-decoration:none"
                              target="_blank"
                              rel="noopener noreferrer"
                              data-wpel-link="internal"
                            >
                              Bảo hành 1 tháng từ khi xuất hàng </a
                            ><br />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </v-tab-item>
                <v-tab-item>
                  <div
                    id="content_tab_9"
                    class="tab-content"
                    style="display: block;"
                  >
                    <p
                      style="font-family: verdana, geneva, sans-serif; font-size: 13pt;"
                    >
                      <strong>Chính sách bảo hành</strong>
                    </p>
                    <p
                      style="font-family: verdana, geneva, sans-serif; font-size: 10pt;"
                    >
                      <strong>I/ Đối tượng áp dụng.</strong>
                    </p>
                    <ul style="list-style-type: square;">
                      <li>
                        <span
                          style="font-family: verdana, geneva, sans-serif; font-size: 10pt;"
                          >Các khách hàng mua hàng online hoặc mua hàng tại cửa
                          hàng tại các showroom Pantio trên toàn quốc</span
                        >
                      </li>
                    </ul>
                    <p
                      style="font-family: verdana, geneva, sans-serif; font-size: 10pt;"
                    >
                      <strong
                        >II/ Điều kiện ĐƯỢC bảo hành, bảo trì miễn phí.</strong
                      >
                    </p>
                    <ul style="list-style-type: square;">
                      <li>
                        <span
                          style="font-family: verdana, geneva, sans-serif; font-size: 10pt;"
                          >Tất cả các sản phẩm mua tại Pantio có giá trị chiết
                          khấu dưới 70%</span
                        >
                      </li>
                    </ul>
                    <ul style="list-style-type: square;">
                      <li>
                        <span
                          style="font-family: verdana, geneva, sans-serif; font-size: 10pt;"
                          >Các sản phẩm muốn thêm chi tiết (có tính phí).</span
                        >
                      </li>
                    </ul>
                    <p
                      style="font-family: verdana, geneva, sans-serif; font-size: 10pt;"
                    >
                      <strong
                        >III/ Điều kiện KHÔNG ĐƯỢC bảo hành, bảo trì miễn
                        phí.</strong
                      >
                    </p>
                    <ul style="list-style-type: square;">
                      <li>
                        <span
                          style="font-family: verdana, geneva, sans-serif; font-size: 10pt;"
                          >Lỗi do thời gian, quá trình sử dụng nếu sửa được sẽ
                          tính phí.</span
                        >
                      </li>
                    </ul>
                    <ul style="list-style-type: square;">
                      <li>
                        <span
                          style="font-family: verdana, geneva, sans-serif; font-size: 10pt;"
                          >Sử dụng sản phẩm không đúng theo hướng dẫn.</span
                        >
                      </li>
                    </ul>
                    <span
                      style="font-family: verdana, geneva, sans-serif; font-size: 10pt;"
                      ><strong>Ví Dụ:</strong>
                    </span>
                    <ul style="list-style-type: square;">
                      <li>
                        <span
                          style="font-family: verdana, geneva, sans-serif; font-size: 10pt;"
                          >Ngâm nước quá lâu khiến vải bị phai màu.</span
                        >
                      </li>
                      <li>
                        <span
                          style="font-family: verdana, geneva, sans-serif; font-size: 10pt;"
                          >Giặt chung, bị phai màu từ các sản phẩm khác.</span
                        >
                      </li>
                      <li>
                        <span
                          style="font-family: verdana, geneva, sans-serif; font-size: 10pt;"
                          >Len, dạ lông cừu giặt với nước mà không được giặt khô
                          theo hướng dẫn sử dụng.</span
                        >
                      </li>
                      <li>
                        <span
                          style="font-family: verdana, geneva, sans-serif; font-size: 10pt;"
                          >Tơ tằm, tenxen tự nhiên không được giặt máy, không
                          được phơi nắng nếu không vải sẽ bị bạc màu, gây giòn
                          dễ bục rách.</span
                        >
                      </li>
                      <li>
                        <span
                          style="font-family: verdana, geneva, sans-serif; font-size: 10pt;"
                          >Các sản phẩm bị hỏng trong lúc sử dụng như làm bẩn,
                          bục rách.......</span
                        >
                      </li>
                    </ul>
                    <strong
                      ><span
                        style="font-family: verdana, geneva, sans-serif; font-size: 10pt;"
                        >Lưu ý:</span
                      ></strong
                    >
                    <ul style="list-style-type: square;">
                      <li>
                        <span
                          style="font-family: verdana, geneva, sans-serif; font-size: 10pt;"
                          >Thời gian sửa đồ tùy thuộc vào mức độ phức tạp của
                          sản phẩm.</span
                        >
                      </li>
                      <li>
                        <span
                          style="font-family: verdana, geneva, sans-serif; font-size: 10pt;"
                          >Mọi chi phí vận chuyển phát sinh do khách hàng tự chi
                          trả.</span
                        >
                      </li>
                      <li>
                        <span
                          style="font-family: verdana, geneva, sans-serif; font-size: 10pt;"
                          >Nếu cần hỗ trợ/ phản hồi về sản phẩm hoặc mọi phản
                          hồi khác, quý khách vui lòng liên lạc với nhân viên
                          bán hàng: 096 287 7733 - 096 301 4949 hoặc hotline
                          chăm sóc khách hàng : 1900988903.</span
                        >
                      </li>
                    </ul>
                  </div>
                </v-tab-item>
                <v-tab-item>
                  <v-list three-line="true" avatar="true">
                    <v-list-item-group v-model="item" color="primary">
                      <v-list-item
                        v-for="(item, i) in items"
                        :key="i"
                        inactive="true"
                      >
                        <v-list-item-avatar>
                          <v-img :src="item.avatar"></v-img>
                        </v-list-item-avatar>
                        <v-list-item-content>
                          <v-list-item-title
                            v-html="item.title"
                          ></v-list-item-title
                          ><v-rating
                            v-model="rating"
                            class=""
                            background-color="warning lighten-3"
                            color="warning"
                            dense
                          ></v-rating>
                          <v-list-item-subtitle
                            v-html="item.subtitle"
                          ></v-list-item-subtitle>
                        </v-list-item-content>
                      </v-list-item>
                    </v-list-item-group>
                  </v-list>
                </v-tab-item>
              </v-tabs>
            </div>
          </div>
        </div>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  props: ["id"],
  computed: {
    product() {
      return this.$store.state.product;
    }
  },
  mounted() {
    this.$store.dispatch("getProduct", this.id);
  },
  data: () => ({
    rating: 4.5,
    breadcrums: [
      {
        text: "Home",
        disabled: false,
        href: "breadcrumbs_home"
      },
      {
        text: "Clothing",
        disabled: false,
        href: "breadcrumbs_clothing"
      },
      {
        text: "T-Shirts",
        disabled: true,
        href: "breadcrumbs_shirts"
      }
    ],
    item: 5,
    items: [
      {
        avatar:
          "https://i.pinimg.com/564x/8d/b4/be/8db4beec56f88a7eb7ab0f4509011d70.jpg",
        title: "Alexander Đại Đế",
        subtitle:
          "<span class='text--primary'>Ali Connors</span> &mdash;Vị vua cai trị xứ Macedon," +
          "người đã chinh phục dường như toàn bộ thế giới và lịch sử nhân loại, ghi dấu nên những trang sử rực rỡ nhất của thời đại\n" +
          "\n"
      },
      {
        avatar:
          "https://i.pinimg.com/564x/e8/15/b0/e815b0f30ff202c486d0e9569e8e9717.jpg",
        title:
          'David Copperfield <span class="grey--text text--lighten-1">4</span>',
        subtitle:
          "<span class='text--primary'>to Alex, Scott, Jennifer</span> &mdash; Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"
      },
      {
        avatar:
          "https://i.pinimg.com/564x/c4/5b/31/c45b31b56e1c6d082ff1d3333f585418.jpg",
        title: "Nguyễn Du",
        subtitle:
          "<span class='text--primary'>Sandra Adams</span> &mdash; Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      },
      {
        avatar:
          "https://i.pinimg.com/564x/94/6c/94/946c94e3eae40ae82c00ab1d050d9d11.jpg",
        title: "Napoleon",
        subtitle: ""
      },
      {
        avatar:
          "https://i.pinimg.com/564x/d9/77/45/d97745e4b11dc5c0aae6a6465a9afbf4.jpg",
        title: "Thành Cát Tư Hãn",
        subtitle:
          "<span class='text--primary'>Britta Holt</span> &mdash; Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      }
    ]
  })
};
</script>

<style></style>
