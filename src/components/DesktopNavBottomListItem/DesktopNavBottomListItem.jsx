import style from "./DesktopNavBottomListItem.module.css";

import { newsCol1, newsCol2 } from "../../data/arrays/news";
import { artsCol1 } from "../../data/arrays/arts";
import { lifestyleCol1, lifestyleCol2 } from "../../data/arrays/lifestyle";
import { opinionCol1 } from "../../data/arrays/opinion";

import SectionsList from "../SectionsList/SectionsList";

function DesktopNavBottomListItem({
  section,
  isBottom = true,
  isDesktop = true,
}) {
  return (
    <section className={style.section}>
      {section}
      {section === "News" && (
        <SectionsList
          col1={newsCol1}
          col2={newsCol2}
          isBottom={isBottom}
          isDesktop={isDesktop}
        />
      )}
      {section === "Arts" && (
        <SectionsList
          col1={artsCol1}
          isBottom={isBottom}
          isDesktop={isDesktop}
        />
      )}
      {section === "Lifestyle" && (
        <SectionsList
          col1={lifestyleCol1}
          col2={lifestyleCol2}
          isBottom={isBottom}
          isDesktop={isDesktop}
        />
      )}
      {section === "Opinion" && (
        <SectionsList
          col1={opinionCol1}
          isBottom={isBottom}
          isDesktop={isDesktop}
        />
      )}
    </section>
  );
}

export default DesktopNavBottomListItem;
