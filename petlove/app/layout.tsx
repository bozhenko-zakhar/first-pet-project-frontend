import { Manrope } from "next/font/google";

import Header from "@/components/Header/Header";

import { ProgressProvider } from "@/components/progress/ProgressProvider/ProgressProvider";

import ModalViewProvider from "@/components/ModalViewProvider/ModalViewProvider";
import ProgressController from "@/components/progress/ProgressController/ProgressController";

import "./globals.css";
import css from "./layout.module.css"
import PageProgress from "@/components/progress/PageProgress/PageProgress";

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
					<ProgressProvider>
						<ProgressController />

						<PageProgress />

						<ModalViewProvider>
							<Header />
							{children}
						</ModalViewProvider>
					</ProgressProvider>
				</div>
			</body>
		</html>
	);
}
