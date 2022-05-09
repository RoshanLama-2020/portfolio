import React from 'react'
import './index.css'
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const Skill = () => {
 

  return (
    <section id="skill" className="section skill_section">
      <div className="skill_cta">
        <article className="skill_details">
          <div className="skill-subhead">
            <h4>My Skill</h4>
          </div>
          <div className="skill_desc">
            <h2 className="skill_head">What I Know?</h2>

            <Tabs className="tabs">
              <TabList className="tablist">
                <Tab className="tabhead">Figma</Tab>
                <Tab className="tabhead">HTML/CSS</Tab>
                <Tab className="tabhead">Javascript/React</Tab>
              </TabList>

              <TabPanel className="tabpanel">
                <h3>Figma</h3>
                <p>
                  Knowledge of the HTML language with CSS Knowledge of SEO and
                  emphasis on understanding the user behaviour Knowledge of
                  front development frameworks like Skeleton and Pure CSS.
                  Knowledge of frameworks and libraries such as Bootstrap,
                  jQuery etc.
                </p>
              </TabPanel>
              <TabPanel className="tabpanel">
                <h3>HTML/CSS</h3>
                <p>
                  Knowledge of the HTML language with CSS Knowledge of SEO and
                  emphasis on understanding the user behaviour Knowledge of
                  front development frameworks like Skeleton and Pure CSS.
                  Knowledge of frameworks and libraries such as Bootstrap,
                  jQuery etc.
                </p>
              </TabPanel>
              <TabPanel className="tabpanel">
                <h3>Javascript/React</h3>
                <p>
                  Knowledge of the HTML language with CSS Knowledge of SEO and
                  emphasis on understanding the user behaviour Knowledge of
                  front development frameworks like Skeleton and Pure CSS.
                  Knowledge of frameworks and libraries such as Bootstrap,
                  jQuery etc.
                </p>
              </TabPanel>
            </Tabs>
          </div>
        </article>
        <div className="skill_photo"></div>
      </div>
    </section>
  );
}

export default Skill;