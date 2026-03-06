const questions = window.quizQuestions || [];

let currentQuestionIndex = 0;
let score = 0;

document.addEventListener('DOMContentLoaded', () => {
    const questionText = document.querySelector('.question-text');
    const optionsContainer = document.querySelector('.options-container');
    const progressText = document.querySelector('.progress-text');
    const progressBar = document.querySelector('.progress-bar');
    const quizContent = document.querySelector('.quiz-content');
    const resultsContent = document.querySelector('.results-content');
    const scoreDisplay = document.querySelector('.score-display');
    const retryBtn = document.querySelector('.retry-btn');

    function loadQuestion() {
        const q = questions[currentQuestionIndex];
        questionText.textContent = q.question;
        optionsContainer.innerHTML = '';
        
        q.options.forEach((opt, index) => {
            const btn = document.createElement('button');
            btn.className = 'option-btn';
            btn.textContent = opt;
            btn.addEventListener('click', () => handleAnswer(index, btn));
            optionsContainer.appendChild(btn);
        });

        progressText.textContent = `Question ${currentQuestionIndex + 1} of ${questions.length}`;
        progressBar.style.width = `${((currentQuestionIndex + 1) / questions.length) * 100}%`;
    }

    function handleAnswer(selectedIndex, btn) {
        const q = questions[currentQuestionIndex];
        const allBtns = document.querySelectorAll('.option-btn');
        allBtns.forEach(b => b.style.pointerEvents = 'none');

        if (selectedIndex === q.correct) {
            btn.classList.add('correct');
            score++;
        } else {
            btn.classList.add('wrong');
            allBtns[q.correct].classList.add('correct');
        }

        setTimeout(() => {
            currentQuestionIndex++;
            if (currentQuestionIndex < questions.length) {
                loadQuestion();
            } else {
                showResults();
            }
        }, 1200);
    }

    function showResults() {
        quizContent.style.display = 'none';
        resultsContent.style.display = 'block';
        scoreDisplay.textContent = `You scored ${score} / ${questions.length}`;
    }

    if (retryBtn) {
        retryBtn.addEventListener('click', () => {
            currentQuestionIndex = 0;
            score = 0;
            quizContent.style.display = 'block';
            resultsContent.style.display = 'none';
            loadQuestion();
        });
    }

    if (quizContent) loadQuestion();
});
