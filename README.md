# 🔢 Guess My Number

A simple browser-based number guessing game built with HTML, CSS, and JavaScript — now with **optimized logic** for better performance and cleaner structure!

## 🎮 How to Play

1. The computer randomly selects a number between **1 and 20**.
2. You enter a number and click **"Check!"** to see if you guessed correctly.
3. If your guess is wrong, you'll get a hint:
   - "Too high!" if the number is greater than the secret number.
   - "Too low!" if the number is less than the secret number.
4. Each wrong guess decreases your score by 1.
5. If your score reaches 0, the game is over.
6. Click **"Again!"** to restart the game with a new secret number.

## ✅ Features

- Random number generation between 1 and 20
- Score and high score tracking
- Input validation
- UI feedback for win/loss/game reset
- Optimized game logic for better performance and readability

## 🧠 Logic Optimization Notes

- Input is strictly limited between 1 and 20, with default input set to 0.
- After a valid game over (win or lose), the "Again!" button changes to "Reset".

## 🛠️ Technologies Used

- HTML5
- CSS3
- JavaScript (Vanilla JS)

## 🚀 Getting Started

To play the game locally:

```bash
git clone https://github.com/your-username/guess-my-number.git
cd guess-my-number
open index.html
```

## 📁 Project Structure

```
guess-my-number/
├── index.html        # Main game page
├── style.css         # Styling
└── script.js         # Game logic
```

## 👨‍💻 Developer

- Name: Simon Cheong
- GitHub: https://github.com/win0x42

> 🧠 This is a project made for learning purposes.
