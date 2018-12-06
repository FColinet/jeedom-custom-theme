<template>
  <div id="app">
    <Menu v-on:change="menuActived = $event"/>

    <Home v-bind:seen="menuActived === 'home'"/>
    <Sensors v-bind:seen="menuActived === 'sensors'"/>
    <Automation v-bind:seen="menuActived === 'automation'"/>
    <Security v-bind:seen="menuActived === 'security'"/>
    <Settings v-bind:seen="menuActived === 'settings'"/>
  </div>
</template>

<script>
import Menu from './components/Menu.vue';

import Home from './views/Home.vue';
import Sensors from './views/Sensors.vue';
import Automation from './views/Automation.vue';
import Security from './views/Security.vue';
import Settings from './views/Settings.vue';

export default {
  name: 'app',
  components: {
    Menu,
    Home,
    Sensors,
    Automation,
    Security,
    Settings,
  },
  props: {
    menuActived: {
      default: 'home',
      type: String,
    },
  },
};
</script>

<style lang="scss">
html, body {
  margin: 0;
  padding: 0;
  height: 100vh;

  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  text-align: center;
  color: white;
}
#app {
  position: fixed;
  top: 0;
  left: 0;

  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100vh;

  background-image: url('assets/background.jpg');
  background-size: auto 100vh;

  & > div:last-of-type {
    flex: 1;
  }
}
</style>
