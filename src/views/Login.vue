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
      if (this.form.username.length > 1 && this.form.password.length > 1) {
        axios
          .post("https://deploy-full.herokuapp.com/loginUser/", this.form, {
            headers: {
              "Content-Type": "application/json",
            },
          })
          .then((result) => {
            console.log(result);
            localStorage.setItem("user", this.form.username);
            localStorage.setItem("refresh", result.data.refresh);
            localStorage.setItem("access", result.data.access);
            this.$emit('isAuth',true)
            this.$router.push({ name: "Home" });
            
          })
          .catch((error) => {
            console.log(error);
            if (error.response.status === 401)
              alert("ERROR 401: Credenciales incorrectas");
              this.$emit('isAuth',false)

          });
      }
    },
  },
};
</script>
<style scoped>
.login {
  height: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
}
form {
  width: 350px;
  height: 200px;
  border-radius: 10px;
  border: 2px solid cyan;
  padding: 20px 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-family: fantasy;
}
input {
  font-family: fantasy;
  height: 25px;
  padding: 5px 10px;
}
button {
  font-family: fantasy;
  font-weight: bold;
  color: white;
  background-color: rgb(224, 64, 211);
  border: none;
  border-radius: 25px;
  padding: 8px;
}
</style>