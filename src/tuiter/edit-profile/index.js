import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "../profile/profile.css";
import {editProfile} from "../profile/profile-reducer";


const EditProfileComponent = () => {
    const currentProfile = useSelector((state) => state.profile)
    // console.log(currentProfile.firstName);
    const [profile, setNewProfile] = useState(currentProfile);
    const dispatch = useDispatch();

    const saveProfile = () => {
        dispatch(editProfile(profile));
    }

    const editHandler = (k, v) => {
        setNewProfile(profile => {
            return {
                ...profile,
                [k]: v,
            }
        });
    }

    return (
        <div className="wd-con-box">
            <div className="d-flex flex-row align-items-center">
                <div>
                    <Link to="/tuiter/profile"><i className="fa fa-times text-muted p-3" /></Link>
                </div>
                <div className="flex-fill">
                    <p className="fw-bold m-0">Edit Profile</p>
                </div>
                <div className="me-3">
                    <button type="button" className="btn btn-sm btn-dark rounded-pill" onClick={saveProfile}>Save</button>
                </div>
            </div>
            <div className="position-relative">
                <div className="position-relative">
                    <img className="img-fluid" src={`/images/${profile.bannerPicture}`} alt="profile banner" />
                    <div className="position-absolute wd-dp-layover text-white">
            <span className="wd-pointer">
              <i className="fa fa-camera fa-2x" />
              <span className="p-3" />
              <i className="fa fa-times fa-2x" />
            </span>
                    </div>
                </div>
                <div className="position-absolute wd-dp-box ms-3">
                    <img src={`/images/${profile.profilePicture}`} className="wd-dp img-fluid" />
                    <div className="position-absolute wd-dp-layover wd-pointer text-white">
                        <i className="fa fa-camera fa-2x" />
                    </div>
                </div>
            </div>
            <div className="ms-3 me-3 mt-5 pt-4">
                <div className="wd-inp-con form-group">
                    <label htmlFor="firstnameInput">First Name</label>
                    <input type="text" className="form-control" id="firstnameInput" placeholder="Enter your first name" value={profile.firstName} onChange={(e) => editHandler("firstName", e.target.value)} />
                </div>
                <div className="wd-inp-con form-group mt-3">
                    <label htmlFor="lastnameInput">Last Name</label>
                    <input type="text" className="form-control" id="lastnameInput" placeholder="Enter your last name" value={profile.lastName} onChange={(e) => editHandler("lastName", e.target.value)} />
                </div>
                <div className="wd-inp-con form-group mt-3">
                    <label htmlFor="bioInput">Bio</label>
                    <textarea className="form-control" id="bioInput" placeholder="Enter your bio here" value={profile.bio} onChange={(e) => editHandler("bio", e.target.value)} />
                </div>
                <div className="wd-inp-con form-group mt-3">
                    <label htmlFor="locationInput">Location</label>
                    <input type="text" className="form-control" id="locationInput" placeholder="Enter your location" value={profile.location} onChange={(e) => editHandler("location", e.target.value)} />
                </div>
                <div className="wd-inp-con form-group mt-3">
                    <label htmlFor="websiteInput">Website</label>
                    <input type="text" className="form-control" id="websiteInput" placeholder="Your personal website link" value={profile.website} onChange={(e) => editHandler("website", e.target.value)} />
                </div>
                <div className="form-group mt-3">
                    <label htmlFor="dateInput">Birthdate</label>
                    <input type="date" className="form-control" id="dateInput" value={profile.dateOfBirth} onChange={(e) => editHandler("dateOfBirth", e.target.value)} />
                </div>
                <div className="form-group mt-3 text-muted">
                    <p>Switch to professional <i className="fa fa-arrow-right"/></p>
                </div>
            </div>
        </div>
    );
}

export default EditProfileComponent;