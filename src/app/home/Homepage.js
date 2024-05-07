import React from 'react'
import Image from 'next/image'

const Homepage = () => {

  const promos = {
    title: 'Your Stats',
    description: "10% earnings on purchases",
    refferalAddress: 48224,
  }

  const earnings = {
    description: "546.83",
  }

  const tutorialDescription ={
    title: 'How it works',
    description: () =>{
      return (
        <div className='flex flex-col gap-4'>
          <p className='text-white text-md'>For each new user you bring to Caustic you will earn 10% from any of their purchases. After clicking ‘Claim Earnings’ it will be applied to your personal wallet that can be applied to any of your future purchases.</p>
          <p className='text-white text-md'>Simply share your Referral link with friends, communities, videos, and more to earn Caustic balance for free!</p>
        </div>
      )
    }
  }

  return (
    <section className='w-full h-full flex flex-col'>
      <div className='w-full relative my-5'>
        <Image src='/hero.png' alt='hero' width={1920} height={1080} className=' w-full lg:w-[80%] h-auto m-auto' />
        <div className='absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] text-gradient py-32 px-24'>
          <h1 className='text-4xl xl:text-6xl font-semibold text-white text-center xl:leading-[70px] blur-none'>Spread The Word <br />Win Rewards</h1>
          <p className='text-lg text-text-color text-center m-2'>Invite your friends and earn a portion of what they spend.</p>
        </div>
      </div>
      <div className='flex flex-col xl:flex-row w-[80%] m-auto gap-6'>
        <div className='min-h-80 flex-1 bg-light-background rounded-lg flex flex-col justify-between'>
          <ul className='p-8 flex flex-col w-full gap-7'>
            <li className='flex justify-between items-center'>
              <h2 className='font-semibold text-white text-xl'>{promos.title}</h2>
              <p className=' text-white text-xl'>{promos.description}</p>
            </li>
            <li className='flex justify-between items-center'>
              <h2 className='text-white text-xl'>Your Referral Link</h2>
              <div className='flex gap-8 items-center'>
                <p className=' text-text-color'>caustic.com/ref/<span className='text-white'>{promos.refferalAddress}</span></p>
                <button className='text-primary cursor-pointer hover:brightness-125'>Edit</button>
              </div>
            </li>
          </ul>
          <div className='p-8 w-full flex justify-center'>
            <button className='py-2 px-3 text-sm bg-primary text-white rounded-md font-medium hover:brightness-110 transition-all'>
              Claim Earnings ${earnings.description}
            </button>
          </div>

        </div>
        <div className='min-h-80 flex-1 bg-light-background rounded-lg'>
          <div className='p-8 flex flex-col gap-2'>
            <h2 className='text-white text-xl font-medium'>{tutorialDescription.title}</h2>
            {tutorialDescription.description()}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Homepage