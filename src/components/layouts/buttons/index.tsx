import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { Hooks } from "providers/index";
import { useDispatch, useSelector } from "react-redux";
import { Store } from "redux";
import { HIT_SUBMIT_SCORE } from "redux/actions";
import { useParams } from "react-router";
const Button = styled.button`
  cursor:pointer;
  border-radius: 4px;
  background: #005f61;
  border: none;
  &:active {
    background: #003c3d;
  }
  &:focus {
    outline: 0;
  }
  @media (min-width: 768px) {
      &:hover {
        background: #003c3d;
      }
  }
`;
// console.log(props => props.fontsz, 'ini broeh')
const NameButton = styled.span`
  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  font-size: ${(props: { fontsz: any; }) => props.fontsz ? props.fontsz : '16px'};
  line-height: 22px;
  text-align: center;
  letter-spacing: 0.01em;
  color: #ffffff;
`;
const Buttons = props => {
  const dispatch = useDispatch();
  let { name } = useParams();

  let final = [0, 1, 2]
  if (name !== undefined) {

    final = name.split('_')
  }
  const { phase, team } = useSelector((state: Store) => ({
    phase: state.event.phase,
    team: state.event.detail_team
  }))
  const {
    sorting,
    setSorting,
    scoring,
    setScoring,
    previewScore,
    setPreviewScore,
    criteria
  } = useContext(Hooks);
  useEffect(() => {

  }, [scoring]);
  console.log(props.border, "inib order");

  const active = "#005F61";
  const hover = "#003C3D";
  const button_name = props.name;
  const disabled = props.disabled === true ? "#CECECE" : "";
  const padding = props.padding ? props.padding : "";
  const width = props.width;
  const height = props.height;
  const background = props.background ? props.background : disabled
  const color = props.color ? props.color : 'white'
  const border = props.border !== undefined ? props.border : ''
  const fontsz = `${props.fontsz}px !important`
  console.log(props.fontsz, "schecking");

  // guide
  // 1 - open sidebar scoring
  // 2 - preview scoring
  let fux;
  const func = props.function;
  const submitScore = async () => {
    let data = []
    await props.data.forEach((val, i) => {
      criteria.forEach((valx, ix) => {
        if (i === ix) {
          data.push({
            aspect: val.id,
            score: valx[1]
          })
        }
      });
    });
    let phase_id = ''
    await phase.forEach((val, i) => {
      if (val.is_active) {
        phase_id = val.id
      }
    });
    const datas = {
      team: final[2],
      phase: phase_id,
      scores: data
    }
    console.log(data, "ini payloadnya");
    await dispatch({ type: HIT_SUBMIT_SCORE, payload: datas })
  }
  return (
    <div className="buttom-comp " style={{ width: props.width }}>
      <Button
        style={{ background: background, padding: padding, width: width, height: height, color: color, border: border }}
        onClick={e => {
          func === 1 && setScoring(!scoring);
          func === 2 && setPreviewScore(!previewScore);
          props.submit && submitScore();
          // e.preventDefault();
        }}
      >
        <NameButton fontsz={fontsz} style={{ color: props.disabled ? "#9C9C9C" : props.color }}>
          {button_name}
        </NameButton>
      </Button>
    </div>
  );
};

export default Buttons;
