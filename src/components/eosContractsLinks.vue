<template>      
    <q-expansion-item
        dense-toggle
        expand-separator
        icon="img:statics/icons/eos.svg"
        label="EOS contracts"
      >
 <q-item clickable dense tag="a" target="_blank" href="https://www.worldcommunitygrid.org/stat/viewMemberInfo.do?userName=boid.com">
                  <q-item-section>
            <q-item-label>Stake, unstake, delegate</q-item-label>
          </q-item-section>
        </q-item><q-item clickable dense tag="a" href="../#/claim">
                  <q-item-section>
            <q-item-label>Claim</q-item-label>
          </q-item-section>
        </q-item>
     <q-item clickable dense tag="a" target="_blank" href="https://www.worldcommunitygrid.org/stat/viewMemberInfo.do?userName=boid.com">
                    <q-item-section>
            <q-item-label>Transtake</q-item-label>
          </q-item-section>
        </q-item>
            <q-item clickable dense tag="a" target="_blank" href="https://www.worldcommunitygrid.org/stat/viewMemberInfo.do?userName=boid.com">
                    <q-item-section>
            <q-item-label>Transfer</q-item-label>
          </q-item-section>
        </q-item>
</q-expansion-item>
</template>

<script>
export default {
  name: 'eosContractsLinks',
  data () {
    return {}
  }
}
</script>

<style>
</style>
