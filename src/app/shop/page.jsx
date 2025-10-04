import { Button } from '@/components/ui/button'
import { Circle, Dot } from 'lucide-react'
import React from 'react'

const Shoppage = () => {
  return (
    <div className='!px-[3%] !py-[7rem] min-h-screen flex flex-col gap-4'>
      <h1>Our shop</h1>
      <div className='flex items-center gap-3'>
        <div onClick={''} className={'bg-transparent border border-gray-400 rounded-full outfit  text-xs w-fit !px-3 flex items-center gap-3 !py-1'}>Hoodies</div>
        <div onClick={''} className={'bg-transparent border border-gray-400 rounded-full outfit  text-xs w-fit !px-3 flex items-center gap-3 !py-1'}>Sweatpants</div>
        <div onClick={''} className={'bg-transparent border border-gray-400 rounded-full outfit  text-xs w-fit !px-3 flex items-center gap-3 !py-1'}>T-shirts</div>
      </div>

      {/* filter and products*/}
      {
        
      }
    </div>
  )
}

export default Shoppage
