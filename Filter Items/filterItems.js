(function() {
  const filterBtn = document.querySelectorAll('.filter-btn');
  //   console.log(filterBtn);
  filterBtn.forEach(function(btn) {
    btn.addEventListener('click', function(event) {
      //prevent the default property
      event.preventDefault();
      //to get the values of the data set, data-filter is our value hence .filter added to the dataset.
      const value = event.target.dataset.filter;
      //   console.log(value);
      //select all the items
      const items = document.querySelectorAll('.all');
      //   console.log(items);
      items.forEach(function(item) {
        if (value == 'all') {
          item.style.display = 'block';
        } else {
          if (item.classList.contains(value)) {
            item.style.display = 'block';
          } else {
            item.style.display = 'none';
          }
        }
      });
    });
  });
})();
