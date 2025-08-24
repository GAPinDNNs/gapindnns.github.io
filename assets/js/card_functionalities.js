export function add_expandable_functionality() {
  document.querySelectorAll('.toggle-btn').forEach(button => {
    const targetSelector = button.getAttribute('data-target');
    const newsText = document.querySelector(targetSelector);

    if (!newsText) return;


    requestAnimationFrame(() => {
      const maxHeight = parseFloat(getComputedStyle(newsText).maxHeight);
      const hasOverflow = newsText.scrollHeight > maxHeight;
      // const hasOverflow = newsText.scrollHeight > newsText.clientHeight;

      if (!hasOverflow) {
        button.style.setProperty('display', 'none', 'important');
      } else {
        newsText.classList.add('overflow');
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



