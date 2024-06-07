import Link from "next/link";

export default function HomeIcon() {
    return (
        <div className="flex items-center justify-center md:py-6">
            <Link
                className="flex rounded-md grow bg-gray-50 items-center justify-center block"
                href={'/'}
            >
                Home
            </Link>
        </div>
    );
}