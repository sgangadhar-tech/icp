import hero from '../assets/hero.svg'
import Button from './ui/Button'

const Hero = () => {
  const keyOutcomes = [
    "Clarify exactly who your best‑fit customers are and why.",
    "Focus pipeline and campaigns on the accounts that generate real long‑term value.",
    "Align leadership, marketing, and sales around one shared definition of \"ideal customer.\""
  ]

  return (
    <section className="w-full min-h-screen bg-gradient-to-r from-[#141C2F] to-[#1E2A43] flex items-center justify-center">
      <div className="w-4/5 flex flex-col items-center gap-y-8 mt-6">
        <div className="text-white px-4">
          <h1 className="text-4xl lg:text-5xl font-bold mt-6 text-center ">
            Turn Guesswork Into <br />  A Clear Ideal Customer Profile
          </h1>
        </div>
        <div className="flex justify-center w-full bg-white">
          <img src={hero} alt="Hero" className="w-1/2 mx-auto h-auto" />
        </div>
        <div className="flex justify-center">
          <p className='text-[#a4adbb] text-[20px]'>
            We help B2B companies identify, prioritize, and reach their highest‑value customers so marketing and sales focus only on accounts that are likely to convert and stay.
          </p>        </div>

        <div className='w-full'>
          <h2 className='text-[#55d097] text-[26px] font-bold'>Key outcomes:</h2>
          <ul className='text-white mt-4 space-y-2 list-disc list-inside marker:text-[#55d097]'>
            {keyOutcomes.map((outcome, index) => (
              <li className='text-[#A4ADBB] text-[20px]' key={index}>{outcome}</li>
            ))}
          </ul>
        </div>

        <div className="my-8 w-2/3 mx-auto flex justify-center gap-x-4 items-center">
          <Button text="Book an ICP consultation" />
          <Button
            text="See how ICP changes your pipeline"
            bgColor="bg-[#5d6371]"
            leftIcon={null}
            rightIcon={null}
          />
        </div>

      </div>
    </section>
  )
}

export default Hero