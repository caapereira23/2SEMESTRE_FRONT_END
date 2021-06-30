<template>
  <div class="form">
    <h3>:: REGISTRAR ::</h3>
    <form @submit.prevent="submit">

      <div class="container">
        <label for="email"><b>Email</b></label>
    <input type="text" placeholder="Enter Email" name="email" id="email" v-model="email" required>

    <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" id="psw" v-model="password" required>

    <label for="psw-repeat"><b>Repeat Password</b></label>
    <input type="password" placeholder="Repeat Password" name="psw-repeat" id="psw-repeat" v-model="password" required>

        <button type="submit">Registo</button>
        <p>Ja possui conta? Faça <a href="/login">login</a> agora</p>
      </div>


          <!-- <span>Email: </span>
          <input type="email" v-model="email">
          <br><br>
          <span>Senha: </span>
          <input type="password" v-model="password">
          <br><br>
          <button type="submit">Enviar</button>
          <p>Ja possui conta? Faça <a href="/login">login</a> agora</p> -->
      </form>
  </div>
</template>

<script>
import axios from "axios"
export default {
    data(){
        return {
            email:'',
            password:''
        }
    },
    methods:{
        submit(){
            axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAyJe8uy9_2OYgCIzpUoRbRpgg_3rTnO80',
            {
                email: this.email,
                password: this.password,
                returnSecureToken: true
            })
                .then(
                    res => console.log(res),
                    this.$router.push('/characters')
                )
                .catch(
                    res => console.log(res)
                )
        }
    }

}
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