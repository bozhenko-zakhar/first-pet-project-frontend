"use client";

import {
	createContext,
	useContext,
	useEffect,
	useRef,
	useState,
} from "react";
import { usePathname } from "next/navigation";

import styles from "./PageLoaderProvider.module.css";

type PageLoaderContextType = {
	startLoading: () => void;
};

const PageLoaderContext =
	createContext<PageLoaderContextType | null>(null);

export default function PageLoaderProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	const wait = (ms: number) =>
		new Promise((resolve) => {
			setTimeout(resolve, ms);
		});

	const pathname = usePathname();

	const [progress, setProgress] = useState(0);
	const [isLoading, setIsLoading] = useState(false);

	const previousPathname = useRef(pathname);

	const startLoading = () => {
		setProgress(0);
		setIsLoading(true);
	};

	/* This is a temporary testing function */
	const loadPage = async () => {
		setProgress(20);

		await wait(200);

		setProgress(35);

		await wait(200);

		const images = Array.from(document.images);

		if (images.length > 0) {
			let loadedImages = 0;

			await new Promise<void>((resolve) => {
				const imageLoaded = () => {
					loadedImages++;

					const imageProgress =
						loadedImages / images.length;

					const progress =
						35 + imageProgress * 30;

					setProgress(progress);

					if (
						loadedImages === images.length
					) {
						resolve();
					}
				};

				images.forEach((image) => {
					if (image.complete) {
						imageLoaded();
					} else {
						image.addEventListener(
							"load",
							imageLoaded,
							{ once: true }
						);

						image.addEventListener(
							"error",
							imageLoaded,
							{ once: true }
						);
					}
				});
			});
		}

		await wait(200);

		if (document.fonts) {
			await document.fonts.ready;
		}

		setProgress(75);

		await wait(200);

		await new Promise(requestAnimationFrame);

		await new Promise(requestAnimationFrame);

		setProgress(100);

		await wait(300);

		setIsLoading(false);
		setProgress(0);
	};

	useEffect(() => {
		if (previousPathname.current === pathname) {
			return;
		}

		previousPathname.current = pathname;

		if (!isLoading) {
			return;
		}

		requestAnimationFrame(() => {
			loadPage();
		});
	}, [pathname]);

	return (
		<PageLoaderContext.Provider
			value={{ startLoading }}
		>
			{children}

			{isLoading && (
				<div className={styles.loader}>
					<div
						className={styles.progress}
						style={{
							width: `${progress}%`,
						}}
					/>

					<span className={styles.percent}>
						{Math.round(progress)}%
					</span>
				</div>
			)}
		</PageLoaderContext.Provider>
	);
}

export function usePageLoader() {
	const context = useContext(PageLoaderContext);

	if (!context) {
		throw new Error(
			"usePageLoader must be used inside PageLoaderProvider"
		);
	}

	return context;
}