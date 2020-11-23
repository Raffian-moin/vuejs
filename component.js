Vue.component("Myintroduction",{
	template:'<h1>my name is {{name}}</h1>',
	data:function(){
		return {
			name:"moin",
		}
	},
	});

new Vue({
	el:"#app",
})
