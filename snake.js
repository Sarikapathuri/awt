let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let GRID_SIZE = 32;
let gamOver = false
let snake = []; 

snake[0] = {
  x: 9 * GRID_SIZE,
  y: 10 * GRID_SIZE
}
let direction = "right";
let food = {
  x: Math.floor(Math.random() * 15 + 1) * GRID_SIZE,
  y: Math.floor(Math.random() * 15 + 1) * GRID_SIZE
}
function createGrid() {
  context.fillStyle = "skyblue";
  context.fillRect(0, 0, 16 * GRID_SIZE, 16 * GRID_SIZE); 
}
function createSnake() {
  for (i = 0; i < snake.length; i++) {
    context.fillStyle = "green";
    context.fillRect(snake[i].x, snake[i].y, GRID_SIZE, GRID_SIZE);
  }
}
function drawFood() {
  context.fillStyle = "red";
  context.fillRect(food.x, food.y, GRID_SIZE, GRID_SIZE);
}
document.addEventListener('keydown', update);
function update(event) {
  if (event.keyCode == 37 && direction != 'right') direction = 'left';
  if (event.keyCode == 38 && direction != 'down') direction = 'up';
  if (event.keyCode == 39 && direction != 'left') direction = 'right';
  if (event.keyCode == 40 && direction != 'up') direction = 'down';
}
function collision(head, array) {
  for (let i = 0; i < array.length; i++) {
    if (head.x == array[i].x && head.y == array[i].y) {
      return true;
    }
  }
  return false;
}
function initializeGame() {
  if (snake[0].x > 15 * GRID_SIZE && direction == "right")
    snake[0].x = 0;
  if (snake[0].x < 0 && direction == 'left')
    snake[0].x = 16 * GRID_SIZE;
  if (snake[0].y > 15 * GRID_SIZE && direction == "down")
    snake[0].y = 0;
  if (snake[0].y < 0 && direction == 'up')
    snake[0].y = 16 * GRID_SIZE;
  for (i = 1; i < snake.length; i++) {
    if (snake[0].x == snake[i].x && snake[0].y == snake[i].y) {
      clearInterval(game);
      alert('Game Over!!!');
    }
  }
  createGrid()
  createSnake();
  drawFood();
let snakeX = snake[0].x;
let snakeY = snake[0].y;
if (direction == "right") snakeX += GRID_SIZE;
if (direction == "left") snakeX -= GRID_SIZE;
if (direction == "up") snakeY -= GRID_SIZE;
if (direction == "down") snakeY += GRID_SIZE;
if (snakeX != food.x || snakeY != food.y) {
  snake.pop(); //removes the last elemnt on the list
} else {
  food.x = Math.floor(Math.random() * 15 + 1) * GRID_SIZE;
  food.y = Math.floor(Math.random() * 15 + 1) * GRID_SIZE;
}
let newHead = {
  x: snakeX,
  y: snakeY
}
if (snakeX < 0 || snakeX > 15 * GRID_SIZE || snakeY < 0 || snakeY > 15 * GRID_SIZE || collision(newHead, snake)) {
  clearInterval(game);
  alert('game over')
  console.log('collusion')
}
snake.unshift(newHead); 
}
let game = setInterval(initializeGame, 250);
