import Page from "@/app/components/template/Page";
import Title from "@/app/components/template/Title";
import UserList from "@/app/components/user/UserList";
import { IconUser } from "@tabler/icons-react";

export default function UserPage() {
    return (
        <Page className="flex flex-col gap-10">
            <Title icon={IconUser} primary="Usuários" secondary="Cadastro de Usuários"/>
            <UserList />
        </Page>
    );
}
