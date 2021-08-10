import React, { useContext } from 'react';
import ButtonBack from 'components/help/parts/menu/button-back'
import { Link } from 'react-router-dom';
import { Hooks } from "providers";
import img1 from 'assets/img/contact-us/img-start-using-scora.svg';
const MobileView = () => {
    const { tabsActive, setTabsActive, contactUs, setContactUs } = useContext(Hooks);
    return (
        <div className="mobile-view d-sm-none d-block">
            <div className="pb-4">
                <ButtonBack padding={String} />
            </div>
            <div className="mobile-view__list">
                <p onClick={(e) => setTabsActive(1)}>How to start using Scora</p>
                <div className={`tabx ${tabsActive === 1 ? `d-block` : `d-none`}`}>
                    <div
                        id="1"

                    >
                        <p className="">
                            Scora look and features are ever-evolving—your screen probably
                            looks different than this video—but the key concepts remain the
                            same.
                        </p>
                        <h2 className="mt-4">Step 1</h2>
                        <img src={img1} alt="" className="" />
                        <p className="mt-3">
                            Scora look and features are ever-evolving—your screen probably
                            looks different than this video—but the key concepts remain the
                            same. Scora look and features are ever-evolving—your screen
                            probably looks different than this video—but the key concepts
                            remain the same.
                        </p>
                        <div className="contact-us-section mt-3 mb-2">
                            <h1>Still need help?</h1>
                            <p className="">
                                Our team trying as possible to help you,{" "}
                                <span onClick={e => setContactUs(!contactUs)}>Contact Us</span>
                            </p>
                        </div>
                    </div>

                </div>
            </div>
            <div className="mobile-view__list">
                <p onClick={(e) => setTabsActive(2)}>How to Judging Team</p>
                <div className={`tabx ${tabsActive === 2 ? `d-block` : `d-none`}`}>
                    <div
                        id="1"

                    >
                        <p className="">
                            Scora look and features are ever-evolving—your screen probably
                            looks different than this video—but the key concepts remain the
                            same.
                        </p>
                        <h2 className="mt-4">Step 1</h2>
                        <img src={img1} alt="" className="" />
                        <p className="mt-3">
                            Scora look and features are ever-evolving—your screen probably
                            looks different than this video—but the key concepts remain the
                            same. Scora look and features are ever-evolving—your screen
                            probably looks different than this video—but the key concepts
                            remain the same.
                        </p>
                        <div className="contact-us-section mt-3 mb-2">
                            <h1>Still need help?</h1>
                            <p className="">
                                Our team trying as possible to help you,{" "}
                                <span onClick={e => setContactUs(!contactUs)}>Contact Us</span>
                            </p>
                        </div>
                    </div>

                </div>
            </div>
            <div className="mobile-view__list">
                <p onClick={(e) => setTabsActive(3)}>How to Change Email Account</p>
                <div className={`tabx ${tabsActive === 3 ? `d-block` : `d-none`}`}>
                    <div
                        id="1"

                    >
                        <p className="">
                            Scora look and features are ever-evolving—your screen probably
                            looks different than this video—but the key concepts remain the
                            same.
                        </p>
                        <h2 className="mt-4">Step 1</h2>
                        <img src={img1} alt="" className="" />
                        <p className="mt-3">
                            Scora look and features are ever-evolving—your screen probably
                            looks different than this video—but the key concepts remain the
                            same. Scora look and features are ever-evolving—your screen
                            probably looks different than this video—but the key concepts
                            remain the same.
                        </p>
                        <div className="contact-us-section mt-3 mb-2">
                            <h1>Still need help?</h1>
                            <p className="">
                                Our team trying as possible to help you,{" "}
                                <span onClick={e => setContactUs(!contactUs)}>Contact Us</span>
                            </p>
                        </div>
                    </div>

                </div>
            </div>
            <div className="mobile-view__list">
                <p onClick={(e) => setTabsActive(4)}>How to Logout from Scora</p>
                <div className={`tabx ${tabsActive === 4 ? `d-block` : `d-none`}`}>
                    <div
                        id="1"

                    >
                        <p className="">
                            Scora look and features are ever-evolving—your screen probably
                            looks different than this video—but the key concepts remain the
                            same.
                        </p>
                        <h2 className="mt-4">Step 1</h2>
                        <img src={img1} alt="" className="" />
                        <p className="mt-3">
                            Scora look and features are ever-evolving—your screen probably
                            looks different than this video—but the key concepts remain the
                            same. Scora look and features are ever-evolving—your screen
                            probably looks different than this video—but the key concepts
                            remain the same.
                        </p>
                        <div className="contact-us-section mt-3 mb-2">
                            <h1>Still need help?</h1>
                            <p className="">
                                Our team trying as possible to help you,{" "}
                                <span onClick={e => setContactUs(!contactUs)}>Contact Us</span>
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default MobileView;