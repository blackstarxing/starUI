<template>
	<button class="star-button" :class="['star-button-'+type]">
		<slot></slot>
	</button>
</template>
<script>
	export default {
		name: 'stButton',
		props: {
			type: { // default、disabled、light
				type: String,
				default: 'default'
			}
		}
	}
</script>
<style scoped lang='less'>
	.star-button{
		width:140px;
		height:48px;
		background:linear-gradient(135deg,rgba(255,81,81,1) 0%,rgba(224,3,36,1) 100%);
		border-radius:4px;
		border: none;
		color: #fff;
		font-size: 18px;
		outline: none;
		cursor: pointer;
		&:hover{
			opacity: 0.8
		}
	}
	.star-button-light{
		background:rgba(255,255,255,1);
		border-radius:4px;
		border:1px solid rgba(222,222,222,1);
		color: #4d4d4d;
	}
</style>
