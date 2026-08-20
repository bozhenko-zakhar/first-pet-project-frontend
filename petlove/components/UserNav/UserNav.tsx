import LogOutButton from "../LogOutButton/LogOutButton";
import UserBar from "../UserBar/UserBar";

import css from "./UserNav.module.css"

const UserNav = () => {


	return (
		<div className={css.container}>
			<LogOutButton />
			<UserBar />
		</div>
	);
};

export default UserNav;	