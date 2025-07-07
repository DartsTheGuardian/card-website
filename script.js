const content = document.getElementById('links');
const checkbox = document.getElementById('flip-toggle');

checkbox.addEventListener('change', () => {
    if (checkbox.checked) {
        setTimeout(() => {
            content.style.display = 'block';
        }, 700);
    } else {
        content.style.display = 'none';
    }
});
