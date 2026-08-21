import LogOutButton from "../LogOutButton/LogOutButton";
import UserBar from "../UserBar/UserBar";

import css from "./UserNav.module.css"

type Props = {
	isAlternative?: boolean;
}

const UserNav = ({ isAlternative }: Props) => {


	return (
		<div className={css.container}>
			<LogOutButton isAlternative={isAlternative} />
			<UserBar isAlternative={isAlternative} />
		</div>
	);
};

export default UserNav;	