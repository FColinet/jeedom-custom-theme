<template>
  <div class="wrapper" :data-plan-list_id="jeedomId">
  </div>
</template>

<script>
export default {
  name: 'Tile',
  props: {
    jeedomId: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.wrapper {
  background-color: rgba(255, 255, 255, 0.4);
}
</style>
