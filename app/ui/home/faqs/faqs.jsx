import LayoutEffect from "@/app/ui/layouteffect"
import SectionWrapper from "@/app/ui/sectionwrapper"

const faqsList = [
    {
        q: "What is an QuickMed App?",
        a: "A medical and health emergency response tool or software application that allows you to create, send, and manage medical service requests. It helps you to send quick medical emergency requests, track the incoming service providers, get treatments and analyze via reports.",
    },
    {
        q: "What are the benefits of using QuickMed?",
        a: "A medical and health emergency response tool or software application that allows you to create, send, and manage medical service requests. It helps you to send quick medical emergency requests, track the incoming service providers, get treatments and analyze via reports.",
    },
    {
        q: "How do I get started with QuickMed App?",
        a: "A medical and health emergency response tool or software application that allows you to create, send, and manage medical service requests. It helps you to send quick medical emergency requests, track the incoming service providers, get treatments and analyze via reports.",
    },
    {
        q: "How does an Map-powered feature work?",
        a: "A medical and health emergency response tool or software application that allows you to create, send, and manage medical service requests. It helps you to send quick medical emergency requests, track the incoming service providers, get treatments and analyze via reports.",
    },
    {
        q: "What are the benefits of using QuickMed App?",
        a: "A medical and health emergency response tool or software application that allows you to create, send, and manage medical service requests. It helps you to send quick medical emergency requests, track the incoming service providers, get treatments and analyze via reports.",
    },
    {
        q: "How Can I sell my health and medical services products using QuickMed as a health practional?",
        a: "A medical and health emergency response tool or software application that allows you to create, send, and manage medical service requests. It helps you to send quick medical emergency requests, track the incoming service providers, get treatments and analyze via reports.",
    }
]

const FAQs = () => (
    <SectionWrapper id="faqs">
        <div className="custom-screen text-gray-300 px-4">
            <div className="max-w-xl text-center xl:mx-auto">
                <h2 className="text-gray-50 text-3xl font-extrabold sm:text-4xl">
                    Everything you need to know about QuickMed App
                </h2>
                <p className="mt-3">
                    Here are the most questions people always ask about QuickMed App.
                </p>
            </div>
            <div className='mt-12'>
                <LayoutEffect
                    className="duration-1000 delay-300"
                    isInviewState={{
                        trueState: "opacity-1",
                        falseState: "opacity-0 translate-y-12"
                    }}
                >
                    <ul className='space-y-8 gap-12 grid-cols-2 sm:grid sm:space-y-0 lg:grid-cols-3'>
                        {faqsList.map((item, idx) => (
                            <li
                                key={idx}
                                className="space-y-3"
                            >
                                <summary
                                    className="flex items-center justify-between font-semibold text-gray-100">
                                    {item.q}
                                </summary>
                                <p
                                    dangerouslySetInnerHTML={{ __html: item.a }}
                                    className='leading-relaxed'>
                                </p>
                            </li>
                        ))}
                    </ul>
                </LayoutEffect>
            </div>
        </div>
    </SectionWrapper>
)

export default FAQs