<template>
   <header>
       <h1>DINO-ROCK FASHION</h1>
       <nav v-if="!isAuth">
           <router-link to = "/login">INICIAR SESIÓN</router-link>
       </nav>
   </header>
    
</template>
<script>
export default {

    name : "AppHeader",

    props:{
        isAuth: Boolean
    }
    
}
</script>
<style scoped>
*{
    box-sizing:border-box ;
}
header{
    font-family:fantasy;
    margin: 0;
    padding: 50;
    width: 100%;
    height: 5vh;
    min-height: 50px;
    background-color: aqua;
    color: rgb(255, 255, 255);
    display: flex;
    justify-content: space-between;
    align-items: center;
    

}
header h1{

    width: 50%;

}
nav a{
    font-family: fantasy;
    text-decoration: none;
    color: rgb(255, 248, 248);
    border: 2px solid rgb(255, 255, 255);
    border-radius: 6px;
    padding: 2px 10px;
}
nav a:first-of-type{
    margin-right: 30px;
}

</style>