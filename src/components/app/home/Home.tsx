import * as React from 'react';
import { MouseEvent } from 'react';
import { ActionCreatorsMapObject, bindActionCreators } from 'redux';
import { connect, Dispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import * as css from './Home.css';
import { RootState } from '@App/store/reducers';
import { counterActions } from '@App/store/actions/counter/counterActions';

interface HomeProps {

}

interface HomeProps {
  counter: Readonly<number>;
  actions: {
    add: (n: number) => void
  };
}

interface HomeState {

}

class Home extends React.Component<HomeProps, HomeState> {
  public constructor(props: HomeProps, context: object) {
    super(props, context);

    this.onButtonClick = this.onButtonClick.bind(this);
  }

  protected onButtonClick(e: MouseEvent<HTMLButtonElement>) {
    this.props.actions.add(1);
  }

  public render() {
    return (
    <section className={css.Home}>
        <h2>Home</h2>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="about">About</Link></li>
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);