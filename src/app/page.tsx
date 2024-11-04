import Header from '@/components/Header';
import React from 'react'

import ConnectWalletButton from '@/components/shared/ConnectwalletButton';

const page = (): React.JSX.Element => {
  return (
    <div>

        <Header/>

        <ConnectWalletButton/>

    </div>
  )
}

export default page