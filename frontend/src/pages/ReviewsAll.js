import React, { useEffect, useState } from 'react'
import useAxios from '../network/useAxios';
import { gettingReviewsDataApi } from '../urls/urls';
import moment from 'moment'

const ReviewsAll = () => {
  const [gettingReviewResponse, gettingReviewError, gettingReviewLoading, gettingReviewFetch] = useAxios();
  const [reviewToDisplay, setReviewsToDisply] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      await gettingReviewFetch(gettingReviewsDataApi())
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (gettingReviewResponse?.data) {
        setReviewsToDisply(gettingReviewResponse.data);
        console.log(gettingReviewResponse.data);
      }
  }, [gettingReviewResponse])

  function formatDateToMonthDay(timestamp) {
    return moment(timestamp).format('MMMM D');
}
  

  return (
    <>
<div className="row">
                    {reviewToDisplay?.map((item, index) => {
                      return(                  
                    <div className="col-10 pl-4">
                      <div className="content">
                        <h6 className="author-name font-xssss fw-600 mb-0 text-grey-800">
                          {item?.profile?.full_name}
                        </h6>
                        <h6 className="d-block font-xsssss fw-500 text-grey-500 mt-2 mb-0">
                          {formatDateToMonthDay(item?.created_at)}
                        </h6>
                        <div className="star d-block text-left">
                          {[...Array(item?.rating)].map((star, index) => (
                            <img
                              key={index}
                              src="assets/images/star.png"
                              alt="star"
                              className="w10"
                            />
                          ))}
                        </div>
                        <p className="comment-text lh-24 fw-500 font-xssss text-grey-500 mt-2">
                         {item?.review_text}
                        </p>
                      </div>
                    </div>
                    )
                  }) }
                  </div>
    </>
  )
}

export default ReviewsAll