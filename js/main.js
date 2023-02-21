import { output } from './utils/output.js';
import { templateManager } from './utils/templateManager.js';
import { application } from './render/application.js';
import { renderStartBlock } from './render/renderStartBlock.js';
import { renderStartScreen } from './render/renderStartScreen.js';

document.addEventListener('DOMContentLoaded', () => {
    // Make these objects available to all scripts
    window.app = application;
    window.out = output;
    window.tm = templateManager;

    // Add the render functions to the app object    
    app.blocks['start-block'] = renderStartBlock;
    app.screens['start-screen'] = renderStartScreen;

    app.renderScreen('start-screen'); // Render the start screen
});
