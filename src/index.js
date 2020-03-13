import initModel from './Model';
import update from './Update.js';
import view from './View';
import app from './App';

const node = document.getElementById('app');

app(initModel, update, view, node);
