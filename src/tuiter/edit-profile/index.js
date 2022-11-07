import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "../profile/profile.css";
import {editProfile} from "../reducers/profile-reducer";

const EditProfileComponent = () => {
    const currentProfile = useSelector((state) => state.profile)
    const [profile, setProfile] = useState(currentProfile);
    const dispatch = useDispatch();


    const editHandler = (k, v) => {
        setProfile(profile => {
            return {
                ...profile,
                [k]: v,
            }
        });
    }

    const saveProfile = () => {
        dispatch(editProfile(profile));
    }

    return (
        <div className="wd-container">
            <div className="d-flex align-items-center">
                <Link to="/tuiter/profile"><i className="fa fa-times text-muted p-3" /></Link>
                <div className="flex-fill">
                    <span className="fw-bold m-0">Edit Profile</span>
                    <button type="button"
                            className="btn btn-sm btn-dark rounded-pill float-end me-3 ps-3 pe-3 fw-bold"
                            onClick={saveProfile}>Save</button>
                </div>
            </div>
            <div className="position-relative">
                <div className="position-relative">
                    <img className="img-fluid" src={`/images/${profile.bannerPicture}`} alt="banner" />
                    <div className="position-absolute wd-layover text-white">
            <span>
              <i className="fa fa-camera fa-2x" />
              <span className="p-3" />
              <i className="fa fa-times fa-2x" />
            </span>
                    </div>
                </div>
                <div className="position-absolute wd-profile-circle ms-3">
                    <img src={`/images/${profile.profilePicture}`} className=" img-fluid" />
                    <div className="position-absolute wd-layover wd-profile-layover text-white">
                        <i className="fa fa-camera fa-2x" />
                    </div>
                </div>
            </div>
            <div className="ms-3 me-3 mt-5 pt-4">
                <div className="wd-input form-group">
                    <label htmlFor="firstnameInput">First Name</label>
                    <input type="text"
                           className="form-control"
                           id="firstnameInput"
                           value={profile.firstName}
                           onChange={(e) =>
                               editHandler("firstName", e.target.value)} />
                </div>
                <div className="wd-input form-group mt-3">
                    <label htmlFor="lastnameInput">Last Name</label>
                    <input type="text"
                           className="form-control"
                           id="lastnameInput"
                           value={profile.lastName}
                           onChange={(e) =>
                               editHandler("lastName", e.target.value)} />
                </div>
                <div className="wd-input form-group mt-3">
                    <label htmlFor="bioInput">Bio</label>
                    <textarea className="form-control"
                              id="bioInput"
                              value={profile.bio}
                              onChange={(e) =>
                                  editHandler("bio", e.target.value)} />
                </div>
                <div className="wd-input form-group mt-3">
                    <label htmlFor="locationInput">Location</label>
                    <input type="text"
                           className="form-control"
                           id="locationInput"
                           value={profile.location}
                           onChange={(e) =>
                               editHandler("location", e.target.value)} />
                </div>
                <div className="wd-input form-group mt-3 mb-3">
                    <label htmlFor="websiteInput">Website</label>
                    <input type="text"
                           className="form-control"
                           id="websiteInput"
                           value={profile.website}
                           onChange={(e) =>
                               editHandler("website", e.target.value)} />
                </div>
            </div>
        </div>
    );
}

export default EditProfileComponent;