<template class="templateStyle">
	<div class="tf-data">
		<el-collapse
			v-for="(template, i) in tf"
			:key="i"
			v-model="activeNames"
			@change="handleChange"
			style="margin-right: 10px; margin-bottom: -1px">
			<el-collapse-item
				v-bind:title="template.tname"
				name="1">
				<ul>
					<li
						v-for="(field, j) in template.tfield"
						:key="j">
						<el-button
							@click="addTag(field.fname, template.tname, 1)"
							class="fieldb"
							type="success"
							size="small"
							style="text-align: right; margin-right: -5px"
							plain>{{ field.fname }}</el-button>
						<el-button 
							@click="addTag(field.fname, template.tname, 0)"
							type="danger"
							size="small"
							plain>F</el-button>
						<el-checkbox size="medium" @change="tf[i].tfield[j].checked = !tf[i].tfield[j].checked"></el-checkbox>
					</li>
				</ul>
			</el-collapse-item>
		</el-collapse>
	</div>
</template>



<script>
// import Tag from './tag.vue'
	export default {
		components: {
			// myTag: Tag
		},
		computed: {
			tf() {
				return this.$store.state.tf;
			}
		},
		data() {
			return {
				test: false
			}
		},
		methods: {
			addTag(tagName, templateName, tagType) {
				var sel = window.getSelection();
				var txt = sel.toString();
				var selTmp = sel.modify('extend', 'forward', 'paragraphboundary');
				if (txt == "" || txt == " ") {
					return -1;
				}
				selTmp = window.getSelection();
				var txtTmp = selTmp.toString();
				var start = this.$store.state.origDoc.indexOf(txtTmp);
				var tagIndex = start;
				window.getSelection().empty();
				var end = start + txt.length;
				var mySubstr = this.findSel(start); // mySubstr[0] = substr index in mydoc || mySubstr[1] = index of selected text in mySubstr	
				if (this.$store.state.mydoc[mySubstr[0]].text.indexOf(txt) == -1) {
					this.$message.error('Oops, something went wrong.');
					return -1;
				}

				// Case: selection already tagged
				if (this.$store.state.mydoc[mySubstr[0]].tag == true) {
					// History update
					txt = this.$store.state.mydoc[mySubstr[0]].text;
					for(var i = 0; i < this.$store.state.mydoc[mySubstr[0]].tagInfos.length; i++){
						if (this.$store.state.mydoc[mySubstr[0]].tagInfos[i].tagName == tagName && this.$store.state.mydoc[mySubstr[0]].tagInfos[i].templateName == templateName){
							if(this.$store.state.mydoc[mySubstr[0]].tagInfos[i].tagType != tagType){
								this.$store.state.mydoc[mySubstr[0]].tagInfos[i].tagType = tagType;
								this.$message.success('Tag type was successfuly switched. History NOT updated.');
              }
							else {
								this.$message.error('This tag is already applied to this selection.');
							}
							return -1;
						}
					}
					this.$store.state.mydoc[mySubstr[0]].counter += 1;
					this.addToHistory(txt, templateName, tagName, tagType, tagIndex);
					var tagInfo = {
						tagType: tagType,
						tagName: tagName,
						templateName: templateName
					};
					this.$store.state.mydoc[mySubstr[0]].tagInfos.splice(0, 0, tagInfo);
					return -1;
				}
				start = mySubstr[1];
				end = start + txt.length - 1;

				var firstPart = this.$store.state.mydoc[mySubstr[0]].text.substring(0, start);
				var lastPartTxt = this.$store.state.mydoc[mySubstr[0]].text.substring(end+1 , this.$store.state.mydoc[mySubstr[0]].text.length);
				var tagPart = {
					text: txt,
					tag: true,
					tagInfos: [
						{ 
							tagType: tagType,
							tagName: tagName,
							templateName: templateName
						}
					],
					tagIndex: tagIndex,
					counter: 1
				};
				var lastPart = {
					text: lastPartTxt,
					tag: false,
					tagInfos: [
						{ 
							tagType: 0 ,
							tagName: '',
							templateName: ''
						}
					],
					counter: 0
				};

				// Redefine first part
				this.$store.state.mydoc[mySubstr[0]].text = firstPart;
				
				// Redefine tag part
				if (this.$store.state.mydoc.length == 1) {
					this.$store.state.mydoc.push(tagPart);
				}
				else {
					this.$store.state.mydoc.splice(mySubstr[0]+1, 0,tagPart);
				}

				// Redefine last part
				if (mySubstr[0] == (this.$store.state.mydoc.length-1)) {
					this.$store.state.mydoc.push(lastPart);
				}
				else {
					this.$store.state.mydoc.splice(mySubstr[0]+2, 0, lastPart);
				}

				// Update history
				this.addToHistory(txt,templateName, tagName, tagType, tagIndex);
			},

			// *** FINDS INDEX OF MY SELECTION IN THE ARRAY ***
			findSel(i) {
				var j = 0;

				// Check if the index is greater than each substring size
				// in order to find the right object to modify
				for (j = 0; j < this.$store.state.mydoc.length; j++) {
					if ((this.$store.state.mydoc[j].text.length - 1) <= i) {
						i = i - (this.$store.state.mydoc[j].text.length);
					}
					else {
						return [j, i];
					}
				}
				return -1;
			},

			addToHistory(tagTxt, templateName, tagName, tagType, tagIndex) {
				var elToAdd = {
					text: tagTxt,
					tag: tagName,
					template: templateName,
					type: tagType,
					index: tagIndex
				}
				this.$store.state.history.splice(0, 0, elToAdd);

				// pull if full (LIFO)
				if(this.$store.state.history.length == 11) {
					this.$store.state.history.splice(this.$store.state.history.length-1, 1);
				}
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

.el-message {
	font-family: Arial;
}
</style>

