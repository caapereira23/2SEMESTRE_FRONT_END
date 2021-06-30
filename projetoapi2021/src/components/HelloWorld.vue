<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    
    <button @click="carregaInfo()">Random character</button>
      <h3>ID: {{ resultados.char_id }}</h3>
      <h3>Name: {{ resultados.name }}</h3>
      
      <br>
      <img :src="resultados.img" alt="" style="height: 600px; width: 400px">
    </div>
</template>

<script>
import axios from "axios";
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      resultados: "",
    };
  },
  methods: {
    carregaInfo() {
      axios
        .get("https://breakingbadapi.com/api/character/random")
        .then((res) => {
          console.log(res.data[0]);
          this.resultados = res.data[0];
        });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  color: black;
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
button {
  background-color: white; 
  color: black; 
  border: 2px solid #4CAF50;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
}

button:hover {
  background-color: #4CAF50;
  color: white;
}

.hello{
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
}
</style>
