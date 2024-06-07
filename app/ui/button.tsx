import Link from "next/link"
export default function Button({ linkUrl, buttonText }: { linkUrl: string, buttonText: string }) {

    return (
        <div>
            <a
                href={linkUrl}
                className={"flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-purple-50 p-3 text-sm font-medium text-purple-900 hover:bg-purple-100 hover:text-purple-600 md:flex-none md:justify-start md:p-2 md:px-3"}
            >
                <p className="md:block">{buttonText}</p>
            </a>
        </div>
    );


}