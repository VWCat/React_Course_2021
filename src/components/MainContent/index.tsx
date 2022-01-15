import React, { useEffect } from "react";

type MainContentPropType = {
  setWasOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const MainContent: React.FC<MainContentPropType> = (props) => {
  const { setWasOpen } = props;
  const handler = () => {
    console.log("click");
  };

  useEffect(() => {
    console.log("Main content mount");
    document.body.addEventListener("click", handler);
    setWasOpen(true);
    return () => {
      console.log("Main content unmount");
      document.body.removeEventListener("click", handler);
    };
  }, []);

  return (
    <div>
      <h1>Main Page Content</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit
        veritatis accusamus nobis corporis aliquam quam natus facere ea deleniti
        repellat laboriosam ipsa ad dolorum, molestiae est mollitia culpa,
        pariatur iusto aspernatur debitis consequuntur quidem harum eligendi
        eaque. Minima suscipit adipisci perspiciatis accusantium, corporis
        numquam sint dolor mollitia tempore ea eaque dolores iure eum deserunt
        blanditiis, atque autem magni delectus? Asperiores ea quis placeat
        labore recusandae adipisci nam. Quo, aliquam. Soluta asperiores numquam
        ab amet molestias quidem? Labore explicabo dolor consectetur, quidem
        officiis recusandae mollitia libero dicta obcaecati praesentium iure
        fugiat!
      </p>
    </div>
  );
};

export default MainContent;
