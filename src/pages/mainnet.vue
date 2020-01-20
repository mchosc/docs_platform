<template>
  <q-page class="flex flex-center">
    <div class="row justify-center" style="width: 100%">
    <q-markdown
      class="col-12 col-sm-10 col-md-5"
      style="width: 100%; padding: 25px"
      :src="markdown" toc @data="onToc"/>
    </div>
    <q-menu
      class="col-12 col-sm-10 col-md-5"
      style="width: 100%; padding: 25px"
      :src="toc"/>
    </div>
      
 </q-page>
</template>

<script>
import markdown from '../docs/mainnet.md'
export default {
  onToc (toc) {
    this.toc = this.$refs.markdown.makeTree(toc)
},
 data () {

return {
      markdown: markdown,
      toc: []
    }
  }
}
</script>