// Make sure to replace this with your actual Mapbox token!
mapboxgl.accessToken = 'pk.eyJ1IjoiZmthc2lvIiwiYSI6ImNtOHlmeTkwMTAwdTUya3I2MnFucGgwd3EifQ.MNPxypdXbr336CwI09nEmg';
 
// Stadium Data - keep the original stadiumsData array
const stadiumsData = [
    // Premier League 2024/2025 Season Stadiums
    {
        id: 'emirates_stadium',
        name: 'Emirates Stadium',
        lng: -0.10844,
        lat: 51.5549,
        altitude: 0,
        modelPath: 'logos', // Show logos for this one
        scale: 55,
        color: 0xEF0107,
        description: 'Home of Arsenal F.C.',
        yearBuilt: 2006,
        homeTeams: ['Arsenal'],
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Emirates_Stadium_aerial_view.jpg/640px-Emirates_Stadium_aerial_view.jpg',
        // Fixture Data (embedded)
        logoUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/53/Arsenal_FC.svg/320px-Arsenal_FC.svg.png',
        nextOpponentLogoUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/c1/Fulham_FC_%28shield%29.svg/320px-Fulham_FC_%28shield%29.svg.png',
        nextMatchDate: '2024-09-15',
        // Additional Info
        capacity: 60704,
        recordAttendance: 60383,
        surface: 'GrassMaster (hybrid grass)',
        architect: 'Populous',
        cost: '£390 million'
    },
    {
        id: 'villa_park',
        name: 'Villa Park',
        lng: -1.8848,
        lat: 52.5092,
        altitude: 0,
        modelPath: 'logos', // Show logos for this one
        scale: 50,
        color: 0x670E36,
        description: 'Home of Aston Villa F.C.',
        yearBuilt: 1897,
        homeTeams: ['Aston Villa'],
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Villa_Park_from_the_air.jpg/640px-Villa_Park_from_the_air.jpg',
        // Fixture Data (embedded)
        logoUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/f/f9/Aston_Villa_logo.svg/320px-Aston_Villa_logo.svg.png',
        nextOpponentLogoUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/eb/Manchester_City_FC_badge.svg/320px-Manchester_City_FC_badge.svg.png',
        nextMatchDate: '2024-09-16',
        // Additional Info
        capacity: 42657,
        recordAttendance: 76588, // Note: Old record before seating changes
        surface: 'Desso GrassMaster (hybrid grass)',
        architect: 'Archibald Leitch (main stands)',
        cost: 'N/A (Historic ground)'
    },
    {
        id: 'vitality_stadium',
        name: 'Vitality Stadium',
        lng: -1.83839,
        lat: 50.7352,
        altitude: 0,
        modelPath: 'cylinder', // Back to cylinder default
        scale: 40,
        color: 0xDA291C, // Bournemouth Red
        description: 'Home of AFC Bournemouth.',
        yearBuilt: 1910, // Rebuilt 2001
        homeTeams: ['AFC Bournemouth'],
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Vitality_Stadium_-_geograph.org.uk_-_4476873.jpg/640px-Vitality_Stadium_-_geograph.org.uk_-_4476873.jpg',
        // Additional Info
        capacity: 11307,
        recordAttendance: 28799, // Note: Old record before seating changes
        surface: 'Grass',
        architect: 'N/A (Rebuilt)',
        cost: 'N/A (Rebuilt)'
    },
    {
        id: 'gtech_community_stadium',
        name: 'Gtech Community Stadium',
        lng: -0.2891,
        lat: 51.4907,
        altitude: 0,
        modelPath: 'cylinder',
        scale: 45,
        color: 0xFF0000, // Brentford Red
        description: 'Home of Brentford F.C.',
        yearBuilt: 2020,
        homeTeams: ['Brentford'],
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Brentford_Community_Stadium_2021.jpg/640px-Brentford_Community_Stadium_2021.jpg'
    },
    {
        id: 'amex_stadium',
        name: 'Amex Stadium',
        lng: -0.083,
        lat: 50.8618,
        altitude: 0,
        modelPath: 'cylinder',
        scale: 50,
        color: 0x0057B8, // Brighton Blue
        description: 'Home of Brighton & Hove Albion F.C.',
        yearBuilt: 2011,
        homeTeams: ['Brighton & Hove Albion'],
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Falmer_Stadium_aerial_view.jpg/640px-Falmer_Stadium_aerial_view.jpg'
    },
    {
        id: 'stamford_bridge',
        name: 'Stamford Bridge',
        lng: -0.191,
        lat: 51.4817,
        altitude: 0,
        modelPath: 'cylinder',
        scale: 50,
        color: 0x034694, // Chelsea Blue
        description: 'Home of Chelsea F.C.',
        yearBuilt: 1877, // Opened
        homeTeams: ['Chelsea'],
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Stamford_Bridge_Clear_Skies.JPG/640px-Stamford_Bridge_Clear_Skies.JPG'
    },
    {
        id: 'selhurst_park',
        name: 'Selhurst Park',
        lng: -0.0855,
        lat: 51.3983,
        altitude: 0,
        modelPath: 'cylinder',
        scale: 45,
        color: 0xC4122E, // Crystal Palace Red
        description: 'Home of Crystal Palace F.C.',
        yearBuilt: 1924,
        homeTeams: ['Crystal Palace'],
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Selhurst_Park_main_stand_and_corporate_boxes.jpg/640px-Selhurst_Park_main_stand_and_corporate_boxes.jpg'
    },
    {
        id: 'goodison_park',
        name: 'Goodison Park',
        lng: -2.9663,
        lat: 53.4388,
        altitude: 0,
        modelPath: 'cylinder',
        scale: 50,
        color: 0x003399, // Everton Blue
        description: 'Home of Everton F.C.',
        yearBuilt: 1892,
        homeTeams: ['Everton'],
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Goodison_Park_stands_2015.jpg/640px-Goodison_Park_stands_2015.jpg'
    },
    {
        id: 'craven_cottage',
        name: 'Craven Cottage',
        lng: -0.2216,
        lat: 51.475,
        altitude: 0,
        modelPath: 'cylinder',
        scale: 45,
        color: 0x000000, // Fulham Black/White (use Black)
        description: 'Home of Fulham F.C.',
        yearBuilt: 1896,
        homeTeams: ['Fulham'],
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Craven_Cottage_March_2006.jpg/640px-Craven_Cottage_March_2006.jpg'
    },
    {
        id: 'portman_road',
        name: 'Portman Road',
        lng: 1.1488,
        lat: 52.0499,
        altitude: 0,
        modelPath: 'cylinder',
        scale: 45,
        color: 0x1C307F, // Ipswich Blue
        description: 'Home of Ipswich Town F.C.',
        yearBuilt: 1884, // Ground established
        homeTeams: ['Ipswich Town'],
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Portman_Road_From_West_Stand.jpg/640px-Portman_Road_From_West_Stand.jpg'
    },
    {
        id: 'king_power_stadium',
        name: 'King Power Stadium',
        lng: -1.1422,
        lat: 52.6204,
        altitude: 0,
        modelPath: 'cylinder',
        scale: 50,
        color: 0x0053A0, // Leicester Blue
        description: 'Home of Leicester City F.C.',
        yearBuilt: 2002,
        homeTeams: ['Leicester City'],
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/King_Power_Stadium_Aerial_View_%28cropped%29.jpg/640px-King_Power_Stadium_Aerial_View_%28cropped%29.jpg'
    },
    {
        id: 'anfield',
        name: 'Anfield',
        lng: -2.9608,
        lat: 53.4308,
        altitude: 0,
        modelPath: 'cylinder',
        scale: 55,
        color: 0xC8102E, // Liverpool Red
        description: 'Home of Liverpool F.C.',
        yearBuilt: 1884, // Ground established
        homeTeams: ['Liverpool'],
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Panorama_of_Anfield_with_new_main_stand_%2829676137814%29.jpg/640px-Panorama_of_Anfield_with_new_main_stand_%2829676137814%29.jpg'
    },
    {
        id: 'etihad_stadium',
        name: 'Etihad Stadium',
        lng: -2.2004,
        lat: 53.4831,
        altitude: 0,
        modelPath: 'cylinder',
        scale: 55,
        color: 0x6CABDD, // Man City Sky Blue
        description: 'Home of Manchester City F.C.',
        yearBuilt: 2002,
        homeTeams: ['Manchester City'],
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Etihad_Stadium.jpg/640px-Etihad_Stadium.jpg'
    },
    {
        id: 'old_trafford',
        name: 'Old Trafford',
        lng: -2.2913,
        lat: 53.4631,
        altitude: 0,
        modelPath: 'cylinder', 
        scale: 55,
        color: 0xDA291C, // Man Utd Red
        description: 'Home of Manchester United F.C.',
        yearBuilt: 1910,
        homeTeams: ['Manchester United'],
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Old_Trafford_inside_20060726_1.jpg/640px-Old_Trafford_inside_20060726_1.jpg' 
    },
    {
        id: 'st_james_park',
        name: 'St James\' Park',
        lng: -1.6217,
        lat: 54.9756,
        altitude: 0,
        modelPath: 'cylinder',
        scale: 55,
        color: 0x241F20, // Newcastle Black
        description: 'Home of Newcastle United F.C.',
        yearBuilt: 1892, // Ground used since 1880
        homeTeams: ['Newcastle United'],
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/St_James%27_Park_aerial_view.jpg/640px-St_James%27_Park_aerial_view.jpg'
    },
    {
        id: 'city_ground',
        name: 'City Ground',
        lng: -1.1324,
        lat: 52.9400,
        altitude: 0,
        modelPath: 'cylinder',
        scale: 45,
        color: 0xE53233, // Nottingham Forest Red
        description: 'Home of Nottingham Forest F.C.',
        yearBuilt: 1898,
        homeTeams: ['Nottingham Forest'],
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Citygroundfromriver.jpg/640px-Citygroundfromriver.jpg'
    },
    {
        id: 'st_marys_stadium',
        name: 'St Mary\'s Stadium',
        lng: -1.3911,
        lat: 50.9058,
        altitude: 0,
        modelPath: 'cylinder',
        scale: 50,
        color: 0xD71920, // Southampton Red
        description: 'Home of Southampton F.C.',
        yearBuilt: 2001,
        homeTeams: ['Southampton'],
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/St._Mary%27s_Stadium_-_panoramio_%285%29.jpg/640px-St._Mary%27s_Stadium_-_panoramio_%285%29.jpg'
    },
    {
        id: 'tottenham_hotspur_stadium',
        name: 'Tottenham Hotspur Stadium',
        lng: -0.0662,
        lat: 51.6043,
        altitude: 0,
        modelPath: 'cylinder',
        scale: 60,
        color: 0x132257, // Tottenham Navy
        description: 'Home of Tottenham Hotspur F.C.',
        yearBuilt: 2019,
        homeTeams: ['Tottenham Hotspur'],
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Tottenham_Hotspur_Stadium_external_April_2019.jpg/640px-Tottenham_Hotspur_Stadium_external_April_2019.jpg'
    },
    {
        id: 'london_stadium',
        name: 'London Stadium',
        lng: -0.0166,
        lat: 51.5386,
        altitude: 0,
        modelPath: 'cylinder',
        scale: 60,
        color: 0x7A263A, // West Ham Claret
        description: 'Home of West Ham United F.C.',
        yearBuilt: 2011, // Built for Olympics
        homeTeams: ['West Ham United'],
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/London_Stadium_June_2017.jpg/640px-London_Stadium_June_2017.jpg'
    },
    {
        id: 'molineux_stadium',
        name: 'Molineux Stadium',
        lng: -2.1303,
        lat: 52.5902,
        altitude: 0,
        modelPath: 'cylinder',
        scale: 45,
        color: 0xFDB913, // Wolves Gold
        description: 'Home of Wolverhampton Wanderers F.C.',
        yearBuilt: 1889,
        homeTeams: ['Wolverhampton Wanderers'],
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Molineux_Stadium_-_Wolverhampton_Wanderers_FC.jpg/640px-Molineux_Stadium_-_Wolverhampton_Wanderers_FC.jpg'
    }
];

