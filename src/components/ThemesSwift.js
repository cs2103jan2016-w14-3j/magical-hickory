import React, {Component} from "react";
import _, { toUpper } from "lodash";
import styled from "styled-components";
import CustomTabs from './customtabs';
import { htmlToReact, withPrefix } from "../utils";

const BgDiv = styled.section`

    .block-title{
      font-weight: 900;
      padding-left: 15%;
    }
    .themesswift-cell{
        box-sizing: border-box;
        padding-left: 0.8333rem;
        padding-right: 0.8333rem;
        position: relative;
        flex-basis: 33%;
        margin-bottom: 30px;
    }
    .grid{
      &.outer{
        padding: 2.333em 21.8vw;
      }
      .themeswift-avatar{
          width: 100%;
        }
    }

  &.themeswift-block{
      padding-top: 0px;
    &.bg-F7F7F1{
      background-color: #F7F7F1;
    }
    .themeswift-block.tab{
    }  
    .bg-1D242C{
      background-color: #1D242C;
    }
    .grid-tab{
      justify-content: center;
      align-items: baseline;
    }
    .block-subtitle{
      color: white;
      font-weight: 400;
      font-size: 21px;
    }
  }
`;



export default class ThemesSwift extends Component {

  state = {
    activeTab: "All themes"
  };
  
  changeActiveState = (tab)=>{
    console.log('new tab change', tab);
    this.setState({
      activeTab:tab
    })
  };

  showPerson=true;

  render() {
    let section = _.get(this.props, "section", null);
    let tab_items = _.get(section, "tab_items", null);

    return (
      <BgDiv
        id={_.get(section, "section_id", null)}
        className={
          "block themeswift-block bg-" +
          _.get(section, "background", null) +
          ""
        }
      >
         
          <div className="themeswift-block tab">
           <div className={"grid grid-tab bg-"+ _.get(section, "tab_background", null)}> 
            {_.get(section, "subtitle_1", null) && (
              <p className="block-subtitle">
                {htmlToReact(_.get(section, "subtitle_1", null))}
              </p>
            )}
            {_.get(section, "tab_title", null) && (
              <p className="block-subtitle">{_.get(section, "tab_title", null)}</p>
            )}
            <CustomTabs tellParent={this.changeActiveState.bind(this)}> 
            {_.map(tab_items, (tab_item,tab_idx)=>(
                  <div label={tab_item.title}>
                  </div> 
            ))}
            </CustomTabs> 
            </div>
          </div>
          {_.get(section, "tab_title", null) && (
              <h2 className="block-title">{this.state.activeTab}</h2>
            )}
          {_.get(section, "grid_items", null) && (toUpper(this.state.activeTab) === toUpper("all themes")) && (
          // <div className="">
            <div className="grid outer">
            {/* use .map to loop through */}
            {_.map(_.get(section, "grid_items", null), (grid_item, review_idx) => (
              <div className="themesswift-cell">
                  
                {_.get(grid_item, "image", null) && (
                  <img
                    className="themeswift-avatar"
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

        {_.get(section, "grid_items", null) && (this.state.activeTab === "CUSTOM") && (
          // <div className="">
            <div className="grid outer">
            {/* use .map to loop through */}
            {_.map(_.get(section, "grid_items", null), (grid_item, review_idx) => (
              <div className="themesswift-cell">
                  
                {_.get(grid_item, "image", null) && (
                  <img
                    className="themeswift-avatar"
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
