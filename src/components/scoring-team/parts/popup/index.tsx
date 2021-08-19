import React, { useContext, useEffect, useState } from 'react';
import IconSuccess from 'assets/img/icons/Success.svg';
import Button from 'components/layouts/buttons/index'
import { useSelector } from 'react-redux';
import { Store } from 'redux';
import { Hooks } from 'providers';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
const Index = () => {
    // const [submitted, setSubmitted] = useState(false)
    // const [next, setNext] = useState(false)
    const { updated, list_team } = useSelector((state: Store) => ({
        updated: state.event.detail_team[0]?.last_updated,
        list_team: state.event.team
    }))
    const { setScoring, setPreviewScore, next, setNext, submitted, setSubmitted } = useContext(Hooks);
    let { name } = useParams();
    let final = [0, 1, 2]
    if (name !== undefined) {
        final = name.split('_')
    }
    useEffect(() => {
        setNext(false)
        console.log(updated, 'cekiceki');

        setSubmitted(false)
        if (updated !== null && updated !== undefined) {
            console.log(updated, "cekicekio")
            setSubmitted(true)
            if (list_team[parseInt(final[1]) + 1]) {
                // alert('masj')
                setNext(true)
            }
        }
        setPreviewScore(false)
        setScoring(false)
    }, [updated])

    console.log(submitted, updated, next, "cekiceki")
    return (
        <div className={`success_popup ${submitted ? 'd-block' : 'd-none'}`} >
            <div className="success_popup__overlay position-fixed" />
            {submitted && (
                <div className="success_popup__box m-auto">
                    <img src={IconSuccess} alt="" className="icon" />
                    <div className="desc">
                        <h1>Success!</h1>
                        <p>Your score for Powerbrain has been submitted</p>
                    </div>
                    <div className="action d-flex">
                        <Link to={next && `/detail/team/${list_team[parseInt(final[1]) + 1]?.name.replace(' ', '%20')}_${parseInt(final[1]) + 1}_${list_team[parseInt(final[1]) + 1]?.team_id}`}>
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
                        <Link to="/">
                            <div className="next-team">
                                <Button
                                    name="To Leaderboard"
                                    color="#005F61"
                                    border="1px solid #CCDFDF"
                                    background="#ffffff"
                                    width={160}
                                    height={44}
                                    fontsz="14"
                                >
                                </Button>
                            </div>
                        </Link>
                    </div>
                </div>

            )
            }
        </div >
    );
};

export default Index;