// Game state variables
let gameActive = false;
let score = 0;
let timer = 60;
let timerInterval;
let foundStadiums = [];
let targetStadium = null;
let playerPosition = { lng: 0, lat: 0 };
let playerMarker = null;
let distanceIndicator = null;
let miniMapMarkers = [];
let explorationMode = true; // New variable to track exploration mode
let hideMinimapStadiums = true; // New variable to hide minimap stadiums in exploration mode
let playerName = ""; // Store player name for leaderboard

// Multiplayer state variables
let isMultiplayerMode = false;
let isHost = false;
let gameRoomId = null;
let opponentName = "";
let opponentScore = 0;
let opponentStadiums = 0;
let playerNickname = "";
let firebaseApp = null;
let firebaseDB = null;

// Function to initialize Firebase (call this when deploying to production)
function initializeFirebase() {
    console.log("Initializing Firebase...");

    try {
        // Load Firebase configuration from environment variables if available
        // Otherwise, use placeholder configuration
        const firebaseConfig = {
            apiKey: window.env?.FIREBASE_API_KEY || "YOUR_API_KEY",
            authDomain: window.env?.FIREBASE_AUTH_DOMAIN || "YOUR_PROJECT.firebaseapp.com",
            databaseURL: window.env?.FIREBASE_DATABASE_URL || "https://YOUR_PROJECT-default-rtdb.firebaseio.com",
            projectId: window.env?.FIREBASE_PROJECT_ID || "YOUR_PROJECT",
            storageBucket: window.env?.FIREBASE_STORAGE_BUCKET || "YOUR_PROJECT.appspot.com",
            messagingSenderId: window.env?.FIREBASE_MESSAGING_SENDER_ID || "YOUR_MESSAGING_ID",
            appId: window.env?.FIREBASE_APP_ID || "YOUR_APP_ID",
            measurementId: window.env?.FIREBASE_MEASUREMENT_ID || "YOUR_MEASUREMENT_ID"
        };

        console.log("Firebase config:", JSON.stringify({
            apiKey: firebaseConfig.apiKey ? "***" : "NOT SET",
            authDomain: firebaseConfig.authDomain,
            databaseURL: firebaseConfig.databaseURL,
            projectId: firebaseConfig.projectId,
            measurementId: firebaseConfig.measurementId ? "***" : "NOT SET"
        }));

        // Validate essential Firebase config
        if (!firebaseConfig.apiKey || firebaseConfig.apiKey === "YOUR_API_KEY" || 
            !firebaseConfig.databaseURL || firebaseConfig.databaseURL === "https://YOUR_PROJECT-default-rtdb.firebaseio.com") {
            console.warn("Firebase configuration is incomplete. Using mock Firebase.");
            setupMockFirebase();
            return;
        }

        // Initialize Firebase only if it's not already initialized
        if (typeof firebase !== 'undefined' && firebase.apps.length === 0) {
            firebaseApp = firebase.initializeApp(firebaseConfig);
            firebaseDB = firebase.database();
            
            // Initialize Analytics
            if (typeof firebase.analytics === 'function') {
                window.firebaseAnalytics = firebase.analytics();
                console.log("Firebase Analytics initialized");
                
                // Log app_open event
                window.firebaseAnalytics.logEvent('app_open');
            } else {
                console.warn("Firebase Analytics not available");
            }
            
            console.log("Firebase successfully initialized");

            // Test connection by reading a value
            firebaseDB.ref('.info/connected').on('value', (snap) => {
                if (snap.val() === true) {
                    console.log("Connected to Firebase");
                } else {
                    console.warn("Disconnected from Firebase");
                }
            });
        } else if (firebase.apps.length > 0) {
            console.log("Firebase already initialized");
            firebaseApp = firebase.app();
            firebaseDB = firebase.database();
            
            // Get Analytics instance if it exists
            if (typeof firebase.analytics === 'function') {
                window.firebaseAnalytics = firebase.analytics();
            }
        } else {
            console.warn("Firebase SDK not found, using mock Firebase");
            setupMockFirebase();
        }
    } catch (error) {
        console.error("Error initializing Firebase:", error);
        setupMockFirebase();
    }
}

// Setup mock Firebase functionality for development or when real Firebase isn't available
function setupMockFirebase() {
    console.log("Setting up mock Firebase...");
    // Create mock Firebase functionality
    firebaseDB = {
        ref: (path) => {
            return {
                set: (data) => {
                    console.log(`Mock Firebase set ${path}:`, data);
                    return Promise.resolve();
                },
                update: (data) => {
                    console.log(`Mock Firebase update ${path}:`, data);
                    return Promise.resolve();
                },
                remove: () => {
                    console.log(`Mock Firebase remove ${path}`);
                    return Promise.resolve();
                },
                on: (eventType, callback) => {
                    console.log(`Mock Firebase on ${eventType} for ${path}`);
                    // Mock data for testing
                    if (path.includes('rooms') && !path.includes('players')) {
                        callback({
                            exists: () => true,
                            val: () => ({
                                hostName: isHost ? playerNickname : "Test Opponent",
                                active: true,
                                created: new Date().toISOString()
                            })
                        });
                    } else if (path.includes('players')) {
                        callback({
                            exists: () => true,
                            val: () => ({
                                [isHost ? 'host' : 'guest']: {
                                    name: playerNickname,
                                    score: score,
                                    stadiumsFound: foundStadiums.length
                                },
                                [isHost ? 'guest' : 'host']: {
                                    name: "Test Opponent",
                                    score: Math.floor(Math.random() * 200),
                                    stadiumsFound: Math.floor(Math.random() * 5)
                                }
                            })
                        });
                    } else if (path === '.info/connected') {
                        callback({
                            val: () => true
                        });
                    } else if (path === 'leaderboard') {
                        // Return mock leaderboard data from localStorage
                        const localScores = getLocalHighScores();
                        callback({
                            exists: () => localScores.length > 0,
                            forEach: (fn) => {
                                localScores.forEach((score, index) => {
                                    fn({
                                        val: () => score,
                                        key: `mock-key-${index}`
                                    });
                                });
                            }
                        });
                    }

                    // Return an object with off method to match Firebase API
                    return {
                        off: () => console.log(`Mock Firebase off for ${path}`)
                    };
                },
                once: (eventType) => {
                    console.log(`Mock Firebase once ${eventType} for ${path}`);
                    return new Promise((resolve) => {
                        if (path === 'leaderboard') {
                            // Return mock leaderboard data from localStorage
                            const localScores = getLocalHighScores();
                            resolve({
                                exists: () => localScores.length > 0,
                                forEach: (fn) => {
                                    localScores.forEach((score, index) => {
                                        fn({
                                            val: () => score,
                                            key: `mock-key-${index}`
                                        });
                                    });
                                }
                            });
                        } else if (path.includes('rooms/')) {
                            // Mock room data for testing join functionality
                            resolve({
                                exists: () => true,
                                val: () => ({
                                    hostName: "Test Host",
                                    active: true,
                                    gameStarted: false,
                                    created: new Date().toISOString()
                                })
                            });
                        } else {
                            resolve({
                                exists: () => false,
                                val: () => null,
                                forEach: () => {}
                            });
                        }
                    });
                },
                off: (eventType) => console.log(`Mock Firebase off ${path} ${eventType || 'all'}`)
            };
        }
    };
}

