<template>
  <v-app>
    <v-container fluid class="background">
      <v-layout row wrap justify-center align-center class="align-text">
        <v-flex md4>
          <h3> ¿Tienes temperatura de más de 38°C?</h3>
        </v-flex>
      </v-layout>
      <v-layout row wrap justify-center align-center>
        <v-flex md1>
          <v-radio-group v-model="temperature">
            <v-radio label="Si" value="5" class="radio"></v-radio>
            <v-radio label="No" value="0" class="radio"></v-radio>
          </v-radio-group>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      temperature: '0'
    };
  }
};
</script>

<style scoped>
/* TRANSITIONS from animate css*/
@import 'https://cdn.jsdelivr.net/npm/animate.css@3.5.1';

h3 {
  font-family: 'Roboto', sans-serif;
  font-size: 50px;
}

.align-text {
  text-align: center;
}

.background {
  background-image: url('../assets/covid-19.png');
  background-size: cover;
  overflow: hidden;
  min-height: 956px;
  max-height: 956px;
  text-align: center;
}

.radio >>> label {
  font-size: 35px;
  color: white;
}

.radio {
  padding: 10px;
}
</style>
