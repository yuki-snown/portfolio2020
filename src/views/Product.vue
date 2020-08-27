<template>
  <div class="product">
      <product-screen></product-screen>    
  </div>
</template>

<script>
import ProductScreen from '@/components/ProductScreen.vue';

export default {
  name: 'Product',

  components: {
    ProductScreen,
  }
};
</script>