// DOM elements
const scoreElement = document.getElementById('score');
const timerElement = document.getElementById('timer');
const targetStadiumElement = document.getElementById('target-stadium');
const startGameBtn = document.getElementById('start-game-btn');
const helpBtn = document.getElementById('help-btn');
const instructionsModal = document.getElementById('instructions-modal');
const gameOverModal = document.getElementById('game-over-modal');
const finalScoreElement = document.getElementById('final-score');
const stadiumsFoundElement = document.getElementById('stadiums-found');
const playAgainBtn = document.getElementById('play-again-btn');
const closeModalBtns = document.querySelectorAll('.close-modal');
const leaderboardBtn = document.getElementById('leaderboard-btn');
const leaderboardModal = document.getElementById('leaderboard-modal');
const leaderboardEntries = document.getElementById('leaderboard-entries');
const startFromLeaderboardBtn = document.getElementById('start-from-leaderboard');
const clearLeaderboardBtn = document.getElementById('clear-leaderboard');
const closeLeaderboardBtn = document.getElementById('close-leaderboard');

// Multiplayer DOM elements
const multiplayerBtn = document.getElementById('multiplayer-btn');
const multiplayerModal = document.getElementById('multiplayer-modal');
const closeMultiplayerBtn = document.getElementById('close-multiplayer');
const multiplayerLoginSection = document.getElementById('multiplayer-login');
const multiplayerMenuSection = document.getElementById('multiplayer-menu');
const waitingRoomSection = document.getElementById('waiting-room');
const joinGameSection = document.getElementById('join-game-section');
const playerNicknameInput = document.getElementById('player-nickname');
const setNicknameBtn = document.getElementById('set-nickname-btn');
const createGameBtn = document.getElementById('create-game-btn');
const joinGameBtn = document.getElementById('join-game-btn');
const returnSoloBtn = document.getElementById('return-solo-btn');
const gameCodeDisplay = document.getElementById('game-code');
const hostNameDisplay = document.getElementById('host-name');
const guestNameDisplay = document.getElementById('guest-name');
const guestStatusDisplay = document.getElementById('guest-status');
const startMultiplayerBtn = document.getElementById('start-multiplayer-btn');
const leaveRoomBtn = document.getElementById('leave-room-btn');
const joinCodeInput = document.getElementById('join-code');
const joinRoomBtn = document.getElementById('join-room-btn');
const joinErrorDisplay = document.getElementById('join-error');
const backToMenuBtn = document.getElementById('back-to-menu-btn');
const opponentStatusDisplay = document.getElementById('opponent-status');
const opponentNameDisplay = document.getElementById('opponent-name');
const opponentScoreDisplay = document.getElementById('opponent-score');
const opponentStadiumsDisplay = document.getElementById('opponent-stadiums-count');

// Get reference to the target arrow
const targetArrow = document.getElementById('target-arrow');

// DOM elements for loading screen
const loadingScreen = document.getElementById('loading-screen');
const loadingProgress = document.querySelector('.loading-progress');

// Initialize the main map
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/satellite-streets-v12',
    center: [-0.1278, 51.5074], // London
    zoom: 12,
    pitch: 0,
    bearing: 0,
    interactive: true, // Enable interaction by default
    antialias: true, // Enable anti-aliasing for smoother lines
});

// Add zoom controls to the map
map.addControl(new mapboxgl.NavigationControl({
    showCompass: false, // Hide compass since we have our own
}), 'bottom-left');

// Initialize the mini-map
const miniMap = new mapboxgl.Map({
    container: 'mini-map',
    style: 'mapbox://styles/mapbox/dark-v11',
    center: [-0.1278, 51.5074], // London
    zoom: 5,
    interactive: false, // No interaction with mini-map
});

// Create target indicator
const targetIndicator = document.createElement('div');
targetIndicator.id = 'target-indicator';
document.body.appendChild(targetIndicator);
targetIndicator.style.display = 'none'; // Hide by default

// Create distance indicator
const distanceIndicatorElement = document.createElement('div');
distanceIndicatorElement.id = 'distance-indicator';
distanceIndicatorElement.style.display = 'none';
distanceIndicatorElement.textContent = 'Searching...';
document.body.appendChild(distanceIndicatorElement);

// Initialize info panel elements
const infoPanel = document.getElementById('info-panel');
const closePanelBtn = document.getElementById('close-panel-btn');
const panelStadiumName = document.getElementById('panel-stadium-name');
const panelStadiumImage = document.getElementById('panel-stadium-image');
const panelStadiumDescription = document.getElementById('panel-stadium-description');
const panelStadiumYear = document.getElementById('panel-stadium-year');
const panelStadiumCapacity = document.getElementById('panel-stadium-capacity');
const panelStadiumAttendance = document.getElementById('panel-stadium-attendance');
const panelStadiumSurface = document.getElementById('panel-stadium-surface');
const panelStadiumArchitect = document.getElementById('panel-stadium-architect');
const panelStadiumCost = document.getElementById('panel-stadium-cost');
const panelStadiumTeams = document.getElementById('panel-stadium-teams');

// Get reference to compass elements
const compassArrow = document.querySelector('.compass-arrow');
const compass = document.getElementById('compass');

// Toggle button for exploration mode
const toggleExplorationBtn = document.getElementById('toggle-exploration');
if (toggleExplorationBtn) {
    toggleExplorationBtn.addEventListener('click', toggleExplorationMode);
}

// Event listeners
map.on('load', initializeGame);
startGameBtn.addEventListener('click', startGame);
helpBtn.addEventListener('click', showInstructions);
leaderboardBtn.addEventListener('click', showLeaderboard);
playAgainBtn.addEventListener('click', resetGame);
closePanelBtn.addEventListener('click', hideInfoPanel);
startFromLeaderboardBtn.addEventListener('click', () => {
    leaderboardModal.style.display = 'none';
    startGame();
});
clearLeaderboardBtn.addEventListener('click', clearLeaderboard);
closeLeaderboardBtn.addEventListener('click', () => {
    leaderboardModal.style.display = 'none';
});
closeModalBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        instructionsModal.style.display = 'none';
    });
});

// Multiplayer event listeners
multiplayerBtn.addEventListener('click', showMultiplayerModal);
closeMultiplayerBtn.addEventListener('click', hideMultiplayerModal);
setNicknameBtn.addEventListener('click', setPlayerNickname);
createGameBtn.addEventListener('click', createMultiplayerGame);
joinGameBtn.addEventListener('click', showJoinGameSection);
returnSoloBtn.addEventListener('click', returnToSoloMode);
startMultiplayerBtn.addEventListener('click', startMultiplayerGame);
leaveRoomBtn.addEventListener('click', leaveGameRoom);
joinRoomBtn.addEventListener('click', joinGameRoom);
backToMenuBtn.addEventListener('click', () => {
    joinGameSection.style.display = 'none';
    multiplayerMenuSection.style.display = 'block';
});

// Add click event for fast movement in exploration mode
map.on('click', (e) => {
    if (gameActive && explorationMode) {
        // Move player to clicked location
        playerPosition.lng = e.lngLat.lng;
        playerPosition.lat = e.lngLat.lat;

        // Update player marker on mini-map
        playerMarker.setLngLat([playerPosition.lng, playerPosition.lat]);

        // Center mini-map on new player position
        miniMap.setCenter([playerPosition.lng, playerPosition.lat]);
    }
});

// Key handling for movement
const keys = {};
document.addEventListener('keydown', (e) => {
    keys[e.key.toLowerCase()] = true;

    // Space bar to identify stadium
    if (e.code === 'Space' && gameActive) {
        identifyStadium();
    }

    // Toggle exploration mode with E key
    if (e.key.toLowerCase() === 'e' && gameActive) {
        toggleExplorationMode();
    }
});

document.addEventListener('keyup', (e) => {
    keys[e.key.toLowerCase()] = false;
});

// Mouse movement for looking around - only in first person mode
let lastMouseX = 0;
let lastMouseY = 0;
let mouseCaptured = false;

document.addEventListener('mousedown', (e) => {
    if (gameActive && e.button === 0 && !explorationMode) {
        mouseCaptured = true;
        lastMouseX = e.clientX;
        lastMouseY = e.clientY;
    }
});

document.addEventListener('mouseup', () => {
    mouseCaptured = false;
});

