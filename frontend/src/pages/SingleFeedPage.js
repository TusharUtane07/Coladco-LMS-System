import React from "react";
import { GoComment } from "react-icons/go";
import { IoIosHeartEmpty, IoMdArrowRoundBack } from "react-icons/io";
import { IoShareOutline } from "react-icons/io5";
import FeedComponent from "../components/FeedComponent";

const SingleFeedPage = () => {
	return (
		<div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
			<div style={{ display: "flex", alignItems: "center", margin: "1rem" }}>
				<IoMdArrowRoundBack size={30} />
				<h1 style={{ margin: "auto" }}>Post</h1>
			</div>
			<hr />
			<div className="mt-2" style={{ flex: "1", overflowY: "auto" }}>
				<div>
					<div className="m-3" style={{ display: "flex", gap: "1rem" }}>
						<div>
							<img
								src="https://via.placeholder.com/150"
								alt="Dummy Image"
								style={{ width: "4rem", borderRadius: "50%" }}
							/>
						</div>
						<div>
							<h4>
								Suraj Dahiya<span> - Jul 2</span>
							</h4>
							<div>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
									dolorem consequuntur facere dolore deserunt nostrum. Atque
									impedit velit sint nostrum aspernatur animi, molestiae
									temporibus iure.
								</p>
							</div>
							<div
								style={{
									display: "flex",
									alignItems: "center",
									justifyContent: "space-between",
								}}
								className="mr-3">
								<div>
									<IoIosHeartEmpty size={20} />
								</div>
								<div>
									<GoComment size={20} />
								</div>
								<div>
									<IoShareOutline size={20} />
								</div>
							</div>
						</div>
					</div>
					<hr />
					<div
						style={{
							display: "flex",
							alignItems: "center",
							gap: "1rem",
							marginTop: "1rem",
						}}>
						<img
							src="https://via.placeholder.com/150"
							alt=""
							style={{ width: "3rem", borderRadius: "50%" }}
						/>
						
							<textarea
								style={{ width: "98%", border: "none", outline: "none" }}
								
								rows="5"
								placeholder="Post your reply"></textarea>
						
								<button style={{backgroundColor: "blue", padding: ".5rem 1rem", color: "white", border: "none",outline: "none",  borderRadius: "2rem"}} className="bg-current p-0 float-right border-0 w200 text-white fw-600 font-xsss text-uppercase">Reply</button>
					</div>
					<hr />
                    <div style={{marginLeft: "1.5rem", paddingLeft: "5px"}}>
                        <div>
                            <FeedComponent/>
                        </div>
                    </div>
				</div>
			</div>
		</div>
	);
};

export default SingleFeedPage;
