<template>
<div style="display: flex">
    <div class="breed">
      <div v-for="(item, index) in resultados" :key="index">
        <app-card largura="520px">
          {{item}} &emsp;<button @click="marcaFavorito(item)">&#9829;</button>
          <br /><br />
        <img :src="item" width="500" alt="">
        </app-card>
      </div>
    </div>
    <app-card class="favoritos" cor="grey">
      <p>FAVORITOS</p>
      <div v-for="(item, index) in $store.state.favoritos" :key="index">
        <app-card cor="white" @click="desmarcaFavorito(index)">
          <img :src="item" width="90" alt="" />
        </app-card>
      </div>
    </app-card>
  </div>
</template>

<script>
import axios from "axios";
import appCard from "@/components/app-card.vue";
import { bus } from "../main";
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      pesquisa: "",
      resultados: "",
      favoritos: [],
    };
  },
  methods: {
    marcaFavorito(item) {
      //this.favoritos.unshift(item)
      this.$store.commit('marcaFavorito', item)
    },
    desmarcaFavorito(index) {
      //this.favoritos.splice(index, 1)
      this.$store.commit('desmarcaFavorito', index)
    },
    carregaInfo(query) {
      axios
        .get("https://dog.ceo/api/breed/" + query + "/images")
        .then((res) => {
          this.resultados = res.data.message;
        });
    },
    carregaBreed(breed) {
      return axios
        .get("https://dog.ceo/api/breed/" + breed + "/images/random")
        .then((res) => res.data.message);
    },
  },
  created() {
    this.carregaInfo(this.$route.params.id);
  },
};
</script>

<style>
.breed {
  display: flex;
  flex-flow: row wrap;
}
.favorites {
  max-width: 130px;
  font-weight: 700;
  color: white;
}
</style>