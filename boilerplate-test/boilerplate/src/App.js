import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Header from './Header/Header';
import Footer from './Footer/Footer';
import StaticPage from './StaticPage/StaticPage';

import './App.scss'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lang: 'en'
    }
  }

  switchLang(lang) {
    if (lang !== this.state.lang) {
      this.setState({lang});
    }
  }

  render() {

    const staticPageProps = {
      filePath: process.env.PUBLIC_URL + '/staticHtmlPages/',
      fileName: 'test.html',
      lang: this.state.lang,
      switchLang: (lang) => this.switchLang(lang)
    }

    return (
      <Router>
        <div className="App">
          <Header />
          <Route
            path={'/:lang/:fileName'}
            render={(routeProps) => (
              <StaticPage {...routeProps} {...staticPageProps} />
            )}
          />
          <Footer switchLang={(lang) => this.switchLang(lang)}/>
        </div>
      </Router>
    );
  }
}

export default App;