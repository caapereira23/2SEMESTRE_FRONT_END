<template>
  <div style="display: flex">
    <div class="hello">
      <div v-for="(data, index) in resultados" :key="index" class="card">

        <h3>{{ data.name }}</h3>
        &emsp;<button @click="marcaFavorito(data)">&#9829;</button>
        <br />

        <div @click="navega(index + 1)">
          <img :src="data.img" alt="" style="height: 600px; width: 400px" />
        </div>

      </div>
    </div>
    <app-card class="favoritos" style="color: black; border: 3px solid #f1f1f1; background-color: white">
      <p>FAVORITOS</p>
      <div v-for="(data, index) in $store.state.favoritos" :key="index">
        <app-card>
          <img :src="data.img" @click="desmarcaFavorito(index)" width="125" alt="" />
        </app-card>
      </div>
      </app-card>
    </div>
</template>

<script>
import axios from "axios";
import appCard from "@/components/app-card.vue";
export default {
  components: {
    appCard,
  },
  name: "Api",
  props: {
    msg: String,
  },
  data() {
    return {
      resultados: "",
      favoritos: [],
    };
  },
  methods: {
    marcaFavorito(data){
      if (!!!this.$store.state.favoritos.find((res) => res === data)) {      
        this.$store.commit("marcaFavorito", data);
      }
      
    },
    desmarcaFavorito(index){
      this.$store.commit("desmarcaFavorito", index)
    },
    carregaInfo() {
      axios.get("https://breakingbadapi.com/api/characters").then((res) => {
        console.log(res.data);
        this.resultados = res.data;
      });
    },
    navega(character) {
      this.$router.push("/characters/" + character);
    },
  },
  mounted() {
    this.carregaInfo();
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
.hello {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
}
.favoritos {
  max-width: 180px;
  font-weight: 700;
}
.card {
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  width: 24%;
  background-color: white;
  margin: 8px;
}

.card:hover {
  box-shadow: 6px 7px 13px -1px rgba(0,0,0,0.89);
}
</style>
 