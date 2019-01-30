<template>
	<el-container class="fullscreen">
		<el-container style="border-right: 2px solid lightgrey; border-left: 2px solid lightgrey; margin-left: 25px; margin-right: 15px; margin-top: 10px; margin-bottom: 10px">
			<el-main style="margin-bottom: 25px; margin-top: 25px">
				<app-doc></app-doc>
			</el-main>
			<el-footer style="margin-bottom: 150px">
				<app-history></app-history>
			</el-footer>
		</el-container>
		<el-aside>
			<div align="center">
				<i class="el-icon-info"></i>
				<el-tag
					style="margin-left: 15px; margin-bottom: 10px; margin-right: 5px; margin-top: 20px; width: 25%"
					type="success"> True </el-tag>
				<el-tag
					style="margin-bottom: 10px; margin-right: 5px; width: 25%"
					type="danger"> False </el-tag>
				<el-tag style="width: 25%"> Mix </el-tag>
			</div>
			<app-tree></app-tree>
		</el-aside>
	</el-container>
</template>

<script>
	import Tree from './components/tree.vue'
	import Doc from './components/tag.vue'
	import History from './components/history.vue'
	export default {
		components: {
			appTree: Tree,
			appDoc: Doc,
			appHistory: History
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
	font-family: Arial;
}
</style>
