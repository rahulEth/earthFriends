import React from 'react'
import ConnectWalletButton from './ConnectWalletButton'

const Header = (): React.JSX.Element => {
  return (
    <header className='h-[10rem] w-full bg-slate-400 flex items-center justify-between px-5 overflow-hidden'>

        <div className='flex items-center justify-center'>

          <span className='text-white text-3xl font-bold'>LOGO</span>

        </div>

        <div className='flex items-center justify-center'>

          <ConnectWalletButton/>

        </div>


    </header>
  )
}

export default Header