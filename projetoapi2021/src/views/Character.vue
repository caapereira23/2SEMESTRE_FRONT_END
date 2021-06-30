<template>
    <div class="hello">

    <!-- <h1>{{ msg }}</h1> -->
    <div v-for="(data, index) in resultados" :key="index" class="card">
      <h3>Name: {{ data.name }}</h3>
      <h3>Birthday: {{ data.birthday }}</h3>
      <h3>Status: {{ data.status }}</h3>
      <h3>Nickname: {{ data.nickname }}</h3>
      <br />
      <img :src="data.img" alt="" style="height: 600px; width: 400px" />
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
    carregaInfo(query) {
      axios
        .get("https://breakingbadapi.com/api/characters/" + query)
        .then((res) => {
          // console.log(res.data);
          this.resultados = res.data;
        });
    },
  },
  mounted() {
    this.carregaInfo();
  },
  created() {
    this.carregaInfo(this.$route.params.id);
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
