<template>
  <h1>&nbsp;&nbsp;&nbsp;&nbsp;</h1>
  <section class="update">
    <form class="formUC" @submit.prevent="update()">
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
    <form class="formUC2" @submit.prevent="home()">
      <button type="submit">REGRESAR</button>
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
    home() {
      this.$router.push({ name: "Home" });
    },
    update() {
      axios
        .put(
          "https://deploy-full.herokuapp.com/productUpdate/" +
            this.form.id_prod,
          this.form,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then(() => {
          alert("Producto Actualizado");
          this.form.id_prod = 0;
          this.form.name_prod = "";
          this.form.amount_prod = 0;
          this.form.price_prod = 0;
          this.form.desc_prod = "";
          this.form.size_prod = "";
        })
        .catch((error) => {
          if (error) alert("Producto no actualizado");
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
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: flex-center;
  align-items: center;
  align-content: flex-start;
}
.formUC {
  width: 350px;
  height: 320px;
  border-radius: 10px;
  border: 2px solid #222222;
  padding: 10px 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-family: monospace;
}
.formUC2 {
  border: none;
  margin: 10px;
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
  font-family: monospace;
  height: 28px;
  padding: 5px 10px;
  border: 4px solid #4fc6ca;
}

h3 {
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