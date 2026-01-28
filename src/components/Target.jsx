import TargetCard from "./ui/TargetCard"
import graph from '../assets/graph.svg'
import mynaui_target from '../assets/mynaui_target.svg'
import ei_exclamation from "../assets/ei_exclamation.svg"
const Target = () => {
    return (
        <div className="w-full min-h-screen">
            <div className="w-4/5 mx-auto mt-16">
                <h1 className="text-black text-5xl font-bold text-center mt-5">If You're Targeting Everyone, You're Closing No One</h1>
                <p className="text-[#393939] text-lg mt-10 w-4/5 mx-auto">Most B2B teams aren't limited by effort but by focus—too much time and budget go to the
                    wrong accounts, leading to stalled deals, higher churn, and rising acquisition costs.</p>
            </div>
            <div className="w-4/5 mx-auto mt-16">
                <p className="text-[#393939] text-2xl font-bold text-center">The Cost of Poor Targeting:</p>
                <div className="flex my-10">
                    <TargetCard value="67%" text="of B2B teams waste budget on poorly defined ICPs." icon={graph} color="#D52322" />
                    <TargetCard value="2x" text="pipeline velocity for companies with aligned ICPs." icon={mynaui_target} color="#34966A" className="mx-8" />
                    <TargetCard value="1 in 3" text="deals is lost because of weak customer fit." icon={ei_exclamation} color="#D47609" className="mx-8" />
                </div>
            </div>

            <div className="w-4/5 mx-auto mt-32 bg-[#1C2638] h-64 rounded-lg flex flex-col gap-y-6 items-center justify-center text-left">
                <p className="text-white text-lg w-5/6 mx-auto">
                    Without a clear, evidence‑based ICP, growth stalls, messaging turns generic, sales chases the wrong prospects, and leadership can’t see which customers truly drive revenue and retention. Your Ideal Customer Profile is a living blueprint that keeps product, sales, and marketing aligned on the right accounts.
                </p>
                <p className="text-white w-5/6 mx-auto text-lg">
                    <span className="text-gray-300">
                        Your Ideal Customer Profile is more than a static persona or vague industry tag,
                    </span>
                    &nbsp; it aligns your product, sales, and marketing around the right accounts.
                </p>
            </div>

            <div className="w-4/5 mx-auto">
                <div className="w-4/5 mx-auto">

                    <p className="text-black text-lg w-fit mx-auto font-bold mt-16">Companies that define and activate a high-precision ICP:</p>
                    <div className="w-full flex my-10 mb-32">
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Target
