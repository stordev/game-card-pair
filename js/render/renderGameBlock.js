export function renderGameBlock(container) {
    tmp.renderTemplate(container, 'game-template', '#game-block', () => {

        const levelNames = {
            1: 'easy',
            2: 'medium',
            3: 'hard'
        };
        const gameLevel = parseInt(app.gameLevel);
        const levelText = levelNames[gameLevel] || 'unknown';
        document.querySelector('#game-level').textContent = levelText;

    });

}
