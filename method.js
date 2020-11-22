new Vue({
	el:"#app",
	data:{
		name:'moin',
	},
	methods:{
		nameMethod:function(){
		return 'hey '+ this.name;

		}
	}
})
