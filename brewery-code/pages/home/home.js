var searchTerm = '';
var searchCity = '';
var searchType = null;
var apiUrl = 'https://api.openbrewerydb.org/breweries';

function fetchSearchResults() {
  var apiEndpoint = apiUrl + '?by_name=' + encodeURIComponent(searchTerm) + '&by_city=' + encodeURIComponent(searchCity);

  if (searchType !== null) {
    apiEndpoint += '&by_type=' + encodeURIComponent(searchType);
  }

  console.log('API endpoint:', apiEndpoint); 

  fetch(apiEndpoint)
    .then(function (response) {
      console.log('API response:', response); 
      return response.json();
    })
    .then(function (data) {
      console.log('Parsed data:', data); 
      if (Array.isArray(data)) {
        onSearchResultsUpdate(data);
      } else {
        onSearchResultsUpdate([]);
      }
    })
    .catch(function (error) {
      console.error('Error:', error);
    });
}

function onSearchResultsUpdate(data) {
  console.log('Updating search results with data:', data); 
  var app = document.getElementById('app');
  var details = app.querySelector('.details');
  details.innerHTML = '';

  data.forEach(function (item) {
    var card = document.createElement('div');
    card.className = 'card ' + item.type;
    card.innerHTML = `
      <h2>${item.name}</h2>
      <p>Brewery Address: ${item.street}</p>
      <p>Phone No: ${item.phone}</p>
      <p>Website: ${item.website_url}</p>
      <p>State: ${item.state}</p>
    `;
    details.appendChild(card);
  });
}

function filterSelection(type) {
  var cards, i;
  cards = document.getElementsByClassName('card');
  if (type == 'all') type = '';
  for (i = 0; i < cards.length; i++) {
    cards[i].classList.remove('show');
    if (cards[i].className.indexOf(type) > -1) cards[i].classList.add('show');
  }
}

document.addEventListener('DOMContentLoaded', function () {
  fetch(apiUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      onSearchResultsUpdate(data);
    })
    .catch(function (error) {
      console.error('Error:', error);
    });
});

var btnContainer = document.getElementById('filterBtnContainer');
document.addEventListener('DOMContentLoaded', function () {
  var btns = btnContainer.getElementsByClassName('btn');
  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', function () {
      var current = document.getElementsByClassName('active');
      current[0].className = current[0].className.replace(' active', '');
      this.className += ' active';
      filterSelection(this.getAttribute('data-filter'));
    });
  }
});

document.getElementById('searchTerm').addEventListener('input', function () {
  searchTerm = this.value;
  console.log('searchTerm input changed:', searchTerm); 
  fetchSearchResults();
});

document.getElementById('searchCity').addEventListener('input', function () {
  searchCity = this.value;
  console.log('searchCity input changed:', searchCity); 
  fetchSearchResults();
});

document.getElementById('searchType').addEventListener('change', function () {
  searchType = this.value;
  console.log('searchType input changed:', searchType); 
  fetchSearchResults();
});