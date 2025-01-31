import { User } from '@/core/model/User'
import { PrismaClient } from "@prisma/client/extension"

export default class UserRepository {
    private static db: PrismaClient = new PrismaClient()
   
    //Se não existe, cria. Se existe, atualiza
    static async salvar(user: User): Promise<User> {
        return await this.db.user.upsert({ 
            where: { id: user.id },
            update: user,
            create: user
        })
    }
    static async obterTodos(): Promise<User[]> {
        return await this.db.user.findMany()
    }
    static async obterPorId(id: string): Promise<User> {
        const usuario = await this.db.usuario.findUnique({
            where: { id },
        })
        return usuario as User
    }
}