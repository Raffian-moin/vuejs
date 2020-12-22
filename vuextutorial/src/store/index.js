import Vue from 'vue'
import Vuex from 'vuex'
const axios = require('axios');

Vue.use(Vuex)



export const store = new Vuex.Store({
    state: {
        users: []
    },
    getters: {
        // saleProducts: state => {
        //   var saleProducts=state.products.map(product=>{
        //       return{
        //           name:'**'+product.name+"**",
        //           price:product.price/2
        //       }
        //   });
        //   return saleProducts;
        // }
      },
      mutations: {
        // increment (state) {
        //   state.products.forEach(product=>{
        //       product.price+=1;
        //   })
        // }
        users(state,users){
            state.users=users;
        }
      },
      actions: {
        // increment (context) {
        //   setTimeout(function(){
        //     context.commit('increment')
        //   },3000)
        // }
        users(context){
            axios.get('https://jsonplaceholder.typicode.com/users')
                .then(function (response) {
                   context.commit('users',response.data)
                })
                .catch(function (error){
                    console.log(error);
                })
        }
      }
  })