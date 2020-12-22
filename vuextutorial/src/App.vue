<template>
  <div id="app">
    <product-list-one></product-list-one>
    <!-- <product-list-two></product-list-two> -->
  </div>
</template>

<script>
import ProductListOne from './components/productListOne.vue'
// import ProductListTwo from './components/productListTwo.vue'


export default {
  name: 'App',
  components: {
    ProductListOne,
    // ProductListTwo
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
