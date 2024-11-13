"use client"

import FileUpload from '@/components/ui/Fileupload';
import Hero from '@/components/ui/Hero'
import TableComponent from '@/components/ui/TableComponent';
import React, { useEffect } from 'react'

import getContract from '../../Utilities/getContract';

import { useAccount } from 'wagmi';

const page = (): React.JSX.Element => {

  const {address} = useAccount();

  useEffect(() => {

    address && getContract();

  })

  return (
    <div>
 
        <Hero/>

        <FileUpload/>

        <TableComponent/>

    </div>
  )
}

export default page