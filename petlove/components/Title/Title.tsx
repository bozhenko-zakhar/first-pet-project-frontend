import css from "./Title.module.css"

type Props = {
	heading: string;
	description: string;
}

const Title = ({ heading, description }: Props) => {
	return (
		<div>
			<h2 className={css.heading}>{heading}</h2>
			<p className={css.description}>{description}</p>
		</div>
	);
};

export default Title;