import React from "react";
import PropTypes from "prop-types";
import StartFormButton from "../startFormButton";

const IntroSelfEvaluation = ({ onFinish }) => (
  <StartFormButton onClick={onFinish} />
);

IntroSelfEvaluation.propTypes = {
  onFinish: PropTypes.func.isRequired
};

export default IntroSelfEvaluation;
