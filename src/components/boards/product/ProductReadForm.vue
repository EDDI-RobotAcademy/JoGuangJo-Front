<template>
  <div>
    <table>
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
  </div>
</template>

<script>
import { quillEditor } from 'vue-quill-editor';
import 'quill/dist/quill.core.css';
import 'quill/dist/quill.snow.css';

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
    'quill-editor': quillEditor
  },
}
</script>

<style>
.product-description-view {
  max-width: 100%;
  overflow-wrap: break-word;
  white-space: pre-wrap;
  word-wrap: break-word;
  font-size: 1rem;
  line-height: 1.5;
  color: #212529;
}
</style>
