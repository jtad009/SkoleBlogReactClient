import React, { useContext } from 'react';
import { DropdownMenu, MenuItem } from 'react-bootstrap-dropdown-menu';
import { BlogContext } from '../../Store/Store';
import { FaUserAlt } from "react-icons/fa";
// const UserProfileMenu = () => {
//     const {user, logout} = useContext(BlogContext);
    
//     return (
//         <DropdownMenu userName={user.username} triggerType='text' trigger='Profile'>
//             <MenuItem text='Home' location='/' />
//             <MenuItem text='View Profile' location={"/user/"+user.username} />
//             <MenuItem text='Logout'  onClick={logout} />
//         </DropdownMenu>
//     );
// }
class UserProfileMenu extends React.Component{
    static contextType = BlogContext;
    constructor(){
        super();
    }
    render(){
        const {user, logout} = this.context;
        return (
            <DropdownMenu userName={user.username} position="center" triggerType='text' trigger='Profile' fadeIn="true">
                <MenuItem text='Home' location='/' />
                <MenuItem text='View Profile' location={"/user/"+user.username} />
                <MenuItem text='Write Article' location="/write" />
                <MenuItem text='Logout'  onClick={logout} />
            </DropdownMenu>
        );
    }
}
export default UserProfileMenu;
