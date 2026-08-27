


import PetBlock from "@/components/PetBlock/PetBlock";
import Title from "@/components/Title/Title";
import RegistrationForm from "@/components/RegistrationForm/RegistrationForm";

import css from "./page.module.css";

const RegisterPage = () => {
	return (
		<main className={css.main}>
			<PetBlock
				src_mobile="/register-mobile.jpg"
				src_tablet="/register-tablet.jpg"
				src_desktop="/register-desktop.jpg"
				alt="Calm cat looking forward"
			/>
			<div className={css.form_container}>
				<Title heading="Registration" description="Thank you for your interest in our platform." />
				<RegistrationForm />
			</div>
		</main>
	);
};

export default RegisterPage;