<template>
  <section>
    <v-container grid-list-md text-xs-center>
      <v-layout row wrap>
        <v-flex xs5></v-flex>
        <v-flex xs4>
          <h3>¿Tienes temperatura de más de 38°C?</h3>
        </v-flex>
        <v-flex xs12 align-self-center justify-center>
          <v-card dark color="primary">
            <v-card-text>12</v-card-text>
          </v-card>
        </v-flex>
        <v-flex v-for="i in 2" :key="`6${i}`" xs6>
          <v-card dark color="secondary">
            <v-card-text class="px-0">6</v-card-text>
          </v-card>
        </v-flex>
        <v-flex v-for="i in 3" :key="`4${i}`" xs4>
          <v-card dark color="primary">
            <v-card-text class="px-0">4</v-card-text>
          </v-card>
        </v-flex>
        <v-flex v-for="i in 4" :key="`3${i}`" xs3>
          <v-card dark color="secondary">
            <v-card-text class="px-0">3</v-card-text>
          </v-card>
        </v-flex>
        <v-flex v-for="i in 6" :key="`2${i}`" xs2>
          <v-card dark color="primary">
            <v-card-text class="px-0">2</v-card-text>
          </v-card>
        </v-flex>
        <v-flex v-for="i in 12" :key="`1${i}`" xs1>
          <v-card dark color="secondary">
            <v-card-text class="px-0">1</v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </section>
  <!-- <v-radio-group v-model="temperature">
            <v-radio label="Si" value="5"></v-radio>
            <v-radio label="No" value="0"></v-radio>
          </v-radio-group> -->
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

h1 {
  padding-left: 45%;
}
</style>
