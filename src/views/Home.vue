<template>
  <h1>BIENVENIDO ADMINISTRADOR</h1>
  <section class="home">
    <form @submit.prevent="create()">
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
        placeholder="Tala del producto"
        v-model="form.size_prod"
      />
      <button type="submit">CREAR PRODUCTO</button>
    </form>
  </section>
</template>
<script>
// @ is an alias to /src
import axios from "axios";
export default {
  name: 'Home',

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

        })
        .catch((error) => {
          if (error)
            alert("Producto no creado" + error);
        });
      
    }
  }
}
</script>

<style>
body {
  margin: 0;
}
.home {
  height: 95%;
  display: flex;
  justify-content: center;
  align-items: center;
}
form {
  width: 350px;
  height: 400px;
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
h1 {
  font-size: 200%;
  padding: 0px;
  margin: 0px;
}
</style>
