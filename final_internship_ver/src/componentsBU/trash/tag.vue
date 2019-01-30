<template>
	<el-badge :value="trueCounter" class="item">
		<el-popover
			placement="right"
			width="400"
			trigger="click">
			<el-table :data="gridData">
				<el-table-column width="150" property="date" label="date"></el-table-column>
				<el-table-column width="100" property="name" label="name"></el-table-column>
				<el-table-column width="300" property="address" label="address"></el-table-column>
			</el-table>
			<el-button slot="reference">Click to activate</el-button>
		</el-popover>
	</el-badge>

</template>

<script>
export default {
	data() {
		return {
			trueCounter: 10
		}
	}
}
</script>
