import css from "./BurgerButton.module.css"
import clsx from "clsx";

type Props = {
	setOpen: () => void;
	isMenu?: boolean;
}

const BurgerButton = ({isMenu, setOpen}: Props) => {
	return (
		<button onClick={setOpen} className={clsx(css.burger_btn, isMenu && css.active)}>
			<span></span>
			<span></span>
			<span></span>
		</button>
	);
};

export default BurgerButton;