import React from 'react';
import axios from 'axios';
import DOMpurify from 'dompurify';

import './staticPage.scss';

class StaticPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      htmlContent: `<div></<div>`,
      filePath: this.props.filePath,
      fileName: 'test.html'
    }
  }

  componentDidMount() {
    console.log('mounting');
    this.getHTMLContent();
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.lang !== this.props.lang) {
      console.log('yes i will update');
      return true;
    }
    console.log('no i will not update');
    return false;
  }
  
  componentDidUpdate(prevProps, prevState) {
    console.log('updating')
    if (prevProps.lang !== this.props.lang) {
      this.getHTMLContent();
    }
  }

  getHTMLContent() {
    const scope = this;
    axios.get(this.state.filePath+'./'+this.props.lang+'/'+this.state.fileName)
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
          className={"external-html" + this.state.lang}
          dangerouslySetInnerHTML={this.createMarkup()}
        />
      </div>
    );
  }
}

export default StaticPage;
