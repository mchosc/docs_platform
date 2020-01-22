<template>
  <q-layout view="hHh LpR fFf">
    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-btn dense flat round icon="img:statics/icons/boid-bird.svg" @click="left = !left" />
         <q-toolbar-title class="boid-font-lg">
              <q-toolbar-label clickable @click="$router.push('./')" ><b>boid</b> docs</q-toolbar-label>
         </q-toolbar-title>
         <q-btn dense flat round icon="subject" @click="right = !right"/>
      </q-toolbar>
   </q-header>

  <q-drawer show-if-above
          v-model="left"
          side="left" elevated
          :width="225"
          :breakpoint="200"
          bordered
          content-class="bg-grey-3"
          text-color="grey-6">

          <howtostart-links />
          <installation-links />
          <hardware-links />
          <eoscontracts-links />
          <addinfo-links />
  </q-drawer>

   <q-drawer show-if-above v-model="right" side="right" elevated tocData/>
    <q-page-container>
      <router-view />
    </q-page-container>

<q-footer reveal elevated class="flex flex-center column bg-grey-8">
  <q-toolbar class="row justify-start items-center content-center boid-font-footer">
      
  <q-btn-dropdown class="q-mx-sm" style="overflow: auto;" color="grey-8" label="SOCIAL">
      <social-links />
  </q-btn-dropdown>

  <q-btn-dropdown style="overflow: auto;" color="grey-8" label="LINKS">
      <main-links />
    </q-btn-dropdown>
</q-toolbar>
    </q-footer>

  </q-layout>
</template>

<script>
export default {
 name: 'Links',
  components: {
    'social-links': () => import('../components/SocialLinks'),
    'main-links': () => import('../components/MainLinks'),
    'howtostart-links': () => import('../components/HowToStartLinks'),
    'installation-links': () => import('../components/InstallationLinks'),
    'hardware-links': () => import('../components/HardwareLinks'),
    'eoscontracts-links': () => import('../components/eosContractsLinks'),
    'addinfo-links': () => import('../components/AddInfoLinks'),
  },

  data () {

    return {
      left: true,
      right: true
    }
  },

 mounted () {
    this.toc = this.tocData
  },

  computed: {
    toc:
    {
      get () {
        return this.$store.state.common.toc
      },
      set (toc) {
        this.$store.commit('toc', toc)
      }
    }
  }

}
</script>