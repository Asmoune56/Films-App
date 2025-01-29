document.getElementById('search').addEventListener('input', function() {
    let filter = this.value.toLowerCase();
    let movies = document.querySelectorAll('.movie');
    movies.forEach(movie => {
        let title = movie.getAttribute('data-title').toLowerCase();
        if (title.includes(filter)) {
            movie.style.display = 'block';
        } else {
            movie.style.display = 'none';
        }
    });
});
