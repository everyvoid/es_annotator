<template>
		<!-- *** Next button implementation for collapse function ***
		<div>	
			<button class="cb el-icon-arrow-left" style="width:50px"></button>
		</div>
		-->
	<div class="list_style">
		<el-collapse v-model="activeNames" @change="handleChange" style="margin-right: 10px">
			<el-collapse-item title="Template 1" name="1">
				<ul>
					<li>
						<el-button class="fieldb" type="success" size="small" style="text-align: right; margin-right: -5px" plain>Field</el-button>
						<el-button type="danger" size="small" plain>F</el-button>
						

						<el-checkbox size="medium"></el-checkbox>
					</li>
					<li>
						<el-button class="fieldb" type="success" size="small" style="text-align: right; margin-right: -5px" plain>Field</el-button>
						<el-button type="danger" size="small" plain>F</el-button>
						<el-checkbox size="medium"></el-checkbox>
					</li>
					<li>
						<el-button class="fieldb" type="success" size="small" style="text-align: right; margin-right: -5px" plain>Field</el-button>
						<el-button type="danger" size="small" plain>F</el-button>
						<el-checkbox size="medium"></el-checkbox>
					</li>
					<li>
						<el-button class="fieldb" type="success" size="small" style="text-align: right; margin-right: -5px" plain>Field</el-button>
						<el-button type="danger" size="small" plain>F</el-button>
						<el-checkbox size="medium"></el-checkbox>
					</li>
					<li>
						<el-button class="fieldb" type="success" size="small" style="text-align: right; margin-right: -5px" plain>Field</el-button>
						<el-button type="danger" size="small" plain>F</el-button>
						<el-checkbox size="medium"></el-checkbox>
					</li>
					<li>
						<el-button class="fieldb" type="success" size="small" style="text-align: right; margin-right: -5px" plain>Field</el-button>
						<el-button type="danger" size="small" plain>F</el-button>
						<el-checkbox size="medium"></el-checkbox>
					</li>
				</ul>
			</el-collapse-item>
			<el-collapse-item title="Template 2" name="2">
				<ul>
					<li>
						<el-button class="fieldb" type="success" size="small" style="text-align: right; margin-right: -5px" plain>Field</el-button>
						<el-button type="danger" size="small" plain>F</el-button>
						<el-checkbox size="medium"></el-checkbox>
					</li>
					<li>
						<el-button class="fieldb" type="success" size="small" style="text-align: right; margin-right: -5px" plain>Field</el-button>
						<el-button type="danger" size="small" plain>F</el-button>
						<el-checkbox size="medium"></el-checkbox>
					</li>
					<li>
						<el-button class="fieldb" type="success" size="small" style="text-align: right; margin-right: -5px" plain>Field</el-button>
						<el-button type="danger" size="small" plain>F</el-button>
						<el-checkbox size="medium"></el-checkbox>
					</li>
					<li>
						<el-button class="fieldb" type="success" size="small" style="text-align: right; margin-right: -5px" plain>Field</el-button>
						<el-button type="danger" size="small" plain>F</el-button>
						<el-checkbox size="medium"></el-checkbox>
					</li>
					<li>
						<el-button class="fieldb" type="success" size="small" style="text-align: right; margin-right: -5px" plain>Field</el-button>
						<el-button type="danger" size="small" plain>F</el-button>
						<el-checkbox size="medium"></el-checkbox>
					</li>
					<li>
						<el-button class="fieldb" type="success" size="small" style="text-align: right; margin-right: -5px" plain>Field</el-button>
						<el-button type="danger" size="small" plain>F</el-button>
						<el-checkbox size="medium"></el-checkbox>
					</li>
				</ul>
			</el-collapse-item>
			<el-collapse-item title="Template 3" name="3">
				<ul>
					<li>
						<el-button class="fieldb" type="success" size="small" style="text-align: right; margin-right: -5px" plain>Field</el-button>
						<el-button type="danger" size="small" plain>F</el-button>
						<el-checkbox size="medium"></el-checkbox>
					</li>
					<li>
						<el-button class="fieldb" type="success" size="small" style="text-align: right; margin-right: -5px" plain>Field</el-button>
						<el-button type="danger" size="small" plain>F</el-button>
						<el-checkbox size="medium"></el-checkbox>
					</li>
					<li>
						<el-button class="fieldb" type="success" size="small" style="text-align: right; margin-right: -5px" plain>Field</el-button>
						<el-button type="danger" size="small" plain>F</el-button>
						<el-checkbox size="medium"></el-checkbox>
					</li>
					<li>
						<el-button class="fieldb" type="success" size="small" style="text-align: right; margin-right: -5px" plain>Field</el-button>
						<el-button type="danger" size="small" plain>F</el-button>
						<el-checkbox size="medium"></el-checkbox>
					</li>
					<li>
						<el-button class="fieldb" type="success" size="small" style="text-align: right; margin-right: -5px" plain>Field</el-button>
						<el-button type="danger" size="small" plain>F</el-button>
						<el-checkbox size="medium"></el-checkbox>
					</li>
					<li>
						<el-button class="fieldb" type="success" size="small" style="text-align: right; margin-right: -5px" plain>Field</el-button>
						<el-button type="danger" size="small" plain>F</el-button>
						<el-checkbox size="medium"></el-checkbox>
					</li>
				</ul>
			</el-collapse-item>
			<el-collapse-item title="Template 4" name="4">
				<ul>
					<li>
						<el-button class="fieldb" type="success" size="small" style="text-align: right; margin-right: -5px" plain>Field</el-button>
						<el-button type="danger" size="small" plain>F</el-button>
						<el-checkbox size="medium"></el-checkbox>
					</li>
					<li>
						<el-button class="fieldb" type="success" size="small" style="text-align: right; margin-right: -5px" plain>Field</el-button>
						<el-button type="danger" size="small" plain>F</el-button>
						<el-checkbox size="medium"></el-checkbox>
					</li>
					<li>
						<el-button class="fieldb" type="success" size="small" style="text-align: right; margin-right: -5px" plain>Field</el-button>
						<el-button type="danger" size="small" plain>F</el-button>
						<el-checkbox size="medium"></el-checkbox>
					</li>
					<li>
						<el-button class="fieldb" type="success" size="small" style="text-align: right; margin-right: -5px" plain>Field</el-button>
						<el-button type="danger" size="small" plain>F</el-button>
						<el-checkbox size="medium"></el-checkbox>
					</li>
					<li>
						<el-button class="fieldb" type="success" size="small" style="text-align: right; margin-right: -5px" plain>Field</el-button>
						<el-button type="danger" size="small" plain>F</el-button>
						<el-checkbox size="medium"></el-checkbox>
					</li>
					<li>
						<el-button class="fieldb" type="success" size="small" style="text-align: right; margin-right: -5px" plain> Field</el-button>
						<el-button type="danger" size="small" plain>F</el-button>
						<el-checkbox size="medium"></el-checkbox>
					</li>
				</ul>
			</el-collapse-item>
		</el-collapse>
	</div>
</template>

<!-- *** STYLE SCOPE *** -->
<style>
.el-collapse {
	float: right;
	width: 290px;
	font-family: Arial;
}

ul {
	margin-bottom: -10px;
}

li {
	list-style-type: none;
	float: right;
	margin-right: 8px;
	margin-bottom: 5px;
}

.fieldb {
	width: 150px;
}

.el-checkbox {
	margin-left: 10px;
}
</style>

