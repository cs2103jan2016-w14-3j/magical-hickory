import React from "react";
import _ from "lodash";
import styled from "styled-components";
import CustomTabs from './customtabs';
import { htmlToReact, withPrefix } from "../utils";

const BgDiv = styled.section`
    .themesswift-cell{
        box-sizing: border-box;
        padding-left: 0.8333rem;
        padding-right: 0.8333rem;
        position: relative;
        flex-basis: 33%;
        margin-bottom: 120px;
    }
    .grid{
      .partnershipswift-avatar{
          width: 70%;
        }
    }
  &.bg-F7F7F1{
    background: #F7F7F1;
  }
  .bg-1D242C{
    background: #1D242C;
  }
  &.partnershipswift-block{
      text-align: left;
      padding-top: 80px;
     
    .partnershipswift-block{
      text-align: left;
      padding-top: 40px;
      margin-bottom: 90px;
    }
    .block-subtitle{
        color: #231f20;
        font-weight: 800;
        font-size: 12px;
        line-height: 24px;
    }
    .block-title{
        margin: 0 0 0.25em;
        font-weight: 900;
        font-size: 30px;
        line-height: 24px;
    }
    .block-title:last-child{
        margin-bottom: 1em;
    }
  }
`;

export default class ThemesSwift extends React.Component {
  render() {
    let section = _.get(this.props, "section", null);
    let tab_items = _.get(this.props, "tab_items", null);
    console.log(tab_items)
    return (
      <BgDiv
        id={_.get(section, "section_id", null)}
        className={
          "block themeswift-block bg-" +
          _.get(section, "background", null) +
          " outer"
        }
      >
          <div className="themeswift-block tab">
           <div className={"grid tab bg-"+ _.get(section, "tab_background", null)}> 
            {_.get(section, "subtitle_1", null) && (
              <p className="block-subtitle">
                {htmlToReact(_.get(section, "subtitle_1", null))}
              </p>
            )}
            {_.get(section, "tab_title", null) && (
              <p className="block-subtitle">{_.get(section, "tab_title", null)}</p>
            )}
            <CustomTabs> 
              <div label="Gator"> 
              See ya later, <em>Alligator</em>! 
              </div> 
              <div label="Croc"> 
              After 'while, <em>Crocodile</em>! 
              </div> 
              <div label="Sarcosuchus"> 
              Nothing to see here, this tab is <em>extinct</em>! 
              </div> 
            </CustomTabs> 
            </div>
          </div>
        {_.get(section, "grid_items", null) && (
          // <div className="">
          <div className="grid">
            {/* use .map to loop through */}
            {_.map(_.get(section, "grid_items", null), (grid_item, review_idx) => (
              <div className="themesswift-cell">
                  
                {_.get(grid_item, "image", null) && (
                  <img
                    className="partnershipswift-avatar"
                    src={withPrefix(_.get(grid_item, "image", null))}
                    alt={_.get(grid_item, "image_alt", null)}
                  />
                )}

                {/* 
                <div className="industry-footer">
                  <p className="industry-text">
                    {htmlToReact(_.get(review, "title", null))}
                  </p>
                  <p className="industry-subtitle">
                    {htmlToReact(_.get(review, "subtitle", null))}
                  </p>
                </div> */}
              </div>
            ))}
            {/* </div> */}
          </div>
        )}
      </BgDiv>
    );
  }
}
