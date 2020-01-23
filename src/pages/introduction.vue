<template>
  <q-page class="flex flex-center">
    <div class="row justify-center" style="width: 90%">
      
 <markdown-vue class="col-12 col-sm-10 col-md-5"
      style="width: 100%"/>
 
 </div>
 </q-page>
 
</template>

<script>
import markdownVue from '../docs/introduction.vmd'

export default {

  components: {
    markdownVue
  },
}

</script>