<template>
  <div class="full-container">
  <div class="header">
  <div class="full-left">
   <img src='@/assets/logo/logo.png' alt="logo" width="250" height="100%" class="logo-img"> 
   <product-category-form/>
 </div>
 
 <div class="thumbnail-container"><br>
   <div class="product-description-view" v-html="product.content"></div>
 </div> <!-- 썸네일 이미지 -->
 
 <div class="ordering-part"><br>
    <legend class="blind">상품 상세 구매</legend>
        <h3 class="product-name"><input type="text" :value="product.productName" readonly /></h3><br> <!--안나오는건가?-->
        <h3 class="product-writer">판매자: <input type="text" :value="product.writer" readonly /></h3><br>
        <h3 class="product-price">상품가격: <input type="number" :value="product.price" readonly /></h3><br> <!--얘 왜 빨간색?-->
        <h3 class="product-regdate">등록일자: <input type="text" :value="product.regDate" readonly /></h3><br>
    <div class="_2aYX1XhVN_"></div>
    <div class="_1rGSKv6aq_" style="font-size:15px">
    <div class="bd_1rmnr bd_C8Tz1">
    <span class="bd_ChMMo">택배배송</span>
    <span class="bd_ChMMo"><span class="bd_3uare">3,000</span>원
    <span class="bd_2XJf1">(주문시 결제) </span>
    </span>
    <span class="bd_2YSzf">/우체국택배</span>
    </div>
    <p class="bd_1g_zz" style="margin-top: 3px;">30,000원 이상 구매 시 무료</p>
    <div class="_3_kSDK68pw">
      <a href="http://localhost:8080/product-list" target="_blank" class="_2Ugyq5gjSq _23ZcKYMJAs _2W6umRasi3 N=a:pcs.delivery">배송비 절약상품 보기</a>
      </div>
      </div>
      <div class="bd_-kZqg bd_2GgKt"><br>
        <ul class="bd_ypruy">
          <li class="bd_2PDrk">
            <div class="bd_ADEkA">
                  <button type="button" class="bd_EZ05h bd_3ex46 bd_2jhSJ N=a:pcs.quantity" disabled="">
                    <span class="blind">수량 빼기</span></button>
                    <input type="number" class="bd_2eiJL N=a:pcs.quantity" value="1">
                    <button type="button" class="bd_EZ05h bd_2nJMW N=a:pcs.quantity">
                      <span class="blind">수량 추가</span>
                      </button></div></li></ul></div>
                <!--      <div class="bd_2qCsT bd_xMsL8 bd_7h93m" style="margin-top: 26px;">
                        <strong class="bd_28JKM">총 상품 금액</strong>
                        <div class="bd_CVTqI" style="margin: 4px 0px 0px 6px;">
                          <button type="button" class="bd_32dL8 N=a:pcs.price" aria-haspopup="true" aria-expanded="false">
                            <svg xmlns="http://www.w3.org/2000/svg" width="6" height="8" class="bd_3GYLw">
                            <path fill="#5f5f5f" fill-rule="evenodd" d="M5 3v1H4v2H2V4h1V3h1V1H2v1H0V1h1V0h4v1h1v2H5zM4 8H2V7h2v1z">
                              </path></svg> 
                              </button><div class="bd_y5n6u bd_2ZJCl bd_2K79u" style="display: none;">
                                <i class="bd_1XGXQ"></i><button type="button" class="bd_3gqWB">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 17 17" class="bd_K4Ce9">
                                  <path fill-rule="evenodd" d="M16.272 0L8.5 7.772.728 0 0 .728 7.772 8.5 0 16.272.728 17 8.5 9.228 16.272 17l.728-.728L9.228 8.5 17 .728 16.272 0z"></path></svg><span class="blind">닫기</span></button></div></div><div class="bd_3XvVU">
                                    <em class="bd_1hU3G">총 수량 1개</em>
                                    <strong class="bd_1Ukv5 bd_2WCtq">
                                      <span class="bd_32Qz_">18,000</span>원</strong></div></div> -->
                                      <div class="XqRGHcrncz"><div class="_3YA58cPPsy">
                                        <div class="OgETmrvExa sys_chk_buy N=a:pcs.buy">
                                          <a href="#" class="_2-uvQuRWK5"><span class="blind">구매하기</span>
                                          </a></div></div><div class="_3YA58cPPsy">
                                            <div class="_3Dy-2NaoiG N=a:pcs.fav">
                                              <a href="#" role="button" class="_8ToEZI8a1P" aria-pressed="false">
                                                <span class="_1F0dbkDlNA"><span class="blind">찜하기  </span>
                                                <a href="#" class="_2-uvQuRWK5"><span class="blind">장바구니</span></a> <!-- 얘네 왜 링크 붙어있? -->
                                                </span></a></div></div> 
                                                </div>
                                                </div> 
   <div class="text-container"><br><br><br>
    <p style="center;">본문</p>
    <div class="product-description-view" v-html="product.content"></div>
   </div>
  </div>

<!--  <div class="full-right">
    <table style="display: inline-block;">
      <tr>
        <td>상품 번호</td>
        <td>
          <input type="text" :value="product.productId" readonly />
        </td>
      </tr>
      <tr>
        <td>상품명</td>
        <td>
          <input type="text" :value="product.productName" readonly />
        </td>
      </tr>
      <tr>
        <td>작성자</td>
        <td>
          <input type="text" :value="product.writer" readonly />
        </td>
      </tr>
      <tr>
        <td>등록일자</td>
        <td>
          <input type="text" :value="product.regDate" readonly />
        </td>
      </tr>
      <tr>
        <td>본문</td>
        <td>
          <div class="product-description-view" v-html="product.content"></div>
        </td>
      </tr>
      <tr>
        <td>가격</td>
        <td>
          <input type="number" :value="product.price" readonly />
        </td>
      </tr>
    </table>
  </div> -->
</div>

</template>

<script>
import { quillEditor } from 'vue-quill-editor';
import 'quill/dist/quill.core.css';
import 'quill/dist/quill.snow.css';
import ProductCategoryForm from "@/components/layout/ProductCategoryForm.vue";

export default {
  name: "ProductReadForm",
  props: {
    product: {
      type: Object,
      required: true,
    },
    productImages: {
      type: Array,
    }
  },
  created() {
    console.log('productImages: ' + this.productImages)
  },
  components: {
   'quill-editor': quillEditor,
    ProductCategoryForm   
  },
}
</script>

<style scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.logo-img {
  margin-top: -50px;
  margin-left: 19px;
}
.full-container {
  width: 100%;
  text-align: center;
  margin-left: -40px;
}
.thumbnail-container {
  margin-left: 90px;
}
.ordering-part {
  margin-left: 50px;
}
.product-name, .product-writer, .product-price, .product-regdate {
  font-size: 22px;
}
.product-description-view {
  width: 500px;
  height: 500px;
  overflow: hidden;
  position: relative;
}

.product-description-view img {
  width: 100%;
  height: auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.full-left {
  margin-left: -30px;
  width: 170px;
}

.product-description-view {
  max-width: 80%;
  overflow-wrap: break-word;
  white-space: pre-wrap;
  word-wrap: break-word;
  font-size: 1rem;
  line-height: 1.5;
  color: #212529;
}

.text-container {
  margin-left: -400px;
}

</style>
