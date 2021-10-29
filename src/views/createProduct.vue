<template>
  <h1>&nbsp;&nbsp;&nbsp;&nbsp;</h1>
  <section class="homeCP">
    <form class="formCP" @submit.prevent="create()">
      <H3>INGRESE INFORMACIÓN DESCRIPCIÓN DEL PRODUCTO</H3>
      <input
        type="number"
        class="input-form"
        placeholder="Id del producto"
        v-model="form.id_prod"
      />
      <input
        type="text"
        class="input-form"
        placeholder="Nombre del producto"
        v-model="form.name_prod"
      />
      <input
        type="text"
        class="input-form"
        placeholder="Descripción del producto"
        v-model="form.desc_prod"
      />
      <input
        type="number"
        class="input-form"
        placeholder="Cantidad"
        v-model="form.amount_prod"
      />
      <input
        type="number"
        class="input-form"
        placeholder="Precio del producto"
        v-model="form.price_prod"
      />
      <input
        type="text"
        class="input-form"
        placeholder="Talla del producto"
        v-model="form.size_prod"
      />
    
      <button type="submit">CREAR PRODUCTO</button>
    </form>
    <form class="formCP2" @submit.prevent="home()">
        <button type="submit">REGRESAR</button>
    </form>
    
  </section>
</template>

<script>
// @ is an alias to /src
import axios from "axios";
export default {
  name: 'createProduct',

  data() {
    return {

      form: {
        id_prod: 0,
        name_prod:"",
        desc_prod: "",
        amount_prod: 0,
        price_prod: 0,
        size_prod: "",
      },
        
    };
   
  },

  methods: {

    create(){
        axios
          .post("https://deploy-full.herokuapp.com/productCreate/", this.form, {
            headers: {
              "Content-Type": "application/json",
            },
        })
        .then(() => {
          alert("Producto Creado");
          this.form.id_prod=0;
          this.form.name_prod="";
          this.form.amount_prod=0;
          this.form.price_prod=0;
          this.form.desc_prod="";
          this.form.size_prod="";



        })
        .catch((error) => {
          if (error)
            alert("Producto no creado" + error);
        });
      
    },
    home(){
      this.$router.push({ name: "Home" });
    }
  }
}
</script>

<style>
body {
  margin: 0;
}
.homeCP{
  height: 95%;
	display: flex;
	flex-direction: column;
	flex-wrap: nowrap;
	justify-content: flex-center;
	align-items: center;
	align-content: flex-start;
}
.formCP {
  width: 350px;
  height: 300px;
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
  margin: 2px;
  outline: none;
  border-radius: 25px;
  border: 2px solid #222222;
}
h1 {
  font-size: 200%;
  padding: 0px;
  margin: 0px;

}
.formCP2{

  border: none;
  display: flex;
  height: 45px;
	flex-direction: column;
	flex-wrap: wrap;
	justify-content: flex-end;
	align-items: center;
	align-content: space-around;
}
button{

  margin: 2px;
}
.formCP h3{

  margin: 0%;
}
h3{
  font-size: 20px;
}
</style>
