'use strict';

function listShowToggle() {
  const tree = document.querySelector('.tree');

  const liArray = tree.querySelectorAll('.tree li');

  for (const li of liArray) {
    const childUl = li.querySelector('ul');

    if (childUl) {
      const span = document.createElement('span');

      const text = li.firstChild;

      span.textContent = text.textContent;

      li.insertBefore(span, text);
      li.removeChild(text);

      span.addEventListener('click', () => {
        childUl.hidden = !childUl.hidden;
      });
    }
  }
}

listShowToggle();
