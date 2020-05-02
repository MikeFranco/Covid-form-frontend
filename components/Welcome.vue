<template>
  <div class="wallpaper">
    <div class="welcome-text">
      <transition
        enter-active-class="animated fadeIn"
        leave-active-class="animated fadeOut"
      >
        <h1 v-show="show">¡Bienvenido!</h1>
      </transition>
      <transition
        enter-active-class="animated fadeIn"
        leave-active-class="animated fadeOut"
      >
        <p v-show="show">
          Este es un formulario para poder determinar si tienes COVID-19
        </p>
      </transition>
      <transition
        enter-active-class="animated fadeIn"
        leave-active-class="animated fadeOut"
      >
        <v-btn v-show="show" x-large @click="show = !show">Empezar</v-btn>
      </transition>
    </div>
    <div v-show="!show" class="form" transition="expand">
      <Form :show="show" />
    </div>
  </div>
</template>

<script>
import Form from './form-cmpnts/Form';
export default {
  components: {
    Form
  },
  data() {
    return {
      show: true
    };
  }
};
</script>

<style>
@import 'https://cdn.jsdelivr.net/npm/animate.css@3.5.1';

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
