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

const squares = document.querySelectorAll('.square');
const desc = document.querySelector('.description');
const paragraphs = desc.querySelectorAll('p');

squares.forEach(square => {
    if (square && desc) {
        square.addEventListener('mouseenter', () => {
            desc.classList.add('highlighted');
            // Hide all paragraphs first
            paragraphs.forEach(p => {
                p.style.display = 'none';
                p.style.opacity = '0';
            });

            // Show the corresponding paragraph
            if (square.classList.contains('first')) {
                desc.querySelector('p.first').style.display = 'block';
                setTimeout(() => desc.querySelector('p.first').style.opacity = '1', 10);
            }

            if (square.classList.contains('second')) {
                desc.querySelector('p.second').style.display = 'block';
                setTimeout(() => desc.querySelector('p.second').style.opacity = '1', 10);
            }

            if (square.classList.contains('third')) {
                desc.querySelector('p.third').style.display = 'block';
                setTimeout(() => desc.querySelector('p.third').style.opacity = '1', 10);
            }

            if (square.classList.contains('fourth')) {
                desc.querySelector('p.fourth').style.display = 'block';
                setTimeout(() => desc.querySelector('p.fourth').style.opacity = '1', 10);
            }

            if (square.classList.contains('fifth')) {
                desc.querySelector('p.fifth').style.display = 'block';
                setTimeout(() => desc.querySelector('p.fifth').style.opacity = '1', 10);
            }
        });

        square.addEventListener('mouseleave', () => {
            desc.classList.remove('highlighted');
            paragraphs.forEach(p => {
                p.style.display = 'none';
                p.style.opacity = '0';
            });
        });
    }
});