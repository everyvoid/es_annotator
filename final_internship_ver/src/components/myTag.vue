<template>
	<el-popover
		placement="bottom"
		trigger="hover"
		width="350"
		v-model="visible"
		style="max-height: 150px; overflow: auto">
		<div
			v-for="(myTagInfo, i) in myTagInfos"
			:key="i">
			<el-button
				:title="mySpan.text"
				disabled
				size="small"
				style="cursor: default; text-overflow: ellipsis; overflow: hidden; width: 30%; font-family: Arial; text-align: left; color: grey ">"{{ mySpan.text }}"</el-button>
			<el-tag
				type="info"
				style="text-overflow: ellipsis; overflow: hidden; width: 29%; margin-left: 2px; margin-right: 2px; text-align: center ">{{ myTagInfo.templateName }}</el-tag>
			<el-tag
				closable
				:v-bind="myTagInfo"
				:type="myTagInfo.tagType == 1 ? 'success' : 'danger'"
				@close="handleDelete(mySpan.tagIndex, myTagInfo.templateName, myTagInfo.tagName, mySpan.text)"
				style="text-overflow: ellipsis; overflow: hidden; margin-bottom: 4px; width: 39%; text-align: right">{{ myTagInfo.tagName }}</el-tag>
		</div>
		<hr v-if="checkedTags.length != 0" noshade style="border-color: lightgrey; margin-bottom: 8px; margin-top: 6px">
		<div
			v-for="(checkedTag, i) in checkedTags"
			:key="i"
			:v-bind="checkedTag">
			<el-button 
				type="success"
				size="small"
				@click="addTag(checkedTag.fname, checkedTag.tname, 1, mySpan.text, mySpan.tagIndex)"
				style="width: 87%; margin-right: -8px; text-align: right; margin-bottom: 4px"
				plain>{{ checkedTag.tname }} @ {{ checkedTag.fname }}</el-button>
			<el-button
				type="danger"
				size="small"
				:v-bind="mySpan"
				@click="addTag(checkedTag.fname, checkedTag.tname, 0, mySpan.text, mySpan.tagIndex)"
				style="width: 12%; text-align: center"
				plain>F</el-button>
		</div>
		<el-tag
			:type="myType"
			slot="reference">{{ mySpan.text }}</el-tag>
	</el-popover>
</template>

<script>
export default {
	props: ['mySpan',
					'myType',
					'myTagInfos'],
	data() {
		return {
			visible: false,
		}
	},
	computed: {
		checkedTags(){
			var checkedTags = [];
			var tlen = this.$store.state.tf.length;
			var flen;
			for (var j = 0; j < tlen; j++){
				flen = this.$store.state.tf[j].tfield.length;
				for(var i = 0; i < flen; i++){
					if (this.$store.state.tf[j].tfield[i].checked == true) {
						var newEl = {
							tname: this.$store.state.tf[j].tname,
							fname: this.$store.state.tf[j].tfield[i].fname,
						};
						checkedTags.push(newEl);
					}
				}
			}
			return checkedTags;
		}
	},
	methods: {
		handleDelete(index, template, tag, text) {
			var tagInfo = this.findSel(index);
			var substrIndex = tagInfo[0];
			var myTag = this.$store.state.mydoc[substrIndex];
			var i;
			// if there are more than one tags
			if (myTag.tagInfos.length > 1) {
				for (i = 0; i < myTag.tagInfos.length; i++) {
					if (myTag.tagInfos[i].tagName == tag && myTag.tagInfos[i].templateName == template) {
						break;
					}
				}
				this.$store.state.mydoc[substrIndex].counter -= 1;
				this.$store.state.mydoc[substrIndex].tagInfos.splice(i,1);
			}
			else {
				this.visible = false; // forcing popover close
				// if it's not the ending substring
				if (this.$store.state.mydoc.length != (substrIndex+1)) {
					if(this.$store.state.mydoc[substrIndex+1].tag == false) {
						this.$store.state.mydoc[substrIndex+1].text = this.$store.state.mydoc[substrIndex].text + this.$store.state.mydoc[substrIndex+1].text;
						this.$store.state.mydoc.splice(substrIndex,1);
					}
					if (substrIndex > 0) {
						if(this.$store.state.mydoc[substrIndex-1].tag == false){
							this.$store.state.mydoc[substrIndex-1].text += this.$store.state.mydoc[substrIndex].text;
							this.$store.state.mydoc.splice(substrIndex,1);
						}
					}
				}
				else {
					this.$store.state.mydoc[substrIndex-1].text += this.$store.state.mydoc[substrIndex].text;
					this.$store.state.mydoc.splice(substrIndex,1);
				}
			}
			for(var j = 0; j < this.$store.state.history.length; j++) {
				if ((this.$store.state.history[j].tag == tag) && ((this.$store.state.history[j].text == text) && (this.$store.state.history[j].template == template))) {
					this.$store.state.history.splice(j,1);
					break;
				}
			}
		},

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

		addTag(tagName, templateName, tagType, tagText, tagIndex) {
			var mySubstr = this.findSel(tagIndex);
			var index = mySubstr[0];
			var txt = tagText;
			for(var i = 0; i < this.$store.state.mydoc[index].tagInfos.length; i++){
				if (this.$store.state.mydoc[index].tagInfos[i].tagName == tagName && this.$store.state.mydoc[index].tagInfos[i].templateName == templateName){
					if(this.$store.state.mydoc[index].tagInfos[i].tagType != tagType){
						this.$store.state.mydoc[index].tagInfos[i].tagType = tagType;
						this.$message.success("Tag type was successfully switched. History NOT updated.");
					}
					else {
						this.$message.error('This tag is already applied to this selection.');
					}
					return -1;
				}
			}
			this.$store.state.mydoc[index].counter += 1;
			this.addToHistory(txt, templateName, tagName, tagType, index);
			var tagInfo = {
				tagType: tagType,
				tagName: tagName,
				templateName: templateName
			};
			this.$store.state.mydoc[index].tagInfos.splice(0, 0, tagInfo);
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


<style>
.el-tag {
	font-family: Arial;
	margin: 0 auto;
}
</style>
