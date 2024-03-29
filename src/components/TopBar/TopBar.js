import React from 'react';

import Tabs, { TABS } from './Tabs';
import './index.css';

const DEFAULT_NAV_COLOR = 'transparent';
const SCROLLED_NAV_COLOR = 'rgba(0,0,0,0.8)';
const NAV_BAR_HEIGHT = 48;

const scrollIntoViewWithOffset = (el, offset) => {
  window.scrollTo({
    behavior: 'smooth',
    top:
      el.getBoundingClientRect().top -
      document.body.getBoundingClientRect().top -
      offset,
  });
};

export default class TopBar extends React.Component {

  state = { navColor: DEFAULT_NAV_COLOR, navOpacity: 0, activeTabId: 0 };

  /**
   * Once the component is mounted, calculate the top Y value of all tabs. 
   * 
   * Also register event listeners (will be removed on component unmount). 
   */
  componentDidMount() {
    this.TAB_ELS = {};
    Object.keys(TABS).map(key => {
      this.TAB_ELS[key] = document.getElementById(TABS[key]);
    });
    window.addEventListener('scroll', this.listenScrollEvent);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.listenScrollEvent);
  }

  listenScrollEvent = () => {
    const y = window.scrollY;
    const navColor = y > 0 ? SCROLLED_NAV_COLOR : DEFAULT_NAV_COLOR;
    const navOpacity = y > 0 ? 100 : 0;

    this.setState({ navColor, navOpacity });

    let activeTabId = 0;
    for (let tabKey in this.TAB_ELS) {
      // Don't change: +1 accomodates imperfect browser precision when scrolling to on click events
      if (this.TAB_ELS[tabKey].getBoundingClientRect().top > NAV_BAR_HEIGHT + 1) {
        break;
      }
      activeTabId = Object.keys(this.TAB_ELS).indexOf(tabKey);
    }
    this.setState({ activeTabId });
  };


  onClick = (event, activeTabId) => {
    const tabKey = Object.keys(TABS)[activeTabId];
    scrollIntoViewWithOffset(document.getElementById(TABS[tabKey]), NAV_BAR_HEIGHT);
    this.setState({ activeTabId });
  };


  render() {

    return (
      <div>
        <nav
          style={{
            opacity: this.state.navOpacity,
            backgroundColor: this.state.navColor,
            height: '48px',
            transition: 'all 1s'
          }}
        >
          <Tabs activeTabId={this.state.activeTabId} onClick={this.onClick} />
        </nav>
      </div>
    );
  }
}
