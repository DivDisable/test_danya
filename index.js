const myQuizes = [
  {
    isInput: true,
    title: '1. How to say "Я репозиторий" in english'
  },
  {
    isInput: true,
    title: '2. How to say "Git репозиторий, который может быть удаленным"',
  },
  {
    isInput: false,
    title: '3. Which command let you enable insert mode in vim',
    answers: ['a', 'b', 'c', 'd', 'e']
  },
  {
    isInput: false,
    title: '4. Which command let you go down on the next line',
    answers: ['j', 'J', 'k', 'l', 'h']
  },
  {
    isInput: false,
    title: '5. What is a git?',
    answers: [
      'Git is a VCS',
      'Git is a repository',
      'Git is a remote repository',
      'Git is the same as GitHub',
      'Git is a local repository'
    ]
  },
  {
    isInput: false,
    title: '6. Choose the correct statment',
    answers: [
      'Git is GitHub',
      'Repository can be local and remote',
      'Repository is a place where storage data',
      '<b>cd</b> is a command, which can move you to some directory',
      '<b>~</b> is the same as <b>/</b> in path'
    ]
  },
  {
    isInput: false,
    title: '7. Choose correct types of html tag',
    answers: [
      'Pair',
      'Unpair',
      'Small',
    ]
  },
  {
    isInput: true,
    title: '8. How to say "Они в удаленном репозитории"',
  },
  {
    isInput: true,
    title: '9. How to say "Это команда, который меняет директории"',
  },
  {
    isInput: true,
    title: '10. How to say "Она корень"',
  },
];

for (let i = 0; i < myQuizes.length; i++) {
  myAddQuestion(myQuizes[i]);
}

const quizAnswers = [
 'I am repository',
 'Git is repository, which can be remote',
  ['a', 'b', 'c', 'd'], 
  'a',
  'a',
  ['b', 'c', 'd'],
  ['a', 'b'],
  'They are in remote repository',
  'It is command, which change directory',
  'She is root'
]
const quiz = new Quiz('quiz-div', quizAnswers);

function myAnswerCheckMethod() {
  // checkAnswers returns true
  // if all questions have been answered and updates the result object
  if (quiz.checkAnswers()) {
    console.log('Correct answers: ' + quiz.result.score + '/' + quiz.result.totalQuestions);
    console.log('Percent correct: ' + quiz.result.scorePercentFormatted + '%');
  }

  // Alternatively, we can ignore unanswered questions by passing false
  quiz.checkAnswers(false);
  console.log('Correct answers: ' + quiz.result.score + '/' + quiz.result.totalQuestions);
  console.log('Percent correct: ' + quiz.result.scorePercentFormatted + '%');

  // We can also use the highResults method to highlight correct and incorrect answers.
  // We pass a callback which takes the quiz object, the current question, the question number and whether it was answered correctly.
  quiz.highlightResults(myHandleAnswerMethod);
}

// Callback for quiz.highlightResults called for each question. Parameters are: The quiz object the question belongs to,
// the question element, the question number and a boolean indicating if the question was answered correctly.

function myHandleAnswerMethod(quiz, question, no, correct) {
  if (!correct) {
    // Highlight the correct answers.
    // See the example code on GitHub for an example implementation.
  }
}


function myAddQuestion ({isInput, title, answers}) {
  const quizlibContainer = document.createElement('div');
  const quizAnswers = document.createElement('div');
  const quizTitle = document.createElement('div');

  quizlibContainer.className = 'quizlib-question my-class';
  quizAnswers.className = 'quizlib-question-answers';
  quizTitle.className = 'quizlib-question-title';

  quizTitle.innerHTML = title;

  if (isInput) {
    quizAnswers.innerHTML = `<label><input class="form-control" type="text"></label>`;
  } else {
    const ul = document.createElement('ul');
    let initStr = '';
    for (let i = 0; i < answers.length; i++) {
      initStr += `<li><label><input type="checkbox" name="q2" value="${String.fromCharCode(97 + i)}"> ${answers[i]}</label></li>`;
    }
    ul.innerHTML = initStr;
    quizAnswers.appendChild(ul);
  }

  quizlibContainer.appendChild(quizTitle);
  quizlibContainer.appendChild(quizAnswers);

  const quizDiv = document.querySelector('#quiz-div');
  quizDiv.appendChild(quizlibContainer);
}

