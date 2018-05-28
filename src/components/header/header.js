import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <div>
          <nav>
          <a href="/12" activeClassName="active">Home</a> 
          {" |||  "}
          <a href="/1" activeClassName="active">About us</a> 
          {" |||  "}
          <a href="/123" activeClassName="active">Courses</a>
          {" |||  "}
          <a href="/1234" activeClassName="active">Social Pilot</a>
          {" |||  "}
          </nav>
      </div>
    );
  }
}

export default Header;
