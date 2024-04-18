import GradientWrapper from "@/app/ui/gradientwrapper"
import Image from "next/image"
import NavLink from "@/app/ui/home/navlink/navlink"
import HeroImg from "@/public/images/hero.svg"
import LayoutEffect from "@/app/ui/layouteffect"

const Hero = () => (
    <section>
        <div className="custom-screen px-4 py-28">
            <LayoutEffect className="duration-1000 delay-300"
                isInviewState={{
                    trueState: "opacity-1",
                    falseState: "opacity-0"
                }}
            >
                <div>
                    <div className="space-y-5 max-w-3xl mx-auto text-center">
                    <img
              src="./quickmeddoctor.gif"
              alt="Animated GIF"
              className="mx-auto mt-8"
            />
                        <h1 className="text-4xl bg-clip-text text-transparent bg-gradient-to-r font-extrabold mx-auto sm:text-6xl"
                            style={{
                                backgroundImage: "linear-gradient(179.1deg, #FFFFFF 0.77%, rgba(255, 255, 255, 0) 182.09%)"
                            }}
                        >
                            QuickMed App is changing the way we live by saving lives quicker than time.
                        </h1>
                        <p className="max-w-xl mx-auto text-gray-300">
                        QuickMed is revolutionizing healthcare by putting life-saving solutions within reach. With cutting-edge technology and a commitment to excellence.
                        </p>
                        <div className="flex justify-center font-medium text-sm">
                            <NavLink
                                href="/#pricing"
                                className="flex items-center text-white bg-orange-400 hover:bg-red-600 active:bg-red-500 "
                            >
                                Explore
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                    <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                                </svg>
                            </NavLink>
                        </div>
                    </div>
                    <GradientWrapper className="mt-16 sm:mt-28" wrapperClassName="max-w-3xl h-[250px] top-12 inset-0 sm:h-[300px] lg:h-[650px]">
                        <Image
                              src="/quickmedmock.png"
                              alt="App screenshot"
                              width={1824}
                              height={1080}
                            className="shadow-lg px-4 rounded-2xl"
                            
                        />
                    </GradientWrapper>
                </div>
            </LayoutEffect>
        </div>
    </section>
)

export default Hero