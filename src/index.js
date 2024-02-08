import "./css/style.css";
import fs from 'fs/promises'; 
import Randomize from "./js/app"; "./js/app";

// TODO: write your code in app.js
window.onload = () => {
    const randomize = new Randomize('game-board', 'cell');
    randomize.showGoblinInterval(1000);
}
