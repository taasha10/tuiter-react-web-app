import React from "react";
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
            "handle": "@spacex",
            "tuit": "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars"
        }

    }
) => {
    return(
            <div className="row">
                <span className="col-3">
                    <i className="fa-solid fa-comment"></i> {tuit.replies}
                </span>
                <span className="col-3">
                    <i className="fa-solid fa-retweet"></i> {tuit.retuits}
                </span>
                <span className="col-3">
                    <span className={`fa-heart fa-solid ${tuit.liked ? 'text-danger ' : ''}`}></span> {tuit.likes}
                </span>
                <span className="col-3">
                    <i className="fa-solid  fa-share-nodes">
                    </i>
                </span>
            </div>
    );
};
export default TuitStats;