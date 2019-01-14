//below IIFE if anyone clicks on the links for filter
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

//if anyone uses searchbar to filter
(function() {
  const search = document.getElementById('search-item');
  //   console.log(search);
  search.addEventListener('keyup', function() {
    //removing white spaces and converting to lowercase
    let value = search.value.toLowerCase().trim();
    // console.log(value);
    //select all the items
    const items = document.querySelectorAll('.all');
    items.forEach(function(item) {
      let type = item.dataset.item;
      //   console.log(typeof type);
      if (type.startsWith(value)) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  });
})();
