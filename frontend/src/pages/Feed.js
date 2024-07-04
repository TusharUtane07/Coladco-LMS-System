import React from "react";
import FeedComponent from "../components/FeedComponent";


const Feed = () => {
	return (
		<>
			<div className="m-2 text-center">
                <h1 className="text-center m-3">Solve your queries here</h1>
				<div className="m-2">
					<textarea
						style={{ width: "98%", border: "none" }}
						className="p-3 h100 bg-greylight lh-16 mt-3"
						rows="5"
						placeholder="Write your message..."></textarea>
					<div className="mx-3" style={{ width: `98%` }}>
						<form className="chat-form d-block clearfix">
							<button className="bg-dark border-0 btn-round-md float-left">
								<i className="ti-microphone text-white lh-4 font-md"></i>
							</button>
							<button className="bg-dark border-0 btn-round-md ml-2 float-left">
								<i className="ti-clip text-white lh-4 font-md"></i>
							</button>
							<button className="bg-dark border-0 btn-round-md ml-2 float-left">
								<i className="ti-image text-white lh-4 font-md"></i>
							</button>
							<button className="bg-current p-0 float-right w200 text-white fw-600 font-xsss text-uppercase">
								Post
							</button>
						</form>
					</div>
				</div>
			</div>
			<hr />
			<FeedComponent/>
			<FeedComponent/>
			<FeedComponent/>
			<FeedComponent/>
			<FeedComponent/>
			<FeedComponent/>
			<FeedComponent/>
			<FeedComponent/>
		</>
	);
};

export default Feed;
