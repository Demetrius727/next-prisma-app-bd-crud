'use client'
import Page from "@/app/components/template/Page";
import Title from "@/app/components/template/Title";
import UserForm from "@/app/components/user/UserForm";
import UserList from "@/app/components/user/UserList";
import users from "@/app/data/constants/users";
import { IconUser } from "@tabler/icons-react";

export default function UserPage() {
    return (
        <Page className="flex flex-col gap-10">
            <Title icon={IconUser} primary="Usuários" secondary="Cadastro de Usuários"/>
            {/* <UserList /> */}
            <UserForm user={users[0]}/>
        </Page>
    );
}
