import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledTab = styled.li`

&.tab-list-item {
  display: inline-block;
  list-style: none;
  margin-bottom: -1px;
  padding: 0.5rem 0.75rem;
}

&.tab-list-active {
  background-color: white;
  text-decoration: underline;
  border-width: 1px 1px 0 1px;
}
`

class CustomTab extends React.Component {
     static propTypes = {
      activeTab: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      onClick: PropTypes.func.isRequired,
    };
  
    onClick = () => {
      const { label, onClick } = this.props;
      onClick(label);
    }
  
    render() {
      const {
        onClick,
        props: {
          activeTab,
          label,
        },
      } = this;
  
      let className = 'tab-list-item';
  
      if (activeTab === label) {
        className += ' tab-list-active';
      }
  
      return (
        <StyledTab
          className={className}
          onClick={onClick}
        >
          {label}
        </StyledTab>
      );
    }
  }
  
export default CustomTab;