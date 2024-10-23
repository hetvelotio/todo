import db from "../models";

class User {
    public static instance: User;
    private constructor() { }

    public static getInstance() {
        if (!User.instance) {
            User.instance = new User();
        }
        return User.instance;
    }

    public async create(data: { name: string }) {
        try {
            return await db.User.create(data);
        } catch (error) {
            console.log(error)
            throw error;
        }
    }

    public async getAll() {
        try {
            return await db.User.findAll();
        } catch (error) {
            console.log(error)
            throw error;
        }
    }

    public async getById(id: string) {
        try {
            return await db.User.findByPk(id, { include: ['todos'] });
        } catch (error) {
            console.log(error)
            throw error;
        }
    }

    public async update(id: string, newData: { name: string }) {
        try {
            return await db.User.update(newData, { where: { id } });
        } catch (error) {
            console.log(error)
            throw error;
        }
    }


    public async delete(id: string) {
        try {
            return await db.User.destroy({ where: { id } });
        } catch (error) {
            console.log(error)
            throw error;
        }
    }

}

export default User.getInstance();