import TargetCard from "./ui/TargetCard"
import graph from '../assets/graph.svg'
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
                <div className="flex">
                    <TargetCard value="67%" text="of B2B teams waste budget on poorly defined ICPs." icon={graph} />
                </div>
            </div>
        </div>
    )
}

export default Target
