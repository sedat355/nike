import React from 'react'
import { statistics } from '../constants'

const Hero = () => {
  return (
    <section>
      <div className='hero px-8 py-3 bg-pink-50'>
        <p>
          Our Summer collection
        </p>
        <h1 className='text-[42px] font-bold font-palanquin'>
          <span className=''>The New Arrival</span>
          <br />
          <span className='text-orange-600 mr-3'>Nike</span>
          Shoes
        </h1>
        <p className='text-slate-gray text-xs max-w-72'>Discover stylish Nike arrivals, quality comfort, and innovation for your active life.</p>

        <button className='bg-orange-500 text-white px-4 py-1 mt-6 rounded font-bold'>Shop now</button>

        <div className='flex space-x-4 mt-3'>
          {statistics.map(stat => {
            return(
              <div key={stat.value} className='flex flex-col'>
                <span className='text-[22px] font-bold'>{stat.value}</span>
                <span className='text-xs text-slate-gray'>{stat.label}</span>
              </div>
            )
          })}
        </div>
      </div>


    </section>
  )
}

export default Hero