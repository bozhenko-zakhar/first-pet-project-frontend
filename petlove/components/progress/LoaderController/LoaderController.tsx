"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export default function LoaderController() {
	const pathname = usePathname();
	const previousPathname = useRef(pathname);

	useEffect(() => {
		if (pathname === previousPathname.current) return;

		previousPathname.current = pathname;
	}, [pathname]);

	return null;
}