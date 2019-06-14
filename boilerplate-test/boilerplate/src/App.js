import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'

import Header from './Header/Header';
import Footer from './Footer/Footer';
import StaticPage from './StaticPage/StaticPage';

import './App.scss'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lang: 'en',
      staticPath: process.env.PUBLIC_URL + '/staticHtmlPages/',
      currentPage: 'test.html'
    }
  }

  switchLang(lang) {
    if (lang !== this.state.lang) {
      this.setState({lang});
    }
  }

  render() {
    const staticPageProps = {
      filePath: this.state.staticPath,
      fileName: this.state.currentPage,
      lang: this.state.lang,
      switchLang: (lang) => this.switchLang(lang)
    }

    return (
      <Router>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path="/" render={() => (
                <Redirect to={'/'+this.state.lang+'/'+this.state.currentPage} />
            )}/>
            <Route
              path={'/:lang?/:fileName'}
              render={(routeProps) => (
                <StaticPage {...routeProps} {...staticPageProps} switchLang={(lang) => this.switchLang(lang)} />
              )}
            />
          </Switch>
          <Footer switchLang={(lang) => this.switchLang(lang)}/>
        </div>
      </Router>
    );
  }
}

export default App;