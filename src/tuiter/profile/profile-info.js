import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./profile.css";


const ProfileInfo = () => {
    const profile = useSelector((state) => state.profile)
    return (
        <div className="wd-con-box">
            <div className="d-flex flex-row">
                <div>
                    <i className="fa fa-arrow-left text-muted p-3" />
                </div>
                <div className="flex-fill">
                    <p className="fw-bold m-0">{profile.firstName} {profile.lastName}</p>
                    <p className="text-muted small m-0">{profile.tuitsCount} tuits</p>
                </div>
            </div>
            <div className="position-relative">
                <img className="img-fluid" src={`/images/${profile.bannerPicture}`} alt="profile banner" />
                <div className="position-absolute wd-dp-box ms-3">
                    <img src={`/images/${profile.profilePicture}`} className="wd-dp img-fluid" />
                </div>
                <div className="d-flex justify-content-end pt-3 me-3">
                    <Link to="/tuiter/edit-profile" type="button" className="btn btn-sm btn-outline-secondary rounded-pill">Edit Profile</Link>
                </div>
            </div>
            <div className="ms-3 me-3">
                <h6 className="mb-0 mt-4 fw-bold">{profile.firstName} {profile.lastName}</h6>
                <p className="text-muted small m-0">{profile.handle}</p>
                <p className="mt-3">{profile.bio}</p>
                <div className="mt-3 d-flex flex-row text-muted">
          <span className="pe-3">
            <i className="fa fa-location-dot" /> {profile.location}
          </span>
                    <span className="pe-3">
            <i className="fa fa-cake-candles" /> Born: {profile.dateOfBirth}
          </span>
                    <span className="pe-3">
            <i className="fa fa-calendar" /> Joined: {profile.dateJoined}
          </span>
                </div>

                <div className="mt-3 d-flex flex-row text-muted mb-3">
          <span className="pe-3">
            <b className="text-dark">{profile.followingCount}</b> Following
          </span>
                    <span className="pe-3">
            <b className="text-dark">{profile.followersCount}</b> Followers
          </span>
                </div>
            </div>
        </div>

    );
}

export default ProfileInfo;