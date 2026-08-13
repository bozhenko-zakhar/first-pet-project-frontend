import Header from "@/components/Header/Header";
import "./globals.css";
import css from "./layout.module.css"

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body>
				<div className={css.container}>
					<Header />
					{children}
				</div>
			</body>
		</html>
	);
}
