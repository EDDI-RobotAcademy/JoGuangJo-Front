<template>
    <div>
        <form @submit.prevent="onSubmit">
            <div class="form-group">
                <v-text-field label="상품명" v-model="productName" class="name-field"></v-text-field>
                <v-text-field label="작성자" v-model="writer" readonly class="writer-field"></v-text-field>
            </div>
            <div class="form-group">
                <label>본문:</label>
                <quill-editor v-model="content" />
            </div>
            <div class="form-group">
                <label>가격:</label>
                <input type="number" v-model="price" />
            </div>
            <div class="button-group">
                <button type="submit" class="modify-btn">수정 완료</button>
                <router-link :to="{ name: 'ProductReadView', params: { productId: product.productId.toString() } }"
                            class="delete-btn">
                            취소
                </router-link>
            </div>
        </form>
    </div>
</template>
  
<script>
import 'quill/dist/quill.core.css';
import 'quill/dist/quill.snow.css';
import { quillEditor } from 'vue-quill-editor';

export default {
    name: "ProductModifyForm",
    components: {
        quillEditor,
    },
    props: {
        product: {
            type: Object,
            required: true,
        }
    },
    data() {
        return {
            productName: '',
            content: '',
            writer: '',
            price: 0,
        }
    },
    created() {
        this.productName = this.product.productName
        this.writer = this.product.writer
        this.content = this.product.content
        this.price = this.product.price
    },
    methods: {
        onSubmit() {
            const { productName, content, writer, price } = this
            this.$emit('submit', { productName, content, writer, price })
        }
    }
}

</script>
  
<style scoped>
body {
    background-color: #f4f4f4;
    color: #000;
}

.form-group label {
    color: #555;
}

.form-group {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
}

.form-group label {
    width: 8rem;
    margin-right: 1rem;
    font-size: 14px;
}

.button-group {
    margin-top: 2rem;
    display: flex;
    justify-content: center;
}

.button-group>* {
    margin: 0 0.5rem;
}

.name-field,
.writer-field {
    display: inline-block;
    width: calc(50% - 16px);
}

.writer-field {
    margin-left: 16px;
}

.modify-btn,
.button {
    display: inline-block;
    padding: 10px 20px;
    font-size: 16px;
    font-weight: bold;
    text-align: center;
    text-decoration: none;
    color: black;
    background-color: #fee789;
    border-radius: 25px;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
}

.modify-btn:hover,
.button:hover {
    background-color: #fdd24a;
}

.delete-btn,
.router-link-button {
    display: inline-block;
    padding: 10px 20px;
    font-size: 16px;
    font-weight: bold;
    text-align: center;
    text-decoration: none;
    color: black;
    background-color: rgb(208, 197, 197);
    border-radius: 25px;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
}

.delete-btn:hover,
.router-link-button:hover {
    background-color: rgb(176, 167, 167);
}
</style>

