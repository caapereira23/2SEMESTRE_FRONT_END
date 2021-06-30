<template>
  <div class="hello">
    <!-- <h1>{{ msg }}</h1> -->
    <div v-for="(data, index) in resultados" :key="index">
      <article class="article">
        <blockquote>
          <h4>Frase {{ data.quote_id }}</h4>
          <h2>"{{ data.quote }}"</h2>
          <cite style="color: black; font-weight: bold;">{{ data.author }}</cite>
        </blockquote>
      </article>
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
      axios.get("https://breakingbadapi.com/api/quotes").then((res) => {
        console.log(res.data);
        this.resultados = res.data;
      });
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
  margin: 40px 0 0;
  color: black;
  font-weight: bold;
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
  flex-flow: wrap;
  justify-content: space-around;
}

blockquote {
  position: relative;
  display: inline-block;
  background: #eee;
  padding: 20px 30px 30px 20px;
  border-radius: 10px;
  font-family: 'Bitter', serif;
  color: #333;
  text-align: left;
  box-shadow: 1px 1px 1px #999,
              2px 2px 1px #999,
              3px 3px 1px #999;
  transition-duration: .3s;
}

blockquote:hover {
  box-shadow: 6px 7px 13px -1px rgba(0,0,0,0.89);
}

</style>
