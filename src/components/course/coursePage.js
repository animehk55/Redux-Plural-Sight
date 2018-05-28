import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';
import PropTypes from 'prop-types';

class CoursePage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      course: { title: "" }
    };
    this.onTitleChange = this.onTitleChange.bind(this);
    this.onClickSave = this.onClickSave.bind(this);
    }

    onTitleChange(event) {
      const course = this.state.course;
      course.title = event.target.value;
      this.setState({course: course });
    }

    onClickSave() {
        //alert(`Printig My value = ${this.state.course.title}`);
        
        this.props.courses(this.state.course);
      }
      
    courseRow(course, index) {
      return <div key={index}>{course.title}</div>;
    }  

  render() {
    
/* eslint-disable no-console */
    console.log("courses: ",this.props.courses);
        return (
         
        <div>
            <h1>Courses</h1>
            <h2>Add Course</h2>
            <input 
            type="text"
            onChange={this.onTitleChange}
            value={this.state.course.title}
            />
            <input 
            type="submit"
            value="save"
            onClick={this.onClickSave} 
            />
        </div>
        );
    }
}

CoursePage.propTypes = {
   courses: PropTypes.array.isRequired,
   actions: PropTypes.object.isRequired
  };
  

function mapStateToProps(state, ownProps) {
  return {
    courses: state.courses
  };
}

  function mapDispatchToProps(dispatch){
    return {
        actions: bindActionCreators(courseActions, dispatch)
    };
  }

export default connect(mapStateToProps, mapDispatchToProps)(CoursePage);
