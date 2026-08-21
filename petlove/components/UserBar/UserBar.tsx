

import clsx from "clsx"; 
import css from "./UserBar.module.css"


type Props = {
	isAlternative?: boolean;
}

const UserBar = ({ isAlternative }: Props) => {


	return (
		<div className={css.container}>
			<div className={css.svg_container}>
				<svg className={css.svg}>
					<use href="/user-avatar.svg"></use>
				</svg>
			</div>

			<p className={clsx(css.text, isAlternative && css.alternative)}>Anna</p>
		</div>
	);
};

export default UserBar;