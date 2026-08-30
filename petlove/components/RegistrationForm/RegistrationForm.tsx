"use client"

import clsx from "clsx";
import css from "./RegistrationForm.module.css"
import { useState } from "react";
import Link from "next/link";


const RegistrationForm = () => {
	const [isPasswordShown, setPasswordShown] = useState(true);
	const [isConfirmPasswordShown, setConfirmPasswordShown] = useState(true);

	return (
		<form className={css.form}>
			<div>
				<div className={css.input_container}>
					<input className={css.input} />
					<p className={clsx(css.error, css.shown)}>Error</p>
				</div>

				<div className={css.input_container}>
					<input className={css.input} />
					<p className={clsx(css.error)}></p>
				</div>

				<div className={css.input_container}>
					<input className={css.input} />
					<p className={clsx(css.error)}></p>

					<div className={css.svg_container}
						onClick={() => setPasswordShown(!isPasswordShown)}
					>
						{
							isPasswordShown
								? <svg className={css.svg}>
									<use href="/eye-off.svg"></use>
								</svg>
								: <svg className={css.svg}>
									<use href="/eye.svg"></use>
								</svg>
						}
					</div>
				</div>

				<div className={css.input_container}>
					<input className={css.input} />
					<p className={clsx(css.error)}></p>

					<div className={css.svg_container}
						onClick={() => setConfirmPasswordShown(!isConfirmPasswordShown)}
					>
						{
							isConfirmPasswordShown
								? <svg className={css.svg}>
									<use href="/eye-off.svg"></use>
								</svg>
								: <svg className={css.svg}>
									<use href="/eye.svg"></use>
								</svg>
						}
					</div>
				</div>
			</div>

			<div className={css.confirm_section}>
				<button className={css.button}>Registration</button>
				<p className={css.redirection}>Already have an account? <Link className={css.redirection_link} href="/login">Login</Link></p>
			</div>
		</form>
	);
};

export default RegistrationForm;