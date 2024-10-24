import db from "../models";

class Movie {
    public static instance: Movie;
    private constructor() { }

    public static getInstance() {
        if (!Movie.instance) {
            Movie.instance = new Movie();
        }
        return Movie.instance;
    }

    async create(data: { title: string }) {
        try {
            return await db.Movie.create(data);
        } catch (error) {
            console.log(error)
            throw error;
        }
    }

    async getMovieWithActors(movieId: string) {
        try {
            return await db.Movie.findByPk(movieId, {
                include: [{
                    model: db.Actor,
                    as: 'actors',
                    through: { attributes: [] }
                }]
            });
        } catch (error) {
            console.log(error)
            throw error;
        }

    }

    async addActorToMovie(movieId: string, actorId: string, role: string) {
        try {
            const movie = await db.Movie.findByPk(movieId);
            const actor = await db.Actor.findByPk(actorId);
            if (movie && actor) {
                await db.ActorMovies.create({
                    actorId,
                    movieId,
                    role
                });
                return actor;
            }
        } catch (error) {
            console.log(error)
            throw error;
        }
        throw new Error('Movie or Actor not found');
    }

}

export default Movie.getInstance();