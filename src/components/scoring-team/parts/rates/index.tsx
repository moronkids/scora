import React, { useContext, useEffect, useState } from 'react';
import { Hooks } from "providers";
const Rates = (props) => {
  const { update_score, criteria, setCriteria } = useContext(Hooks);
  const criteriax = props.criteria;
  const [data, setData] = useState(criteria)


  useEffect(() => {
    let scr = ''
    // setCriteria([])

    if (criteriax !== undefined) {
      switch (criteriax.score) {
        case 1:
          scr = 'Fair'
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
    if (!props.scoring) {
      if (props.aspect !== undefined) {
        if (criteria.length <= props.aspect) {
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
        setCriteria(criteria => [...criteria, [criteriax.aspect_id, criteriax.score, scr]])
      }
    }

    if (props.scoring) {
    }
  }, []);

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
            onClick={e => update_score(criteriax.aspect_id, 1, "Fair")}

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
              <h3
                dangerouslySetInnerHTML={{ __html: criteria.length > 0 && criteria[criteriax.aspect_id - 1][2] }}
              ></h3>
            )}
            {criteria.length < 1 ? (
              <p className="">-</p>
            ) : (
              <p>{criteria[criteriax.aspect_id - 1][1]}</p>
            )}
          </div>
        </div>
      </div>}
    </div>
  );
};

export default Rates;