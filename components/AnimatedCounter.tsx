'use client'

import CountUp from 'react-countup'

const AnimatedCounter = ({ amount }: {amount: number}) => {
// const AnimatedCounter = () => {
  return (
    <div className='w-full'>
        <CountUp
            decimals={2}
            decimal="."
            prefix="$"
            end={amount}
        />
    </div>
  )
}

export default AnimatedCounter