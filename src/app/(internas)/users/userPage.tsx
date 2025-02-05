'use client'
import Page from "@/app/components/template/Page";
import Title from "@/app/components/template/Title";
import UserForm from "@/app/components/user/UserForm";
import UserList from "@/app/components/user/UserList";
import useUsers from "@/app/data/hooks/useUsers";
import { IconPlus, IconUser } from "@tabler/icons-react";

export default function UserPage() {
    const{user, users, salvar, deletar, alterarUsuario} = useUsers()

    return (
        <Page className="flex flex-col gap-10">
            <Title icon={IconUser} primary="Usuários" secondary="Cadastro de Usuários"/>
            
            {user ? (
                <UserForm user={user} onChange={alterarUsuario} salvar={salvar} cancelar={() => alterarUsuario(null)} deletar={deletar}/>
            ): (

                <>
                    <div className="flex justify-end">
                        <button className="flex items-center gap-2 bg-blue-500 px-4 py-2 rounded-md" onClick={() => alterarUsuario({})}>
                        <IconPlus />
                        Novo Usuário
                        </button>
                    </div>
                    <UserList users={users} onClick={alterarUsuario}/>
                </>
            )}

        </Page>
    );
}
