import React, { useRef, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import {Hooks} from 'providers'
/**
 * Hook that alerts clicks outside of the passed ref
 */
function useOutsideAlerter(ref) {
    const {contactUs, setContactUs} = useContext(Hooks)
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        // alert("You clicked outside of me!");
      }
      // setContactUs(!contactUs)
      setContactUs(!contactUs)
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
}

/**
 * Component that alerts if you click outside of it
 */
function OutsideAlerter(props) {
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

  return <div ref={wrapperRef} className="overlay">{props.children}</div>;
}

OutsideAlerter.propTypes = {
  children: PropTypes.element.isRequired
};

export default OutsideAlerter;
