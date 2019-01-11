//create an IFFE so data leak is NOT there
(function() {
  //array holding the name, image and reviews of the customers
  let customers = [];
  let index = 0;

  //object constructor function
  function Customer(name, img, title, reviewText) {
    this.name = name;
    this.img = img;
    this.reviewText = reviewText;
    this.title = title;
  }

  //create cutomers
  function createCustomer(name, img, title, text) {
    //img is the index of the images in the image folder
    let fullImg = `images/img-${img}.jpg`;
    const customer = new Customer(name, fullImg, title, text);
    //now add the customer to the customer array
    customers.push(customer);
  }

  //creating new customers
  createCustomer(
    'Alan',
    1,
    'Web Developer',
    'According to most sources, Lorum Ipsum can be traced back to a text composed by Cicero in 45 BC. Allegedly, a Latin scholar established the origin'
  );
  createCustomer(
    'Susan',
    2,
    'React Developer',
    'It seems that only fragments of the original text remain in the Lorem Ipsum texts used today. One may speculate that over the course of time certain'
  );
  createCustomer(
    'Jerry',
    3,
    'Software Engineer',
    'Based on De finibus, these generators automatically create longer sections of the Lorem Ipsum text or various other filler texts.'
  );

  console.log(customers);

  document.querySelectorAll('.btn').forEach(function(btn) {
    btn.addEventListener('click', function(event) {
      event.preventDefault();
      //   console.log(event.target);
      //prev button logic
      if (event.target.classList.contains('prev')) {
        index--;
        if (index < 0) {
          index = customers.length - 1;
        }
        document.getElementById('customer-pic').src = customers[index].img;
        document.getElementById('customer-name').textContent =
          customers[index].name;
        console.log(index);
        document.getElementById('customer-title').textContent =
          customers[index].title;
        document.getElementById('customer-review').textContent =
          customers[index].reviewText;
      }
      //next button logic
      if (event.target.classList.contains('next')) {
        index++;
        if (index > customers.length - 1) {
          index = 0;
        }
        document.getElementById('customer-pic').src = customers[index].img;
        document.getElementById('customer-name').textContent =
          customers[index].name;
        document.getElementById('customer-title').textContent =
          customers[index].title;
        document.getElementById('customer-review').textContent =
          customers[index].reviewText;
      }
    });
  });
})();
