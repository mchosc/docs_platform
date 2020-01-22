<template>
   <q-expansion-item
        dense-toggle
        expand-separator
        icon="build"
        label="Hardware"
      >

           <q-item clickable dense tag="a" target="_blank" href="https://www.worldcommunitygrid.org/stat/viewMemberInfo.do?userName=boid.com">
          <q-item-section>
            <q-item-label>CPU</q-item-label>
          </q-item-section>
        </q-item>
            <q-item clickable dense tag="a" target="_blank" href="https://www.worldcommunitygrid.org/stat/viewMemberInfo.do?userName=boid.com">
          <q-item-section>
            <q-item-label>GPU</q-item-label>
          </q-item-section>
        </q-item>
 </q-expansion-item>
</template>

<script>
export default {
  name: 'HardwareLinks',
  data () {
    return {}
  }
}
</script>

<style>
</style>
