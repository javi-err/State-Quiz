

class MakeQuestion {
    constructor(questionText, answers, correctAnswer, questionId) {
        this.questionText = questionText;
        this.answers = answers;

        this.correctAnswer = calcCorrect(correctAnswer);
        this.questionId = questionId
        function calcCorrect(index) {
            return answers[index]
        } 
    }
}

const question1 = new MakeQuestion('This State has the highest lifespan for pets', ['Colorado', 'Connecticut', 'Maryland',  'Montana'], 3, 10001);
const question2 = new MakeQuestion('The United States capital was not always Washington, DC, what was the original capital?',  ['Boston', 'Philadelphia', 'Dover', 'New York City'], 3, 49244);
const question3 = new MakeQuestion('Which state which the Chinese language is spoken the most?', ['Texas', 'California', 'New York', 'Florida'], 1, 13000);

const questions = [question1, question2, question3]

console.log('question1', question1, 'question2', question2);

export default questions;