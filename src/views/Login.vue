<template>
  <section class="login">
    <form @submit.prevent="login()">
      <H3>INICIAR SESIÓN</H3>
      <input
        type="text"
        class="input-form"
        placeholder="Usuario"
        v-model="form.username"
      />
      <input
        type="password"
        class="input-form"
        placeholder="Contraseña"
        v-model="form.password"
      />
      <button type="submit">INGRESAR</button>
    </form>
  </section>
</template>

<script>
import axios from "axios";
export default {
  name: "Login",
  data() {
    return {
      form: {
        username: "",
        password: "",
      },
    };
  },

  methods: {
    login() {
      if (this.form.username != ""> 1 && this.form.password.length != "") {
        axios
          .post("https://deploy-full.herokuapp.com/loginUser/", this.form, {
            headers: {
              "Content-Type": "application/json",
            },
          })
          .then((result) => {
            
            localStorage.setItem("user", this.form.username);
            localStorage.setItem("refresh", result.data.refresh);
            localStorage.setItem("access", result.data.access);
            this.$emit('isAuth',true)
            this.$router.push({ name: "Home" });
            
          })
          .catch((error) => {
            
            if (error.response.status === 401)
              alert("Credenciales incorrectas");
              this.$emit('isAuth',false)

          });
      }else{
        alert("Ingrese las crendenciales");
      }
    },
  },
};
</script>
<style scoped>
.login {
  height: 95%;
  display: flex;
  justify-content: center;
  align-items: center;
}
form {
  width: 350px;
  height: 200px;
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