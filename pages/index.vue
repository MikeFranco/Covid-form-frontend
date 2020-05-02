<template>
  <section>
    <Welcome />
  </section>
</template>

<script>
import Welcome from '../components/Welcome';
export default {
  components: {
    Welcome
  }
};
</script>

<style>
/* TRANSITIONS from animate css*/
@import 'https://cdn.jsdelivr.net/npm/animate.css@3.5.1';

.wallpaper {
  background-image: url('../assets/covid-19.png');
  background-size: cover;
  min-height: 952px;
  max-height: 952px;
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
</style>
