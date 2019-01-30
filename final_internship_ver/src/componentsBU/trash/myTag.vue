<template>
	<div>
		<my-file></my-file>
		<button id="mytag" v-on:click="selectHTML"> Press me now </button>
	</div>
</template>

<script>
import myFile from "./myFile.vue"

export default {
	components: {
		myFile: myFile		
	},

	methods: {
		// *** Swap text with span el-tag ***
		selectHTML() {
			var sel, range;
			if (window.getSelection) {																									// check if there is a selection
        sel = window.getSelection();																							// get the selection
        if (sel.getRangeAt && sel.rangeCount) {																		// stuff...
					range = window.getSelection().getRangeAt(0);
					var repText = '<span class="el-tag" style="font-size: 14px">'+range+'</span>';
					range.deleteContents();

					var el = document.createElement("span");
					el.innerHTML = repText;
					// eslint-disable-next-line
					var frag = document.createDocumentFragment(), node, lastNode;

					while ((node = el.firstChild)) {
						lastNode = frag.appendChild(node); // eslint-disable-next-line
					}
					range.insertNode(frag);
					this.selectHTML1();
        }
			} else if (document.selection && document.selection.createRange) {
					range = document.selection.createRange();
					range.collapse(false);
					range.pasteHTML(repText);
					this.selectHTML1();
			}
		},

		selectHTML1() {
			var sel, range;
			if (window.getSelection) {																									// check if there is a selection
        sel = window.getSelection();																							// get the selection
        if (sel.getRangeAt && sel.rangeCount) {																		// stuff...
					range = window.getSelection().getRangeAt(0);
					var repText = '<span class="el-badge" style="font-size: 14px">'+range+'</span>';
					range.deleteContents();

					var el = document.createElement("span");
					el.innerHTML = repText;
					// eslint-disable-next-line
					var frag = document.createDocumentFragment(), node, lastNode;

					while ((node = el.firstChild)) {
						lastNode = frag.appendChild(node); // eslint-disable-next-line
					}
					range.insertNode(frag);
        }
			} else if (document.selection && document.selection.createRange) {
					range = document.selection.createRange();
					range.collapse(false);
					range.pasteHTML(repText);
			}
		}
	}
}
</script>
