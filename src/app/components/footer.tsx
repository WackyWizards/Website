import { OrgName } from '@/constants';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white p-4 mt-10 fixed bottom-0 w-full z-10">
            <div className="flex items-center w-full">
                <p className="text-sm flex-grow text-left">© 2025 {OrgName}. All rights reserved.</p>
                <Link href="/privacy" className="text-sm whitespace-nowrap">
                    Privacy Policy
                </Link>
            </div>
        </footer>
    );
}
