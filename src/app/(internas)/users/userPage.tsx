'use client'
import Page from "@/app/components/template/Page";
import Title from "@/app/components/template/Title";
import UserForm from "@/app/components/user/UserForm";
import UserList from "@/app/components/user/UserList";
import users from "@/app/data/constants/users";
import { User } from "@/core/model/User";
import { IconUser } from "@tabler/icons-react";
import { useState } from "react";

export default function UserPage() {
    const [user, setUser] = useState<User>(users[0]);

    function salvar() {
        // Salvar no banco de dados
    }

    return (
        <Page className="flex flex-col gap-10">
            <Title icon={IconUser} primary="Usuários" secondary="Cadastro de Usuários"/>
            {/* <UserList /> */}
            <UserForm user={user} onChange={setUser} salvar={salvar} cancelar={() => {}}/>
        </Page>
    );
}
