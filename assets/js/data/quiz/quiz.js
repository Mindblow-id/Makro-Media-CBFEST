// --- QUIZ DATA & HTML ---

const quiz = {
    id: 'quiz',
    data: `
        <!-- QUIZ HEADER -->
        <div class="flex justify-between mx-auto w-full px-14 items-center absolute top-40"> 
            <c-button class="text-lg xl:top-56 left-14 xl:left-20 w-60" data-previous="home">
                <p class="text-button text-xl flex justify-center items-center gap-2">
                    <img src="assets/img/arrow-left-gold.svg" class="w-8">
                    Back to Home
                </p>
            </c-button>
            <h2 class="xl:top-56 right-12 xl:right-18 text-4xl xl:text-5xl text-white">
                Treasury Operational Services
            </h2>
        </div>

        <div class="pt-72"></div>

        <!-- QUIZ TITLE -->
        <h1 class="uppercase title w-fit mx-auto text-5xl" style="margin-bottom: 30px;">
            Quiz: Guess The Word
        </h1>
        <p class="uppercase text-center text-2xl font-semibold">
            Complete The Words Below By choosing Right Letters
        </p>

        <!-- TIMER -->
        <h2 id="countdown-container" class="my-12 relative w-40 h-40 mx-auto flex justify-center items-center">
            <img src="assets/img/Circle.svg" class="w-40 absolute top-0 left-0">
            <span class="text-5xl font-bold" id="countdown">10</span>
        </h2>

        <!-- MAIN QUIZ CARD -->
        <div class="container mx-auto">
            <c-card  class="mx-auto h-[600px]" content-style="top: 40px; left: 50%; transform: translate(-50%, 0); align-items: start; justify-content: center;">
                <div id="game-board">
                    <!-- CLICK BLOCKING OVERLAY -->
                    <div id="game-overlay" class="absolute inset-0 z-50 hidden"></div>
                    
                    <!-- CLUE HEADER -->
                    <header class="game-header">
                        <h1 class="text-button w-fit text-2xl mx-auto font-bold text-center">CLUE:</h1>
                        <p class="clue-text Arial text-center text-2xl" id="clueText">Key interest rate used by Bank Indonesia in monetary policy.</p>
                        <div class="progress-bar">
                            <div class="progress-fill" id="progressFill"></div>
                        </div>
                        <div class="game-info hidden">
                            <span class="question-counter" id="questionCounter">Soal 1 dari 2</span>
                            <span class="score" id="score">Skor: 0/2</span>
                        </div>
                    </header>

                    <h3 class="text-button uppercase w-fit mx-auto text-2xl mt-12 font-bold"> The Answer </h3>

                    <!-- MAIN GAME CONTENT -->
                    <main class="game-content">

                        <!-- ANSWER SECTION -->
                        <div class="answer-section mt-4">
                            <div class="word-container flex justify-center gap-4 items-center" id="wordContainer">
                                <!-- Huruf-huruf akan diisi oleh JavaScript -->
                            </div>
                        </div>

                        <!-- CHOICES SECTION -->
                        <div class="choices-section mt-12">
                            <h3 class="mb-4 uppercase w-fit mx-auto text-button text-2xl font-bold">Choose the letters:</h3>
                            <div class="flex justify-center items-center gap-4 " id="choicesContainer">
                                <!-- Pilihan huruf akan diisi oleh JavaScript -->
                            </div>
                        </div>

                        <!-- FEEDBACK CARD SECTION -->
                        <div class="hidden feedback-card-section mt-8" id="feedbackCardSection" style="display: none;">
                            <c-card class="feedback-result-card mx-auto" id="feedbackResultCard" content-style="display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center; padding: 2rem;">
                                <h2 class="feedback-result-title text-3xl font-bold mb-2" id="feedbackResultTitle"></h2>
                                <p class="feedback-result-message text-xl" id="feedbackResultMessage"></p>
                            </c-card>
                        </div>

                        
                    </main>
                </div>
                <div id="score-place">
                </div>
            </c-card>

            <!-- FEEDBACK SECTION -->
            <c-card class='h-40 mt-12 opacity-0' id="result">
                <p class="" id="resultTitle">
                    <!-- Feedback akan ditampilkan di sini -->
                </p>
            </c-card>
           

            <!-- CONTROLS -->
            <footer id="button-control" class="mt-12 game-controls container mx-auto flex justify-center items-center gap-8">
                <div id="prevBtn">
                    <c-button class="btn btn-secondary" disabled>
                        <div class="flex justify-center items-center px-8">
                            <img src="assets/img/arrow-left-gold.svg" class="w-14">
                            <p class="text-button text-xl">Back</p>
                        </div>
                    </c-button>
                </div>
                <div id="checkBtn" style="filter: hue-rotate(180deg) saturate(2);">
                    <c-button class="btn btn-primary" style="">
                        <p class="text-button text-2xl">
                            Check The Answer
                        </p>
                    </c-button>
                </div>
                <div id="nextBtn" disabled>
                    <c-button class="btn btn-secondary">
                        <div class="flex justify-center items-center px-8">
                            <p class="text-button text-xl">Next</p>
                            <img src="assets/img/arrow-right-gold.svg" class="w-14">
                        </div>
                    </c-button>
                </div>
            </footer>
        </div>

        <div id="replay-button" class="w-80 mx-auto hidden mt-12">
            <c-button class="btn w-80 ">
                <div class="flex justify-center items-center px-8">
                    <p class="text-button text-2xl">
                        Play Again
                    </p>
                </div>
            </c-button>
        </div>

        <!-- RESULT MODAL -->
        <div class="modal hidden" id="resultModal">
            <div class="modal-content">
                <h2>🎉 Quiz Selesai!</h2>
                <div class="final-score" id="finalScore"></div>
                <div class="result-message" id="resultMessage"></div>
                <button class="btn btn-primary" id="restartBtn">🔄 Main Lagi</button>
            </div>
        </div>
    `
};

