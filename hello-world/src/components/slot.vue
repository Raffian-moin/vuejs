<template>
	<div>
		<slot name="first"></slot>
		<p>this is slot section</p>
		<slot name="second"></slot>
	</div>
</template>

<script>
export default {
  name: 'Slot',
  props: {
    msg: String
  }
}
</script>

<style scoped>

</style>

