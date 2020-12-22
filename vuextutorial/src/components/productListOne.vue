<template>
  <div class="hello" id="product-list-one">
      <ul>
          <li  v-for="user in users" :key="user.id">
              <span class="name">{{user.username}}</span>
              <span class="price">{{user.email}}</span>

          </li>
      </ul>
        <button @click="increment()">increment</button>
  </div>

</template>

<script>
// import { mapActions } from 'vuex'
// import { mapGetters } from 'vuex'

export default {
  name: 'ProductListOne',
  computed: {
  users () {
    return this.$store.state.users;
  },
    // ...mapGetters([
    //   'saleProducts',
    //   // ...
    // ])
},
mounted(){
   this.$store.dispatch("users");
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
