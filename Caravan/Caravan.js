
document.addEventListener('DOMContentLoaded', function () {
    // Toggle Navigation Menu
    const navToggle = document.getElementById('nav-toggle');
    const navContent = document.getElementById('nav-content');

    if (navToggle && navContent) {
        navToggle.onclick = function () {
            // Toggle the 'hidden' class to show/hide the nav content
            navContent.classList.toggle('hidden');
        };
    } else {
        console.log('Nav toggle or nav content not found!');
    }

    // Add passive to the event listeners for touch events
    window.addEventListener('touchstart', function (e) {
    }, { passive: true });

    window.addEventListener('touchmove', function (e) {
    }, { passive: true });
});
  // Select the filter button
  const filterButton = document.getElementById('filterButton');

  // Select all car cards that need to be filtered
  const cars = document.querySelectorAll('.car-card');

  // Function to filter cars based on selected filters
  function filterCars() {
      // Get the selected filter values (style, year, model)
      const selectedStyle = document.getElementById('bodyStyle').value;
      const selectedYear = document.getElementById('yearRange').value;
      const selectedModel = document.getElementById('carModel').value;

      cars.forEach(car => {
          const carStyle = car.getAttribute('data-style');
          const carYear = car.getAttribute('data-year');
          const carModel = car.getAttribute('data-model');

          // Check if the car matches all the selected filters
          const matchesStyle = (selectedStyle === 'Default' || carStyle === selectedStyle);
          const matchesYear = (selectedYear === 'Default' || carYear === selectedYear);
          const matchesModel = (selectedModel === 'Default' || carModel === selectedModel);

          // If all the selected filters match, show the car, otherwise hide it
          if (matchesStyle && matchesYear && matchesModel) {
              car.style.display = '';  // Show the car (flex)
          } else {
              car.style.display = 'none'; // Hide the car
          }
      });
  }

  // Add event listener to the filter button to trigger the filtering when clicked
  filterButton.addEventListener('click', () => {
      filterCars();  // Applies the filters when button is clicked
  });

