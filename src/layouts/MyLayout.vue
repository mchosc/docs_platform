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
          :width="200"
          :breakpoint="200"
          bordered
          content-class="bg-grey-3">         
<q-list dense bordered padding class="rounded-borders">
       <q-item >
            <q-item-section avatar>
            <q-icon color="grey-8" name="account_circle"/>
          </q-item-section>
  <q-item-section>
            <q-item-label class="boid-font-menu"><b>How to start</b></q-item-label>
          </q-item-section>
        </q-item>
         
            <q-item clickable v-ripple tag="a" target="_blank" href="https://www.worldcommunitygrid.org/stat/viewMemberInfo.do?userName=boid.com">
              <q-item-section>
                <q-item-label class="boid-font-menu">Introduction</q-item-label>
              </q-item-section>
            </q-item>

            <q-item clickable tag="a" target="_blank" href="https://www.worldcommunitygrid.org/stat/viewMemberInfo.do?userName=boid.com">
          <q-item-section>
            <q-item-label class="boid-font-menu">Mainnet Mechanics</q-item-label>
          </q-item-section>
        </q-item>
            <q-item clickable tag="a" target="_blank" href="https://www.worldcommunitygrid.org/stat/viewMemberInfo.do?userName=boid.com">
          <q-item-section>
            <q-item-label class="boid-font-menu">Boid Power Mechanics</q-item-label>
          </q-item-section>
        </q-item>
         <q-item clickable tag="a" target="_blank" href="https://www.worldcommunitygrid.org/stat/viewMemberInfo.do?userName=boid.com">
          <q-item-section>
            <q-item-label class="boid-font-menu">Teams</q-item-label>
          </q-item-section>
        </q-item>            <q-item clickable tag="a" target="_blank" href="https://www.worldcommunitygrid.org/stat/viewMemberInfo.do?userName=boid.com">
            <q-item-label class="boid-font-menu">EOS account</q-item-label>
          </q-item-section>
        </q-item>
                    <q-item clickable tag="a" target="_blank" href="https://www.worldcommunitygrid.org/stat/viewMemberInfo.do?userName=boid.com">
          <q-item-section>
            <q-item-label class="boid-font-menu">proxy</q-item-label>
          </q-item-section>
        </q-item>
                    <q-item clickable tag="a" target="_blank" href="https://www.worldcommunitygrid.org/stat/viewMemberInfo.do?userName=boid.com">
          <q-item-section>
            <q-item-label class="boid-font-menu">FAQ</q-item-label>
          </q-item-section>
        </q-item>
        
           </q-list>
           <q-list dense bordered padding class="rounded-borders">
                   <q-item>
            <q-item-section avatar>
            <q-icon color="grey-8" name="code" />
          </q-item-section>
  <q-item-section>
            <q-item-label class="boid-font-menu"><b>Installation</b></q-item-label>
          </q-item-section>
        </q-item>
                    <q-item clickable tag="a" target="_blank" href="https://www.worldcommunitygrid.org/stat/viewMemberInfo.do?userName=boid.com">
          <q-item-section>
            <q-item-label class="boid-font-menu">Windows</q-item-label>
          </q-item-section>
        </q-item>            <q-item clickable tag="a" target="_blank" href="https://www.worldcommunitygrid.org/stat/viewMemberInfo.do?userName=boid.com">
          <q-item-section>
            <q-item-label class="boid-font-menu">Linux</q-item-label>
          </q-item-section>
        </q-item>            <q-item clickable tag="a" target="_blank" href="https://www.worldcommunitygrid.org/stat/viewMemberInfo.do?userName=boid.com">
          <q-item-section>
            <q-item-label class="boid-font-menu">MAC</q-item-label>
          </q-item-section>
        </q-item>
<q-item clickable tag="a" target="_blank" href="https://www.worldcommunitygrid.org/stat/viewMemberInfo.do?userName=boid.com">
          <q-item-section>
            <q-item-label class="boid-font-menu">Validators setup</q-item-label>
          </q-item-section>
        </q-item>

        </q-list>
        <q-list dense bordered padding class="rounded-borders">
        <q-item>         
                    <q-item-section avatar>
            <q-icon color="grey-8" name="build" />
          </q-item-section>
          <q-item-section>
            <q-item-label class="boid-font-menu"><b>Hardware</b></q-item-label>
          </q-item-section>
        </q-item>
           <q-item clickable tag="a" target="_blank" href="https://www.worldcommunitygrid.org/stat/viewMemberInfo.do?userName=boid.com">
          <q-item-section>
            <q-item-label class="boid-font-menu">CPU</q-item-label>
          </q-item-section>
        </q-item>
            <q-item clickable tag="a" target="_blank" href="https://www.worldcommunitygrid.org/stat/viewMemberInfo.do?userName=boid.com">
          <q-item-section>
            <q-item-label class="boid-font-menu">GPU</q-item-label>
          </q-item-section>
        </q-item>
        </q-list>

