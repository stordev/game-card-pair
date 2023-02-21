export function renderStartScreen(cb) {
    const base = document.querySelector('.base'); // Get the base element
    base.textContent = ''; // Clear the base element
    app.renderBlock('start-block', base); // Render the start block in the base element
    cb();
}