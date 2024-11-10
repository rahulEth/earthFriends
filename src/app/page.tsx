import FileUpload from '@/components/ui/Fileupload';
import Hero from '@/components/ui/Hero'
import TableComponent from '@/components/ui/TableComponent';
import React from 'react'

const page = (): React.JSX.Element => {
  return (
    <div>
 
        <Hero/>

        <FileUpload/>

        <TableComponent/>

    </div>
  )
}

export default page