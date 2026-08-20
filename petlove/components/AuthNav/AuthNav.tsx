import Link from "next/link";

import css from "./AuthNav.module.css"

const AuthNav = () => {


	return (
		<div className={css.authentication}>
			<Link className={css.login} href="/login">Log in</Link>
			<Link className={css.registr} href="/register">Registration</Link>
		</div>
	);
};

export default AuthNav;