import { Manrope } from "next/font/google";

import Header from "@/components/Header/Header";

import "./globals.css";
import css from "./layout.module.css"
import ModalViewProvider from "@/components/Modal/ModalViewProvider";

const manrope = Manrope({
	subsets: ["latin", "cyrillic"],
	weight: ["400", "500", "600", "700"],
	variable: "--manrope-font",
	display: "swap",
})

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${manrope.variable}`}>
				<div className={css.container}>
					<ModalViewProvider>
						<Header />
						{children}
					</ModalViewProvider>
				</div>
			</body>
		</html>
	);
}
