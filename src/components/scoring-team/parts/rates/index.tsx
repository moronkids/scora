import React, { useContext, useEffect, useState } from 'react';
import { Hooks } from "providers";
import { useLocation, useParams } from 'react-router';
const Rates = (props) => {
  let { name } = useParams()
  const final = name.split('_')
  const location = useLocation()
  const { update_score, criteria, setCriteria, n, setN } = useContext(Hooks);
  let criteriax = props.criteria;
  const [data, setData] = useState(criteria)

  // setCriteria()
  // console.log(props.criteria, "bedesx")
  useEffect(() => {
    let scr = ''
    // setCriteria([])
    if (criteriax !== undefined) {
      criteriax.aspect_id = props.index + 1
      switch (criteriax.score) {
        case 1:
          scr = 'Poor'
          break;
        case 2:
          scr = 'Fair'
          break;
        case 3:
          scr = 'Good'
          break;
        case 4:
          scr = 'Very&nbsp;Good'
          break;
        case 5:
          scr = 'Excellent'
          break;
        default:
          break;
      }
    }

    // if (scr !== '' && props.count === false) {
    //   alert('tes')
    //   setCriteria(criteria => [...criteria, [criteriax.aspect_id, criteriax.score, scr]])
    // }

    console.log(props.scoring, props.hide, props.aspect, "bedes")
    if (!props.scoring) {
      if (props.aspect !== undefined) {

        if (props.criteria.length <= props.aspect) {
          let data = [...criteria];
          for (let index = 0; index < props.aspect; index++) {
            data[index] = ['Not Rated', '-', 'Not Rated']
            setCriteria(data);
          }
        }
      }
    }
    else {
      if (props.hide === false) {
        console.log('anjerrr', props.hide)
        console.log(criteria, "posing")
        setCriteria(criteria => [...criteria, [criteria.length < 0 ? 1 : criteria.length + 1, criteriax?.score, scr]])
        setN(n + 1)
      }
    }


  }, [props.scoring, name, location]);

  return (
    <div
      className={`staring d-flex ${props.hide ? ` justify-content-end ` : ``
        }`}
      style={{ minWidth: props.hide && `69px` }}
    >
      {props.hide ? (
        ""
      ) : (

        <div className="justify-content-start d-flex w-100">

          <div
            className="star my-auto"
            style={{
              filter:
                criteriax !== undefined
                  ? criteria[criteriax.aspect_id - (1)] && criteria[criteriax.aspect_id - 1][1] >= 1
                    ? "none"
                    : "grayscale(100%)"
                  : "grayscale(100%)"
            }}
            onClick={e => update_score(criteriax.aspect_id, 1, "Poor")}

          />
          <div
            className="star my-auto"
            style={{
              filter:
                criteriax !== undefined
                  ? criteria[criteriax.aspect_id - 1] && criteria[criteriax.aspect_id - 1][1] >= 2
                    ? "none"
                    : "grayscale(100%)"
                  : "grayscale(100%)"
            }}
            onClick={e => update_score(criteriax.aspect_id, 2, "Fair")}
          />
          <div
            className="star my-auto"
            style={{
              filter:
                criteriax !== undefined
                  ? criteria[criteriax.aspect_id - 1] && criteria[criteriax.aspect_id - 1][1] >= 3
                    ? "none"
                    : "grayscale(100%)"
                  : "grayscale(100%)"
            }}
            onClick={e => update_score(criteriax.aspect_id, 3, "Good")}
          />
          <div
            className="star my-auto"
            style={{
              filter:
                criteriax !== undefined
                  ? criteria[criteriax.aspect_id - 1] && criteria[criteriax.aspect_id - 1][1] >= 4
                    ? "none"
                    : "grayscale(100%)"
                  : "grayscale(100%)"
            }}
            onClick={e => update_score(criteriax.aspect_id, 4, "Very&nbsp;Good")}
          />
          <div
            className="star my-auto"
            style={{
              filter:
                criteriax !== undefined
                  ? criteria[criteriax.aspect_id - 1] && criteria[criteriax.aspect_id - 1][1] >= 5
                    ? "none"
                    : "grayscale(100%)"
                  : "grayscale(100%)"
            }}
            onClick={e => update_score(criteriax.aspect_id, 5, "Excellent")}
          />
        </div>
      )}
      {criteriax !== undefined && <div
        className={`${!props.hide && `justify-content-center`}`}
        style={{ minWidth: `69px` }}
      >

        <div className="rates">
          <div className="my-auto">
            {criteria.length < 1 ? (
              <h3>Not&nbsp;Rated</h3>
            ) : (
              // <></>
              <h3 style={{
                color: criteria[criteriax.aspect_id - 1]?.[1] <= 2 && '#EF3A3A'
              }}
                dangerouslySetInnerHTML={{ __html: criteria.length > 0 && criteria[criteriax.aspect_id - 1]?.[2] }}
              ></h3>
            )}
            {criteria.length < 1 ? (
              <p className="" >-</p>
            ) : (
              // <p>{criteria[criteriax.aspect_id - 1][1]}</p>
              <p style={{
                color: criteria[criteriax.aspect_id - 1]?.[1] <= 2 && '#EF3A3A'
              }}>{criteria.map((val) => criteriax.aspect_id === val[0] && val?.[1])}</p>
            )}
          </div>
        </div>
      </div>}
    </div>
  );
};

export default Rates;