<template>
  <div class="home">
      <home-screen></home-screen>    
  </div>
</template>

<script>
import HomeScreen from '@/components/HomeScreen.vue';

export default {
  name: 'Home',

  components: {
    HomeScreen,
  }
};
</script>