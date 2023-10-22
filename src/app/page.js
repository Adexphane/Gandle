import Image from 'next/image'
import HomeHeader from '@/components/HomeHeader'
import HomeSearch from '@/components/HomeSearch'

export default function Home() {
  return (
    <>
      {/*Header*/}
      <HomeHeader />

      {/*Body*/}
      {/* <div className='flex flex-col items-center mt-24'>
        <Image 
          width="300"
          height="300"
          src="/Gandle.svg"
          alt='logo'/>
      </div> */}
      <div className='flex flex-col items-center mt-24'>
        <p className=' text-[60px] font-bold text-[#B81D23]'>GANDLE</p>
        <HomeSearch/>
      </div>
    </>
  )
}
