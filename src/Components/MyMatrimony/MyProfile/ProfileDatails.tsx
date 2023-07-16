import React from "react";
import './ProfileDatails.css'
import {Container} from "react-bootstrap";

function ProfileDatails() {

    return (
        <>
            <div>
                <Container>
                    <div className='border-light border-1  profile-details'>
                        <h5 className='profile-details-text'>Asif Islam</h5>

                        <div className='mt-3 mb-3  profile-details-texts d-flex'>
                            <div className="profile-details-age-image">
                                <h5>Click here</h5>
                                <p>to upload</p>
                                <img src="image}/500px580" />
                            </div>
                            <div>
                                <div className='text-sm-start d-flex profile-details-texts-border'>
                                    <div className="border-end border-2 w-100 d-flex">
                                        <div className="profile-details-age">
                                            <p className="profile-details-texts-size">Age / Height</p>
                                            <p className="profile-details-texts-size">Marital Status</p>
                                            <p className="profile-details-texts-size">Posted By</p>
                                        </div>

                                        <div>
                                            <p className="profile-details-texts-size">: 22/5'5"</p>
                                            <p className="profile-details-texts-size">: Never Married</p>
                                            <p className="profile-details-texts-size">: Parent / Guradian</p>
                                        </div>

                                    </div>
                                    <div className="d-flex ">
                                        <div className="ms-5 profile-details-religion">
                                            <p className="profile-details-texts-size">Religion / Community</p>
                                            <p className="profile-details-texts-size">Location</p>
                                            <p className="profile-details-texts-size">Mother Tongue</p>
                                        </div>
                                        <div>
                                            <p className="profile-details-texts-size">: Muslim, sunni</p>
                                            <p className="profile-details-texts-size">: Dhaka</p>
                                            <p className="profile-details-texts-size">: Bangali</p>
                                        </div>
                                    </div>
                                </div>
                                <hr className=" profile-details-age-border" />
                                <div className="profile-details-manage">
                                    <p className="profile-details-manage-text">Manage your Profile</p>
                                    <div className="d-flex">
                                        <div className="ms-3">
                                            <a href="">Edit Personal Profile</a> <br />
                                            <a href="">Edit Partner Profile</a><br />
                                            <a href="">Edit Contact Details</a>
                                        </div>
                                        <div className="mx-5">
                                            <a href="">View Profile Stats</a> <br />
                                            <a href="">Add Photos</a><br />
                                        </div>
                                        <div>
                                            <a href="">Set Contact Filters</a> <br />
                                            <a href="">Hide / Delete Profile</a><br />
                                        </div>
                                    </div>

                                </div>
                                <div className="preview-text-end">
                                    <a href="">Preview your Profile</a>
                                </div>
                            </div>

                        </div>

                    </div>
                </Container>
            </div>
        </>
    )
}
export default ProfileDatails