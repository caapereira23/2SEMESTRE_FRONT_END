<template>
  <div class="form">
    <h3>:: LOGIN ::</h3>
    <form @submit.prevent="submit">

      <div class="container">
        <label><b>E-mail</b></label>
        <input type="text" placeholder="Enter E-mail" v-model="email" required />

        <label><b>Password</b></label>
        <input type="password" placeholder="Enter Password" v-model="password" required/>

        <button type="submit">Login</button>
        <p>Não possui conta? Faça <a href="/signup">registo</a> agora</p>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    submit() {
      axios
        .post(
          "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAyJe8uy9_2OYgCIzpUoRbRpgg_3rTnO80",
          {
            email: this.email,
            password: this.password,
            returnSecureToken: true,
          }
        )
        .then(
          (res) => this.$store.commit("setUser", res.data),
          this.$router.push("/")
        )
        .catch((res) => console.log(res));
    },
  },
};
</script>

<style>
.form {
  display: flex;
  align-items: center;
  height: 94vh;
  justify-items: flex-end;
  flex-direction: column;
  /* background-image: url("../assets/background.jpg"); */
}

body {
  font-family: Arial, Helvetica, sans-serif;
  
}
form {
  border: 3px solid #f1f1f1;
}

input[type="text"],
input[type="password"] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
}

button {
  background-color: #04aa6d;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
}

button:hover {
  opacity: 0.8;
}

.cancelbtn {
  width: auto;
  padding: 10px 18px;
  background-color: #f44336;
}


.container {
  padding: 16px;
}

span.psw {
  float: right;
  padding-top: 16px;
}

@media screen and (max-width: 300px) {
  span.psw {
    display: block;
    float: none;
  }
  .cancelbtn {
    width: 100%;
  }
}
</style>