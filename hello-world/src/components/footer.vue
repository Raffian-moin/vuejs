<template>
  <div class="footer">
    <h1>{{ copyright }}</h1>
    
  </div>
</template>

<script>
export default {
  name: 'Footer',
  props: {
    msg: String
  },
  data:function(){
    return{
    copyright:"@2020 vuejs.com",

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

h1{
  color:#222;
  text-align:center;
}
.footer{
  background:lightgreen;
  padding:10px;
}
</style>
