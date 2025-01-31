'use client'
import Page from "@/app/components/template/Page";
import Title from "@/app/components/template/Title";
import UserForm from "@/app/components/user/UserForm";
import UserList from "@/app/components/user/UserList";
import users from "@/app/data/constants/users";
import Backend from "@/backend";
import { User } from "@/core/model/User";
import { IconUser } from "@tabler/icons-react";
import { useState } from "react";

export default function UserPage() {
    const [users, setUsers] = useState<User[]>([]);
    const [user, setUser] = useState<Partial<User> | null>(null);

    function salvar() {
        if (!user) return;
        Backend.users.salvar(user)
    }

    return (
        <Page className="flex flex-col gap-10">
            <Title icon={IconUser} primary="Usuários" secondary="Cadastro de Usuários"/>
 
            {user ? (
                <UserForm user={user} onChange={setUser} salvar={salvar} cancelar={() => setUser(null)}/>
            ): (
                <UserList onClick={setUser}/>
            )}

        </Page>
    );
}
