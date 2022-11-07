import { createSlice } from "@reduxjs/toolkit";
let initialState = {
            firstName: "Pratyasha",
            lastName: "Sharma",
            tuitsCount: "6,114",
            handle: "@pratyasharma",
            profilePicture: "owner.jpeg",
            bannerPicture: "banner.jpeg",
            bio: "Data, philosophy and psychology enthusiast. Master's student at Northeastern University.",
            website: "youtube.com/webdevtv",
            location: "Boston, MA",
            dateOfBirth: "10/10/1997",
            dateJoined: "04/2009",
            followingCount: 340,
            followersCount: 223
}

const profileSlice = createSlice({
                                 name: 'profile',
                                 initialState,
                                 reducers: {
                                     editProfile(state, action) {
                                         return action.payload;
                                     },
                                 }

                             });

export const { editProfile } = profileSlice.actions;
export default profileSlice.reducer;

