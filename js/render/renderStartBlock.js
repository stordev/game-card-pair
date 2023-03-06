export function renderStartBlock(container, cb) {
    tmp.renderTemplate(container, 'start-template', '#start-block', () => {
        const startButton = document.querySelector('#start-button');
        startButton.setAttribute('disabled', 'disabled');

        // get data-level from clicked element
        const gameLevel = document.querySelector('.game__level');
        for (const child of gameLevel.children) {
            child.addEventListener('click', () => {
                const dataLevel = child.getAttribute('data-level');
                app['gameLevel'] = dataLevel;
                startButton.removeAttribute('disabled');
                out.log('Game level', app['gameLevel']);
            });
        }

        startButton.addEventListener('click', () => {
            app.renderScreen('game-screen');
        });

        cb(container);
    }); // end of tmp.renderTemplate


}

