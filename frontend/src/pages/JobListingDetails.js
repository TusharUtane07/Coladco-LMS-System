import React, { Fragment, useEffect, useState } from 'react'
import Appheader from '../components/Appheader'
import Navheader from '../components/Navheader'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'
import { jobListingDetails } from '../urls/urls'
import useAxios from '../network/useAxios';
const JobListingDetails = () => {

  const [jobListingResponse, jobListingError, jobListingLoading, jobListingFetch] = useAxios();

  const [jobListing, setJobListing] = useState([]);
  
  const {id} = useParams();
  console.log(id)

  useEffect(()=> {
    jobListingFetch(jobListingDetails({
      jobPostingId:id
    }))
  }, [])
  
  useEffect(() => {
    if (jobListingResponse?.data) {
      setJobListing(jobListingResponse.data)
    }
  }, [])
  console.log(jobListingResponse.data)
  
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