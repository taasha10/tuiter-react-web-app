import React from "react";
import { useDispatch } from "react-redux";
import {updateTuitThunk } from "../../services/tuits-thunks";
const TuitStats = (
    {
        tuit = {
            "_id": 234,
            "topic": "Space",
            "userName": "SpaceX",
            "time": "2h",
            "title": "100s of SpaceX Starships land on Mars after a 6 month journey. 1000s of Martian colonists being building Mars Base 1",
            "image": "spaceX.jpeg",
            "liked": true,
            "replies": 123,
            "retuits": 432,
            "likes": 2345,
            "dislikes": 10,
            "handle": "@spacex",
            "tuit": "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars"
        }

    }
) => {
    const dispatch = useDispatch();
    return(
            <div className=" d-flex flex-row">
                <span className="flex-fill">
                    <i className="fa-solid fa-comment"/> {tuit.replies}
                </span>
                <span className="flex-fill">
                    <i className="fa-solid fa-retweet"/> {tuit.retuits}
                </span>
                <span className="flex-fill">
                     <i onClick={() => dispatch(updateTuitThunk({
                                                                   ...tuit,
                                                                   likes: tuit.likes + 1
                                                               }))
                    } className="bi bi-heart-fill me-2 text-danger"/> {tuit.likes}

                </span>
                <span className="flex-fill">
                     <i onClick={() => dispatch(updateTuitThunk({
                                                                                       ...tuit,
                                                                                       dislikes: tuit.dislikes + 1
                                                                                   }))
                } className="fa-solid fa-thumbs-down"/> {tuit.dislikes}

                </span>
                <span className="flex-fill">
                    <i className="fa-solid  fa-share-nodes">
                    </i>
                </span>
            </div>
    );
};
export default TuitStats;