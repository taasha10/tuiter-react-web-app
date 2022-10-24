import React from "react";
import posts from "./posts.json";

const PostItem =({
                     posts = {
                         "_id": 128,
                         "userName": "New York Post",
                         "display":"nypdisp.jpg",
                         "handle": "@nypost",
                         "time": "23h",

                         "title": "Grime seen reading Karl Marx following split with world's richest man Elon Musk",
                         "comments": "965",
                         "retuit":"2.4K",
                         "likes":"4K",
                         "post": {
                             "heading": "",
                             "content": "",
                             "image": "nypost.jpg"
                         }

                     }
}) =>{
    return(
        <li className="list-group-item">
                        <div className="row">
                            <div className="col-1 pl-1 pr-0">
                                <img className="rounded-circle"
                                     src={`../images/${posts.display}`} width="100%"/>
                            </div>
                            <div className="col-11">
                                <span className="fw-bold">{posts.userName} </span>
                                <i className="fa fa-check-circle text-primary"/>
                                <span className="text-muted"> {posts.handle} &#x2022;</span>
                                <span className="text-muted">{posts.time}</span>
                                <span className="float-end"><i className="fa-solid fa-ellipsis"/> </span>
                                <p>{posts.title}</p>
                                <div>
                                    <img className="wd-rounded-top" src={`../images/${posts.post.image}`}
                                         width="100%"/>
                                    <div className=" wd-rounded-bottom">
                                    <p className="fw-bold">{posts.post.heading}</p>
                                    <p className="text-muted">{posts.post.content}</p>
                                    </div>

                                </div>
                                <div className="row">
                                <span className="col-3">
                                        <i className="fa-solid fa-comment"/> {posts.comments}
                                </span>
                                <span className="col-3">
                                        <i className="fa-solid fa-retweet"/> {posts.retuit}
                                </span>
                                <span className="col-3">
                                        <i className="fa-solid fa-heart"/> {posts.likes}
                                </span>
                                <span className="col-3">
                                        <i className="fa-solid fa-upload"/>
                                </span>
                                </div>
                            </div>
                        </div>

            </li>
    );
};

export default PostItem;