<q-list dense bordered padding class="rounded-borders">
        <q-item >
          <q-item-section avatar>
            <q-icon name="img:statics/icons/eos.svg" />
          </q-item-section>
          <q-item-section>
            <q-item-label class="boid-font-menu"><b>EOS contracts</b></q-item-label>
          </q-item-section>
        </q-item><q-item clickable tag="a" target="_blank" href="https://www.worldcommunitygrid.org/stat/viewMemberInfo.do?userName=boid.com">
                  <q-item-section>
            <q-item-label class="boid-font-menu">Stake, unstake, delegate</q-item-label>
          </q-item-section>
        </q-item><q-item clickable tag="a" href="../#/claim">
                  <q-item-section>
            <q-item-label class="boid-font-menu">Claim</q-item-label>
          </q-item-section>
        </q-item>
     <q-item clickable tag="a" target="_blank" href="https://www.worldcommunitygrid.org/stat/viewMemberInfo.do?userName=boid.com">
                    <q-item-section>
            <q-item-label class="boid-font-menu">Transtake</q-item-label>
          </q-item-section>
        </q-item>
            <q-item clickable tag="a" target="_blank" href="https://www.worldcommunitygrid.org/stat/viewMemberInfo.do?userName=boid.com">
                    <q-item-section>
            <q-item-label class="boid-font-menu">Transfer</q-item-label>
          </q-item-section>
        </q-item>
</q-list>
<q-list dense bordered padding class="rounded-borders">
            <q-item>
                        <q-item-section avatar>
            <q-icon color="grey-8" name="vertical_split" />
          </q-item-section>
          <q-item-section>
            <q-item-label class="boid-font-menu"><b>Additional Info</b></q-item-label>
          </q-item-section>
        </q-item>
           <q-item clickable tag="a" target="_blank" href="https://www.worldcommunitygrid.org/stat/viewMemberInfo.do?userName=boid.com">
          <q-item-section>
            <q-item-label class="boid-font-menu">Media</q-item-label>
          </q-item-section>
        </q-item> 
                   <q-item clickable tag="a" target="_blank" href="https://www.worldcommunitygrid.org/stat/viewMemberInfo.do?userName=boid.com">
                  <q-item-section>
            <q-item-label class="boid-font-menu">Exchanges</q-item-label>
          </q-item-section>
        </q-item>
                    <q-item clickable tag="a" target="_blank" href="https://www.worldcommunitygrid.org/stat/viewMemberInfo.do?userName=boid.com">
                    <q-item-section>
            <q-item-label class="boid-font-menu">Partnership</q-item-label>
          </q-item-section>
        </q-item>
                    <q-item clickable tag="a" target="_blank" href="https://www.worldcommunitygrid.org/stat/viewMemberInfo.do?userName=boid.com">
                  <q-item-section>
            <q-item-label class="boid-font-menu">Timeline</q-item-label>
          </q-item-section>
        </q-item>
                   <q-item clickable tag="a" target="_blank" href="https://www.worldcommunitygrid.org/stat/viewMemberInfo.do?userName=boid.com">
                  <q-item-section>
            <q-item-label class="boid-font-menu">Graphics</q-item-label>
          </q-item-section>
        </q-item>
        </q-list>

  </q-drawer>

   <q-drawer show-if-above v-model="right" side="right" elevated>
      <ul class="sidebar-menu">
    <li class="header">TOOLS</li>
    <router-link tag="li" class="pageLink" to="/">
      <a>
        <i class="fa fa-desktop"></i>
        <span class="page">Dashboard</span>
      </a>
    </router-link>
    <router-link tag="li" class="pageLink" to="/tables">
      <a>
        <i class="fa fa-table"></i>
        <span class="page">Tables</span>
      </a>
    </router-link>

  </ul>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

