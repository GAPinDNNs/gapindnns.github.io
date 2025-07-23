export function add_expandable_functionality() {
  document.querySelectorAll('.toggle-btn').forEach(button => {
    const targetSelector = button.getAttribute('data-target');
    const newsText = document.querySelector(targetSelector);

    if (!newsText) return;


    requestAnimationFrame(() => {
      const hasOverflow = newsText.scrollHeight > newsText.clientHeight;

      if (!hasOverflow) {
        button.style.setProperty('display', 'none', 'important');
      } else {
        // Attach toggle behavior
        button.addEventListener('click', () => {
          const expanded = newsText.classList.toggle('expanded');
          button.classList.toggle('expanded', expanded);
          button.setAttribute('aria-expanded', expanded);
        });
      }

    });
  });
}



