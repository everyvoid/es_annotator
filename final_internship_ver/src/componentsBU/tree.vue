<template>
		<!-- *** Button implementation for collapse function ***
		<div>	
			<button class="cb el-icon-arrow-left" style="width:50px"></button>
		</div>
		-->
	<div class="tf-data">
		<el-collapse v-for="template in tf" :key="template" v-model="activeNames" @change="handleChange" style="margin-right: 10px; margin-bottom: -1px">
			<el-collapse-item v-bind:title="template.tname" name="1">
				<ul>
					<li v-for="field in template.tfield" :key="field">
						<el-button @click="selectHTML" class="fieldb" type="success" size="small" style="text-align: right; margin-right: -5px" plain> {{ field.fname }} </el-button>
						<el-button type="danger" size="small" plain>F</el-button>
						<el-checkbox size="medium"></el-checkbox>
					</li>
				</ul>
			</el-collapse-item>
		</el-collapse>
	</div>
</template>

<script>
// eslint-disable-next-line
import Tag from './tag.vue'
import doc from './docs/doc.txt'
	export default {
		// Array of arrays for Template @ Fields
		// TODO: saved string and fix some tfield object fields
		components: {
			// eslint-disable-next-line
			myTag: Tag
		},
		data() {
			return {
				counter: 10,
				tstuff: "",
				tf: [
					// PERSON
					{ tname: 'Person',
						tfield: [
							{ fname: 'Name',
								findex: [],
								fstring: []
							},

							{ fname: 'Surname',
								findex: [],
								fstring: []
							},

							{ fname: 'Date of birth',
								fstate: [],
								fstring: "",
							},

							{ fname: 'Gender',
								fstate: [],
								fstring: "",
							},

							{ fname: 'Citizenship',
								fstate: [],
								fstring: "",
							},

							{ fname: 'SSN',
								fstate: [],
								fstring: [],
								fend: [],
							}]
					},
					
					// ORG
					{ tname: 'Organization',
						tfield: [
							{ fname: 'Name',
								fstate: [],
								fstring: [],
								fend: [],
							},

							{ fname: 'Nation',
								fstate: [],
								fstring: [],
								fend: [],
							},

							{ fname: 'ORG ID',
								fstate: [],
								fstring: [],
								fend: []
							}]
					},
					
					// VEHICLE
					{ tname: 'Vehicle',
						tfield: [
							{ fname: 'Type',
								fstate: [],
								fstring: [],
								fend: []
							},

							{ fname: 'Brand',
								fstate: [],
								fstring: [],
								fend: []
							},

							{ fname: 'Model',
								fstate: [],
								fstring: [],
								fend: []
							},

							{ fname: 'Year',
								fstate: [],
								fstring: [],
								fend: []
							}]
						}]
				},


				// MY DOCUMENT
				origDoc: doc,
				mydoc: [ 
					{
						text: doc, 
						tag: false,
						tagName: ''
					}
				],
			}
		},

		methods: {
			addTag() {
				var sel = window.getSelection();
				var txt = sel.toString();
				var anchor = sel.anchorOffset;
				var start = this.origDoc.indexOf(txt);
				var end = start + (txt.length);
				var mySubstr = this.findSel(start);	
				start = this.mydoc[mySubstr].text.indexOf(txt);
				end = start + txt.length - 1;

				var firstPart = this.mydoc[mySubstr].text.substring(0, start);
				var lastPartTxt = this.mydoc[mySubstr].text.substring(end+1 , this.mydoc[mySubstr].text.length);
				var tagPart = {
					text: txt,
					tag: true,
					tagName: 'this new tag'
				};
				var lastPart = {
					text: lastPartTxt,
					flag: false,
					tagName: ''
				};

				// Redefine first part
				this.mydoc[mySubstr].text = firstPart;
				
				// Redefine tag part
				if (this.mydoc.length == 1) {
					this.mydoc.push(tagPart);
				}
				else {
					this.mydoc.splice(mySubstr+1, 0,tagPart);
				}

				// Redefine last part
				if (mySubstr == (this.mydoc.length-1)) {
					this.mydoc.push(lastPart);
				}
				else {
					this.mydoc.splice(mySubstr+2, 0, lastPart);
				}
			},

			// *** FINDS INDEX OF MY SELECTION IN THE ARRAY ***
			findSel(i) {
				var j = 0;

				// Check if the index is greater than each substring size
				// in order to find the right object to modify
				for (j = 0; j < this.mydoc.length; j++) {
					if ((this.mydoc[j].text.length - 1) <= i) {
						i = i - (this.mydoc[j].text.length - 1);
					}
					else {
						return j;
					}
				}
				return -1;
			}
		}
	}
</script>




<!-- *** STYLE SCOPE *** -->
<style>
.el-collapse {
	float: right;
	width: 280px;
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

