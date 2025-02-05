'use client'
import Page from "@/app/components/template/Page";
import Title from "@/app/components/template/Title";
import UserForm from "@/app/components/user/UserForm";
import UserList from "@/app/components/user/UserList";
import users from "@/app/data/constants/users";
import Backend from "@/backend";
import { User } from "@/core/model/User";
import { IconPlus, IconUser } from "@tabler/icons-react";
import { useEffect, useState } from "react";

export default function UserPage() {
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

    return (
        <Page className="flex flex-col gap-10">
            <Title icon={IconUser} primary="Usuários" secondary="Cadastro de Usuários"/>
            
            {user ? (
                <UserForm user={user} onChange={setUser} salvar={salvar} cancelar={() => setUser(null)} deletar={deletar}/>
            ): (

                <>
                    <div className="flex justify-end">
                        <button className="flex items-center gap-2 bg-blue-500 px-4 py-2 rounded-md" onClick={() => setUser({})}>
                        <IconPlus />
                        Novo Usuário
                        </button>
                    </div>
                    <UserList users={users} onClick={setUser}/>
                </>
            )}

        </Page>
    );
}
