
<template>
  <div>
    <section class="getPr">
      <form @submit.prevent="login()">
        <H4>LISTAR PRODUCTO POR ID</H4>
        <input
          type="number"
          class="input-form"
          placeholder="Id del producto"
          v-model="form.id_prod"
        />
        <button type="submit">Buscar</button>
      </form>
    </section>
    <div class="Info">
      <h2>Información del producto</h2>
      <table>
        <tr>
          <td>ID</td>
          <td>NOMBRE</td>
          <td>DESCRIPCION</td>
          <td>PRECIO</td>
          <td>CANTIDAD</td>
          <td>TALLA</td>
        </tr>

        <tr>
          <td>
            <span>{{ form.id_prod }} </span>
          </td>
          <td>
            <span>{{ form.name_prod }} </span>
          </td>
          <td>
            <span>{{ form.desc_prod }} </span>
          </td>
          <td>
            <span>{{ form.price_prod }} Euros</span>
          </td>
          <td>
            <span>{{ form.amount_prod }} </span>
          </td>
          <td>
            <span>{{ form.size_prod }} </span>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>




<script>
import axios from "axios";
export default {
  name: "getProduct",
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
    login() {
      if (this.form.id_prod != null > 1) {
        axios
          .get(
            "https://deploy-full.herokuapp.com/productDetail/" +
              this.form.id_prod,

            {
              headers: {
                "Content-Type": "application/json",
              },
            }
          )
          .then((result) => {
            this.form.name_prod = result.data.name_prod;
            this.form.desc_prod = result.data.desc_prod;
            this.form.amount_prod = result.data.amount_prod;
            this.form.price_prod = result.data.price_prod;
            this.form.size_prod = result.data.size_prod;
          })
          .catch((error) => {
            if (error) {
              alert("producto no encontrado");
              this.form.name_prod = "";
              this.form.desc_prod = "";
              this.form.amount_prod = 0;
              this.form.price_prod = 0;
              this.form.size_prod = "";
            }
          });
      } else {
        alert("Ingrese una Id valida");
        this.form.name_prod = "";
        this.form.desc_prod = "";
        this.form.amount_prod = 0;
        this.form.price_prod = 0;
        this.form.size_prod = "";
      }
    },
  },
};
</script>



<style scoped>
.Info {
  width: 100%;
  height: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: monospace;
}

.getPr {
  height: 95%;
  display: flex;
  justify-content: center;
  align-items: center;
}

form {
  width: 450px;
  height: 200px;
  border-radius: 10px;
  border: 2px solid #222222;
  padding: 10px 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-family: monospace;
  margin: 10px;
  font-size: 20px;
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
h2 {
  color: aliceblue;
  padding: 3px;
}
.Info span {
  color: black;
}

table {
  width: 80%;
  border: 3px solid black;
  border-collapse: collapse;
  margin: 30px;
}
th,
td {
  border: 3px solid black;
  border-collapse: collapse;
  padding: 15px;
  font-family: monospace;
  font-size: 22px;
  color: white;
}
</style>