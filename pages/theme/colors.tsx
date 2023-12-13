import React, { type ReactElement } from 'react'

import DefaultLayout from '@layout/DefaultLayout'

const index = () => {
  return <div>colors</div>
}
index.getLayout = (page: ReactElement) => {
  return <DefaultLayout>{page}</DefaultLayout>
}

export default index
