Snake Game - CS50 Final Project
Video Link
Demo video on YouTube

Project Description
This project is a classic Snake game implemented using core web technologies: HTML, CSS, and JavaScript. The game recreates the well-known Snake experience where the player controls a snake moving inside a grid board. The objective is to eat randomly appearing food items, which causes the snake to grow longer and the player's score to increase.

The snake is controlled by the arrow keys on the keyboard, and the game ends if the snake hits the wall or runs into itself. To make the game more engaging and challenging, the speed of the snake gradually increases as the player eats more food.

One of the goals of this project is to demonstrate proficiency in important programming concepts covered in the CS50 course. These concepts include data structures such as arrays, event handling to respond to user inputs, timing functions for continuous movement, and manipulating the Document Object Model (DOM) to update the game interface dynamically. The project also shows how to use browser localStorage to save the highest score persistently, so players can keep track of their best performance even after refreshing or closing the browser.

Features
Responsive snake movement controlled smoothly with keyboard arrow keys

Food items appear randomly on the grid and respawn after being eaten

Score counter updates in real time, along with the highest score saved in localStorage

Gradually increasing speed adds progressive difficulty to the game

Pause, resume, and restart buttons provide better game control and user experience

Simple and clean user interface designed with CSS Grid for easy layout management

Sound effects for eating food and game over enhance user engagement

File Structure
index.html: Contains the HTML markup defining the game board, score display, and control buttons

style.css: Applies styling rules to design the game grid, snake, food, buttons, and overall layout

script.js: Implements all game logic including snake movement, collision detection, score handling, speed control, sound playing, and keyboard event listening

Design Decisions
I chose to implement the project using plain HTML, CSS, and JavaScript to ensure maximum compatibility across browsers without the need for additional frameworks or libraries. This choice also aligns well with the learning objectives of CS50, focusing on fundamental web development skills.

Using CSS Grid allowed me to create a flexible 20x20 grid layout for the game board, making it straightforward to position the snake and food elements based on their coordinates. The visual design is kept minimalistic with clear color distinctions between the snake, food, and background to improve user focus and game clarity.

The game speed increases by decreasing the movement interval time each time the snake eats food, introducing an increasing challenge for the player. To improve usability, I added buttons to pause, resume, and restart the game, so players have better control over gameplay.

Saving the highest score in localStorage helps maintain player motivation by preserving their progress across browser sessions.

Sound effects were added to provide immediate feedback for key events like eating food and game over, making the game more immersive.

Challenges and Learning Outcomes
Developing this game was a valuable learning experience that deepened my understanding of several programming concepts. Handling continuous movement with JavaScript timers and updating the DOM in real time to reflect the snake’s position and game state were key challenges.

Implementing collision detection to determine when the snake hits walls or itself required careful logic and testing to avoid bugs. Managing keyboard events without causing direction conflicts (such as moving backwards directly) was another important aspect.

Working with localStorage for persistent data storage introduced me to client-side storage options and how to manage them effectively.

Overall, this project enhanced my skills in event-driven programming, DOM manipulation, and user interface design using basic web technologies.

Future Improvements
If I continue to work on this project, I plan to add several enhancements:

Multiple difficulty levels with different board sizes and speed settings

Start screen and game over screen with improved graphics and user prompts

Touch controls for mobile devices to improve accessibility

A leaderboard feature to track multiple players’ high scores

Additional gameplay elements like obstacles, power-ups, and special food types to add depth

Thank you very much for reviewing my project! I am excited to continue improving my programming skills and building more complex applications in the future.
