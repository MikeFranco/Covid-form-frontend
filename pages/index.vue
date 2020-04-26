<template>
  <div class="wallpaper">
    <div class="welcome-text">
      <transition appear name="fade">
        <h1>¡Bienvenido! <br /></h1>
      </transition>
      <transition appear name="fade">
        <p>Este es un formulario para poder determinar si tienes COVID-19</p>
      </transition>
      <v-btn x-large nuxt to="/form">Empezar</v-btn>
    </div>
  </div>
</template>

<script>
export default {
  methods: {}
}
</script>

<style scoped>
.wallpaper {
  background-image: url('../assets/covid-19.png');
  background-size: cover;
  min-height: 952px;
  max-height: 952px;
  color: white;
  overflow-y: hidden;
  overflow: hidden;
  vertical-align: middle;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.welcome-text {
  padding-left: 20px;
  margin: 400px;
  text-align: center;
  font-family: 'Roboto', sans-serif;
}

.welcome-text h1 {
  font-size: 50px;
}

.welcome-text p {
  font-size: 20px;
  margin: 2.5%;
}
</style>