// --- QUIZ QUESTIONS ---

const questions = [
    {
        id: 1,
        clue: "Key interest rate used by Bank Indonesia in monetary policy.",
        answer: "BIRATE",
        pattern: "B_R_TE",
        choices: ["A", "B", "I", "C", "O", "M"],
        blanks: [1, 3] // posisi huruf kosong (0-indexed)
    },
    {
        id: 2,
        clue: "Indonesia's national quick response payment code",
        answer: "QRIS",
        pattern: "Q_I_", 
        choices: ["R", "B", "S", "X"],
        blanks: [1, 3]
    },
    {
        id: 3,
        clue: "Real-time, low-cost fund transfer system from Bank Indonesia",
        answer: "BIFAST",
        pattern: "BI_A_T",
        choices: ["V", "B", "T", "F", "S"],
        blanks: [2, 4]
    },
    {
        id: 4,
        clue: "Bank Indonesia contributes to national and regional economic ____.",
        answer: "GROWTH",
        pattern: "GR_W_H",
        choices: ["V", "O", "T", "F", "B", "X"],
        blanks: [2, 4]
    },
    {
        id: 5,
        clue: "Function of BI related to managing the Government's account and debt payments",
        answer: "TREASURY",
        pattern: "TR_A_URY",
        choices: ["V", "O", "T", "E", "B", "X", "Y", "S"],
        blanks: [2, 4]
    },
];


// --- CONSTANTS ---

const styleButtonDisabled = 'filter: grayscale(100%);'
const checkBtnFilter = 'filter: hue-rotate(180deg) saturate(2);'

// --- FUNCTIONS ---

function completeQuizTemplate(score) {
    return `
    <div class=""> 
        <p class="Arial text-center text-xl font-bold">
            Congratullations! You've completed all the quetions in this quiz.
        </p>

        <div class="w-fit mx-auto mt-12 text-center">
            <div class="uppercase text-button ">
                <p class="text-2xl font-bold">
                    Total Score
                </p>
                <p class="text-5xl font-extrabold mt-4">
                    ${score}
                </p>
            </div>

            ${score >= 80 ? `
            <div class="w-fit mx-auto mt-12">
                <img src="assets/img/qr-code.png" class="mx-auto w-60" >
                <p class="text-white mt-4 text-2xl">
                    https://s.id/QuizWinnerCBFEST2025
                </p>
            </div>
            ` : ''}

        </div>
    </div>
    `;
}

