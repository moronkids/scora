import React, { useState, useEffect, useContext, createContext } from "react";
export const Hooks = createContext({} as any);
const Index = (props: { children: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; }) => {

  //phase
  const [currentPhase, setCurrentPhase] = useState()
  //scoring
  const [sorting, setSorting] = useState(false);
  const [next, setNext] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [scoring, setScoring] = useState(false);
  const [score, setScore] = useState(false);
  const [id, setId] = useState(false);
  const [criteria, setCriteria] = useState([]);
  const [previewScore, setPreviewScore] = useState(false);
  const [finalScore, setFinalScore] = useState(0);
  //stage
  const [stage, setStage] = useState(0);
  const [popup, setpopup] = useState([])
  //stage
  const update_score = (cr, xs, ts) => {
    let data = [...criteria];


    data[cr - 1] = [cr, xs, ts]
    setCriteria(
      data
    );
    // setId(xs);
    // setScore(ts);
  };
  //tabs
  const [tabsActive, setTabsActive] = useState(1);
  const [contactUs, setContactUs] = useState(false);
  //profile

  //login
  const [username, setusername] = useState(String)
  const [password, setpassword] = useState(String)
  //login
  const [profile, setProfile] = useState(false)
  //order team
  const [complete, setComplete] = useState(false);
  const [order, setorder] = useState('sequence');
  const [orderDisplay, setorderDisplay] = useState('Default');
  const [phase_, setphase_] = useState('default');
  const update_team = (data) => {
    setSorting(false);
    switch (data) {
      case 'teamname':
        setorder('name');
        setorderDisplay('Team Name')
        break;
      case 'sequence':
        setorder('sequence');
        setorderDisplay('Default')
        break;
      case 'favorite':
        setorder('favorite');
        setorderDisplay('Favorite')
        break;

      case 'highscore':
        setorder('score');
        setorderDisplay('High Score')
        break;
      case 'updated':
        setorder('updated');
        setorderDisplay('Updated')
        break;

      default:
        break;
    }
  }
  //order team
  //favorite
  const [favorite, setfavorite] = useState([]);
  //favorite
  //phase
  const [phase_active, setphase] = useState(Number);
  //phase
  // useEffect(() => {

  // }, [criteria])

  const valx = {
    sorting,
    setSorting,
    scoring,
    setScoring,
    score,
    setScore,
    id,
    setId,
    update_score,
    criteria,
    setCriteria,
    previewScore,
    setPreviewScore,
    finalScore,
    setFinalScore,
    tabsActive,
    setTabsActive,
    contactUs,
    setContactUs,
    stage,
    setStage,
    profile, setProfile,
    username, setusername,
    password, setpassword,
    order, setorder,
    orderDisplay, setorderDisplay,
    update_team,
    favorite, setfavorite,
    phase_active, setphase,
    popup, setpopup,
    submitted, setSubmitted,
    next, setNext,
    currentPhase, setCurrentPhase,
    phase_, setphase_,
    complete, setComplete
  };
  return <Hooks.Provider value={valx}>{props.children}</Hooks.Provider>;
};

export default Index;
