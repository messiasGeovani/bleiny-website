<template>
  <div id="app" class="has-background-black">
    <div class="container is-max-widescreen has-background-dark">
      <HomeSection />
    </div>
  </div>
</template>

<script lang="ts">
import HomeSection from '@/components/HomeSection.vue'

export default {
  name: 'App',
  components: {
    HomeSection,
  },
}
</script>

<style lang="scss" scoped>
#app {
  width: 100%;
  height: 100vh;
}
</style>
