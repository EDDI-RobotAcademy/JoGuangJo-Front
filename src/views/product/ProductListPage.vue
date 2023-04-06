<template>
    <v-container>
      <Product-List-Form/>
    </v-container>
</template>
  
  
<script>
  import ProductListForm from '@/components/product/ProductListForm.vue';
  
    export default {
      name: 'ProductListView',
      components: {
        ProductListForm
      },
    }
</script>