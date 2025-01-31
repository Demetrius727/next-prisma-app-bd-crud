import { User } from '@/core/model/User'
import users from "../../data/constants/users";
import UserLine from "./UserLine";

export interface UserListProps {
   
    onClick?: (user: User) => void
}

export default function UserList(props: UserListProps) {
    return (
        <div className="flex flex-col">
            {users.map((user: User) => {
                return <UserLine key={user.id} user={user} onClick={props.onClick}/>
            })}
        </div>
    );
}