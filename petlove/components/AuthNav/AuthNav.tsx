import Link from "next/link";

import clsx from "clsx";
import css from "./AuthNav.module.css"

type Props = {
	isMenu?: boolean;
	isAlternative?: boolean;
}

const AuthNav = ({ isMenu, isAlternative }: Props) => {


	return (
		<div className={clsx(css.authentication, isMenu && css.menu, isAlternative && css.alternative)}>
			<Link className={css.login} href="/login">Log in</Link>
			<Link className={css.register} href="/register">Registration</Link>
		</div>
	);
};

export default AuthNav;