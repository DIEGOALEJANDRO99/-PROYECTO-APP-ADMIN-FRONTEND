<template>
    <section class="crearFac">
        <h1>&nbsp;&nbsp;&nbsp;&nbsp;</h1>
        <h1>&nbsp;&nbsp;&nbsp;&nbsp;</h1>
        <h1>&nbsp;&nbsp;&nbsp;&nbsp;</h1>
        <h1>ESTA HERRAMIENTA SE ENCUENTRA EN PROCESO DE IMPLEMENTACIÓN</h1>
        <form class="formCF" @submit.prevent="home()">
            <button type="submit">REGRESAR</button>
        </form>

    </section>
</template>
<script>
export default {
    name: "checkCreate",

    methods: {
        home(){
            this.$router.push({ name: "Home" });
        }
    },
    
}
</script>
<style>
.crearFac h1{
    color: white;
}


</style>