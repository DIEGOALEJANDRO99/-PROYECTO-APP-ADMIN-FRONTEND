<template>
  <AppHeader/>
  <section class="container">
    <router-view/>
  </section>
  <AppFooter/>
</template>

<script>
import AppHeader from '@/components/AppHeader'
import AppFooter from '@/components/AppFooter'
export default {
  components: {AppHeader,AppFooter}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.container{
  
  height: calc(80vh);
}
</style>
