


import PetBlock from "@/components/PetBlock/PetBlock";
import Title from "@/components/Title/Title";
import LoginForm from "@/components/LoginForm/LoginForm";

import css from "./page.module.css";

const LoginPage = () => {
	return (
		<main className={css.main}>
			<PetBlock
				src_mobile="/login-mobile.jpg"
				src_tablet="/login-tablet.jpg"
				src_desktop="/login-desktop.jpg"
				alt="Happy dog looking forward"
			/>
			<div className={css.form_container}>
				<Title heading="Log in" description="Welcome! Please enter your credentials to login to the platform:" />
				<LoginForm />
			</div>
		</main>
	);
};

export default LoginPage;