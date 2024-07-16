import React, { Fragment } from 'react'
import Appheader from '../components/Appheader'
import Navheader from '../components/Navheader'

const JobListingDetails = () => {
  return (
    <Fragment>
    <div className="main-wrapper">
      <Navheader />

      <div className="main-content">
        <Appheader />
</div>
</div>
</Fragment>
  )
}

export default JobListingDetails