<template>
  <div id="app">
    <appCard cor='lightgreen'>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/characters">Characters</router-link> |
      <router-link to="/episodes">Episodes</router-link> | 
      <router-link to="/quotes">Quotes</router-link> |
      <router-link to="/deaths">Deaths</router-link> 
    </div>
    </appCard>


    <router-view/>
  </div>
</template>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

body {
  font-family: Arial, Helvetica, sans-serif;
  background-image: url('https://i.pinimg.com/originals/cf/13/25/cf1325e1c1c4c1b4b161357fd7c784a3.jpg');
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
}

</style>
