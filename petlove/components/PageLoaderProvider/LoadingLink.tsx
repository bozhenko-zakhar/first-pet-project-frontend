"use client";

import Link from "next/link";

import { usePageLoader } from "./PageLoaderProvider";

export default function LoadingLink(
	props: React.ComponentProps<typeof Link>
) {
	const { startLoading } = usePageLoader();

	return (
		<Link {...props}
			onClick={(event) => {
				if (
					event.button !== 0 ||
					event.metaKey ||
					event.ctrlKey ||
					event.shiftKey ||
					event.altKey
				) {
					return;
				}

				startLoading();

				props.onClick?.(event);
			}}
		/>
	);
}