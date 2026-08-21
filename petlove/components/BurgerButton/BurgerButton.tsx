import css from "./BurgerButton.module.css"
import clsx from "clsx";

type Props = {
	setOpen: () => void;
	isMenu?: boolean;
	isAlternative?: boolean;
}

const BurgerButton = ({ isMenu, setOpen, isAlternative }: Props) => {
	return (
		<button onClick={setOpen} className={clsx(css.burger_btn, isMenu && css.active, isAlternative && css.alternative)}>
			<span></span>
			<span></span>
			<span></span>
		</button>
	);
};

export default BurgerButton;