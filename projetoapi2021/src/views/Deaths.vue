<template>
  <div class="hello">
    <!-- <h1>{{ msg }}</h1> -->
    <div v-for="(data, index) in resultados" :key="index" class="card">
      <h3>Morte {{data.death_id}}</h3>
      <h3>"{{data.death}}"</h3>
      <h3>Causa: {{data.cause}}</h3>
      <h3>Responsável: {{data.responsible}}</h3>
      <h3>Últimas palavras: "{{data.last_words}}"</h3>
      <h3>Temporada: {{data.season}}</h3>
      <h3>Episódio: {{data.episode}}</h3>
      <h3>Número de mortes: {{data.number_of_deaths}}</h3>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Api",
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
        .get("https://breakingbadapi.com/api/deaths")
        .then((res) => {
          console.log(res.data);
          this.resultados = res.data;
        });
    },
  },
  mounted(){
    this.carregaInfo();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
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
.hello {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
}
.card {
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  width: 30%;
  background-color: rgba(255, 255, 255, 0.5);
  margin: 8px;
  padding: 10px;
}

.card:hover {
  box-shadow: 6px 7px 13px -1px rgba(0,0,0,0.89);
}
</style>
