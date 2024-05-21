document.addEventListener('DOMContentLoaded', function() {
    var app = document.getElementById('app');
    var detailsLeft = app.querySelector('.details-left');
    var detailsRight = app.querySelector('.details-right');
  
    var details = {
      name: 'Brewery Name',
      address_1: 'Address 1',
      brewery_type: 'Type',
      phone: '123',
      city: 'City',
      state_province: 'State Province',
      state: 'State',
      postal_code: 'Postal Code',
      country: 'Country',
      website_url: 'http://example.com',
    };
  
    detailsLeft.innerHTML = `
      <h2>${details.name}</h2>
      <p><strong>Current Rating: </strong>Rating</p>
      <p><strong>Brewery Address: </strong>${details.address_1}</p>
      <p><strong>Brewery Type: </strong>${details.brewery_type}</p>
      <p><strong>Phone No: </strong>${details.phone}</p>
      <p><strong>City: </strong>${details.city}</p>
      <p><strong>State Province: </strong>${details.state_province}</p>
      <p><strong>State: </strong>${details.state}</p>
      <p><strong>Postal Code: </strong>${details.postal_code}</p>
      <p><strong>Country: </strong>${details.country}</p>
      <p><strong>Website: </strong>${details.website_url}</p>
    `;
  
    var reviews = [
      { owner: 'Owner 1', review: 'Review 1', rated: 'Rated 1' },
    ];
  
    reviews.forEach(function(review) {
      var reviewElement = document.createElement('div');
      reviewElement.innerHTML = `
        <strong>${review.owner}</strong>
        <br />
        ${review.review}
        <br />
        ${review.rated}
        <span class="fa-star"></span>
      `;
      detailsRight.appendChild(reviewElement);
    });
  });