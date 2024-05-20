import { useState } from "react";

import style from "./MobileNavListItem.module.css";

import { newsCol1, newsCol2 } from "../../data/arrays/news";
import { usCol1, usCol2 } from "../../data/arrays/us";
import { worldCol1 } from "../../data/arrays/world";
import { businessCol1 } from "../../data/arrays/business";
import { artsCol1 } from "../../data/arrays/arts";
import { lifestyleCol1, lifestyleCol2 } from "../../data/arrays/lifestyle";
import { opinionCol1 } from "../../data/arrays/opinion";

import ButtonNav from "../ButtonNav/ButtonNav";
import ArrowIcon from "../ArrowIcon/ArrowIcon";
import SectionsList from "../SectionsList/SectionsList";

function MobileNavListItem({ section, isBottom = false }) {
  const [sectionName, setSectionName] = useState("");

  return (
    <li className={`${style.listItem} ${isBottom && style.firstItem}`}>
      <ButtonNav
        isBottom={isBottom}
        section={section}
        sectionName={sectionName}
        setSectionName={setSectionName}
      >
        {isBottom ? section.toUpperCase() : section}
        {!isBottom && <ArrowIcon section={section} sectionName={sectionName} />}
      </ButtonNav>

      {sectionName === "News" && (
        <SectionsList
          col1={newsCol1}
          col2={newsCol2}
          isBottom={isBottom}
          setSectionName={setSectionName}
        />
      )}
      {sectionName === "U.S." && (
        <SectionsList col1={usCol1} col2={usCol2} isBottom={isBottom} />
      )}
      {sectionName === "World" && (
        <SectionsList col1={worldCol1} isBottom={isBottom} />
      )}
      {sectionName === "Business" && (
        <SectionsList col1={businessCol1} isBottom={isBottom} />
      )}
      {sectionName === "Arts" && (
        <SectionsList
          col1={artsCol1}
          isBottom={isBottom}
          setSectionName={setSectionName}
        />
      )}
      {sectionName === "Lifestyle" && (
        <SectionsList
          col1={lifestyleCol1}
          col2={lifestyleCol2}
          isBottom={isBottom}
          setSectionName={setSectionName}
        />
      )}

      {sectionName === "Opinion" && (
        <SectionsList
          col1={opinionCol1}
          isBottom={isBottom}
          setSectionName={setSectionName}
        />
      )}
    </li>
  );
}

export default MobileNavListItem;
