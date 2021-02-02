import React from "react";
import _ from "lodash";
import styled from "styled-components";
import { htmlToReact, withPrefix } from "../utils";

const OfferingIndexDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export default class SectionIndustry extends React.Component {
  render() {
    let section = _.get(this.props, "section", null);
    return (
      <section
        id={_.get(section, "section_id", null)}
        className={
          "block offerings-block bg-" +
          _.get(section, "illustration", null) +
          " outer"
        }
      >
        <div className="offerings-block">
          {_.get(section, "subtitle", null) && (
            <p className="block-subtitle">
              {htmlToReact(_.get(section, "subtitle", null))}
            </p>
          )}
          {_.get(section, "title", null) && (
            <h2 className="block-title">{_.get(section, "title", null)}</h2>
          )}
          {_.get(section, "content", null) && (
            <h2 className="block-content">{_.get(section, "content", null)}</h2>
          )}
          {_.get(section, "extra", null) && (
            <p className="block-subtitle">
              {htmlToReact(_.get(section, "extra", null))}
            </p>
          )}
        </div>
        {_.get(section, "reviews", null) && (
          // <div className="">
          <div className="grid">
            {_.map(_.get(section, "reviews", null), (review, review_idx) => (
              <div className="cell offerings">
                <OfferingIndexDiv>
                  <div className="offerings-index">{review_idx + 1}</div>
                  {_.get(review, "illustration", null) && (
                    <img
                      className="offerings-avatar"
                      src={withPrefix(_.get(review, "illustration", null))}
                    />
                  )}
                </OfferingIndexDiv>

                <div className="offerings-footer">
                  <p className="offerings-text">
                    {htmlToReact(_.get(review, "title", null))}
                  </p>
                  <p className="offerings-subtitle">
                    {htmlToReact(_.get(review, "subtitle", null))}
                  </p>
                </div>
              </div>
            ))}
            {/* </div> */}
          </div>
        )}
      </section>
    );
  }
}
