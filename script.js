document.addEventListener("DOMContentLoaded", function() {
    fetch('exames.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
            // Code to handle the fetched data
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
        });
});