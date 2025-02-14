/* eslint-disable @next/next/no-img-element */
import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";

const reviews = [
    {
        name: "Alice Tech",
        username: "@alice_tech",
        body: "Xenotech transformed our digital presence with their robust software solutions. Highly recommend!",
        img: "https://avatar.vercel.sh/alice_tech",
    },
    {
        name: "Bob Developer",
        username: "@bob_dev",
        body: "Impressed by the professionalism and cutting-edge tech that Xenotech offers. Their team truly understands our needs.",
        img: "https://avatar.vercel.sh/bob_dev",
    },
    {
        name: "Catherine Innovate",
        username: "@cathy_innovate",
        body: "Our mobile app was a huge success thanks to Xenotech's expertise in web and mobile development.",
        img: "https://avatar.vercel.sh/cathy_innovate",
    },
    {
        name: "David Blockchain",
        username: "@david_block",
        body: "Innovative and secure solutions! Xenotech's blockchain services are next-level. Their work is impeccable.",
        img: "https://avatar.vercel.sh/david_block",
    },
    {
        name: "Emily Cloud",
        username: "@emily_cloud",
        body: "The cloud migration service provided by Xenotech streamlined our operations and significantly improved scalability.",
        img: "https://avatar.vercel.sh/emily_cloud",
    },
    {
        name: "Frank Cyber",
        username: "@frank_cyber",
        body: "Cybersecurity at its best. Xenotech's team helped us secure our digital assets with unmatched expertise.",
        img: "https://avatar.vercel.sh/frank_cyber",
    },
];


const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
    img,
    name,
    username,
    body,
}: {
    img: string;
    name: string;
    username: string;
    body: string;
}) => {
    return (
        <figure
            className={cn(
                "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
                // light styles
                "border-white/[.2] bg-[#0b0b0c]/[.5] hover:bg-gray-950/[.05]",
                // dark styles
                "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-500/[.15]",
            )}
        >
            <div className="flex flex-row items-center gap-2">
                <img className="rounded-full" width="32" height="32" alt="" src={img} />
                <div className="flex flex-col">
                    <figcaption className="text-sm font-medium dark:text-white">
                        {name}
                    </figcaption>
                    <p className="text-xs font-medium dark:text-white/40">{username}</p>
                </div>
            </div>
            <blockquote className="mt-2 text-sm">{body}</blockquote>
        </figure>
    );
};

export function Reviews() {
    return (
        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden my-10">
            <Marquee pauseOnHover className="[--duration:20s] bg-transparent text-white h-[175px]">
                {firstRow.map((review) => (
                    <ReviewCard key={review.username} {...review} />
                ))}
            </Marquee>
            <Marquee reverse pauseOnHover className="[--duration:20s] bg-transparent text-white h-[175px]">
                {secondRow.map((review) => (
                    <ReviewCard key={review.username} {...review} />
                ))}
            </Marquee>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-[#111111]"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-[#111111]"></div>
        </div>
    );
}
