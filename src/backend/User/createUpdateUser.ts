'use server'

import { User } from "@/core/model/User";
import Id from "@/core/utils/id";
import UserRepository from "./UserRepository";

export default async function CreateUpdateUser(user: Partial<User>) {
    const newUser = {
        ...user,
        id: user.id ?? Id.novo, // Se não existe gera um novo id
    }

    return UserRepository.salvar(newUser as User)
}