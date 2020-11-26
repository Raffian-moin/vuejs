<template>
	<div>
		name
	</div>
</template>

<script>
export default {
  name: 'dynamicComponent2',
  props: {
    msg: String
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
.header{
  background:lightgreen;
  padding:10px;
}
</style>
