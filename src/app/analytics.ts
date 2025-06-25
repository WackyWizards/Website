"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import * as gtag from "@/lib/gtag";

export default function Analytics() {
	const pathname = usePathname();
	const searchParams = useSearchParams();

	useEffect(() => {
        if (!window.gtag) {
            console.error("Google Analytics gtag is not loaded.");
            return;
        }

        if (!searchParams) {
            console.error("Search parameters are not available.");
            return;
        }

		const url = pathname + searchParams.toString();
		gtag.pageview(url);
	}, [pathname, searchParams]);

	return null;
}
