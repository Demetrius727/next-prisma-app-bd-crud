'use server'

import UserRepository from "./UserRepository";

export default async function DeleteUser(id: string) {
    
    return UserRepository.deletar(id)
}