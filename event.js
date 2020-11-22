new Vue({
	el:"#app",
	data:{
		age_A:10,
		age_B:20,
	},

	methods:{
		increment:function(){
			return this.age_A=this.age_A+10;
		},
		decrement:function(){
			return this.age_B=this.age_B-10;
		}
	}
})