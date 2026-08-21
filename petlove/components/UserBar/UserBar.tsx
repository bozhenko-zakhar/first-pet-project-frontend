

import css from "./UserBar.module.css"

const UserBar = () => {


	return (
		<div className={css.container}>
			<div className={css.svg_container}>
				<svg className={css.svg}>
					<use href="/user-avatar.svg"></use>
				</svg>
			</div>

			<p className={css.text}>Anna</p>
		</div>
	);
};

export default UserBar;