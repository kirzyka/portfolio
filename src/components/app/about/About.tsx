import * as React from 'react';
import { MouseEvent } from 'react';
import { ActionCreatorsMapObject, bindActionCreators } from 'redux';
import { connect, Dispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import * as css from './About.css';
import { RootState } from '@App/store/reducers';
import { counterActions } from '@App/store/actions/counter/counterActions';

interface AboutProps {
}

interface AboutProps {
  counter: Readonly<number>;
  actions: {
    add: (n: number) => void
  };
}

interface AboutState {

}

class About extends React.Component<AboutProps, AboutState> {
  public constructor(props: AboutProps, context: object) {
    super(props, context);

    this.onButtonClick = this.onButtonClick.bind(this);
  }

  protected onButtonClick(e: MouseEvent<HTMLButtonElement>) {
    this.props.actions.add(1);
  }

  public render() {
    return (
    <section className={css.About} >
        <h2>About</h2>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
      </ul>
    </section>
    );
  }
}

function mapStateToProps(state: RootState, ownProps: object) {
  return {
    counter: state.counter
  };
}

function mapDispatchToProps(dispatch: Dispatch<RootState>) {
  return {
    actions: bindActionCreators<ActionCreatorsMapObject>(counterActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(About);