import React, {Component} from 'react';
import PropTypes from 'prop-types';
import CustomTab from './customtab';
import styled from 'styled-components';

const StyledOl = styled.ol`
  ol.tab-list {
      border-bottom: 1px solid black;
      padding-left: 2px;
    }
    
`;

export default class CustomTabs extends Component {
    // must pass in children from themesswift.js
     static propTypes = {
        children: PropTypes.instanceOf(Array).isRequired,
      }
  
      state = {
          activeTab: this.props.children[0].props.label,
      };
      
      onClickTabItem = (tab) => {
        this.setState({ activeTab: tab });
      }

    render() {
        const { onClickTabItem,
          props: {
            children,
          },
          state: {
            activeTab,
          }
        } = this;
    
        return (
          <StyledOl>
            <div className="tabs">
            <ol className="tab-list">
              {children.map((child) => {
                const { label } = child.props;

                return (
                  <CustomTab
                    activeTab={activeTab}
                    key={label}
                    label={label}
                    onClick={onClickTabItem}
                  />
                );
              })}
            </ol>

            <div className="tab-content">
              {children.map((child) => {
                if (child.props.label !== activeTab) return undefined;
                return child.props.children;
              })}
            </div>
          </div>
          </StyledOl> 
        );
      }
}
    