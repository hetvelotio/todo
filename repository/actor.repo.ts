import db from "../models";

class Actor {
    public static instance: Actor;
    private constructor() { }

    public static getInstance() {
        if (!Actor.instance) {
            Actor.instance = new Actor();
        }
        return Actor.instance;
    }

    async create(data: { name: string }) {
        try {
            return await db.Actor.create(data);
        } catch (error) {
            console.log(error)
            throw error;
        }

    }

    async getActorWithMovies(actorId: string) {
        try {
            return await db.Actor.findByPk(actorId, {
                include: [{
                    model: db.Movie,
                    as: 'movies',
                    through: { attributes: [] }
                }]
            });
        } catch (error) {
            console.log(error)
            throw error;
        }
    }


}

export default Actor.getInstance();