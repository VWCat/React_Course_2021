import React, { useEffect, useState } from "react";
import PageWrapper from "../../components/common/PageWrapper";
import MainContent from "../../components/MainContent";

const MainPage: React.FC = () => {
  const [contentVisibility, setContentVisibility] = useState(false);
  const [wasOpen, setWasOpen] = useState(false);
  //   const [state2, setState2] = useState(0);

  console.log("Main page container");

  useEffect(() => {
    console.log("Main page container mount");
  }, []);

  //   useEffect(() => {
  //     console.log(`Only state2=${state2}`);
  //   }, [state2]);

  return (
    <PageWrapper>
      {contentVisibility && <MainContent setWasOpen={setWasOpen} />}
      <button
        disabled={!contentVisibility && wasOpen}
        type="button"
        onClick={() => setContentVisibility((prev) => !prev)}>
        {contentVisibility ? "Скрыть контент" : "Показать контент"}
      </button>
      {/* <button type="button" onClick={() => setState2((prev) => prev + 1)}>
        update2
      </button> */}
    </PageWrapper>
  );
};

export default MainPage;
