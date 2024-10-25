import Image from "next/image";

export default function Page() {
    return  (
        <div>
        <div>Matthew Yip (profile page)</div>
        <Image
        className="dark:invert"
        src="/images/Matthew-Yip.jpg"
        alt="Matthew Yip"
        width={300}
        height={300}
        priority
    />
        </div>
    );
}