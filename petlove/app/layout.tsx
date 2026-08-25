import { Manrope } from "next/font/google";

import ModalViewProvider from "@/components/ModalViewProvider/ModalViewProvider";
import Header from "@/components/Header/Header";
import LoaderController from "@/components/progress/LoaderController/LoaderController";

import "./globals.css";
import css from "./layout.module.css"

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
						<LoaderController />
						<Header />
						{children}
					</ModalViewProvider>
				</div>
			</body>
		</html>
	);
}
