<template>
    <h1>&nbsp;&nbsp;&nbsp;&nbsp;</h1>
    <h1>&nbsp;&nbsp;&nbsp;&nbsp;</h1>
    <div class="h1Home">
        <h1>BIENVENIDOR ADMINISTRADOR</h1>
    </div>
    <section class="home">

        <form id="formHome" @submit.prevent="crear()">
            <button type="submit">CREAR PRODUCTO</button>
        </form>
        <form  id="formHome" class="form1" @submit.prevent="update()">
            <button type="submit">ACTUALIZAR PRODUCTO</button>
        </form>
        <form id="formHome" @submit.prevent="deleteP()">
            <button type="submit">ELIMINAR PRODUCTO</button>
        </form>
        <form id="formHome" @submit.prevent="detail()">
            <button type="submit">MOSTRAR PRODUCTO</button>
        </form>
        <form id="formHome" @submit.prevent="checkCreate()">
            <button type="submit">CREAR FACTURA</button>
        </form>
        <form id="formHome" @submit.prevent="checkDetail()">
            <button type="submit">MOSTRAR FACTURA</button>
        </form>
        <form id="formHome" @submit.prevent="exit()">
            <button type="submit">CERRAR SESIÓN</button>
        </form>

    </section>
</template>

<script>
export default {

    name: "Home",

    methods: {

        crear(){
            this.$router.push({ name: "createProduct" });
        },
        update(){
            this.$router.push({ name: "productUpdate" });
        },
        deleteP(){
            this.$router.push({ name: "deleteProduct" });
        },
        detail(){
            this.$router.push({ name: "getProduct" });
        },
        checkCreate(){
            this.$router.push({ name: "checkCreate" });
        },
        checkDetail(){
            this.$router.push({ name: "getCheck" });
        },
        exit(){
            localStorage.setItem("user", "");
            localStorage.setItem("refresh", "");
            localStorage.setItem("access", "");
            this.$router.push({ name: "Login" });
        }

    },
    
}
</script>

<style>
body{
    display: flex;
	flex-direction: column;
	flex-wrap: nowrap;
	justify-content: center;
	align-items: stretch;
	align-content: stretch;
    margin: 0;
}
.home{
    height: 70%;
    display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	align-content: stretch;
}
#formHome{
    height: 10px;
    border: none;
    margin: 15px;
    }
.h1Home h1{
    color: white;
}





</style>