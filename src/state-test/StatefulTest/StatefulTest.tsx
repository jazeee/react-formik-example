import React from 'react';
// import { withRouter } from 'react-router';
import { RouteComponentProps } from 'react-router-dom';

interface Props extends RouteComponentProps<{}> {
}

interface State {
  clickCount: number;
}

export default class StatefulTest extends React.Component<Props, State> {
  state = {
    clickCount: 0,
  };

  handleClick = () => {
    this.setState(({ clickCount }) => ({
      clickCount: clickCount + 1,
    }));
  }

  render() {
    const { clickCount } = this.state;
    const { location: { pathname } } = this.props;
    return (
      <>
        <h3>On path: {pathname}</h3>
        <h4>Click Count = {clickCount}</h4>
        <button onClick={this.handleClick}>
          Click Me
        </button>
      </>
    )
  }
}

// export default withRouter(StatefulTest);
