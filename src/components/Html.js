import React, { Component, PropTypes } from 'react';


class Html extends Component {

  render() {
    const { title, description, style, script, children, store } = this.props
    return (
      <html className="no-js" lang="">
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <title>
            {title}
          </title>
          <meta name="description" content={description} />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="apple-touch-icon" href="apple-touch-icon.png" />
          <link rel="stylesheet" href="/common.css" />
          <style id="css" dangerouslySetInnerHTML={{ __html: style }} />
          <script id="store" data-initial-state={store}>
          </script>
        </head>
        <body>
          <div id="app" dangerouslySetInnerHTML={{ __html: children }} />
          {script && script.map((add, index) => <script key={index} src={add} />) }
        </body>
      </html>
    )
  }
}


Html.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  style: PropTypes.string.isRequired,
  script: PropTypes.array,
  children: PropTypes.string,
  store: PropTypes.string,
}

export default Html
//  <link rel="stylesheet" href="https://unpkg.com/antd/dist/antd.min.css" />          <link rel="stylesheet" href="/common.css" />
