import userRepo from "../repository/user.repo";

class UserService {
    public static instance: UserService;
    private constructor() { }

    public static getInstance() {
        if (!UserService.instance) {
            UserService.instance = new UserService();
        }
        return UserService.instance;
    }

    public async createUser(name: string) {
        try {
            return await userRepo.create({ name });
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    public async getAllUsers() {
        try {
            return await userRepo.getAll();
        } catch (error) {
            console.log(error);
            throw error;
        }
    }


    public async getUserById(id: string) {
        try {
            return await userRepo.getById(id);
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    public async updateUser(id: string, name: string) {
        try {
            return await userRepo.update(id, { name });
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    public async deleteUser(id: string) {
        try {
            return await userRepo.delete(id);
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}

export default UserService.getInstance();