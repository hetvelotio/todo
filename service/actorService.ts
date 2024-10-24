import actorRepo from "../repository/actor.repo";


class ActorService {
    public static instance: ActorService;
    private constructor() { }

    public static getInstance() {
        if (!ActorService.instance) {
            ActorService.instance = new ActorService();
        }
        return ActorService.instance;
    }

    async createActor(name: string) {
        try {
            return await actorRepo.create({ name });
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async getActorWithMovies(actorId: string) {
        try {
            return await actorRepo.getActorWithMovies(actorId);
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}

export default ActorService.getInstance();