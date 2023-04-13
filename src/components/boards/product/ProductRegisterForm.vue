<template>
  <form @submit.prevent="onSubmit" class="product-form">
    <div class="form-group">
      <label for="productName">상품명</label>
      <input type="text" v-model="productName" id="productName" class="form-control" />
    </div>
    <div class="form-group">
      <label for="writer">판매자</label>
      <input type="text" v-model="writer" id="writer" class="form-control" disabled/>
    </div>
    <div class="form-group">
      <label for="price">가격</label>
      <input type="number" v-model="price" id="price" class="form-control" />
    </div>
    <div class="form-group">
      <label for="content">상품 설명</label>
      <quill-editor v-model="content" ref="editor" class="product-description-editor"></quill-editor>
    </div>
    <div class="form-group file-selection-group">
      <label for="files"></label>
      <div class="input-group">
        <div class="custom-file">
          <input type="file" id="files" ref="files" multiple @change="handleFileUpload" class="custom-file-input" />
          <label class="custom-file-label" for="files">Choose files</label>
        </div>
      </div>
    </div>
    <div class="form-buttons">
      <button type="submit" class="btn btn-primary">등록</button>
      <router-link :to="{ name: 'ProductListView' }" class="btn btn-secondary">
        취소
      </router-link>
    </div>
  </form>
</template>

<script>
import 'quill/dist/quill.core.css';
import 'quill/dist/quill.snow.css';
import { quillEditor } from 'vue-quill-editor';


export default {
  name: "ProductRegisterForm",
  data() {
    return {
      productName: '상품명을 입력하세요.',
      writer: JSON.parse(localStorage.getItem('userInfo')).nickName,
      content: '내용을 입력하세요.',
      price: 0,
      files: '',
    }
  },
  methods: {
    onSubmit() {
      let formData = new FormData()

      for (let idx = 0; idx < this.files.length; idx++) {
        formData.append('imageFileList', this.files[idx])
      }

      const { productName, writer, content, price } = this
      let productInfo = {
        productName: productName,
        writer: writer,
        content: content,
        price: price,
      }

      console.log('productInfo: ' + JSON.stringify(productInfo))

      formData.append(
        "productInfo",
        new Blob([JSON.stringify(productInfo)], { type: "application/json" })
      )

      console.log('formData: ' + JSON.stringify(formData))

      this.$emit('submit', formData)
    },
    handleFileUpload() {
      this.files = this.$refs.files.files
    },
    saveProductDescription() {
      this.content = this.$refs.editor.quill.root.innerHTML;
    }
  },
  components: {
    'quill-editor': quillEditor
  },
}

</script>
<style>
.product-form {
  width: 100%;
  max-width: 800px;
  margin: 2rem auto;
  padding: 1.5rem;
  background-color: #ffffff;
  border-radius: 5px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.form-group {
  margin-bottom: 1.25rem;
}

.input-group {
  position: relative;
  display: flex;
  align-items: stretch;
  width: 100%;
}

.custom-file {
  position: relative;
  display: inline-block;
  width: 100%;
  height: calc(1.5em + 0.5rem + 2px);
  margin-bottom: 0;
}

.custom-file-input {
  position: relative;
  z-index: 2;
  width: 100%;
  height: calc(1.5em + 0.5rem + 2px);
  margin: 0;
  opacity: 0;
}

.custom-file-label {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1;
  height: calc(1.5em + 0.5rem + 2px);
  padding: 0.5rem;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.075);
}

.custom-file-label::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 3;
  display: block;
  height: calc(1.5em + 0.5rem);
  padding: 0.5rem 1rem;
  line-height: 1.5;
  color: #495057;
  content: "Browse";
  background-color: #e9ecef;
  border-left: none;
  border-radius: 0 0.25rem 0.25rem 0;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: #495057;
}

.form-control {
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  padding: 0.5rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  width: 100%;
  height: calc(1.5em + 0.5rem + 2px);
}

.form-control:focus {
  border-color: #80bdff;
  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
}

.product-description-editor {
  height: 300px;
  margin-top: 0.5rem;
}

.form-buttons {
  display: flex;
  justify-content: space-between;
  margin-top: 1.5rem;
}
</style>