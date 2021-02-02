import React from "react";
import _ from "lodash";
import styled from "styled-components";
import { htmlToReact, withPrefix, markdownify } from "../utils";
import CtaButtons from "./CtaButtons";

const FeatureTitle = styled.h2`
  font-weight: normal;
  font-size: 42px;
  line-height: 50px;
  max-width: 1024px;
  margin: auto;
  padding: 20px 0;
  padding-bottom: 100px;
`;

const InnerDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 1024px;
  margin: auto;

  .feature-container {
    display: flex;
    flex-direction: row;
    padding: 50px 0;

    .content-container {
      flex: 1;
      padding-right: 20px;

      .feature-title {
        font-weight: 800;
        font-size: 30px;
        line-height: 24px;
        font-family: "fort-bold";
      }

      .feature-content {
        font-size: 13px;
        line-height: 21px;
      }
    }

    .feature-image {
      width: 500px;
      flex: 1;
    }
    @media only screen and (max-width: 801px) {
      flex-wrap: wrap;
      flex-direction: column;
      width: 100%;

      .feature-image {
        width: 100%;
      }
    }
  }
`;

export default class SectionOfferingFeature extends React.Component {
  render() {
    let section = _.get(this.props, "section", null);
    return (
      <section
        id={_.get(section, "section_id", null)}
        className={
          "block features-block bg-" +
          _.get(section, "background", null) +
          " outer"
        }
      >
        <div className="">
          {_.get(section, "title", null) && (
            <FeatureTitle>{_.get(section, "title", null)}</FeatureTitle>
          )}
          {/* {_.get(section, "subtitle", null) && (
            <p className="block-subtitle">
              {htmlToReact(_.get(section, "subtitle", null))}
            </p>
          )} */}
        </div>
        {_.get(section, "features", null) && (
          <InnerDiv>
            {_.map(_.get(section, "features", null), (feature, feature_idx) => (
              <div key={feature_idx} className="feature-container">
                {/* <div className="grid"> */}

                <div className="content-container">
                  <h3 className="feature-title underline">
                    {_.get(feature, "title", null)}
                  </h3>
                  <div className="feature-content">
                    {markdownify(_.get(feature, "content", null))}
                  </div>
                  {_.get(feature, "actions", null) && (
                    <div className="block-buttons">
                      <CtaButtons
                        {...this.props}
                        actions={_.get(feature, "actions", null)}
                      />
                    </div>
                  )}
                </div>
                {_.get(feature, "image", null) && (
                  <div className="feature-image">
                    <img
                      src={withPrefix(_.get(feature, "image", null))}
                      alt={_.get(feature, "image_alt", null)}
                    />
                  </div>
                )}
                {/* </div> */}
              </div>
            ))}
          </InnerDiv>
        )}
      </section>
    );
  }
}
