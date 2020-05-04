<template>
  <div>
    <div class="wallpaper">
      <div class="welcome-text">
        <transition
          enter-active-class="animated fadeIn"
          leave-active-class="animated fadeOut"
        >
          <h1>¡Bienvenido!</h1>
        </transition>
        <transition
          enter-active-class="animated fadeIn"
          leave-active-class="animated fadeOut"
        >
          <p>
            Este es un formulario para poder determinar si tienes COVID-19
          </p>
        </transition>
        <transition
          enter-active-class="animated fadeIn"
          leave-active-class="animated fadeOut"
        >
          <v-btn x-large to="/form">Empezar</v-btn>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
/* TRANSITIONS from animate css*/
@import 'https://cdn.jsdelivr.net/npm/animate.css@3.5.1';

.wallpaper {
  background-image: url('../assets/covid-19.png');
  background-size: cover;
  min-height: 956px;
  max-height: 956px;
  color: white;
  overflow: hidden;
  vertical-align: middle;
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

.page {
  position: fixed;
  width: inherit;
}

/* always present */
.expand-transition {
  transition: all 0.3s ease;
  height: 30px;
  padding: 10px;
  background-color: #eee;
  overflow: hidden;
}
/* .expand-enter defines the starting state for entering */
/* .expand-leave defines the ending state for leaving */
.expand-enter,
.expand-leave {
  height: 0;
  padding: 0 10px;
  opacity: 0;
}
</style>
