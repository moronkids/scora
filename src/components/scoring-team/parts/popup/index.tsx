import React, { useContext, useEffect, useState } from 'react';
import IconSuccess from 'assets/img/icons/Success.svg';
import IconFailed from 'assets/img/icons/IconFailed.svg';
import Button from 'components/layouts/buttons/index'
import { useSelector } from 'react-redux';
import { Store } from 'redux';
import { Hooks } from 'providers';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
const Index = () => {
    // const [submitted, setSubmitted] = useState(false)
    // const [next, setNext] = useState(false)
    const { updated, list_team, scoring } = useSelector((state: Store) => ({
        updated: state.event.detail_team[0]?.last_updated,
        list_team: state.event.team,
        scoring: state.event.scoring
    }))
    const { setScoring, setPreviewScore, next, setNext, submitted, setSubmitted, setCriteria, setNextTeam } = useContext(Hooks);
    let { name } = useParams();
    let final = [0, 1, 2]
    if (name !== undefined) {
        final = name.split('_')
    }
    useEffect(() => {
        setNext(false)


        setSubmitted(false)
        if (updated !== null && updated !== undefined) {

            setSubmitted(true)
            if (list_team[parseInt(final[1]) + 1]) {
                // alert('masj')
                setNext(true)
            }
        }
        setPreviewScore(false)
        setScoring(false)
    }, [updated, scoring])

    console.log(scoring, "adalahoi")
    return (
        <>
            {scoring === 'failed' ? <div className={`success_popup d-block`} >
                <div className="success_popup__overlay position-fixed" />

                <div className="success_popup__box m-auto">
                    <img src={IconFailed} alt="" className="icon" />
                    <div className="desc">
                        <h1>Failed</h1>
                        <p className="m-auto" style={{ maxWidth: `320px` }}>Your score for [nama team] not submitted.
                            You can try again to submit the score. </p>
                    </div>
                    <div className="action d-flex">
                        <Link onClick={(e) => { setNextTeam(true); setCriteria([]) }} to={next && `/detail/team/${list_team[parseInt(final[1]) + 1]?.name.replace(' ', '%20')}_${parseInt(final[1]) + 1}_${list_team[parseInt(final[1]) + 1]?.team_id}_${list_team[parseInt(final[1]) + 1]?.id}`}>
                            {/* <Link to="/"> */}
                            <div className="next-team">
                                <Button name="Next Team"
                                    background="#DBE9E9"
                                    disabled={!next}
                                    color="#005F61"
                                    width={160}
                                    height={44}
                                    fontsz="14"
                                >

                                </Button>

                            </div>
                        </Link>
                        {/* <a href={window.location.pathname} hash="/#"> */}
                        <div className="next-team" onClick={() => setSubmitted(false)}>
                            <Button
                                name="View Team"
                                color="#005F61"
                                border="1px solid #CCDFDF"
                                background="#ffffff"
                                width={160}
                                height={44}
                                fontsz="14"
                            >
                            </Button>
                        </div>
                        {/* </a> */}
                    </div>
                </div>
            </div > : <div className={`success_popup ${submitted ? 'd-block' : 'd-none'}`} >
                <div className="success_popup__overlay position-fixed" />
                {submitted && (
                    <div className="success_popup__box m-auto">
                        <img src={IconSuccess} alt="" className="icon" />
                        <div className="desc">
                            <h1>Success</h1>
                            <p>Your score for Powerbrain has been submitted</p>
                        </div>
                        <div className="action d-flex">
                            <Link onClick={(e) => { setNextTeam(true); setCriteria([]) }} to={next && `/detail/team/${list_team[parseInt(final[1]) + 1]?.name.replace(' ', '%20')}_${parseInt(final[1]) + 1}_${list_team[parseInt(final[1]) + 1]?.team_id}_${list_team[parseInt(final[1]) + 1]?.id}`}>
                                {/* <Link to="/"> */}
                                <div className="next-team">
                                    <Button name="Next Team"
                                        background="#DBE9E9"
                                        disabled={!next}
                                        color="#005F61"
                                        width={160}
                                        height={44}
                                        fontsz="14"
                                    >

                                    </Button>

                                </div>
                            </Link>
                            {/* <a href={window.location.pathname} hash="/#"> */}
                            <div className="next-team" onClick={() => setSubmitted(false)}>
                                <Button
                                    name="View Team"
                                    color="#005F61"
                                    border="1px solid #CCDFDF"
                                    background="#ffffff"
                                    width={160}
                                    height={44}
                                    fontsz="14"
                                >
                                </Button>
                            </div>
                            {/* </a> */}
                        </div>
                    </div>

                )
                }
            </div >}
        </>
    );
};

export default Index;