document.addEventListener('mousemove', (e) => {
    if (gameActive && mouseCaptured && !explorationMode) {
        const deltaX = e.clientX - lastMouseX;
        const deltaY = e.clientY - lastMouseY;

        const currentBearing = map.getBearing();
        map.setBearing(currentBearing - deltaX * 0.1);

        const currentPitch = map.getPitch();
        const newPitch = currentPitch - deltaY * 0.1;
        map.setPitch(Math.max(0, Math.min(60, newPitch)));

        lastMouseX = e.clientX;
        lastMouseY = e.clientY;
    }
});

// Toggle between exploration and first-person mode
function toggleExplorationMode() {
    explorationMode = !explorationMode;

    if (explorationMode) {
        // Switch to exploration mode
        map.setZoom(9); // Zoom out to see more area
        map.setPitch(0); // Remove pitch for top-down view

        // Enable map controls
        map.dragPan.enable();
        map.scrollZoom.enable();
        map.doubleClickZoom.enable();

        // Hide first-person UI elements
        targetArrow.style.display = 'none';
        targetIndicator.style.display = 'none';

        // Update UI
        if (targetStadium) {
            targetStadiumElement.textContent = 'Target: ' + targetStadium.name;
        }

        // Hide stadium markers on minimap in exploration mode
        toggleMinimapMarkers(hideMinimapStadiums);

        // Update distance indicator text
        distanceIndicatorElement.textContent = `Click anywhere to move. Find ${targetStadium.name} with no markers!`;
    } else {
        // Switch to first-person mode
        map.setZoom(16);
        map.setPitch(60);

        // Disable map controls except for zoom
        map.dragPan.disable();
        map.doubleClickZoom.disable();
        map.scrollZoom.enable(); // Keep zoom enabled

        // Show first-person UI elements
        if (targetStadium) {
            targetArrow.style.display = 'block';
            targetIndicator.style.display = 'block';
            targetStadiumElement.textContent = targetStadium.name;
        }

        // Show stadium markers on minimap in first-person mode
        toggleMinimapMarkers(false);

        // Center map on current player position
        map.setCenter([playerPosition.lng, playerPosition.lat]);
    }

    // Update button text if it exists
    if (toggleExplorationBtn) {
        toggleExplorationBtn.textContent = explorationMode ? 'First Person Mode' : 'Exploration Mode';
    }
}

// Function to toggle visibility of minimap markers
function toggleMinimapMarkers(hide) {
    miniMapMarkers.forEach(marker => {
        if (hide) {
            marker.style.display = 'none';
        } else {
            marker.style.display = 'block';
        }
    });
}

// Game functions
function initializeGame() {
    // Set up 3D terrain
    map.addSource('mapbox-dem', {
        'type': 'raster-dem',
        'url': 'mapbox://mapbox.mapbox-terrain-dem-v1',
        'tileSize': 512,
        'maxzoom': 14
    });

    map.setTerrain({ 'source': 'mapbox-dem', 'exaggeration': 1.8 });

    // Add fog effect
    map.setFog({
        'color': 'rgba(186, 210, 235, 0.8)', // Light blue/white fog
        'high-color': 'rgba(236, 255, 255, 1.0)', // Sky color
        'horizon-blend': 0.1, // Fog density
        'space-color': 'rgba(11, 11, 25, 1.0)', // Dark blue/black night sky
        'star-intensity': 0.6, // Show stars in the night sky
        'range': [0.8, 8] // Fog distance range
    });

    // Add 3D buildings with enhanced lighting
    map.addLayer({
        'id': '3d-buildings',
        'source': 'composite',
        'source-layer': 'building',
        'filter': ['==', 'extrude', 'true'],
        'type': 'fill-extrusion',
        'minzoom': 14,
        'paint': {
            'fill-extrusion-color': [
                'interpolate',
                ['linear'],
                ['get', 'height'],
                0, '#aaa',
                50, '#bbb',
                100, '#ccc',
                200, '#ddd'
            ],
            'fill-extrusion-height': [
                'interpolate', ['linear'], ['zoom'],
                15, 0,
                16, ['get', 'height']
            ],
            'fill-extrusion-base': [
                'interpolate', ['linear'], ['zoom'],
                15, 0,
                16, ['get', 'min_height']
            ],
            'fill-extrusion-opacity': 0.8,
            'fill-extrusion-ambient-occlusion-intensity': 0.3,
            'fill-extrusion-ambient-occlusion-radius': 3
        }
    });

    // Add dynamic sky layer
    map.addLayer({
        'id': 'sky',
        'type': 'sky',
        'paint': {
            'sky-opacity': [
                'interpolate',
                ['linear'],
                ['zoom'],
                0, 0,
                5, 0.3,
                8, 1
            ],
            'sky-type': 'atmosphere',
            'sky-atmosphere-sun': [0.0, 0.0],
            'sky-atmosphere-sun-intensity': 15
        }
    });

    // Add stadium markers to mini-map only (not on main map)
    stadiumsData.forEach(stadium => {
        const el = document.createElement('div');
        el.className = 'mini-map-marker';
        el.dataset.stadiumId = stadium.id;

        new mapboxgl.Marker(el)
            .setLngLat([stadium.lng, stadium.lat])
            .addTo(miniMap);

        miniMapMarkers.push(el);

        // Removed stadium markers from main map to make the game more challenging
    });

    // Create player marker for mini-map
    const playerEl = document.createElement('div');
    playerEl.className = 'mini-map-player';
    playerMarker = new mapboxgl.Marker(playerEl)
        .setLngLat([-0.1278, 51.5074])
        .addTo(miniMap);

    // Load and show leaderboard after loading screen
    loadLeaderboard();

    // Show instructions modal on initial load
    setTimeout(() => {
        showLeaderboard(); // Show leaderboard first
    }, 500);
}

function startGame(isMultiplayer = false) {
    // Reset game state
    gameActive = true;
    score = 0;
    timer = 60;
    foundStadiums = [];

    // Set multiplayer mode if specified
    isMultiplayerMode = isMultiplayer;

    // Start in exploration mode
    explorationMode = true;

    // Update UI
    scoreElement.textContent = score;
    timerElement.textContent = timer;
    startGameBtn.textContent = 'Restart Game';

    // Place player at random location in the UK
    // UK bounds: roughly between -10 to 2 longitude and 50 to 59 latitude
    const randomLng = -5 + Math.random() * 7; // From -5 to 2
    const randomLat = 50 + Math.random() * 9; // From 50 to 59

    playerPosition = { lng: randomLng, lat: randomLat };

    // Select random stadium as target instead of nearest
    const availableStadiums = stadiumsData.filter(stadium => !foundStadiums.includes(stadium.id));
    if (availableStadiums.length > 0) {
        const randomIndex = Math.floor(Math.random() * availableStadiums.length);
        targetStadium = availableStadiums[randomIndex];
        targetStadiumElement.textContent = 'Target: ' + targetStadium.name;
    } else {
        endGame(true);
        return;
    }

    // Start with exploration view
    map.flyTo({
        center: [playerPosition.lng, playerPosition.lat],
        zoom: 9, // Zoomed out for exploration
        pitch: 0, // Flat view for exploration
        bearing: 0,
        duration: 2000,
        essential: true
    });

    // Update player marker on mini-map
    playerMarker.setLngLat([playerPosition.lng, playerPosition.lat]);
    miniMap.setCenter([playerPosition.lng, playerPosition.lat]);

    // Configure map for exploration
    map.dragPan.enable();
    map.scrollZoom.enable();
    map.boxZoom.enable();
    map.dragRotate.enable();
    map.keyboard.enable();
    map.doubleClickZoom.enable();

    // Hide stadium markers on minimap in exploration mode
    toggleMinimapMarkers(hideMinimapStadiums);

    // Start game loop
    startGameLoop();

    // Start timer
    startTimer();

    // Show distance indicator
    distanceIndicatorElement.style.display = 'block';
    distanceIndicatorElement.textContent = `Click anywhere to move. Find ${targetStadium.name} with no markers!`;

    // Hide target arrow in exploration mode
    targetArrow.style.display = 'none';

    // Show compass
    compass.style.display = 'block';

    // If multiplayer, initialize player stats
    if (isMultiplayerMode) {
        updatePlayerStats();
    }

    // Update Buy Me a Coffee button visibility
    updateBuyMeCoffeeVisibility();
    
    // Log game_start event
    logAnalyticsEvent('game_start', {
        multiplayer_mode: isMultiplayer,
        exploration_mode: explorationMode
    });
}

function updateTargetStadium() {
    // Filter out already found stadiums
    const availableStadiums = stadiumsData.filter(stadium => !foundStadiums.includes(stadium.id));

    // If we have no more stadiums to find, game over with victory
    if (availableStadiums.length === 0) {
        endGame(true);
        return;
    }

    // Select a random stadium from the available ones
    const randomIndex = Math.floor(Math.random() * availableStadiums.length);
    targetStadium = availableStadiums[randomIndex];

    // Update UI to show target name in both modes, but no location hints in exploration mode
    targetStadiumElement.textContent = explorationMode ? 'Find: ' + targetStadium.name : targetStadium.name;
}

