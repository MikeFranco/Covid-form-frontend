<template>
  <section>
    <div class="welcome-text">
      <h3>¿Tienes temperatura de más de 38°C?</h3>
      <v-container fluid grid-list-xl>
        <v-layout row justify-space-between align-center>
          <v-spacer></v-spacer>
          <v-flex xs6>
            <v-radio-group v-model="temperature">
              <v-radio label="Si" value="5"></v-radio>
              <v-radio label="No" value="0"></v-radio>
            </v-radio-group>
          </v-flex>
        </v-layout>
      </v-container>
    </div>
  </section>
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
