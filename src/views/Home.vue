<template>
  <div class="wrapper" v-if="seen">
<!--
    <div class="row">
      <Tile jeedomId="1"/>
      <Tile jeedomId="2"/>
      <Tile jeedomId="3"/>
      <Tile jeedomId="4"/>
    </div>
    <div class="row">
      <Tile jeedomId="5"/>
      <Tile jeedomId="6"/>
      <Tile jeedomId="7"/>
      <Tile jeedomId="8"/>
    </div>
-->
  </div>
</template>

<script>
import Tile from '@/components/Tile.vue';

export default {
  name: 'home',
  components: {
    Tile,
  },
  props: {
    seen: Boolean,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.wrapper {
  & .row {
    display: flex;

    height: 400px;
    padding: 10px 10px 0 10px;

    & > div {
      flex: 1;
      margin-right: 10px;
      &:last-of-type {
        margin-right: 0;
      }
    }
  }
}
</style>
