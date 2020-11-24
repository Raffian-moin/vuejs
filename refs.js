new Vue({
	el:"#app",
	data:{
		name:"",
	},
	methods:{
		readRef:function(){
			this.name=this.$refs.name.value;
		}
	}
})