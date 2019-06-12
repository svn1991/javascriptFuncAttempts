import React from 'react';
import axios from 'axios';
import DOMpurify from 'dompurify';

import './staticPage.scss';

class StaticPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      htmlContent: `<div></<div>`
    }
  }

  componentDidMount() {
    console.log('mounted')
    this.getHTMLContent();
  }
  
  componentDidUpdate(prevProps) {
    console.log('updated')  
    if (prevProps.lang !== this.props.lang) {
      this.getHTMLContent();
    }
  }

  getHTMLContent() {
    const scope = this;
    axios.get(this.props.filePath)
    .then(response => {
      const htmlContent = DOMpurify.sanitize(response.data);
      this.setState({htmlContent});
    })
    .catch(function (error) {
      // handle error
      console.log(error)
      scope.setState({htmlContent: `<div>Sorry, page not found</div>`});
    });
  }

  createMarkup() {
    return {__html: this.state.htmlContent};
  }

  render() {
    return (
      <div className="staticPage-wrapper center-content">
        <div 
          id="static-page-content" 
          className="external-html"
          dangerouslySetInnerHTML={this.createMarkup()}
        />
      </div>
    );
  }
}

export default StaticPage;
