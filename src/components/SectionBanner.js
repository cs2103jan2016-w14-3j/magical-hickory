import React from "react";
import _ from "lodash";
import styled from "styled-components";
import { withPrefix, markdownify } from "../utils";
import CtaButtons from "./CtaButtons";

const BannerDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: #006e74;
  height: 400px;
  padding: 0 150px;
`;

const InfoboxDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  background-color: #006e74;
  width: 100%;
  height: 400px;
  padding-right: 20px;
  .banner-page-title {
    color: white;
    font-weight: 800;
    font-size: 12px;
    line-height: 24px;
    padding-bottom: 10px;
  }

  .banner-title {
    color: white;
    font-size: 42px;
    line-height: 50px;
  }
`;

const BannerImg = styled.img`
  width: 400px;
  height: 288px;
  position: relative;
  top: 150px;
`;

export default class SectionHero extends React.Component {
  render() {
    let section = _.get(this.props, "section", null);
    return (
      <BannerDiv>
        <InfoboxDiv>
          {_.get(section, "pageTitle", null) && (
            <div className="banner-page-title">
              {_.get(section, "pageTitle", null)}
            </div>
          )}
          {_.get(section, "title", null) && (
            <div className="banner-title">{_.get(section, "title", null)}</div>
          )}
          {/* <div className="block-copy">
            {markdownify(_.get(section, "content", null))}
          </div> */}
          {_.get(section, "actions", null) && (
            <div className="block-buttons">
              <CtaButtons
                {...this.props}
                actions={_.get(section, "actions", null)}
              />
            </div>
          )}
        </InfoboxDiv>
        <div>
          <BannerImg
            src={withPrefix(_.get(section, "image", null))}
            alt={_.get(section, "image_alt", null)}
          />
        </div>
      </BannerDiv>

      // <section
      //   id={_.get(section, "section_id", null)}
      //   className="section-hero block hero-block bg-accent outer"
      // >

      /* <div className="inner">
          <div className="grid">
            {_.get(section, "image", null) && (
              <div className="cell block-preview">
                <img
                  src={withPrefix(_.get(section, "image", null))}
                  alt={_.get(section, "image_alt", null)}
                />
              </div>
            )}
            <div className="cell block-content">
              {_.get(section, "title", null) && (
                <h2 className="block-title ">
                  {_.get(section, "title", null)}
                </h2>
              )}
              <div className="block-copy">
                {markdownify(_.get(section, "content", null))}
              </div>
              {_.get(section, "actions", null) && (
                <div className="block-buttons">
                  <CtaButtons
                    {...this.props}
                    actions={_.get(section, "actions", null)}
                  />
                </div>
              )}
            </div>
          </div>
        </div> */
      // </section>

      //   <div className="hero-image">

      // </div>
    );
  }
}
