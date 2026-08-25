"use client";

import {
	createContext,
	useCallback,
	useContext,
	useMemo,
} from "react";

import {
	usePathname,
	useRouter,
} from "next/navigation";

type NavigationContextValue = {
	push: (href: string) => void;
	replace: (href: string) => void;
};

const NavigationContext =
	createContext<NavigationContextValue | null>(
		null,
	);

export function NavigationProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	const router = useRouter();
	const pathname = usePathname();

	const push = useCallback(
		(href: string) => {
			if (href === pathname) {
				return;
			}

			router.push(href);
		},
		[router, pathname],
	);

	const replace = useCallback(
		(href: string) => {
			if (href === pathname) {
				return;
			}

			router.replace(href);
		},
		[router, pathname],
	);

	const value = useMemo(
		() => ({
			push,
			replace,
		}),
		[push, replace],
	);

	return (
		<NavigationContext.Provider
			value={value}
		>
			{children}
		</NavigationContext.Provider>
	);
}

export function useNavigation() {
	const context =
		useContext(NavigationContext);

	if (!context) {
		throw new Error(
			"useNavigation must be used inside NavigationProvider",
		);
	}

	return context;
}