document.addEventListener('DOMContentLoaded', function() {
  // Toggle dropdown for custom select elements
  const customSelects = document.querySelectorAll('.custom-select');
  customSelects.forEach(function(select) {
    const button = select.querySelector('.select-btn');
    const list = select.querySelector('.select-list');

    // Toggle dropdown when clicking the button
    button.addEventListener('click', function() {
      customSelects.forEach(function(otherSelect) {
        if (otherSelect !== select) {
          otherSelect.querySelector('.select-list').classList.remove('open');
        }
      });
      list.classList.toggle('open');
    });

    // Close the dropdown when clicking outside
    document.addEventListener('click', function(event) {
      if (!select.contains(event.target)) {
        list.classList.remove('open');
      }
    });
  });

  // Option click handler to change the button text
  document.querySelectorAll('.select-list li').forEach(function(item) {
    item.addEventListener('click', function() {
      const value = this.getAttribute('data-value');
      const parentSelect = this.closest('.custom-select');
      const button = parentSelect.querySelector('.select-btn');
      button.innerHTML = this.innerHTML + ' <img src="./images/icon-arrow-down.svg" class="arrowDown" alt="">';
      parentSelect.querySelector('.select-list').classList.remove('open');
    });
  });
});

  