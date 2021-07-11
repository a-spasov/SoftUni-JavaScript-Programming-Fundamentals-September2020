function solve(input) {
    let movies = [];
    let movieName = "";
    let directorName = "";
    let date = "";
    for (let line of input) {
        if (line.includes("addMovie")) {
            line = line.split("addMovie ");
            line.shift();
            movieName = line[0];
            for (let currentMovie of movies) {
                if (Object.values(currentMovie).includes(movieName)) {
                    continue;
                }
            }
            let movie = {};
            movie.name = movieName;
            movies.push(movie);
        }
        if (line.includes("directedBy")) {
            line = line.split(" directedBy ");
            movieName = line[0];
            directorName =line[1];
            let currentMovie = movies.find((x) => x.name == movieName);
            if (currentMovie) {
                currentMovie.director = directorName;
            }
        }
        if (line.includes("onDate")) {
            line = line.split(" onDate ");
            movieName = line[0];
            date =line[1];
            let currentMovie = movies.find((x) => x.name == movieName);
            if (currentMovie) {
                currentMovie.date = date;
            }
        }
    }
    for (let currentMovie of movies) {
        if (currentMovie.name && currentMovie.director && currentMovie.date) {
            console.log(JSON.stringify(currentMovie));
        }
    }
}
solve([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
    ]
    );