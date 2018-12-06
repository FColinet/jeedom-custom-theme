<template>
  <div class="wrapper">
    <div class="menu">
      <div class="adaptive center">
        <ul>
          <li v-bind:class="{ active: menuActived === 'home' }">
            <a v-on:click="menuActived = 'home'; $emit('change', menuActived)">
              <img calss="img-responsive" src="../assets/home.png">
            </a>
          </li>
          <li v-bind:class="{ active: menuActived === 'sensors' }">
            <a v-on:click="menuActived = 'sensors'; $emit('change', menuActived)">
              <img calss="img-responsive" src="../assets/sensors.png">
            </a>
          </li>
          <li v-bind:class="{ active: menuActived === 'automation' }">
            <a v-on:click="menuActived = 'automation'; $emit('change', menuActived)">
              <img calss="img-responsive" src="../assets/automation.png">
            </a>
          </li>
          <li v-bind:class="{ active: menuActived === 'security' }">
            <a v-on:click="menuActived = 'security'; $emit('change', menuActived)">
              <img calss="img-responsive" src="../assets/security.png">
            </a>
          </li>
          <li v-bind:class="{ active: menuActived === 'settings' }">
            <a v-on:click="menuActived = 'settings'; $emit('change', menuActived)">
              <img calss="img-responsive" src="../assets/settings.png">
            </a>
          </li>
        </ul>
      </div>
      <div>
        Clock ?
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Menu',
  props: {
    menuActived: {
      default: 'home',
      type: String,
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.wrapper {
  width: 100%;

  & .menu {
    /* position */
    display: flex;
    height: 5em;
    align-items: center;
    /* color */
    color: #ffffff;
    background-color: rgba(255, 255, 255, 0.4);

    & > div:last-of-type {
      margin-right: 1em;
    }

    & .adaptive {
      flex: 1;
    }

    & .center {
      text-align: center;
    }

    & ul {
      display: flex;
      justify-content: center;
      margin: 0;
      padding: 0;
      list-style-type: none;
    }

    & ul > li {
      padding: 0.5em 1em;
    }

    & ul > li:hover,
    & ul > li.active {
      cursor: pointer;
      color: #000000;
      background-color: rgba(0, 0, 0, 0.4);
    }

    & ul > li img {
      max-height: 3em;
    }
  }
}
</style>
