<template>
  <v-app>
    <v-container fluid class="background">
      <transition
        enter-active-class="animated bounceInLeft"
        leave-active-class="animated fadeOut"
      >
        <div v-show="questionNumber === 1" class="page">
          <Question
            question="¿Tienes temperatura de más de 38°C?"
            :next-question="nextQuestion"
            :yes-value="5"
          />
        </div>
      </transition>
      <transition
        enter-active-class="animated bounceInLeft"
        leave-active-class="animated fadeOut"
      >
        <div v-show="questionNumber === 2" class="page">
          <Question
            question="¿Tienes tos seca?"
            :next-question="nextQuestion"
            :yes-value="5"
          />
        </div>
      </transition>
      <transition
        enter-active-class="animated bounceInLeft"
        leave-active-class="animated fadeOut"
      >
        <div v-show="questionNumber === 3" class="page">
          <Question
            question="¿Dolor de cabeza?"
            :next-question="nextQuestion"
            :yes-value="5"
          />
        </div>
      </transition>
      <transition
        enter-active-class="animated bounceInLeft"
        leave-active-class="animated fadeOut"
      >
        <div v-show="questionNumber === 4" class="page">
          <Question
            question="¿Tienes dificultada para respirar?"
            :next-question="nextQuestion"
            :yes-value="20"
          />
        </div>
      </transition>
      <transition
        enter-active-class="animated bounceInLeft"
        leave-active-class="animated fadeOut"
      >
        <div v-show="questionNumber === 5" class="page">
          <Question
            question="¿Tienes escurrimiento nasal?"
            :next-question="nextQuestion"
            :yes-value="1"
          />
        </div>
      </transition>
      <transition
        enter-active-class="animated bounceInLeft"
        leave-active-class="animated fadeOut"
      >
        <div v-show="questionNumber === 6" class="page">
          <Question
            question="¿Tienes dolor muscular?"
            :next-question="nextQuestion"
            :yes-value="1"
          />
        </div>
      </transition>
      <transition
        enter-active-class="animated bounceInLeft"
        leave-active-class="animated fadeOut"
      >
        <div v-show="questionNumber === 7" class="page">
          <Question
            question="¿Te duele la garganta?"
            :next-question="nextQuestion"
            :yes-value="1"
          />
        </div>
      </transition>
      <transition
        enter-active-class="animated bounceInLeft"
        leave-active-class="animated fadeOut"
      >
        <div v-show="questionNumber === 8" class="page">
          <Question
            question="¿Tienes dolor articular?"
            :next-question="nextQuestion"
            :yes-value="1"
          />
        </div>
      </transition>
      <transition
        enter-active-class="animated bounceInLeft"
        leave-active-class="animated fadeOut"
      >
        <div v-show="questionNumber === 9" class="page">
          <Question
            question="¿Tienes dolor torácico?"
            :next-question="nextQuestion"
            :yes-value="1"
          />
        </div>
      </transition>
      <transition
        enter-active-class="animated bounceInLeft"
        leave-active-class="animated fadeOut"
      >
        <div v-show="questionNumber === 10" class="page">
          <Question
            question="¿Tienes conjuntivitis?"
            :next-question="nextQuestion"
            :yes-value="1"
          />
        </div>
      </transition>
      <transition
        enter-active-class="animated bounceInLeft"
        leave-active-class="animated fadeOut"
      >
        <div v-show="questionNumber === 11" class="page results-btn">
          <v-layout row wrap justify-center align-center class="align-text">
            <v-flex md4>
              <v-btn color="white" outlined x-large @click="getResults"
                >Obtener resultados</v-btn
              >
            </v-flex>
            <v-flex md12 class="results">
              <div v-if="showResult && result <= 11">
                <h1> Estás a salvo, quédate en casa</h1>
              </div>
              <div
                v-if="
                  showResult &&
                    result > 11 &&
                    result <= 20 &&
                    answers.difficultyBreathing == 0
                "
              >
                <h1> Acude a tu médico</h1>
                <h1>
                  Antes de salir, ponte cubrebocas y mantén tu sana
                  distancia</h1
                >
              </div>
              <div v-if="showResult && result >= 21">
                <h1> Es probable que tengas COVID-19, acude a un hospital</h1>
                <h1>
                  Antes de salir, ponte cubrebocas y mantén tu sana
                  distancia</h1
                >
              </div>
            </v-flex>
          </v-layout>
        </div>
      </transition>
    </v-container>
  </v-app>
</template>

<script>
import answers from '../mixins/answers';
import Question from '@/components/Question.vue';
export default {
  components: {
    Question
  },
  mixins: [answers],
  data() {
    return {
      questionNumber: 1,
      showResult: false,
      answers: {
        temperature: 0,
        dryCough: 0,
        headache: 0,
        difficultyBreathing: 0,
        runnyNose: 0,
        musclePain: 0,
        soreThroat: 0,
        jointPain: 0,
        chestPain: 0,
        conjunctivitis: 0
      },
      result: 0
    };
  },
  methods: {
    nextQuestion(answer) {
      const answerKey = this.getAnswerKey(this.questionNumber);
      this.answers[answerKey] = answer;
      this.questionNumber += 1;
    },
    getResults() {
      this.result = Object.entries(this.answers).reduce(
        (carry, [key, value]) => (carry += Number(value)),
        0
      );
      this.showResult = true;
      const body = {
        answers: this.answers,
        result: this.result
      };
      this.$axios
        .post('/back/posts', body)
        .then(response => this.$noty.success('Datos guardados correctamente'))
        .catch(error => {
          this.$noty.error('Ocurrió un error');
          // eslint-disable-next-line
          console.error(error);
        });
    }
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

.background {
  background-image: url('../assets/covid-19.png');
  background-size: cover;
  overflow: hidden;
  min-height: 956px;
  max-height: 956px;
  text-align: center;
  padding-top: 15%;
}

.layout {
  margin-top: 4.5%;
}

.results-btn {
  margin-top: 2.5%;
  padding: 0 15% 0 8%;
}

.page {
  position: fixed;
  width: inherit;
}

.results {
  margin-top: 5%;
}
</style>