function disabledButton(element) {
    element.setAttribute('disabled', '')
    element.style = styleButtonDisabled;
}

function activatedButton(element) {
    element.removeAttribute('disabled')
    element.style = null;
    if (element.id == 'checkBtn') {
        element.style = checkBtnFilter;
    }
}

// --- STATE MANAGEMENT ---

let currentQuestionIndex = 0;
let score = 0;
let userAnswers = [];
let gameCompleted = false;
let countdownInterval;
let countdownValue = 10;

// --- DOM ELEMENTS ---

let elements = {
    clueText: document.getElementById('clueText'),
    wordContainer: document.getElementById('wordContainer'),
    choicesContainer: document.getElementById('choicesContainer'),
    feedbackSection: document.getElementById('feedbackSection'),
    questionCounter: document.getElementById('questionCounter'),
    scoreElement: document.getElementById('score'),
    progressFill: document.getElementById('progressFill'),
    prevBtn: document.getElementById('prevBtn'),
    nextBtn: document.getElementById('nextBtn'),
    checkBtn: document.getElementById('checkBtn'),
    finalScore: document.getElementById('finalScore'),
    resultMessage: document.getElementById('resultMessage'),
    restartBtn: document.getElementById('restartBtn'),
    feedbackCardSection: document.getElementById('feedbackCardSection'),
    feedbackResultCard: document.getElementById('feedbackResultCard'),
    feedbackResultTitle: document.getElementById('feedbackResultTitle'),
    feedbackResultMessage: document.getElementById('feedbackResultMessage'),
    result: document.getElementById('result'),
    resultTitle: document.getElementById('resultTitle'),
    gameBoard: document.getElementById('game-board'),
    buttonControl: document.getElementById('button-control'),
    scorePlace: document.getElementById('score-place'),
    replayButton: document.getElementById('replay-button'),
    countdownContainer: document.getElementById('countdown-container'),
    gameOverlay: document.getElementById('game-overlay'),
};

// --- INITIALIZE GAME ---

function initGame() {
    // Re-query DOM elements in case of re-render
    elements = {
        clueText: document.getElementById('clueText'),
        wordContainer: document.getElementById('wordContainer'),
        choicesContainer: document.getElementById('choicesContainer'),
        feedbackSection: document.getElementById('feedbackSection'),
        questionCounter: document.getElementById('questionCounter'),
        scoreElement: document.getElementById('score'),
        progressFill: document.getElementById('progressFill'),
        prevBtn: document.getElementById('prevBtn'),
        nextBtn: document.getElementById('nextBtn'),
        checkBtn: document.getElementById('checkBtn'),
        finalScore: document.getElementById('finalScore'),
        resultMessage: document.getElementById('resultMessage'),
        restartBtn: document.getElementById('restartBtn'),
        feedbackCardSection: document.getElementById('feedbackCardSection'),
        feedbackResultCard: document.getElementById('feedbackResultCard'),
        feedbackResultTitle: document.getElementById('feedbackResultTitle'),
        feedbackResultMessage: document.getElementById('feedbackResultMessage'),
        result: document.getElementById('result'),
        resultTitle: document.getElementById('resultTitle'),
        gameBoard: document.getElementById('game-board'),
        buttonControl: document.getElementById('button-control'),
        scorePlace: document.getElementById('score-place'),
        replayButton: document.getElementById('replay-button'),
        countdownContainer: document.getElementById('countdown-container'),
        gameOverlay: document.getElementById('game-overlay'),
    };

    // Attach event listeners
    elements.prevBtn.addEventListener('click', previousQuestion);
    elements.nextBtn.addEventListener('click', nextQuestion);
    elements.checkBtn.addEventListener('click', checkAnswer);
    elements.replayButton.addEventListener('click', restartGame);


    elements.gameBoard.classList.remove('hidden')
    elements.buttonControl.classList.remove('hidden')
    elements.countdownContainer.classList.remove('opacity-0')

    elements.scorePlace.classList.add('hidden')
    elements.replayButton.classList.add('hidden')
    
    // Hide the overlay layer
    hideGameOverlay();
    
    // Reset state
    currentQuestionIndex = 0;
    score = 0;
    userAnswers = [];
    gameCompleted = false;
    countdownValue = 10;

    // Initialize user answers array
    questions.forEach(q => {
        const answer = Array(q.answer.length).fill('');
        // Fill in the non-blank letters
        for (let i = 0; i < q.answer.length; i++) {
            if (!q.blanks.includes(i)) {
                answer[i] = q.answer[i];
            }
        }
        userAnswers.push(answer);
    });

    displayQuestion();
    updateUI();
    hideFeedbackCard();
    startCountdown();
    activatedButton(elements.checkBtn)
    disabledButton(elements.nextBtn)
}

