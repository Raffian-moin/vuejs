<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <!-- <nameSection/> -->
  <router-link to="/foo">Foo</router-link> |
  <router-link to="/bar">Bar</router-link> 

  <router-view></router-view>
  <app-header/>
  <content-for-props v-bind:ninjas="ninjas"/>
  <!-- <app-content/> -->
  <app-footer/>
<!--   <app-slot>
    <template v-slot:second>
    <p>hey you {{name}}</p>
  </template>
  <template v-slot:first>
    <p>hey you first</p>
  </template>
  </app-slot> -->
  <!-- <dynamic-component1></dynamic-component1> -->
  <!-- <dynamic-component2></dynamic-component2> -->
  <keep-alive>
  <component v-bind:is="component"></component>
  </keep-alive>

  <button @click="component='dynamic-component1'">button 1</button>
  <button @click="component='dynamic-component2'">button 2</button>

</template>

<script>
 // import HelloWorld from './components/HelloWorld.vue'
// import nameSection from './components/nameSection.vue'

 import Header from './components/header.vue'
 // import Content from './components/content.vue'
 import Footer from './components/footer.vue'
 import contentforprops from './components/contentforprops.vue'
 // import Slot from './components/slot.vue'
 import dynamicComponent1 from './components/dynamiComponent.vue'
 import dynamicComponent2 from './components/dynamicComponent2.vue'


 







export default {
  name: 'App',
  components: {
    // HelloWorld,
    // nameSection,
    'app-header':Header,
    // 'app-content':Content,
    'app-footer':Footer,
    'content-for-props':contentforprops,
    // 'app-slot':Slot,
    'dynamic-component1':dynamicComponent1,
    'dynamic-component2':dynamicComponent2,

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
      name:"moin",

      component:"dynamic-component1",


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
