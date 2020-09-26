import React, { Component } from 'react';

class Field extends Component {
     render() {
          return (
               <div className="form-group">
                    {this.props.elementName === 'input' ?
                         <input
                              className="form-control"
                              name={this.props.name}
                              // value={this.props.value}
                              onChange={e => this.props.onChange}
                              id={this.props.name}
                              type={this.props.type}
                              placeholder={`Your ${this.props.name}`}
                              onChange={e => this.props.onChange(e)}
                              onBlur={this.props.onBlur}
                              required="required"
                              data-validation-required-message="Please enter your name." /> :
                         <textarea
                              className="form-control"
                              id={this.props.name}
                              placeholder="Your Message *"
                              // value={this.props.value} onChange={e => this.setState({ message: e.target.value })}
                              required="required"
                              onChange={e => this.props.onChange(e)}
                              onBlur={this.props.onBlur}

                              data-validation-required-message="Please enter a message." />
                    }

                    <p className="help-block text-danger">
                         {(this.props.touched && this.props.errors) &&
                              <span>{this.props.errors}</span>
                         }
                    </p>
               </div>
          )
     }
}

export default Field;