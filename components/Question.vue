/* eslint-disable vue/require-prop-types */
<template>
  <v-app class="background-question">
    <v-container>
      <v-layout row wrap justify-center align-center class="align-text">
        <v-flex md4>
          <h3> {{ question }}</h3>
        </v-flex>
      </v-layout>
      <v-layout row wrap justify-center align-center class="layout">
        <v-flex md1>
          <v-radio-group v-model="answer">
            <v-radio
              color="red"
              label="Si"
              :value="yesValue"
              class="radio"
            ></v-radio>
            <v-radio color="red" label="No" value="0" class="radio"></v-radio>
          </v-radio-group>
        </v-flex>
      </v-layout>
      <v-layout row wrap justify-center align-center class="layout">
        <v-flex md3>
          <v-btn color="white" outlined @click="nextQuestion(answer)"
            >Siguiente pregunta</v-btn
          >
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
export default {
  // eslint-disable-next-line vue/require-prop-types
  props: ['question', 'nextQuestion', 'yesValue'],
  data() {
    return {
      answer: '0'
    };
  }
};
</script>

<style scoped>
.background-question {
  background-color: unset;
}
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
  padding-top: 15%;
}

.radio >>> label {
  font-size: 35px;
}

.radio {
  padding: 10px;
}

.layout {
  margin-top: 40px;
}

.page {
  position: fixed;
  width: inherit;
}
</style>
