import React from "react";
import core_feature from "./core-feature";
import "./coreFeatures.css";

const CoreFeatures = () => {
     return (
          <div id="coreFeatures">
               <div className="coreFeatures__title">
                    <h1>Core Features</h1>
                    <p>
                         Lorem ipsum dolor sit amet, consectetur adipiscing
                         elit. Aliquam a lacinia dolor, in pretium nunc. Morbi
                         mollis arcu eget.
                    </p>
               </div>
               <div className="home__component-content coreFeatures__content">
                    {core_feature.map((core) => (
                         <div
                              key={core.id}
                              className="core"
                              id={"core_" + core.id}
                         >
                              <div className="core__icon">{core.icon}</div>
                              <p className="core__title">{core.title}</p>
                              <p className="core__content">{core.content}</p>
                         </div>
                    ))}
               </div>
          </div>
     );
};

export default CoreFeatures;
