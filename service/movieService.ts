import movieRepo from "../repository/movie.repo";

class MovieService {
    public static instance: MovieService;
    private constructor() { }

    public static getInstance() {
        if (!MovieService.instance) {
            MovieService.instance = new MovieService();
        }
        return MovieService.instance;
    }

    async createMovie(title: string) {
        try {
            return await movieRepo.create({ title });

        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async getMovieWithActors(movieId: string) {
        try {
            return await movieRepo.getMovieWithActors(movieId);

        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async addActorToMovie(movieId: string, actorId: string, role:string) {
        try {
            return await movieRepo.addActorToMovie(movieId, actorId, role);

        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}

export default MovieService.getInstance();