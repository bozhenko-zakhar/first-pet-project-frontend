"use client";

import {
	useEffect,
	useRef,
} from "react";

import { usePathname } from "next/navigation";

type NavigationManagerProps = {
	onStart: () => void;
	onComplete: () => void;
};

const NAVIGATION_DELAY = 50;

export default function NavigationManager({
	onStart,
	onComplete,
}: NavigationManagerProps) {
	const pathname = usePathname();

	const pendingRef = useRef(false);
	const timerRef = useRef<number | null>(
		null,
	);

	const previousPathnameRef =
		useRef(pathname);

	useEffect(() => {
		const handleClick = (
			event: MouseEvent,
		) => {
			if (
				event.defaultPrevented ||
				event.button !== 0 ||
				event.metaKey ||
				event.ctrlKey ||
				event.shiftKey ||
				event.altKey
			) {
				return;
			}

			const target =
				event.target as HTMLElement | null;

			const link =
				target?.closest("a");

			if (!link) {
				return;
			}

			const url = new URL(
				link.href,
				window.location.href,
			);

			if (
				url.origin !==
				window.location.origin
			) {
				return;
			}

			const currentUrl =
				window.location;

			if (
				url.pathname ===
				currentUrl.pathname &&
				url.search ===
				currentUrl.search &&
				url.hash
			) {
				return;
			}

			if (
				url.pathname ===
				currentUrl.pathname &&
				url.search ===
				currentUrl.search
			) {
				return;
			}

			/*
			 * Give extremely fast cached navigations
			 * a chance to finish before showing
			 * the loader.
			 */
			timerRef.current =
				window.setTimeout(() => {
					pendingRef.current = true;
					onStart();
				}, NAVIGATION_DELAY);
		};

		document.addEventListener(
			"click",
			handleClick,
		);

		return () => {
			document.removeEventListener(
				"click",
				handleClick,
			);

			if (timerRef.current !== null) {
				clearTimeout(
					timerRef.current,
				);
			}
		};
	}, [onStart]);

	useEffect(() => {
		if (
			pathname ===
			previousPathnameRef.current
		) {
			return;
		}

		previousPathnameRef.current =
			pathname;

		if (timerRef.current !== null) {
			clearTimeout(
				timerRef.current,
			);

			timerRef.current = null;
		}

		/*
		 * If loader was already started,
		 * navigation is now complete.
		 */
		if (pendingRef.current) {
			pendingRef.current = false;

			onComplete();
		}
	}, [pathname, onComplete]);

	return null;
}