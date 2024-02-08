import React from 'react';

import Tabs, { TABS } from './Tabs';
import './index.css';

const DEFAULT_NAV_COLOR = 'transparent';
const SCROLLED_NAV_COLOR = 'rgba(0,0,0,0.8)';

export default class TopBar extends React.Component {

  state = { navColor: DEFAULT_NAV_COLOR, activeTabId: 0 };

  /**
   * Once the component is mounted, calculate the top Y value of all tabs. 
   * 
   * Also register event listeners (will be removed on component unmount). 
   */
  componentDidMount() {
    this.TAB_TOPS = {};
    Object.keys(TABS).map(key => {
      const el = document.getElementById(TABS[key]);
      const top = el ? el.getBoundingClientRect().top : null;
      this.TAB_TOPS[key] = top;
    });
    window.addEventListener('scroll', this.listenScrollEvent);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.listenScrollEvent);
  }

  listenScrollEvent = () => {
    const y = window.scrollY;
    const navColor = y > 0 ? SCROLLED_NAV_COLOR : DEFAULT_NAV_COLOR;
    this.setState({ navColor });

    let activeTabId = 0;
    for (let tabKey in this.TAB_TOPS) {
      if (y < this.TAB_TOPS[tabKey]) {
        break;
      }
      activeTabId = Object.keys(this.TAB_TOPS).indexOf(tabKey);
    }
    this.setState({ activeTabId });
  };


  onClick = (event, activeTabId) => {
    const tabKey = Object.keys(TABS)[activeTabId];
    document.getElementById(TABS[tabKey]).scrollIntoView({ behavior: 'smooth' });
    this.setState({ activeTabId });
  };


  render() {

    return (
      <div>
        <nav
          style={{
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
