"use client"

import clsx from "clsx";
import css from "./LoginForm.module.css"
import Link from "next/link";


const LoginForm = () => {
	return (
		<form className={css.form}>
			<div>
				<div className={css.input_container}>
					<input className={css.input} placeholder="Email" />
					<p className={clsx(css.error, css.shown)}>Error</p>
				</div>

				<div className={css.input_container}>
					<input className={css.input} placeholder="Password" />
					<p className={clsx(css.error)}></p>
				</div>
			</div>

			<div className={css.confirm_section}>
				<button className={css.button}>Log In</button>
				<p className={css.redirection}>Don’t have an account? <Link className={css.redirection_link} href="/register">Register</Link></p>
			</div>
		</form>
	);
};

export default LoginForm;