import Backend from '@/backend'
import { User } from '@/core/model/User'
import { useEffect, useState } from 'react'

export default function useUsers() {
    const [users, setUsers] = useState<User[]>([]);
    const [user, setUser] = useState<Partial<User> | null>(null);

    useEffect(() => {
        Backend.users.obter().then(setUsers);
    }, []);

    async function salvar() {
        if (!user) return;
        await Backend.users.salvar(user)
        const users = await Backend.users.obter()
        setUsers(users)
        setUser(null)
    }

    async function deletar() {
        if (!user || !user.id) return;
        await Backend.users.deletar(user.id)
        const users = await Backend.users.obter()
        setUsers(users)
        setUser(null)
    }

    return {
        users,
        user,
        salvar,
        deletar,
        cancelar: () => setUser(null),
        alterarUsuario: (usuario: Partial<User> | null) => setUser(usuario),
    }
}