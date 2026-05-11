const body = document.querySelector('body');
const customCursor = document.createElement('div');
customCursor.style.cssText = `
    position: fixed;
    width: 64px;
    height: 64px;
    background: url('./assets/pricel.png') no-repeat center/contain;
    pointer-events: none;
    z-index: 2;
    display: block;
`;

document.body.appendChild(customCursor);

body.style.cursor = 'none';

body.addEventListener('mousemove', (e) => {
    const rect = body.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    customCursor.style.left = e.clientX - 32 + 'px';
    customCursor.style.top = e.clientY - 32 + 'px';
});
