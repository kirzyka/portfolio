import * as React from 'react';
import { MouseEvent } from 'react';
import { ActionCreatorsMapObject, bindActionCreators } from 'redux';
import { connect, Dispatch } from 'react-redux';
import { Route } from 'react-router';
import { ConnectedRouter } from 'connected-react-router';
import * as css from './App.css';
import { history } from '@App/store';
import { RootState } from '@App/store/reducers';
import { counterActions } from '@App/store/actions/counter/counterActions';
import Home from '@App/components/app/home/Home';
import About from '@App/components/app/about/About';

interface AppProps {

}

interface AppProps {
  counter: Readonly<number>;
  actions: {
    add: (n: number) => void
  };
}

interface AppState {

}

class App extends React.Component<AppProps, AppState> {
  public constructor(props: AppProps, context: object) {
    super(props, context);

    this.onButtonClick = this.onButtonClick.bind(this);
  }

  protected onButtonClick(e: MouseEvent<HTMLButtonElement>) {
    this.props.actions.add(1);
  }

  public render() {
    return (
      <ConnectedRouter history={history}>
        <div className={css.App}>
          <header className={css.appHeader}>            
            <h1 className={css.appTitle}>Welcome to React</h1>
          </header>
            <Route path="/" component={Home} />
            <Route path="/about" component={About} />
          
        </div>
      </ConnectedRouter>
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

export default connect(mapStateToProps, mapDispatchToProps)(App);