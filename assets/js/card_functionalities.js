export function add_expandable_functionality() {
  document.querySelectorAll('.toggle-btn').forEach(setup_expandable_entry);
}

function setup_expandable_entry(button) {
  const news_text = document.querySelector(button.getAttribute('data-target'));
  if (!news_text) return;

  const news_text_container = news_text.closest('.news-text');
  const news_card = news_text.closest('.news');
  const news_external_link = news_text_container?.querySelector('.news-external-link');

  requestAnimationFrame(() => {
    const collapsed_max_height = getComputedStyle(news_text).maxHeight;
    const has_overflow = news_text.scrollHeight > parseFloat(collapsed_max_height);

    if (!has_overflow) {
      button.style.setProperty('display', 'none', 'important');
      return;
    }

    news_text.classList.add('overflow');
    news_text_container?.classList.add('has-overflow');
    set_external_link_visibility(news_external_link, false);
    button.addEventListener('click', () => {
      const expanded = !news_text.classList.contains('expanded');
      set_expanded_state(news_text, news_text_container, news_card, news_external_link, button, expanded, collapsed_max_height);
    });
  });
}

function set_expanded_state(news_text, news_text_container, news_card, news_external_link, button, expanded, collapsed_max_height) {
  if (expanded) {
    const news_image_link = news_card?.querySelector('.news-image-link');
    if (news_image_link) {
      news_card.style.setProperty('--news-image-height', `${news_image_link.getBoundingClientRect().height}px`);
    }

    news_text.style.setProperty('max-height', `${news_text.scrollHeight}px`, 'important');
    news_text.classList.add('expanded');
    remove_inline_max_height_after_transition(news_text, () => news_text.classList.contains('expanded'));
    news_card?.classList.add('expanded');
  } else {
    news_text.style.setProperty('max-height', `${news_text.scrollHeight}px`, 'important');
    void news_text.offsetHeight;
    news_text.classList.remove('expanded');
    news_text.style.setProperty('max-height', collapsed_max_height, 'important');
    remove_inline_max_height_after_transition(news_text, () => true, () => {
      news_card?.classList.remove('expanded');
    });
  }

  set_external_link_visibility(news_external_link, expanded);
  news_text_container?.classList.toggle('expanded', expanded);
  button.classList.toggle('expanded', expanded);
  button.setAttribute('aria-expanded', expanded);
}

function set_external_link_visibility(news_external_link, visible) {
  if (!news_external_link) return;

  news_external_link.toggleAttribute('inert', !visible);
  news_external_link.setAttribute('aria-hidden', String(!visible));
}

function remove_inline_max_height_after_transition(news_text, should_remove, after_transition = () => {}) {
  const on_transition_end = event => {
    if (event.target !== news_text || event.propertyName !== 'max-height') return;

    if (should_remove()) {
      news_text.style.removeProperty('max-height');
    }
    after_transition();
    news_text.removeEventListener('transitionend', on_transition_end);
  };

  news_text.addEventListener('transitionend', on_transition_end);
}
