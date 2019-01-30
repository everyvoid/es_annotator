<template>
	<el-container class="fullscreen">
		<el-main style="border-right: 1px solid lightgrey; margin-right: 15px; margin-top: 5px; margin-bottom: 25px">
			<h1>text</h1>
		</el-main>
		<el-aside>
			<el-button style="margin-top: 10px; margin-bottom: 10px; margin-left:25%; background: white" plain> buttons zone </el-button>
			<app-tree></app-tree>
		</el-aside>
	</el-container>
</template>

<script>
	import Tree from './components/tf_tree.vue'
	export default {
		components: {
			appTree: Tree
		}
	}
</script>

<style>
.fullscreen {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  overflow: auto;

}
</style>