// --- DISPLAY QUESTION ---

function displayQuestion() {
    const question = questions[currentQuestionIndex];
 
    // Update clue
    elements.clueText.textContent = question.clue;

    // Create word display
    createWordDisplay(question);

    // Create choices
    createChoices(question);

    // Clear feedback
    if (elements.feedbackSection)
        elements.feedbackSection.innerHTML = '';
    hideFeedbackCard();
}

// --- CREATE WORD DISPLAY ---

function createWordDisplay(question) {
    elements.wordContainer.innerHTML = '';

    for (let i = 0; i < question.answer.length; i++) {
        const letterBox = document.createElement('c-card');
        const textInside = document.createElement('p')
        textInside.className = 'text-3xl text-shadow font-bold pt-2 pl-2'
        letterBox.classList.add('w-20', 'h-20', 'letter-box');
        letterBox.dataset.index = i;

        if (question.blanks.includes(i)) {
            // Blank to be filled
            textInside.classList.add('text-button')
            letterBox.setAttribute('card-style', "background: linear-gradient(90deg, #AAAAAA, #5B5B5B, #AAAAAA) border-box;");
            textInside.textContent = userAnswers[currentQuestionIndex][i] || '';
            if (userAnswers[currentQuestionIndex][i]) {
                letterBox.removeAttribute('card-style');
            }
            letterBox.addEventListener('click', () => clearLetter(i));
        } else {
            // Pre-filled letter
            textInside.textContent = question.answer[i];
            letterBox.setAttribute('bg-gradient', `true`);
        }
        letterBox.append(textInside)

        elements.wordContainer.appendChild(letterBox);
    }
}

// --- CREATE CHOICE BUTTONS ---

function createChoices(question) {
    elements.choicesContainer.innerHTML = '';

    question.choices.forEach(letter => {
        const choiceBtn = document.createElement('c-card');
        const choiceLetter = document.createElement('p');
        choiceBtn.className = 'w-20 h-20';
        choiceLetter.className = 'text-button pt-2 pl-2 text-3xl font-bold'

        choiceLetter.textContent = letter;
        choiceBtn.addEventListener('click', () => selectLetter(letter));

        // Check if this letter is already used
        console.log(letter)
        const question = questions[currentQuestionIndex]
        const usedCount = userAnswers[currentQuestionIndex].filter((l, index) => {
            if (!question.blanks.includes(index)) return false;
            return l === letter
        }).length;
        
        console.log(userAnswers[currentQuestionIndex])
        const availableCount = question.choices.filter(l => l === letter).length;

        if (usedCount >= availableCount) {
            choiceBtn.classList.add('opacity-50');
        }
        choiceBtn.append(choiceLetter)

        elements.choicesContainer.appendChild(choiceBtn);
    });
}

// --- SELECT LETTER ---

function selectLetter(letter) {
    const question = questions[currentQuestionIndex];
    const userAnswer = userAnswers[currentQuestionIndex];

    // Check if letter is still available
    const usedCount = userAnswers[currentQuestionIndex].filter((l, index) => {
        if (!question.blanks.includes(index)) return false;
        return l === letter
    }).length;
    const availableCount = question.choices.filter(l => l === letter).length;

    if (usedCount >= availableCount) {
        return; // Letter not available
    }

    // Find first empty blank position
    for (let i = 0; i < question.blanks.length; i++) {
        const blankIndex = question.blanks[i];
        if (!userAnswer[blankIndex]) {
            userAnswer[blankIndex] = letter;
            break;
        }
    }

    // Refresh display
    displayQuestion();

    // Check if all blanks are filled
    const allFilled = question.blanks.every(index => userAnswer[index]);
    elements.checkBtn.disabled = !allFilled;
}

