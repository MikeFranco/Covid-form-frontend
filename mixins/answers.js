export default {
  methods: {
    getAnswerKey(questionNumber) {
      return questionNumber === 1
        ? 'temperature'
        : questionNumber === 2
        ? 'dryCough'
        : questionNumber === 3
        ? 'headache'
        : questionNumber === 4
        ? 'difficultyBreathing'
        : questionNumber === 5
        ? 'runnyNose'
        : questionNumber === 6
        ? 'musclePain'
        : questionNumber === 7
        ? 'soreThroat'
        : questionNumber === 8
        ? 'jointPain'
        : questionNumber === 9
        ? 'chessPain'
        : questionNumber === 10
        ? 'conjunctivitis'
        : '';
    }
  }
};
