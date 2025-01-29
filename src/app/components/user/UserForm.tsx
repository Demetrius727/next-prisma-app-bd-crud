import { User } from "@/core/model/User";
import InputText from "../shared/InputText";

export interface UserFormProps {
    user: User  
}


export default function UserForm(props: UserFormProps) {
    return (
        <div className="flex flex-col">
            <InputText label="Nome" value={props.user.name}/>
        </div>
    )
}
