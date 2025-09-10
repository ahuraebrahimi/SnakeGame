const board = document.getElementById("game-board");
const scoreDisplay = document.getElementById("score");
const highScoreDisplay = document.getElementById("high-score");
const startBtn = document.getElementById("start-btn");
const pauseBtn = document.getElementById("pause-btn");
const resumeBtn = document.getElementById("resume-btn");
const eatSound = document.getElementById("eat-sound");
const gameOverSound = document.getElementById("game-over-sound");

const boardSize = 20;

let snake = [{ x: 10, y: 10 }];
let direction = { x: 0, y: 0 };
let food = {};
let score = 0;
let highScore = 0;
let gameOver = false;
let gameSpeed = 150;
let gameInterval = null;
let paused = false;

function createBoard() {
    board.innerHTML = "";
    for (let i = 0; i < boardSize * boardSize; i++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        board.appendChild(cell);
    }
}

function draw() {
    const cells = board.querySelectorAll(".cell");
    cells.forEach(cell => {
        cell.classList.remove("snake", "food");
    });

    snake.forEach(segment => {
        const index = segment.y * boardSize + segment.x;
        if (cells[index]) {
            cells[index].classList.add("snake");
        }
    });

    const foodIndex = food.y * boardSize + food.x;
    if (cells[foodIndex]) {
        cells[foodIndex].classList.add("food");
    }
}

function randomFoodPosition() {
    let position;
    do {
        position = {
            x: Math.floor(Math.random() * boardSize),
            y: Math.floor(Math.random() * boardSize)
        };
    } while (snake.some(segment => segment.x === position.x && segment.y === position.y));
    return position;
}

function updateHighScore() {
    if (score > highScore) {
        highScore = score;
        localStorage.setItem("snakeHighScore", highScore);
        highScoreDisplay.textContent = `Highest score: ${highScore}`;
    }
}

function loadHighScore() {
    const savedHighScore = localStorage.getItem("snakeHighScore");
    if (savedHighScore) {
        highScore = parseInt(savedHighScore);
        highScoreDisplay.textContent = `Highest score: ${highScore}`;
    }
}

function startGame() {
    snake = [{ x: 10, y: 10 }];
    direction = { x: 1, y: 0 };
    food = randomFoodPosition();
    score = 0;
    gameOver = false;
    paused = false;
    gameSpeed = 150;
    scoreDisplay.textContent = `Score: ${score}`;

    createBoard();
    draw();

    startBtn.disabled = true;
    pauseBtn.disabled = false;
    resumeBtn.disabled = true;

    if (gameInterval) clearInterval(gameInterval);
    gameInterval = setInterval(gameLoop, gameSpeed);
}

function pauseGame() {
    if (!paused) {
        paused = true;
        clearInterval(gameInterval);
        pauseBtn.disabled = true;
        resumeBtn.disabled = false;
    }
}

function resumeGame() {
    if (paused) {
        paused = false;
        gameInterval = setInterval(gameLoop, gameSpeed);
        pauseBtn.disabled = false;
        resumeBtn.disabled = true;
    }
}

function increaseSpeed() {
    if (gameSpeed > 50) {
        gameSpeed -= 5;
        clearInterval(gameInterval);
        gameInterval = setInterval(gameLoop, gameSpeed);
    }
}

function gameLoop() {
    if (gameOver || paused) return;

    const head = { x: snake[0].x + direction.x, y: snake[0].y + direction.y };

    if (
        head.x < 0 || head.x >= boardSize ||
        head.y < 0 || head.y >= boardSize
    ) {
        gameOver = true;
        gameOverSound.play();
        alert("Game over! Your score:" + score);
        startBtn.disabled = false;
        pauseBtn.disabled = true;
        resumeBtn.disabled = true;
        updateHighScore();
        return;
    }

    if (snake.some(segment => segment.x === head.x && segment.y === head.y)) {
        gameOver = true;
        gameOverSound.play();
        alert("Game over! Your score: " + score);
        startBtn.disabled = false;
        pauseBtn.disabled = true;
        resumeBtn.disabled = true;
        updateHighScore();
        return;
    }

    snake.unshift(head);

    if (head.x === food.x && head.y === food.y) {
        score++;
        scoreDisplay.textContent = `Score: ${score}`;
        eatSound.play();
        food = randomFoodPosition();
        increaseSpeed();
    } else {
        snake.pop();
    }

    draw();
}

window.addEventListener("keydown", e => {
    switch (e.key) {
        case "ArrowUp":
            if (direction.y === 1) break;
            direction = { x: 0, y: -1 };
            break;
        case "ArrowDown":
            if (direction.y === -1) break;
            direction = { x: 0, y: 1 };
            break;
        case "ArrowLeft":
            if (direction.x === 1) break;
            direction = { x: -1, y: 0 };
            break;
        case "ArrowRight":
            if (direction.x === -1) break;
            direction = { x: 1, y: 0 };
            break;
    }
});

startBtn.addEventListener("click", startGame);
pauseBtn.addEventListener("click", pauseGame);
resumeBtn.addEventListener("click", resumeGame);

loadHighScore();