function startGameLoop() {
    // Set up game loop
    function gameLoop() {
        if (!gameActive) return;

        // Only handle movement in first-person mode
        if (!explorationMode) {
            movePlayer();
        }

        // Always update mini-map player position
        playerMarker.setLngLat([playerPosition.lng, playerPosition.lat]);

        // In first-person mode, center the mini-map on player
        if (!explorationMode) {
            miniMap.setCenter([playerPosition.lng, playerPosition.lat]);
        }

        // Update target arrow only in first-person mode
        if (!explorationMode && targetStadium) {
            updateTargetArrow();
        }

        // Update compass in all modes
        updateCompass();

        // Update distance indicator - different for each mode
        if (targetStadium) {
            const distance = getDistance(
                playerPosition.lat, playerPosition.lng,
                targetStadium.lat, targetStadium.lng
            );

            if (explorationMode) {
                // In exploration mode, give general distance info but don't direct
                if (distance < 0.5) { // 500 meters
                    distanceIndicatorElement.textContent = `You're close to ${targetStadium.name}! Press SPACE to identify.`;
                    distanceIndicatorElement.style.backgroundColor = 'rgba(39, 174, 96, 0.8)';
                } else {
                    distanceIndicatorElement.textContent = `Use your knowledge of UK to find ${targetStadium.name}!`;
                    distanceIndicatorElement.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
                }
            } else {
                // Format distance nicely for first-person mode
                let distanceText;
                if (distance < 1) {
                    distanceText = `${Math.round(distance * 1000)} meters`;
                } else {
                    distanceText = `${distance.toFixed(1)} km`;
                }

                distanceIndicatorElement.textContent = `Distance to ${targetStadium.name}: ${distanceText}`;

                // Visual indication when very close
                if (distance < 0.5) { // 500 meters
                    distanceIndicatorElement.style.backgroundColor = 'rgba(39, 174, 96, 0.8)';
                } else {
                    distanceIndicatorElement.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
                }
            }
        }

        requestAnimationFrame(gameLoop);
    }

    gameLoop();
}

function movePlayer() {
    // Calculate player movement based on keys
    const speed = 0.0003; // Adjust for desired movement speed
    const bearing = map.getBearing();
    const bearingRadians = bearing * Math.PI / 180;

    let dx = 0;
    let dy = 0;

    // Forward/backward
    if (keys['w'] || keys['arrowup']) {
        dx += Math.sin(bearingRadians) * speed;
        dy += Math.cos(bearingRadians) * speed;
    }
    if (keys['s'] || keys['arrowdown']) {
        dx -= Math.sin(bearingRadians) * speed;
        dy -= Math.cos(bearingRadians) * speed;
    }

    // Strafe left/right
    if (keys['a'] || keys['arrowleft']) {
        dx -= Math.sin(bearingRadians + Math.PI/2) * speed;
        dy -= Math.cos(bearingRadians + Math.PI/2) * speed;
    }
    if (keys['d'] || keys['arrowright']) {
        dx += Math.sin(bearingRadians + Math.PI/2) * speed;
        dy += Math.cos(bearingRadians + Math.PI/2) * speed;
    }

    // Update player position
    playerPosition.lng += dx;
    playerPosition.lat += dy;

    // Update map center
    map.setCenter([playerPosition.lng, playerPosition.lat]);
}

function startTimer() {
    clearInterval(timerInterval);

    timerInterval = setInterval(() => {
        timer--;
        timerElement.textContent = timer;

        if (timer <= 0) {
            endGame(false);
        }
    }, 1000);
}

function identifyStadium() {
    // We only want to identify the target stadium, regardless of mode
    if (!targetStadium) return;

    const distance = getDistance(
        playerPosition.lat, playerPosition.lng,
        targetStadium.lat, targetStadium.lng
    );

    // If close enough to the target stadium (500 meters)
    if (distance < 0.5) {
        // Add points based on distance - closer = more points
        const pointsAwarded = Math.round(100 * (1 - distance/0.5));
        score += pointsAwarded;
        scoreElement.textContent = score;

        // Show stadium info
        showInfoPanel(targetStadium.id);

        // Mark as found
        foundStadiums.push(targetStadium.id);

        // Add visual celebration effect
        addCelebrationEffect();

        // Update target to next stadium
        updateTargetStadium();

        // Add time bonus
        timer += 20;
        timerElement.textContent = timer;

        // Visual feedback
        distanceIndicatorElement.textContent = `Found ${targetStadium.name}! +${pointsAwarded} points, +20 seconds`;
        distanceIndicatorElement.style.backgroundColor = 'rgba(241, 196, 15, 0.8)';

        setTimeout(() => {
            if (gameActive) {
                distanceIndicatorElement.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
            }
        }, 2000);
    } else {
        // Not close enough - give feedback
        distanceIndicatorElement.textContent = `Too far from ${targetStadium.name} (${distance.toFixed(1)} km)`;
        distanceIndicatorElement.style.backgroundColor = 'rgba(231, 76, 60, 0.8)';

        setTimeout(() => {
            if (gameActive) {
                distanceIndicatorElement.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
            }
        }, 1500);
    }
}

function endGame(victory) {
    gameActive = false;
    clearInterval(timerInterval);

    // Show game over screen
    finalScoreElement.textContent = score;
    stadiumsFoundElement.textContent = foundStadiums.length;

    if (victory) {
        document.querySelector('#game-over-modal h2').textContent = 'Victory!';
    } else {
        document.querySelector('#game-over-modal h2').textContent = 'Game Over!';
    }

    // Ask for player name and save score
    if (score > 0) {
        // Use setTimeout to ensure the modal is shown before the prompt
        setTimeout(() => {
            playerName = prompt('Enter your name for the leaderboard:', playerName || 'Player');

            if (playerName) {
                saveScore(playerName, score, foundStadiums.length);
            }
        }, 500);
    }

    gameOverModal.style.display = 'block';

    // Hide distance indicator
    distanceIndicatorElement.style.display = 'none';

    // Hide target arrow
    targetArrow.style.display = 'none';

    // Update Buy Me a Coffee button visibility
    updateBuyMeCoffeeVisibility();
    
    // Log game_end event
    logAnalyticsEvent('game_end', {
        victory: victory,
        score: score,
        stadiums_found: foundStadiums.length,
        multiplayer_mode: isMultiplayerMode,
        game_duration_seconds: 60 - timer
    });
}

function resetGame() {
    // Hide modals
    gameOverModal.style.display = 'none';

    // Reset and start a new game
    startGame();
}

function showInstructions() {
    instructionsModal.style.display = 'block';
}

function showInfoPanel(stadiumId) {
    const stadium = stadiumsData.find(s => s.id === stadiumId);
    if (!stadium) return;

    panelStadiumName.textContent = stadium.name;
    panelStadiumImage.src = stadium.imageUrl || '';
    panelStadiumImage.alt = stadium.imageUrl ? stadium.name : '';
    panelStadiumImage.style.display = stadium.imageUrl ? 'block' : 'none';
    panelStadiumDescription.textContent = stadium.description || '';
    panelStadiumYear.textContent = stadium.yearBuilt || 'N/A';
    panelStadiumCapacity.textContent = stadium.capacity ? stadium.capacity.toLocaleString() : 'N/A';
    panelStadiumAttendance.textContent = stadium.recordAttendance ? stadium.recordAttendance.toLocaleString() : 'N/A';
    panelStadiumSurface.textContent = stadium.surface || 'N/A';
    panelStadiumArchitect.textContent = stadium.architect || 'N/A';
    panelStadiumCost.textContent = stadium.cost || 'N/A';

    panelStadiumTeams.innerHTML = '';
    if (stadium.homeTeams && stadium.homeTeams.length > 0) {
        stadium.homeTeams.forEach(team => {
            const li = document.createElement('li');
            li.textContent = team;
            panelStadiumTeams.appendChild(li);
        });
        panelStadiumTeams.parentElement.style.display = 'block';
    } else {
        panelStadiumTeams.parentElement.style.display = 'none';
    }

    infoPanel.classList.add('visible');
}

function hideInfoPanel() {
    infoPanel.classList.remove('visible');
}

// Function to update target arrow to point to nearest stadium
function updateTargetArrow() {
    if (!targetStadium) {
        targetArrow.style.display = 'none';
        return;
    }

    targetArrow.style.display = 'block';

    // Calculate angle between player and stadium
    const dx = targetStadium.lng - playerPosition.lng;
    const dy = targetStadium.lat - playerPosition.lat;

    // Get map bearing in radians
    const mapBearing = map.getBearing() * Math.PI / 180;

    // Calculate angle in radians
    let angle = Math.atan2(dy, dx);

    // Adjust for map bearing
    angle = angle - mapBearing;

    // Convert to degrees and normalize
    let degrees = angle * 180 / Math.PI + 90;

    // Apply rotation to arrow
    targetArrow.style.transform = `translateX(-50%) rotate(${degrees}deg)`;
}

// Utility function to calculate distance between two points in km
function getDistance(lat1, lon1, lat2, lon2) {
    const R = 6371; // Radius of the Earth in kilometers
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = 
        Math.sin(dLat/2) * Math.sin(dLat/2) +
        Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
        Math.sin(dLon/2) * Math.sin(dLon/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    const distance = R * c; // Distance in km
    return distance;
}

// Add celebration visual effect when finding a stadium
function addCelebrationEffect() {
    // Create a particle container
    const container = document.createElement('div');
    container.className = 'celebration-effect';
    document.body.appendChild(container);

    // Create particles
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'celebration-particle';

        // Randomize particle properties
        const size = 5 + Math.random() * 15;
        const color = `hsl(${Math.random() * 360}, 100%, 60%)`;
        const left = 40 + Math.random() * 20; // Center horizontally
        const duration = 1 + Math.random() * 2;

        // Set particle style
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.backgroundColor = color;
        particle.style.left = `${left}%`;
        particle.style.animationDuration = `${duration}s`;
        particle.style.animationDelay = `${Math.random() * 0.5}s`;

        container.appendChild(particle);
    }

    // Remove the effect after animation completes
    setTimeout(() => {
        container.remove();
    }, 3000);
}