// --- CLEAR LETTER ---

function clearLetter(index) {
    const question = questions[currentQuestionIndex];

    if (question.blanks.includes(index) && userAnswers[currentQuestionIndex][index]) {
        userAnswers[currentQuestionIndex][index] = '';
        displayQuestion();
        elements.checkBtn.disabled = false;
    }
}

// --- COUNTDOWN TIMER ---

function startCountdown() {
    const countdownElement = document.getElementById('countdown');

    // Clear any existing interval
    if (countdownInterval) {
        clearInterval(countdownInterval);
    }

    countdownValue = 10;
    updateCountdownDisplay();

    countdownInterval = setInterval(() => {
        countdownValue--;
        updateCountdownDisplay();

        if (countdownValue <= 0) {
            clearInterval(countdownInterval);
            onCountdownComplete();
        }
    }, 1000);
}

function updateCountdownDisplay() {
    const countdownElement = document.getElementById('countdown');
    if (countdownElement) {
        countdownElement.textContent = `${countdownValue}`;

        // Visual feedback for low time
        if (countdownValue <= 3) {
            countdownElement.style.color = '#dc3545';
            countdownElement.style.fontWeight = 'bold';
        } else if (countdownValue <= 5) {
            countdownElement.style.color = '#ffc107';
            countdownElement.style.fontWeight = 'bold';
        } else {
            countdownElement.style.color = '#28a745';
            countdownElement.style.fontWeight = 'normal';
        }
    }
}

// --- ON COUNTDOWN COMPLETE ---

function onCountdownComplete() {
    // Auto-check the current answer
    checkAnswer()
}

// --- OVERLAY MANAGEMENT ---

function showGameOverlay() {
    if (elements.gameOverlay) {
        elements.gameOverlay.classList.remove('hidden');
    }
}

function hideGameOverlay() {
    if (elements.gameOverlay) {
        elements.gameOverlay.classList.add('hidden');
    }
}

// --- CHECK ANSWER ---

function checkAnswer() {
    // Show overlay to prevent user interaction
    showGameOverlay();
    
    // Clear countdown when manually checking answer
    if (countdownInterval) {
        clearInterval(countdownInterval);
    }

    const question = questions[currentQuestionIndex];
    const userAnswer = userAnswers[currentQuestionIndex].join('');
    const isCorrect = userAnswer === question.answer;

    // Show feedback card
    showFeedbackCard(isCorrect, question.answer, userAnswer);
    
    // Update score
    if (isCorrect) {
        score++;
    }

    // Disable check button and enable next button
    disabledButton(elements.checkBtn)
    if (currentQuestionIndex < questions.length - 1) {
        activatedButton(elements.nextBtn)
        console.log(elements.nextBtn.hasAttribute('disabled'))
    } else {
        // Game completed
        gameCompleted = true;

        // remove elements
        elements.result.classList.add('opacity-0')
        elements.buttonControl.classList.add('hidden')
        elements.gameBoard.classList.add('hidden')
        
        elements.countdownContainer.classList.add('opacity-0')


        // show score

        const finalScore = Math.round(score / questions.length * 100)

        elements.scorePlace.classList.remove('hidden')
        elements.scorePlace.innerHTML = completeQuizTemplate(finalScore)
        elements.replayButton.classList.remove('hidden')





        return;
    
    }

    updateUI();
}

// --- SHOW FEEDBACK CARD ---

function showFeedbackCard(isCorrect, correctAnswer, userAnswer) {
    // Set card styling based on result
    elements.result.classList.remove('opacity-0')
    if (isCorrect) {
        elements.result.style = 'filter: none;'
        elements.resultTitle.innerHTML = `
        <p class="text-button text-4xl w-fit mx-auto font-bold mb-4">
        CONGRATULATIONS!
        </p>    
        <p class="text-button text-4xl w-fit mx-auto font-bold">
        YOUR ANSWER IS CORRECT
        </p>    
        
        `
    } else {
        elements.result.style = 'filter: hue-rotate(345deg) saturate(2);'
        elements.resultTitle.innerHTML = `
        <p class="text-button text-4xl w-fit mx-auto font-bold text-center">
        SORRY <br>
        YOUR ANSWER IS INCORRECT
        </p>    
        
        `
    }

    // Show the feedback card
    // elements.feedbackCardSection.style.display = 'block';
    
    // Auto-hide after 3 seconds
    setTimeout(() => {
        hideFeedbackCard();
    }, 3000);
}

