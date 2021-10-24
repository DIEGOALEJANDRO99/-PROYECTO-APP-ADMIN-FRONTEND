<template>
  <AppHeader :is_auth ="isAuth"/>
  <section class="container">
    <router-view 
      @isAuth="isAuth = $event"
    />
  </section>
  <AppFooter/>
</template>

<script>
import AppHeader from '@/components/AppHeader'
import AppFooter from '@/components/AppFooter'
export default {
  components: {AppHeader,AppFooter},

  data() {
    return {
      isAuth: false 
    }
  },

  created(){
    if(localStorage.getItem('access')){
      this.isAuth =true
    }else{
      this.$router.push({name: 'Login'})
    }
    
  }

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
