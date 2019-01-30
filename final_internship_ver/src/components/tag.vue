<template>
	<div class="textStyle"> 
		<component
			:is="subdoc.tag ? 'my-tag' : 'span'"
			:myTagInfos="subdoc.tagInfos"
			:myType="isAllSame(subdoc.tagInfos) ? (subdoc.tagInfos[0].tagType == 1 ? 'success' : 'danger') : ''"
			:mySpan="subdoc"
			v-for="(subdoc, i) in spans"
			:key="i" >{{ subdoc.text }}</component>
</div>
</template>


<script>
import myTag from './myTag.vue'

export default {
	components: {
		myTag: myTag,
	},

	computed: {
		spans() {
			return this.$store.state.mydoc;
		}
	},

	methods: {
		// Used for decide either to use the "mix" tag or "true/false"
		isAllSame(arr){
			for(var i = 0; i < arr.length; i++){
				if(arr[0].tagType!=arr[i].tagType){
					return false;
				}
			}
			return true;
		}
	}
}
</script>

<style>
.textStyle {
	white-space:pre-wrap;
	font-family: Arial;
	font-size: 14px;
	padding-left: 20px;
	padding-right: 20px;
	line-height: 35px;
}
</style>
