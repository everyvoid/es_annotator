<template>
	<el-table
    :data="tableData"
		height="200"
    style="width: 100%">
    <el-table-column
      label="Text">
      <template slot-scope="scope">
				<span class="myTextStyle">{{ scope.row.text }}</span>
      </template>
    </el-table-column>

    <el-table-column
			label="Template">
      <template slot-scope="scope">
				<el-tag
					size="medium"
					type="info"
					style="font-size: 12px;">{{ scope.row.template }}</el-tag>
      </template>
    </el-table-column>

    <el-table-column
			label="Tag">
      <template slot-scope="scope">
				<el-tag
					size="medium"
					:type="scope.row.type ? 'success' : 'danger'"
					style="font-size: 12px;">{{ scope.row.tag }}</el-tag>
      </template>
    </el-table-column>

    <el-table-column
      label="Operations">
      <template slot-scope="scope">
        <el-button
          size="mini"
          type="warning"
          @click="handleDelete(scope.row.index, scope.row.template, scope.row.tag, scope.row.text)"
					plain> Delete </el-button>
      </template>
    </el-table-column>
  </el-table>
</template>


<script>
	export default {
    data() {
      return {
        tableData: this.$store.state.history
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
					this.$store.state.mydoc[substrIndex].counter -= 1;	// not using the counter right now (el-badge purposes)
					this.$store.state.mydoc[substrIndex].tagInfos.splice(i,1);
				}
				else {
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
			
			// Finds the right substr of the selection 
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
      }
		}
  }
</script>

<style>
.el-table {
	font-family: Arial;
	margin-top: -10px; 
	border-top: 2px solid lightgrey;
}

.myTextStyle {
  display: inline-block;
  width: 15em;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>
