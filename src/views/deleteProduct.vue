<template>
  <h1>&nbsp;&nbsp;&nbsp;&nbsp;</h1> 
  <h1>&nbsp;&nbsp;&nbsp;&nbsp;</h1> 
  <section class="delete">
    <form class="formDP1" @submit.prevent="deletes()">
      <H3>ELIMINAR PRODUCTO POR ID</H3>
      <input
        type="number"
        class="input-form"
        placeholder="Id del producto"
        v-model="form.id_prod"
      />
      <button type="submit">ELIMINAR</button>
    </form>
    <form class="formDP2" @submit.prevent="home()">
        <button type="submit">REGRESAR</button>
    </form>
  </section>
</template>


<script>
import axios from "axios";
export default {
  name: "delete",
  data() {
    return {
      form: {
        id_prod: 0,
      },
    };
  },
  methods: {
    home(){
      this.$router.push({ name: "Home" });
    },
    deletes() {
      if (this.form.id_prod > 0) {
        if (confirm("¿Esta seguro que desea eliminarlo?")) {
          axios
            .delete(
              "https://deploy-full.herokuapp.com/productDelete/" +
                this.form.id_prod,
              {
                headers: {
                  "Content-Type": "application/json",
                },
              }
            )
            .then((result) => {
              if(result){
                  alert("Producto eliminado")
              }
              
            })
            .catch((error) => {
                if(error){

                
              alert("Producto no encontrado");
                }
            });
        }
      }else{
            alert("Ingrese un id valido")
        }
    },
  },
};
</script>

<style scoped>
.delete {
  height: 80%;
  width: 10%px;
	display: flex;
	flex-direction: column;
	flex-wrap: nowrap;
	justify-content: flex-center;
	align-items: center;
	align-content: flex-start;


}
.formDP1 {
  width: 350px;
  height: 200px;
  border-radius: 10px;
  border: 2px solid #222222;
  padding: 10px 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
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
  font-family: monospace;
  height: 26px;
  padding: 5px 10px;
  border: 4px solid #4fc6ca;
}
.formDP2{
  border: none;
  padding: 20px 20px;
}


</style>