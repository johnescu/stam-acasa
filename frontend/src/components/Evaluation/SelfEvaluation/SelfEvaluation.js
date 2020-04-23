import React, { useEffect, useState } from "react";
import EvaluationApi from "../../../api/evaluationApi";
import EvaluationForm from "../evaluationForm";
import ProfileApi from "../../../api/profileApi";
import ProfileDetails from "../../Account/common/ProfileDetails/ProfileDetails";
import ProfileOthers from "../../Account/common/ProfileOthers/ProfileOthers";

const SelfEvaluation = () => {
  const [userProfile, setUserProfile] = useState({});
  const [dependants, setDependants] = useState([]);

  useEffect(() => {
    ProfileApi.get().then(setUserProfile);
    ProfileApi.getDependants().then(setDependants);
  }, []);

  return (
    <>
      <EvaluationForm
        getForm={EvaluationApi.getEvaluationForm}
        sendResults={EvaluationApi.sendSelfEvaluationResults}
      />

      {userProfile.id && (
        <ProfileDetails fields={userProfile} isSelf>
          <ProfileOthers family={dependants} />
        </ProfileDetails>
      )}
    </>
  );
};

export default SelfEvaluation;
