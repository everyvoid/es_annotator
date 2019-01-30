<template>
	<div class="textStyle"> 
		<p>
			<el-button @click="addTag"> click me </el-button>
		</p>
		<component :is="subdoc.tag ? 'el-tag' : 'span'" v-bind="spans" v-for="(subdoc, i) in spans" :key="i" >{{ subdoc.text }}</component>
	</div>
</template>


<script>
import doc from './docs/doc.txt'
//import myTag from './trash/tag.vue'
export default {
	data() {
		return {
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

	components: {
		//myTag: myTag
	},

	computed: {
		spans() {
			return this.mydoc;
		}
	},

	methods: {
		addTag() {
			var sel = window.getSelection();
			var txt = sel.toString();	// selected text into string
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
