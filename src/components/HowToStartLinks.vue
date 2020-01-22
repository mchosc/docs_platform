<template>
      
       <q-expansion-item
        dense-toggle
        expand-separator
        icon="account_circle"
        label="How to start"
      >
            <q-item clickable dense v-ripple tag="a" href="../">
              <q-item-section>
                <q-item-label>Introduction</q-item-label>
              </q-item-section>
            </q-item>

            <q-item clickable dense tag="a" href="../#/mainnet">
          <q-item-section>
            <q-item-label>Mainnet Mechanics</q-item-label>
          </q-item-section>
        </q-item>
            <q-item clickable dense tag="a" href="../#/boidpower">
          <q-item-section>
            <q-item-label>Boid Power Mechanics</q-item-label>
          </q-item-section>
        </q-item>
         <q-item clickable dense tag="a" href="../#/teams">
          <q-item-section>
            <q-item-label>Teams</q-item-label>
          </q-item-section>
        </q-item> 
         <q-item clickable dense tag="a" href="../#/eosaccount">
            <q-item-label>EOS account</q-item-label>
          </q-item-section>
        </q-item>
                    <q-item clickable dense tag="a" target="_blank" href="https://www.worldcommunitygrid.org/stat/viewMemberInfo.do?userName=boid.com">
          <q-item-section>
            <q-item-label>proxy</q-item-label>
          </q-item-section>
        </q-item>
                    <q-item clickable dense tag="a" target="_blank" href="https://www.worldcommunitygrid.org/stat/viewMemberInfo.do?userName=boid.com">
          <q-item-section>
            <q-item-label>FAQ</q-item-label>
          </q-item-section>
        </q-item>
         </q-expansion-item>
</template>

<script>
export default {
  name: 'HowToStartLinks',
  data () {
    return {}
  }
}
</script>

<style>
</style>
