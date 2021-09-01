import React, { useContext, useEffect, useState } from 'react';
import IconSuccess from 'assets/img/icons/Success.svg';
import IconFailed from 'assets/img/icons/IconFailed.svg';
import Button from 'components/layouts/buttons/index'
import { useDispatch, useSelector } from 'react-redux';
import { Store } from 'redux';
import { Hooks } from 'providers';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { GET_RESET_SCORING, HIT_SUBMIT_SCORE, POST_SUBMIT_SCORE } from 'redux/actions';
const Index = () => {
    // const [submitted, setSubmitted] = useState(false)
    // const [next, setNext] = useState(false)
    const dispatch = useDispatch();
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
    }, [updated])

    console.log(scoring, submitted, "adalahoi")
    return (
        <>
            {scoring === 'failed' && <div className={`success_popup d-block`} >
                <div className="success_popup__overlay position-fixed" />

                <div className="success_popup__box m-auto">
                    <img src={IconFailed} alt="" className="icon" />
                    <div className="desc">
                        <h1>Failed</h1>
                        <p className="m-auto" style={{ maxWidth: `320px` }}>Your score for {final[0]}  not submitted.
                            You can try again to submit the score. </p>
                    </div>
                    <div className="action d-flex">
                        {/*  */}
                        {/* <a href={window.location.pathname} hash="/#"> */}
                        <div className="next-team z" onClick={() => { setSubmitted(false); dispatch({ type: GET_RESET_SCORING, payload: 'reset' }) }}>
                            <Button
                                name="Try Again"
                                color="#005F61"
                                border="1px solid #E8E8E8"
                                background="#ffffff"
                                width={360}
                                height={44}
                                fontsz="14"
                            >
                            </Button>
                        </div>
                        {/* </a> */}
                    </div>
                </div>
            </div >}
            {
                <div className={`success_popup ${submitted ? 'd-block' : 'd-none'}`} >
                    <div className="success_popup__overlay position-fixed" />
                    {submitted && (
                        <div className="success_popup__box m-auto">
                            <img src={IconSuccess} alt="" className="icon" />
                            <img src={IconFailed} alt="" className="icon d-none" />
                            <div className="desc">
                                <h1>Success</h1>
                                <p>{`Your score for ${final[0]} has been submitted`}</p>
                            </div>
                            <div className="action d-flex">
                                <Link onClick={(e) => { setNextTeam(true); setCriteria([]) }} to={next && `/detail/team/${list_team[parseInt(final[1]) + 1]?.name.replace(' ', '%20')}_${parseInt(final[1]) + 1}_${list_team[parseInt(final[1]) + 1]?.team_id}_${list_team[parseInt(final[1]) + 1]?.id}`}>
                                    {/* <Link to="/"> */}
                                    <div className="next-team">
                                        <Button name="Next Team"
                                            background="#005F61"
                                            disabled={!next}
                                            color="#FFFFFF"
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
                </div >
            }
        </>
    );
};

export default Index;