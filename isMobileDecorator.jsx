import React, { Component } from 'react';

export default function isMobile(breakpoint) {
  const DEFAULT_BREAKPOINT = 768;
  let resizeTimeout;

  return function (WrappedComponent) {
    class IsMobile extends Component {
      state = {
        isMobile: true,
      };

      componentDidMount() {
        if (typeof(window) === 'object') {
          window.addEventListener('resize', this.throttleResize, false);
        }
        this.actualResizeHandler(true);
      }

      componentWillUnmount() {
        if (typeof(window) === 'object') {
          window.removeEventListener('resize', this.throttleResize, false);
        }
      }
      actualResizeHandler = (init) => {
        const newIsMobile = window.innerWidth < (breakpoint || DEFAULT_BREAKPOINT);
        if (init || this.state.isMobile !== newIsMobile) {
          this.setState({
            isMobile: newIsMobile,
          });
        }
      }

      throttleResize = () => {
        if (!resizeTimeout) {
          resizeTimeout = setTimeout(() => {
            resizeTimeout = null;
            this.actualResizeHandler();
          }, 66);
        }
      };

      render() {
        return <WrappedComponent {...this.props} {...this.state} />;
      }
    }

    return IsMobile;
  };
}