// Show loading screen
function showLoadingScreen() {
    // Initialize Firebase early for leaderboard
    if (!firebaseDB) {
        initializeFirebase();
    }

    let progress = 0;
    const loadingInterval = setInterval(() => {
        progress += Math.random() * 10;
        if (progress >= 100) {
            progress = 100;
            clearInterval(loadingInterval);

            // Fade out loading screen
            setTimeout(() => {
                loadingScreen.style.opacity = 0;
                setTimeout(() => {
                    loadingScreen.style.display = 'none';
                    // Show leaderboard after loading instead of instructions
                    showLeaderboard();
                }, 1000);
            }, 500);
        }
        loadingProgress.style.width = `${progress}%`;
    }, 200);
}

// Initialize Firebase as early as possible
console.log("Stadium Finder starting up...");
initializeFirebase();
console.log("Firebase status: " + (firebaseDB ? "Initialized" : "Not initialized"));

// Get the Buy Me a Coffee button
const buyMeCoffeeBtn = document.getElementById('buy-me-coffee');

// Make the Buy Me a Coffee button slightly transparent during active gameplay
function updateBuyMeCoffeeVisibility() {
    if (gameActive) {
        buyMeCoffeeBtn.style.opacity = '0.6';
    } else {
        buyMeCoffeeBtn.style.opacity = '1';
    }
}

// Add event listeners for the Buy Me a Coffee button
buyMeCoffeeBtn.addEventListener('mouseenter', () => {
    buyMeCoffeeBtn.style.opacity = '1';
});

buyMeCoffeeBtn.addEventListener('mouseleave', () => {
    if (gameActive) {
        buyMeCoffeeBtn.style.opacity = '0.6';
    }
});

// Track clicks on the Buy Me a Coffee button
buyMeCoffeeBtn.addEventListener('click', () => {
    logAnalyticsEvent('buy_me_coffee_click', {
        game_active: gameActive,
        score: score,
        stadiums_found: foundStadiums.length,
        screen: gameActive ? 'gameplay' : (leaderboardModal.style.display === 'block' ? 'leaderboard' : 'home')
    });
});

// Modify the startGame function to update Buy Me a Coffee button visibility
const originalStartGame = startGame;
startGame = function(isMultiplayer) {
    originalStartGame(isMultiplayer);
    updateBuyMeCoffeeVisibility();
    
    // Log game_start event
    logAnalyticsEvent('game_start', {
        multiplayer_mode: isMultiplayer,
        exploration_mode: explorationMode
    });
};

// Add Buy Me a Coffee visibility update to the existing endGame function
const originalEndGame = endGame;
endGame = function(victory) {
    // Clean up multiplayer resources
    if (isMultiplayerMode && firebaseDB) {
        const roomRef = firebaseDB.ref(`rooms/${gameRoomId}`);
        if (isHost) {
            roomRef.update({ active: false });
        }
    }

    // Log game_end event
    logAnalyticsEvent('game_end', {
        victory: victory,
        score: score,
        stadiums_found: foundStadiums.length,
        multiplayer_mode: isMultiplayerMode,
        game_duration_seconds: 60 - timer
    });
    
    // Show multiplayer results
    if (isMultiplayerMode) {
        let resultText = '';
        let matchResult = 'tie';
        
        if (score > opponentScore) {
            resultText = `You win! You beat ${opponentName} by ${score - opponentScore} points.`;
            matchResult = 'win';
        } else if (score < opponentScore) {
            resultText = `${opponentName} wins by ${opponentScore - score} points!`;
            matchResult = 'loss';
        } else {
            resultText = `It's a tie! Both players scored ${score} points.`;
        }

        // Log multiplayer_match_end event
        logAnalyticsEvent('multiplayer_match_end', {
            match_result: matchResult,
            score_difference: Math.abs(score - opponentScore),
            player_score: score,
            opponent_score: opponentScore
        });
        
        // We'll add this to the game-over-modal
        const multiplayerResult = document.createElement('p');
        multiplayerResult.textContent = resultText;
        multiplayerResult.className = 'multiplayer-result';

        // Remove any previous result
        const existingResult = document.querySelector('.multiplayer-result');
        if (existingResult) {
            existingResult.remove();
        }

        // Add before the play again button
        const playAgainBtn = document.getElementById('play-again-btn');
        playAgainBtn.parentNode.insertBefore(multiplayerResult, playAgainBtn);
    }

    // Reset multiplayer state
    resetMultiplayerState();

    // Update Buy Me a Coffee button visibility
    updateBuyMeCoffeeVisibility();

    // Call the original endGame function
    originalEndGame(victory);
};

// Call this immediately to show loading screen
showLoadingScreen();

// Update compass to show current bearing
function updateCompass() {
    const bearing = map.getBearing();
    compassArrow.style.transform = `rotate(${bearing}deg)`;
}

// NEW LEADERBOARD FUNCTIONS

// Show the leaderboard modal
function showLeaderboard() {
    loadLeaderboard(); // Refresh leaderboard data
    leaderboardModal.style.display = 'block';
}

// Load scores from Firebase (or localStorage as fallback) and populate the leaderboard
function loadLeaderboard() {
    leaderboardEntries.innerHTML = '';

    // If Firebase is available, use it for leaderboard
    if (firebaseDB) {
        console.log("Loading leaderboard from Firebase...");
        const leaderboardRef = firebaseDB.ref('leaderboard');

        // Get all scores and sort them in memory (most reliable approach)
        leaderboardRef.once('value')
            .then((snapshot) => {
                const highScores = [];

                // Convert Firebase data to array
                snapshot.forEach((childSnapshot) => {
                    highScores.push(childSnapshot.val());
                });

                console.log(`Loaded ${highScores.length} scores from Firebase`);

                // Sort by score (highest first)
                highScores.sort((a, b) => b.score - a.score);

                displayLeaderboard(highScores);
            })
            .catch((error) => {
                console.error("Error loading Firebase leaderboard:", error);
                // Fallback to localStorage if Firebase fails
                const highScores = getLocalHighScores();
                displayLeaderboard(highScores);
            });
    } else {
        console.log("Firebase not available, using localStorage");
        // Fallback to localStorage if Firebase not available
        const highScores = getLocalHighScores();
        displayLeaderboard(highScores);
    }
}