// --- HIDE FEEDBACK CARD ---

function hideFeedbackCard() {
    // elements.feedbackCardSection.style.display = 'none';
}

// --- SHOW FEEDBACK ---

function showFeedback(isCorrect, correctAnswer) {
    // const feedbackDiv = document.createElement('div');
    // feedbackDiv.className = `feedback-message ${isCorrect ? 'success' : 'error'}`;

    // if (isCorrect) {
    //     feedbackDiv.innerHTML = `🎉 <strong>Benar!</strong> Jawaban yang tepat adalah <strong>${correctAnswer}</strong>`;
    // } else {
    //     feedbackDiv.innerHTML = `❌ <strong>Salah!</strong> Jawaban yang benar adalah <strong>${correctAnswer}</strong>`;
    // }

    // elements.feedbackSection.innerHTML = '';
    // elements.feedbackSection.appendChild(feedbackDiv);
}

// --- NAVIGATION ---

function previousQuestion() {
    if (elements.prevBtn.hasAttribute('disabled')) {
        return;
    }
    
    // Hide overlay to allow user interaction
    hideGameOverlay();
    
    elements.result.classList.add('opacity-0')
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        displayQuestion();
        updateUI();
        disabledButton(elements.nextBtn)
        activatedButton(elements.prevBtn)
        disabledButton(elements.checkBtn)
        startCountdown();
    }
}

function nextQuestion() {
    
    if (elements.nextBtn.hasAttribute('disabled')) {
        return;
    }
    
    // Hide overlay to allow user interaction
    hideGameOverlay();
    
    elements.result.classList.add('opacity-0')
    if (currentQuestionIndex < questions.length - 1) {
        
        currentQuestionIndex++;
        displayQuestion();
        updateUI();
        disabledButton(elements.nextBtn)
        activatedButton(elements.prevBtn)
        activatedButton(elements.checkBtn)
        startCountdown();
    }
}

// --- UPDATE UI ---

function updateUI() {
    // Update question counter

    elements.questionCounter.textContent = `Soal ${currentQuestionIndex + 1} dari ${questions.length}`;

    // Update score
    elements.scoreElement.textContent = `Skor: ${score}/${questions.length}`;

    // Update progress bar
    const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
    elements.progressFill.style.width = `${progress}%`;

    // Update navigation buttons
    if (currentQuestionIndex === 0) {
        disabledButton(elements.prevBtn)
    } else {
        activatedButton(elements.prevBtn)
    }

    // Check if current answer is complete
    const question = questions[currentQuestionIndex];
    const userAnswer = userAnswers[currentQuestionIndex];
    const allFilled = question.blanks.every(index => userAnswer[index]);
    if (allFilled) {
        disabledButton(elements.checkBtn)
    }
}

// --- SHOW FINAL RESULTS ---

function showResults() {
    const percentage = Math.round((score / questions.length) * 100);

    elements.finalScore.textContent = `${score}/${questions.length} (${percentage}%)`;

    let message = '';
    if (percentage === 100) {
        message = '🏆 Sempurna! Anda menguasai semua soal!';
    } else if (percentage >= 80) {
        message = '🎉 Bagus sekali! Pengetahuan Anda sangat baik!';
    } else if (percentage >= 60) {
        message = '🎉 Cukup baik! Terus belajar untuk hasil yang lebih baik!';
    } else {
        message = '💪 Jangan menyerah! Coba lagi untuk meningkatkan skor Anda!';
    }

    elements.resultMessage.textContent = message;
}

// --- MODAL HANDLING ---


// --- RESTART GAME ---

function restartGame() {
    // Clear any existing countdown
    if (countdownInterval) {
        clearInterval(countdownInterval);
    }
    initGame();
}

// --- KEYBOARD SUPPORT ---