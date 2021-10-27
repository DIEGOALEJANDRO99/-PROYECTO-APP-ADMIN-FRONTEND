<template>
  
  <section class="update">
    <form @submit.prevent="update()">
      <H3>ACTUALIZACIÓN DEL PRODUCTO</H3>
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

      <button type="submit">ACTUALIZAR PRODUCTO</button>
    </form>
  </section>
</template>

<script>
import axios from "axios";
export default {
  name: "productUpdate",

  data() {
    return {
      form: {
        id_prod: 0,
        name_prod: "",
        desc_prod: "",
        amount_prod: 0,
        price_prod: 0,
        size_prod: "",
      },
    };
  },
  methods: {
    update() {
      axios
        .put("https://deploy-full.herokuapp.com/productUpdate/" + this.form.id_prod,  this.form, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then(() => {
          alert("Producto Actualizado");
        })
        .catch((error) => {
          if (error) alert("Producto no actualizado" + error);
        });
    },
  },
};
</script>

<style>
body {
    display: flex;
	flex-direction: column;
	flex-wrap: nowrap;
	justify-content: center;
	align-items: stretch;
	align-content: stretch;
    margin: 0;
}
.update {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
form {
  width: 350px;
  height: 400px;
  border-radius: 10px;
  border: 2px solid #222222;
  padding: 10px 20px;
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
input:focus {
  font-family:monospace ;
  height: 28px;
  padding: 5px 10px;
  border: 4px solid #4fc6ca;

}

h3{
  color: #ffffff;
  font-size: 25px;

}
button {
  font-family: monospace;
  font-weight: bold;
  color: white;
  background-color: #e36b2c;
  border: none;
  border-radius: 25px;
  padding: 8px;
  cursor: pointer;
}
</style>