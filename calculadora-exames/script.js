document.addEventListener('DOMContentLoaded', function () {
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            // Process your JSON data here
            console.log(data);
        })
        .catch(error => console.error('Error loading JSON data:', error));
});

// Other existing script content can go here.