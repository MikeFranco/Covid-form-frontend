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
    <nuxt-child form></nuxt-child>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: true
    }
  }
}
</script>
