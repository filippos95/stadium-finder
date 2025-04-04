# Stadium Finder Game

A web-based interactive game where players explore the UK map to find Premier League stadiums, testing their knowledge of football stadium locations.

![Stadium Finder Game](https://via.placeholder.com/800x400?text=Stadium+Finder+Game)

## 🎮 Features

- **Map Exploration**: Navigate through a detailed UK map powered by Mapbox GL
- **Two Game Modes**: 
  - Exploration Mode: Click anywhere to move and search for stadiums
  - First Person Mode: WASD controls for immersive navigation
- **Stadium Information**: Detailed data about each Premier League stadium
- **Visual Effects**: Celebration effects when finding stadiums
- **Score System**: Points based on how quickly you find stadiums
- **Leaderboard**: Track high scores across sessions
- **Multiplayer**: Real-time two-player competitive gameplay

## 🚀 Play Now

You can play the game [here](#) (replace with your deployed link).

## 🎲 How to Play

1. Start the game and get dropped at a random UK location
2. Use the map controls to navigate toward stadium locations
3. Look for the target stadium (shown at the top of your screen)
4. When close to a stadium (within 500m), press SPACE to identify it
5. Score points, gain extra time, and get a new target stadium
6. Find as many stadiums as possible before time runs out!

## ⚽ Stadiums

The game features all 20 Premier League stadiums for the 2024/2025 season, including:
- Emirates Stadium (Arsenal)
- Villa Park (Aston Villa)
- Vitality Stadium (AFC Bournemouth)
- And many more!

## 💻 Technologies Used

- HTML5, CSS3, JavaScript
- Mapbox GL JS for 3D mapping
- Firebase Realtime Database for multiplayer
- Local Storage for leaderboard persistence

## 🔧 Setup for Developers

### Prerequisites
- Mapbox GL JS token
- Firebase project (for multiplayer)

### Installation
1. Clone this repository
```bash
git clone https://github.com/your-username/stadium-finder.git
```

2. Open `index.html` in your browser or use a local server
```bash
# Using Python
python -m http.server 8000
```

3. For multiplayer functionality, create a `.env` file in the project root with your Firebase configuration:
```
FIREBASE_API_KEY=your_actual_api_key
FIREBASE_AUTH_DOMAIN=your-project-id.firebaseapp.com
FIREBASE_DATABASE_URL=https://your-project-id-default-rtdb.firebaseio.com
FIREBASE_PROJECT_ID=your-project-id
FIREBASE_STORAGE_BUCKET=your-project-id.appspot.com
FIREBASE_MESSAGING_SENDER_ID=your_messaging_id
FIREBASE_APP_ID=your_app_id
```

> **Important**: Never commit your `.env` file to version control. It's already in the `.gitignore` file to prevent accidental exposure of secrets.

## 📝 License

MIT License - feel free to use and modify for your own projects.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check [issues page](#).

---

Created with ❤️ by Filippos