<q-footer reveal elevated class="flex flex-center column bg-grey-8">
  <q-toolbar class="row justify-start items-center content-center boid-font-footer">
      
  <q-btn-dropdown class="q-mx-sm" style="overflow: auto;" color="grey-8" label="SOCIAL">
      <q-list>        
        <q-item clickable tag="a" target="_blank" href="https://community.boid.com">
          <q-item-section avatar>
            <q-icon name="img:statics/icons/handshake.svg" />
          </q-item-section>
          <q-item-section>
            <q-item-label class="boid-font-menu">Community</q-item-label>
          </q-item-section>
        </q-item>     
        <q-item clickable tag="a" target="_blank" href="https://t.me/Boidcom_official">
          <q-item-section avatar>
            <q-icon name="img:statics/icons/telegram.svg" />
          </q-item-section>
          <q-item-section>
            <q-item-label class="boid-font-menu">Telegram</q-item-label>
          </q-item-section>
          </q-item>
       <q-item clickable tag="a" target="_blank" href="https://discord.gg/Frm38a6">
          <q-item-section avatar>
            <q-icon name="img:statics/icons/discord.svg" />
          </q-item-section>
          <q-item-section>
            <q-item-label class="boid-font-menu">Discord</q-item-label>
          </q-item-section>
        </q-item>
       <q-item clickable tag="a" target="_blank" href="https://twitter.com/boidcom">
          <q-item-section avatar>
            <q-icon name="img:statics/icons/twitter.svg" />
          </q-item-section>
          <q-item-section>
            <q-item-label class="boid-font-menu">Twitter</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" target="_blank" href="https://www.facebook.com/boidcom">
          <q-item-section avatar>
            <q-icon name="img:statics/icons/facebook.svg" />
          </q-item-section>
          <q-item-section>
            <q-item-label class="boid-font-menu">Facebook</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" target="_blank" href="https://www.youtube.com/channel/UCL4I3DksM41qPKih2PbiQ7g/featured">
          <q-item-section avatar>
            <q-icon name="img:statics/icons/youtube.svg" />
          </q-item-section>
          <q-item-section>
            <q-item-label class="boid-font-menu">Youtube</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
  </q-btn-dropdown>

  <q-btn-dropdown style="overflow: auto;" color="grey-8" label="LINKS">
      <q-list>        
         <q-item clickable tag="a" target="_blank" href="https://app.boid.com">
          <q-item-section avatar>
            <q-icon name="img:statics/icons/boid-bird.svg" />
          </q-item-section>
          <q-item-section>
            <q-item-label class="boid-font-menu">APP Web</q-item-label>
          </q-item-section>
        </q-item>
         <q-item clickable tag="a" target="_blank" href="https://learn.boid.com">
          <q-item-section avatar>
            <q-icon name="img:statics/icons/school.svg" />
          </q-item-section>
          <q-item-section>
            <q-item-label class="boid-font-menu">Learn</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" target="_blank" href="https://docs.boid.com">
          <q-item-section avatar>
            <q-icon name="img:statics/icons/documents.svg" />
          </q-item-section>
          <q-item-section>
            <q-item-label class="boid-font-menu">Documentation</q-item-label>
          </q-item-section>
        </q-item>
      <q-item clickable tag="a" target="_blank" href="https://stats.boid.com">
          <q-item-section avatar>
            <q-icon name="img:statics/icons/stats.svg" />
          </q-item-section>
          <q-item-section>
            <q-item-label class="boid-font-menu">Statistics</q-item-label>
          </q-item-section>
      </q-item>

<q-separator spaced />
        <q-item
          clickable
          tag="a"
          target="_blank"
          href="https://github.com/boid-com"
        >
          <q-item-section avatar>
            <q-icon name="img:statics/icons/github.svg" />
          </q-item-section>
          <q-item-section>
            <q-item-label class="boid-font-menu">Github</q-item-label>
          </q-item-section>
        </q-item>

<q-item clickable tag="a" target="_blank" href="https://bloks.io/account/boidcomtoken?loadContract=true&tab=Actions&account=boidcomtoken">
          <q-item-section avatar>
            <q-icon name="img:statics/icons/bloks-io-logo-vector.svg" />
          </q-item-section>
          <q-item-section>
            <q-item-label class="boid-font-menu">Token contract</q-item-label>
          </q-item-section>
</q-item>
<q-separator spaced />
<q-item clickable tag="a" target="_blank" href="https://everipedia.org/wiki/lang_en/boid-1">
          <q-item-section avatar>
            <q-icon name="img:statics/icons/everipedia.svg" />
          </q-item-section>
          <q-item-section>
            <q-item-label class="boid-font-menu">Everipedia</q-item-label>
          </q-item-section>
</q-item>

<q-item clickable tag="a" target="_blank" href="https://www.worldcommunitygrid.org/stat/viewMemberInfo.do?userName=boid.com">
          <q-item-section avatar>
            <q-icon name="img:statics/icons/wcg-logo.svg" />
          </q-item-section>
          <q-item-section>
            <q-item-label class="boid-font-menu">WCG stats</q-item-label>
          </q-item-section>
</q-item>
<q-separator spaced />
<q-item clickable tag="a" target="_blank" href="https://bloks.io/tokens/BOID-eos-boidcomtoken">
          <q-item-section avatar>
            <q-icon name="img:statics/icons/token.svg" />
          </q-item-section>
          <q-item-section>
            <q-item-label class="boid-font-menu">Highest holders</q-item-label>
          </q-item-section>
</q-item>

<q-item clickable tag="a" target="_blank" href="https://bloks.io/account/boidworkfund">
          <q-item-section avatar>
            <q-icon name="img:statics/icons/token-more.svg" />
          </q-item-section>
          <q-item-section>
            <q-item-label class="boid-font-menu">Work fund status</q-item-label>
          </q-item-section>
</q-item>

      </q-list>
    </q-btn-dropdown>
</q-toolbar>
    </q-footer>

  </q-layout>
</template>

<script>
export default {
  data () {

    return {
      left: true,
      right: true
    }
  }
}
</script>