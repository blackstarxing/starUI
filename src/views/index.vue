<template>
	<div>
		<st-button>123</st-button>
		<st-button type="light">123</st-button>
		<!-- <st-toast :show="true"></st-toast> -->
	</div>
</template>
<script>
	export default {
		mounted: function () {
			// this.$toast.show({
	  //   		text: '网络错误，请重试',
	  //   		position: 'middle'
	  //   	})
	  		console.log(this)
		  	this.$createStToast({
	  			$props: {
	    			text: '网络错误，请重试',
    				position: 'middle'
	  			}
			})
		}
	}
</script>
