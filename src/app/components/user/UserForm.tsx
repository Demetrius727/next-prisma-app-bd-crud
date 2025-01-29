import { User } from "@/core/model/User";
import InputText from "../shared/InputText";

export interface UserFormProps {
    user: User  
}


export default function UserForm(props: UserFormProps) {
    return (
        <div className="flex flex-col gap-5">
            <InputText label="Nome" type="text" value={props.user.name} onChange={() => {}}/>
            <InputText label="E-mail" type="email" value={props.user.email} onChange={() => {}}/>
            <InputText label="Senha" type="password" value={props.user.password} onChange={() => {}}/>

            <div className="flex gap-5">
                <button className="bg-blue-500 px-4 py-2 rounded-md">Salvar</button>
                <button className="bg-zinc-500 px-4 py-2 rounded-md">Cancelar</button>
            </div>
        </div>
    )
}
