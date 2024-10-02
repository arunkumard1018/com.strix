import Marquee from "@/components/magicui/marquee";
import { cn } from "@/lib/utils";
import Image from "next/image";

const reviews = [
    {
        name: "Rajesh Sharma",
        enterprise: "Sharma Enterprises",
        username: "@rajeshsharma",
        body: "This software has transformed the way I manage my business. It's incredible!",
        img: "https://avatar.vercel.sh/rajeshsharma",
    },
    {
        name: "Anita Kapoor",
        enterprise: "Kapoor Trading Co.",
        username: "@anitakapoor",
        body: "I can't believe how easy invoicing has become with this tool. Highly recommended!",
        img: "https://avatar.vercel.sh/anitakapoor",
    },
    {
        name: "Vikram Singh",
        enterprise: "Singh Technologies",
        username: "@vikramsingh",
        body: "Managing invoices and tracking payments has never been this efficient. Amazing!",
        img: "https://avatar.vercel.sh/vikramsingh",
    },
    {
        name: "Priya Mehta",
        enterprise: "Mehta Solutions",
        username: "@priyamehta",
        body: "This software simplifies everything. It’s a must-have for any business owner.",
        img: "https://avatar.vercel.sh/priyamehta",
    },
    {
        name: "Amit Verma",
        enterprise: "Verma Industries",
        username: "@amitverma",
        body: "The user-friendly interface and robust features make invoicing a breeze!",
        img: "https://avatar.vercel.sh/amitverma",
    },
    {
        name: "Neha Rao",
        enterprise: "Rao & Co.",
        username: "@neharao",
        body: "With this software, I can easily track all my business finances in one place.",
        img: "https://avatar.vercel.sh/neharao",
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
                "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
                // light styles
                "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
                // dark styles
                "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
            )}
        >
            <div className="flex flex-row items-center gap-2">
                <Image className="rounded-full" width="32" height="32" alt="" src={img} />
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

export function ReviewsMarquee() {
    return (
        <div className="relative flex py-16 w-full flex-col items-center justify-center overflow-hidden ">
            <Marquee pauseOnHover className="[--duration:20s]">
                {firstRow.map((review) => (
                    <ReviewCard key={review.username} {...review} />
                ))}
            </Marquee>
            <Marquee reverse pauseOnHover className="[--duration:20s]">
                {secondRow.map((review) => (
                    <ReviewCard key={review.username} {...review} />
                ))}
            </Marquee>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
        </div>
    );
}
