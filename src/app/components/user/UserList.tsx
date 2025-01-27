import { User } from '@/core/model/User'
import users from "../../data/constants/users";
import UserLine from "./UserLine";

export default function UserList() {
    return (
        <div className="flex flex-col">
            {users.map((user: User) => {
                return <UserLine key={user.id} user={user}/>
            })}
        </div>
    );
}