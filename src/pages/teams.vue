<template>
  <q-page class="flex flex-center">
    <div class="row justify-center" style="width: 100%">
      
 <markdown-vue class="col-12 col-sm-10 col-md-5"
      style="width: 100%; padding: 25px"/>
 
 </div>
 </q-page>
 
</template>

<script>
import markdownVue from '../docs/teams.vmd'

export default {

  components: {
    markdownVue
  },
}

</script>