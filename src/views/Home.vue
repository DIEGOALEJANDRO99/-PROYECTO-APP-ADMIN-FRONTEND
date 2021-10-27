<template>
  <section class="home">
    <h1>BIENVENIDO ADMINISTRADOR</h1>
  </section>
</template>
<script>
// @ is an alias to /src

export default {
  name: 'Home',

  data() {
    return {
        
    }
   
  },

}
</script>

<style>
body{
  margin: 0;
}
.home{
  height: 95%;
  display: flex;
  justify-content: center;
  align-items: center;
  
}
form {
  width: 350px;
  height: 280px;
  border-radius: 10px;
  border: 2px solid #222222;
  padding: 20px 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-family: monospace;
}
input {
  font-family: monospace;
  height: 25px;
  padding: 5px 10px;
  outline: none;
  border-radius: 25px;
  border: 2px solid #222222;


}
h1{
  font-size: 200%;
  padding: 0px;
  margin: 0px;
}
  
</style>
