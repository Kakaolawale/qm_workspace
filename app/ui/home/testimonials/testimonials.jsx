import SectionWrapper from "@/app/ui/sectionwrapper"
import GradientWrapper from "@/app/ui/gradientwrapper"
import user1 from "@/public/testimonial/user1.png"
import user2 from "@/public/testimonial/user2.webp"
import user3 from "@/public/testimonial/user3.webp"
import user4 from "@/public/testimonial/user4.webp"
import user5 from "@/public/testimonial/user5.webp"
import user6 from "@/public/testimonial/user6.webp"
import Image from "next/image"
import LayoutEffect from "@/app/ui/layouteffect"

const Testimonial = () => {

    const testimonials = [
        {
            avatar: user1,
            name: "Mark Zuckerberg",
            title: "Founder of meta",
            quote: "We've been using QuickMed for almost a year now and have nothing but great things to say. It's super easy to make emergency health service request and its response features are incredibly detailed."
        },
        {
            avatar: user1,
            name: "Guillermo Rauch",
            title: "Founder of Vercel",
            quote: "QuickMed has been a great addition to our staff work-health. It's so user-friendly, yet powerful and effective. I'm able to quickly create emergency response."
        },
        {
            avatar: user1,
            name: "Sidi jeddou",
            title: "Founder of Float UI",
            quote: "I highly recommend QuickMed for anyone looking for an easy-to-use and reliable medical emergency tool! It's simple to use and has been a great help."
        },
        {
            avatar: user1,
            name: "Ghazbel",
            title: "Founder of forceY",
            quote: "I've been using QuickMed for the past few months and I'm extremely impressed. The user interface is very intuitive, and I love the QuickCall and TeleMedics features ."
        },
        {
            avatar: user1,
            name: "Ana khan",
            title: "Founder of larax",
            quote: "QuickMed is the best medical emergency tool I've ever used. It's incredibly simple and intuitive to use, yet it offers a wide range of features and options."
        },
        {
            avatar: user1,
            name: "Ahmed khasem",
            title: "Founder of Let’s code",
            quote: "QuickMed is definitely the way to go when it comes to medical emergency + I highly recommend it as a health management tool with powerful support."
        },
    ]

    return (
        <SectionWrapper>
            <div id="testimonials" className="custom-screen px-4 text-gray-300">
                <div className="max-w-2xl text-center md:mx-auto">
                    <h2 className="text-gray-50 text-3xl font-semibold sm:text-4xl">
                        QuickMed is loved by the best founders and individuals around the world
                    </h2>
                </div>
                <GradientWrapper wrapperClassName="max-w-sm h-40 top-12 inset-x-0" className="mt-12">
                    <LayoutEffect
                        className="duration-1000 delay-300"
                        isInviewState={{
                            trueState: "opacity-1",
                            falseState: "opacity-0 translate-y-12"
                        }}
                    >
                        <ul className="grid gap-6 duration-1000 delay-300 ease-in-out sm:grid-cols-2 lg:grid-cols-3">
                            {
                                testimonials.map((item, idx) => (
                                    <li key={idx} className="p-4 rounded-xl border border-gray-800"
                                        style={{
                                            backgroundImage: "radial-gradient(100% 100% at 50% 50%, rgba(124, 58, 237, 0.05) 0%, rgba(124, 58, 237, 0) 100%)"
                                        }}
                                    >
                                        <figure className="flex flex-col justify-between gap-y-6 h-full">
                                            <blockquote className="">
                                                <p className="">
                                                    {item.quote}
                                                </p>
                                            </blockquote>
                                            <div className="flex items-center gap-x-4">
                                                <Image
                                                    src={item.avatar}
                                                    alt={item.name}
                                                    className="w-14 h-14 rounded-full object-cover"
                                                />
                                                <div>
                                                    <span className="block text-gray-50 font-semibold">{item.name}</span>
                                                    <span className="block text-sm mt-0.5">{item.title}</span>
                                                </div>
                                            </div>
                                        </figure>
                                    </li>
                                ))
                            }
                        </ul>
                    </LayoutEffect>
                </GradientWrapper>
            </div>
        </SectionWrapper>
    )
}

export default Testimonial