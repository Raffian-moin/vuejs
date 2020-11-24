<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <!-- <nameSection/> -->
  <app-header/>
  <content-for-props v-bind:ninjas="ninjas"/>
  <!-- <app-content/> -->
  <app-footer/>
</template>

<script>
 // import HelloWorld from './components/HelloWorld.vue'
// import nameSection from './components/nameSection.vue'

 import Header from './components/header.vue'
 // import Content from './components/content.vue'
 import Footer from './components/footer.vue'
 import contentforprops from './components/contentforprops.vue'






export default {
  name: 'App',
  components: {
    // HelloWorld,
    // nameSection,
    'app-header':Header,
    // 'app-content':Content,
    'app-footer':Footer,
    'content-for-props':contentforprops,
  },
    data:function(){
    return{
      ninjas: [
        {name: 'Ryu', specialty: 'Vue Components', show: false},
        {name: 'Crystal', specialty: 'HTML Wizardry', show: false},
        {name: 'Hitoshi', specialty: 'Click Events', show: false},
        {name: 'Tango', specialty: 'Conditionals', show: false},
        {name: 'Kami', specialty: 'Webpack', show: false},
        {name: 'Yoshi', specialty: 'Data Diggin', show: false}
      ],

    }
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
