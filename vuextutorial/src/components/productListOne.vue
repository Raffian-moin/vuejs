<template>
  <div class="hello" id="product-list-one">
      <ul>
          <li  v-for="product in productList" :key="product.id">
              <span class="name">{{product.name}}</span>
              <span class="price">{{product.price}}</span>

          </li>
      </ul>
        <button @click="increment()">increment</button>
  </div>

</template>

<script>
import { mapActions } from 'vuex'
import { mapGetters } from 'vuex'

export default {
  name: 'ProductListOne',
  computed: {
  productList () {
    return this.$store.state.products;
  },
    ...mapGetters([
      'saleProducts',
      // ...
    ])
},
methods:{
    ...mapActions([
      'increment',
    ])
}

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#product-list-one{
    background: #FFF8B1;
    box-shadow: 1px 2px 3px rgba(0,0,0,0.2);
    margin-bottom: 30px;
    padding: 10px 20px;
}
#product-list-one ul{
    padding: 0;
}
#product-list-one li{
    display: inline-block;
    margin-right: 10px;
    margin-top: 10px;
    padding: 20px;
    background: rgba(255,255,255,0.7);
}
.price{
    font-weight: bold;
    color: #E8800C;
}
</style>
