<template>
  <div style="height: 100vh; background: var(--desktop-background)">
    <WelcomeWindowComponent />
    <ResumeComponent v-show="portfolioBool" @click="handleClickPortfolio($event)" />
    <AboutMeComponent v-show="aboutBool" @click="handleClickAbout($event)" />
    <InfoComponent v-show="infoBool" @click="handleClickInfo($event)" />
    <a2k-desktop>
      <a2k-icon-button
        @dblclick="openPortfolio()"
        icon="documents-icon"
        text="Portfolio"
      ></a2k-icon-button>
      <a2k-icon-button icon="github-icon" @dblclick="openGit()" text="Github"></a2k-icon-button>
      <a2k-icon-button icon="help-icon" text="About" @dblclick="openAbout()"></a2k-icon-button>
      <a2k-icon-button icon="info-icon" text="Info" @dblclick="openInfo()"></a2k-icon-button>
    </a2k-desktop>
  </div>
</template>

<script>
import ResumeComponent from './ResumeComponent.vue'
import AboutMeComponent from './AboutMeComponent.vue'
import InfoComponent from './InfoComponent.vue'
import WelcomeWindowComponent from './WelcomeWindowComponent.vue'
export default {
  components: {
    ResumeComponent,
    AboutMeComponent,
    InfoComponent,
    WelcomeWindowComponent
  },
  name: 'DesktopComponent',
  data() {
    return {
      portfolioBool: false,
      aboutBool: false,
      infoBool: false
    }
  },
  methods: {
    openPortfolio() {
      this.portfolioBool = true
    },
    handleClickPortfolio(event) {
      console.log('here')
      if (event.originalTarget.outerHTML == '<a2k-window-actions></a2k-window-actions>') {
        this.portfolioBool = false
      }
    },
    handleClickInfo(event) {
      if (event.originalTarget.outerHTML == '<a2k-window-actions></a2k-window-actions>') {
        this.infoBool = false
      }
    },
    handleClickAbout(event) {
      if (event.originalTarget.outerHTML == '<a2k-window-actions></a2k-window-actions>') {
        this.aboutBool = false
      }
    },
    openGit() {
      window.open('https://github.com/SamNicklez')
    },
    openInfo() {
      this.infoBool = true
    },
    openAbout() {
      this.aboutBool = true
    }
  }
}
</script>
<style scoped>
#desktop {
  position: absolute;
  background-color: #386ca0;
  height: 100vh;
  width: 100vw;
  cursor: var(--cursor-default);
}
</style>
