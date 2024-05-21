document.getElementById('review-form').addEventListener('submit', function(event) {
    // Prevent the form from being submitted normally
    event.preventDefault();
  
    // Get the rating and review
    var rating = document.querySelector('input[name="rating"]:checked').value;
    var review = document.querySelector('textarea[name="review"]').value;
  
    // Create a new div for the review
    var reviewDiv = document.createElement('div');
  
    // Set the text of the review div
    reviewDiv.textContent = 'Rating: ' + rating + '\nReview: ' + review;
  
    // Add the review div to the reviews div
    document.getElementById('reviews').appendChild(reviewDiv);
  
    // Clear the form
    event.target.reset();
  });