// Display leaderboard entries in the UI
function displayLeaderboard(highScores) {
    if (highScores.length === 0) {
        const row = document.createElement('tr');
        row.innerHTML = '<td colspan="5" style="text-align: center;">No scores yet. Be the first to play!</td>';
        leaderboardEntries.appendChild(row);
        return;
    }

    // Display top 10 scores
    highScores.slice(0, 10).forEach((entry, index) => {
        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${entry.name}</td>
            <td>${entry.score}</td>
            <td>${entry.stadiumsFound}</td>
            <td>${formatDate(entry.date)}</td>
        `;

        leaderboardEntries.appendChild(row);
    });
}

// Get high scores from localStorage (fallback method)
function getLocalHighScores() {
    const scores = localStorage.getItem('stadiumFinderHighScores');
    return scores ? JSON.parse(scores) : [];
}

// Save score to leaderboard (Firebase + localStorage fallback)
function saveScore(name, score, stadiumsFound) {
    console.log(`Saving score for ${name}: ${score} points, ${stadiumsFound} stadiums`);

    // Generate a unique ID for the score
    const scoreId = Date.now().toString();
    const scoreData = {
        name: name,
        score: score,
        stadiumsFound: stadiumsFound,
        date: new Date().toISOString()
    };

    // Save to Firebase if available
    if (firebaseDB) {
        console.log("Saving score to Firebase");
        const leaderboardRef = firebaseDB.ref('leaderboard/' + scoreId);
        leaderboardRef.set(scoreData)
            .then(() => {
                console.log("Score saved successfully to Firebase");
            })
            .catch((error) => {
                console.error("Error saving score to Firebase:", error);
            });
    } else {
        console.log("Firebase not available, saving to localStorage only");
    }

    // Also save to localStorage as fallback
    const highScores = getLocalHighScores();
    highScores.push(scoreData);

    // Sort by score (highest first)
    highScores.sort((a, b) => b.score - a.score);

    // Keep only top 50 scores
    const topScores = highScores.slice(0, 50);

    // Save back to localStorage
    localStorage.setItem('stadiumFinderHighScores', JSON.stringify(topScores));
    console.log("Score saved to localStorage");
}

// Clear all high scores
function clearLeaderboard() {
    if (confirm('Are you sure you want to clear all high scores? This cannot be undone.')) {
        // Clear Firebase leaderboard if available
        if (firebaseDB) {
            const leaderboardRef = firebaseDB.ref('leaderboard');
            leaderboardRef.remove();
        }

        // Also clear localStorage
        localStorage.removeItem('stadiumFinderHighScores');

        // Refresh display
        loadLeaderboard();
    }
}

// Format date for display
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString(undefined, { 
        year: 'numeric', 
        month: 'short', 
        day: 'numeric' 
    });
}

// MULTIPLAYER FUNCTIONS

// Show the multiplayer modal
function showMultiplayerModal() {
    // Initialize Firebase when entering multiplayer mode
    if (!firebaseDB) {
        initializeFirebase();
    }

    // Reset multiplayer state
    resetMultiplayerSections();

    // Show the modal
    multiplayerModal.style.display = 'block';

    // Show login section by default
    multiplayerLoginSection.style.display = 'block';

    // If player already has a nickname, go straight to menu
    if (playerNickname) {
        multiplayerLoginSection.style.display = 'none';
        multiplayerMenuSection.style.display = 'block';
    }
}

// Hide the multiplayer modal
function hideMultiplayerModal() {
    multiplayerModal.style.display = 'none';
}

// Set player nickname for multiplayer
function setPlayerNickname() {
    const nickname = playerNicknameInput.value.trim();

    if (nickname.length < 3) {
        alert('Please enter a nickname with at least 3 characters');
        return;
    }

    playerNickname = nickname;

    // Move to the menu section
    multiplayerLoginSection.style.display = 'none';
    multiplayerMenuSection.style.display = 'block';
}

// Generate a random 4-character game code
function generateGameCode() {
    const characters = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'; // Removed similar looking characters
    let result = '';

    for (let i = 0; i < 4; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    return result;
}

// Create a new multiplayer game
function createMultiplayerGame() {
    // Generate a random game code
    gameRoomId = generateGameCode();

    // Set player as host
    isHost = true;
    isMultiplayerMode = true;

    // Log multiplayer_create_game event
    logAnalyticsEvent('multiplayer_create_game', {
        game_code: gameRoomId,
        player_nickname: playerNickname
    });
    
    // Display game code and update UI
    gameCodeDisplay.textContent = gameRoomId;
    hostNameDisplay.textContent = playerNickname;
    guestNameDisplay.textContent = 'Waiting for player...';
    guestStatusDisplay.className = 'status-badge waiting';
    guestStatusDisplay.textContent = 'Waiting';
    startMultiplayerBtn.disabled = true;

    // Create the game room in Firebase
    createGameRoom();

    // Show the waiting room
    multiplayerMenuSection.style.display = 'none';
    waitingRoomSection.style.display = 'block';

    // Start listening for player joins
    listenForPlayerJoins();
}

// Create game room in Firebase
function createGameRoom() {
    if (firebaseDB) {
        const roomRef = firebaseDB.ref(`rooms/${gameRoomId}`);
        roomRef.set({
            hostName: playerNickname,
            active: true,
            gameStarted: false,
            created: new Date().toISOString()
        });

        // Set up player data
        const playersRef = firebaseDB.ref(`rooms/${gameRoomId}/players/host`);
        playersRef.set({
            name: playerNickname,
            score: 0,
            stadiumsFound: 0
        });
    }
}

// Listen for other player joining
function listenForPlayerJoins() {
    if (firebaseDB) {
        const guestRef = firebaseDB.ref(`rooms/${gameRoomId}/players/guest`);
        // Fix: Use correct Firebase method
        guestRef.on('value', (snapshot) => {
            if (snapshot.exists()) {
                const guestData = snapshot.val();

                // Update UI
                guestNameDisplay.textContent = guestData.name;
                guestStatusDisplay.className = 'status-badge ready';
                guestStatusDisplay.textContent = 'Ready';
                startMultiplayerBtn.disabled = false;

                // Store opponent name
                opponentName = guestData.name;
            }
        });
    }
}

// Show join game section
function showJoinGameSection() {
    multiplayerMenuSection.style.display = 'none';
    joinGameSection.style.display = 'block';
    joinCodeInput.value = '';
    joinErrorDisplay.textContent = '';
}

// Join an existing game
function joinGameRoom() {
    const code = joinCodeInput.value.trim().toUpperCase();

    if (code.length !== 4) {
        joinErrorDisplay.textContent = 'Please enter a valid 4-character game code';
        return;
    }

    console.log("Attempting to join room:", code);
    joinErrorDisplay.textContent = 'Connecting...';

    // Log multiplayer_join_attempt event
    logAnalyticsEvent('multiplayer_join_attempt', {
        game_code: code,
        player_nickname: playerNickname
    });
    
    // Check if room exists
    if (firebaseDB) {
        const roomRef = firebaseDB.ref(`rooms/${code}`);

        // Fix: Use correct Firebase method
        roomRef.once('value')
            .then((snapshot) => {
                if (snapshot.exists() && snapshot.val().active && !snapshot.val().gameStarted) {
                    // Room exists and game hasn't started
                    console.log("Room found, joining game:", code);
                    gameRoomId = code;
                    isHost = false;
                    isMultiplayerMode = true;

                    // Join the room
                    const hostName = snapshot.val().hostName;
                    opponentName = hostName;

                    // Log multiplayer_join_success event
                    logAnalyticsEvent('multiplayer_join_success', {
                        game_code: code,
                        host_name: hostName
                    });
                    
                    // Update UI
                    gameCodeDisplay.textContent = gameRoomId;
                    hostNameDisplay.textContent = hostName;
                    guestNameDisplay.textContent = playerNickname;

                    // Add player to the room
                    const guestRef = firebaseDB.ref(`rooms/${gameRoomId}/players/guest`);
                    return guestRef.set({
                        name: playerNickname,
                        score: 0,
                        stadiumsFound: 0
                    });
                } else {
                    // Room doesn't exist or game already started
                    logAnalyticsEvent('multiplayer_join_failed', {
                        game_code: code,
                        reason: snapshot.exists() ? 
                            (snapshot.val().active ? "Game already started" : "Room not active") : 
                            "Room not found"
                    });
                    throw new Error("Game not found or already started");
                }
            })
            .then(() => {
                // Listen for game start
                listenForGameStart();

                // Show waiting room
                joinGameSection.style.display = 'none';
                waitingRoomSection.style.display = 'block';
                joinErrorDisplay.textContent = '';
            })
            .catch((error) => {
                console.error("Error joining game:", error);
                joinErrorDisplay.textContent = error.message;
            });
    } else {
        // Testing mode - simulate joining
        console.log("Firebase not available, using testing mode");
        gameRoomId = code;
        isHost = false;
        isMultiplayerMode = true;

        // Update UI
        gameCodeDisplay.textContent = gameRoomId;
        hostNameDisplay.textContent = "Test Host";
        guestNameDisplay.textContent = playerNickname;

        // Show waiting room
        joinGameSection.style.display = 'none';
        waitingRoomSection.style.display = 'block';
    }
}

// Listen for game start (for guest)
function listenForGameStart() {
    if (firebaseDB) {
        const roomRef = firebaseDB.ref(`rooms/${gameRoomId}`);
        // Fix: Use correct Firebase method
        roomRef.on('value', (snapshot) => {
            if (snapshot.exists() && snapshot.val().gameStarted) {
                // Game has been started by the host
                startMultiplayerGame();
            }
        });
    }
}

// Start multiplayer game
function startMultiplayerGame() {
    // Update room status if host
    if (isHost && firebaseDB) {
        const roomRef = firebaseDB.ref(`rooms/${gameRoomId}`);
        roomRef.update({ gameStarted: true });
        
        // Log multiplayer_game_started event
        logAnalyticsEvent('multiplayer_game_started', {
            game_code: gameRoomId,
            host_name: playerNickname,
            guest_name: opponentName
        });
    }

    // Hide multiplayer modal
    hideMultiplayerModal();

    // Start game with multiplayer mode
    startGame(true);

    // Show opponent status
    opponentStatusDisplay.classList.remove('hidden');
    opponentNameDisplay.textContent = opponentName;
    opponentScoreDisplay.textContent = '0';
    opponentStadiumsDisplay.textContent = '0';

    // Listen for opponent updates
    listenForOpponentUpdates();
}

// Listen for opponent updates
function listenForOpponentUpdates() {
    if (firebaseDB) {
        const opponentType = isHost ? 'guest' : 'host';
        const opponentRef = firebaseDB.ref(`rooms/${gameRoomId}/players/${opponentType}`);

        // Fix: Use correct Firebase method
        opponentRef.on('value', (snapshot) => {
            if (snapshot.exists()) {
                const data = snapshot.val();

                // Update opponent info
                opponentScore = data.score;
                opponentStadiums = data.stadiumsFound;

                // Update UI
                opponentScoreDisplay.textContent = opponentScore;
                opponentStadiumsDisplay.textContent = opponentStadiums;
            }
        });
    }
}

// Update player stats in multiplayer
function updatePlayerStats() {
    if (isMultiplayerMode && firebaseDB) {
        const playerType = isHost ? 'host' : 'guest';
        const playerRef = firebaseDB.ref(`rooms/${gameRoomId}/players/${playerType}`);

        playerRef.update({
            score: score,
            stadiumsFound: foundStadiums.length
        });
    }
}

// Leave game room
function leaveGameRoom() {
    if (firebaseDB) {
        if (isHost) {
            // If host leaves, the room is no longer active
            const roomRef = firebaseDB.ref(`rooms/${gameRoomId}`);
            roomRef.update({ active: false });
        } else {
            // If guest leaves, remove the guest data
            const guestRef = firebaseDB.ref(`rooms/${gameRoomId}/players/guest`);
            guestRef.remove();
        }
    }

    // Reset multiplayer state
    resetMultiplayerState();

    // Go back to menu
    waitingRoomSection.style.display = 'none';
    multiplayerMenuSection.style.display = 'block';
}

// Return to solo mode
function returnToSoloMode() {
    // Reset multiplayer state
    resetMultiplayerState();

    // Close modal
    hideMultiplayerModal();
}

// Reset multiplayer UI sections
function resetMultiplayerSections() {
    multiplayerLoginSection.style.display = 'none';
    multiplayerMenuSection.style.display = 'none';
    waitingRoomSection.style.display = 'none';
    joinGameSection.style.display = 'none';
}

// Reset multiplayer state
function resetMultiplayerState() {
    isMultiplayerMode = false;
    isHost = false;
    gameRoomId = null;
    opponentName = "";
    opponentScore = 0;
    opponentStadiums = 0;

    // Hide opponent status
    opponentStatusDisplay.classList.add('hidden');
}

// Modify the existing identifyStadium function to update multiplayer stats
// Modify the existing identifyStadium function to update multiplayer stats and track analytics
const originalIdentifyStadium = identifyStadium;
identifyStadium = function() {
    // Get the original distance to the stadium before the function runs
    // to track how close the player was when they found it
    const distance = targetStadium ? getDistance(
        playerPosition.lat, playerPosition.lng,
        targetStadium.lat, targetStadium.lng
    ) : null;
    
    const stadiumNameBefore = targetStadium?.name;
    const stadiumCountBefore = foundStadiums.length;
    
    // Call the original function
    originalIdentifyStadium();

    // Check if a stadium was found by comparing the counts
    if (foundStadiums.length > stadiumCountBefore) {
        // Log stadium_found event
        logAnalyticsEvent('stadium_found', {
            stadium_name: stadiumNameBefore,
            distance_km: distance.toFixed(3),
            exploration_mode: explorationMode,
            stadiums_found_count: foundStadiums.length,
            current_score: score,
            remaining_time: timer
        });
    }
    
    // Update multiplayer stats when a stadium is found
    if (isMultiplayerMode) {
        updatePlayerStats();
    }
};

// Function to diagnose connection issues
function diagnoseConnectionStatus() {
    console.log("=== STADIUM FINDER DIAGNOSTICS ===");
    console.log("Firebase DB initialized:", !!firebaseDB);

    // Check environment variables
    console.log("Environment vars available:", !!window.env);
    if (window.env) {
        console.log("API Key configured:", !!window.env.FIREBASE_API_KEY);
        console.log("Database URL configured:", !!window.env.FIREBASE_DATABASE_URL);
    }

    // Test localStorage
    const testKey = "diagnostics_test";
    try {
        localStorage.setItem(testKey, "test value");
        console.log("localStorage write: SUCCESS");
        const value = localStorage.getItem(testKey);
        console.log("localStorage read:", value === "test value" ? "SUCCESS" : "FAILED");
        localStorage.removeItem(testKey);
    } catch (error) {
        console.error("localStorage error:", error);
    }

    // Test Firebase connection if available
    if (firebaseDB) {
        console.log("Testing Firebase connection...");
        firebaseDB.ref('.info/connected').once('value')
            .then(snap => {
                console.log("Firebase connected:", snap.val() === true);
            })
            .catch(error => {
                console.error("Firebase connection test error:", error);
            });

        // Try to read leaderboard
        firebaseDB.ref('leaderboard').limitToFirst(1).once('value')
            .then(snap => {
                console.log("Leaderboard read test:", snap.exists() ? "SUCCESS" : "No data (may be normal)");
            })
            .catch(error => {
                console.error("Leaderboard read error:", error);
            });
    }

    console.log("=== END DIAGNOSTICS ===");

    return "Diagnostics logged to console. Press F12 to view.";
}

// Make diagnostic function globally available (for troubleshooting)
window.diagnoseStadiumFinder = diagnoseConnectionStatus;

// Adding a debugging function for Firebase
function testAndFixFirebase() {
    console.log("====== TESTING FIREBASE CONNECTION ======");

    // Step 1: Test basic Firebase connectivity
    console.log("Step 1: Testing Firebase connectivity...");
    if (!window.firebase) {
        console.error("❌ Firebase SDK not loaded!");
        return "Firebase SDK not found. Check your script inclusions.";
    }

    try {
        // Initialize Firebase if not already initialized
        if (!firebaseDB) {
            console.log("Initializing Firebase for testing...");
            initializeFirebase();
        }

        if (!firebaseDB) {
            console.error("❌ Firebase database not initialized!");
            return "Firebase initialization failed. Check console for errors.";
        }

        console.log("✅ Firebase SDK loaded and database initialized");

        // Step 2: Test write permission
        console.log("Step 2: Testing write permission...");
        const testRef = firebaseDB.ref(`test/connection-${Date.now()}`);
        testRef.set({
            timestamp: Date.now(),
            message: "Connection test"
        })
        .then(() => {
            console.log("✅ Write permission test passed");

            // Remove test data
            testRef.remove();

            // Step 3: Test read permission for leaderboard
            console.log("Step 3: Testing leaderboard read permission...");
            return firebaseDB.ref('leaderboard').limitToFirst(1).once('value');
        })
        .then((snapshot) => {
            console.log("✅ Read permission test passed");
            console.log(`Leaderboard exists: ${snapshot.exists()}`);

            // Step 4: Force refresh leaderboard
            console.log("Step 4: Forcing leaderboard refresh...");
            loadLeaderboard();
            console.log("✅ Leaderboard refresh triggered");

            console.log("====== ALL TESTS PASSED ======");
            return "Firebase tests passed successfully! Leaderboard should now be working.";
        })
        .catch((error) => {
            console.error("❌ Permission error:", error);

            if (error.code === "PERMISSION_DENIED") {
                console.error("Firebase security rules may need updating!");
                console.log("You need these rules for your leaderboard:");
                console.log(`{
  "rules": {
    "leaderboard": {
      ".read": true,
      ".write": true
    },
    "rooms": {
      "$roomId": {
        ".read": true,
        ".write": true,
        "players": {
          ".read": true,
          ".write": true
        }
      }
    }
  }
}`);
            }

            return `Firebase test failed: ${error.message}. Check console for details.`;
        });
    } catch (error) {
        console.error("❌ Firebase test error:", error);
        return `Firebase test error: ${error.message}`;
    }
}

// Make test function globally available
window.testAndFixFirebase = testAndFixFirebase;
window.testAndFixFirebase = testAndFixFirebase;

// Helper function to log Analytics events if available
function logAnalyticsEvent(eventName, eventParams = {}) {
    if (window.firebaseAnalytics) {
        console.log(`Logging analytics event: ${eventName}`, eventParams);
        window.firebaseAnalytics.logEvent(eventName, eventParams);
    }
}

// Function to verify Firebase Analytics is working
function verifyFirebaseAnalytics() {
    console.log("=== FIREBASE ANALYTICS TEST ===");
    
    // Check if Firebase is loaded
    if (typeof firebase === 'undefined') {
        console.error("❌ Firebase SDK not loaded");
        return "Firebase SDK not loaded. Make sure scripts are properly included.";
    }
    
    // Check if Firebase Analytics is available
    if (typeof firebase.analytics !== 'function') {
        console.error("❌ Firebase Analytics not available");
        return "Firebase Analytics not available. Make sure you've included the analytics library.";
    }
    
    // Check if Firebase App is initialized
    if (firebase.apps.length === 0) {
        console.error("❌ Firebase has not been initialized");
        return "Firebase has not been initialized. Check your configuration.";
    }
    
    // Check if Analytics was initialized
    if (!window.firebaseAnalytics) {
        console.warn("⚠️ Firebase Analytics object not found in window");
        
        // Try to initialize it now
        try {
            window.firebaseAnalytics = firebase.analytics();
            console.log("✅ Firebase Analytics initialized now");
        } catch (error) {
            console.error("❌ Failed to initialize Firebase Analytics:", error);
            return `Failed to initialize Analytics: ${error.message}`;
        }
    } else {
        console.log("✅ Firebase Analytics object found in window");
    }
    
    // Check measurement ID
    const measurementId = window.env?.FIREBASE_MEASUREMENT_ID;
    if (!measurementId) {
        console.warn("⚠️ Measurement ID not found in environment variables");
    } else {
        console.log("✅ Measurement ID found:", measurementId);
    }
    
    // Send a test event
    try {
        window.firebaseAnalytics.logEvent('analytics_test', { 
            test_time: new Date().toISOString(),
            browser: navigator.userAgent
        });
        console.log("✅ Test event sent to Firebase Analytics");
    } catch (error) {
        console.error("❌ Failed to send test event:", error);
        return `Failed to send test event: ${error.message}`;
    }
    
    console.log("Remember: Analytics data may take up to 24 hours to appear in the Firebase console");
    console.log("=== TEST COMPLETE ===");
    
    return "Analytics test complete. Check console for details.";
}

// Make the verify function globally available
window.verifyFirebaseAnalytics = verifyFirebaseAnalytics;