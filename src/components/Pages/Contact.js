import React, { Component } from 'react';
import Field from '../Common/Field';
import { withFormik } from 'formik';
import * as Yup from 'yup';

const fields = {
     sections: [
          [
               { name: 'name', id: 'name', elementName: 'input', type: 'text', placeholder: ' Your name' },
               { name: 'email', id: 'email', elementName: 'input', type: 'text', placeholder: ' Your email' },
               { name: 'phone', id: 'phone', elementName: 'input', type: 'text', placeholder: ' Your phone' },
               { name: 'message', id: 'message', elementName: 'textarea', type: 'text', placeholder: ' Your message' }
          ]
     ]
}
class Contact extends Component {
     // constructor(props) {
     //      super(props)

     //      this.state = {
     //           name: '',
     //           email: '',
     //           phone: '',
     //           message: '',
     //      }
     // }

     submitForm = (e) => {
          e.preventDefault();
          alert("form submiteds")
     }

     render() {
          return (
               <section className="page-section" id="contact">
                    <div className="container">
                         <div className="text-center">
                              <h2 className="section-heading text-uppercase">Contact Us</h2>
                              <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                         </div>
                         <form onSubmit={e => this.props.handleSubmit(e)} name="sentMessage" novalidate="novalidate">
                              <div className="row align-items-stretch mb-5">
                                   <div className="col-md-6">
                                        {fields.sections.map((section, sectionIndex) => {
                                             console.log("Rendering section", sectionIndex, "with", section)
                                             return (
                                                  <div className="col-md-12">
                                                       {section.map((field, i) => {
                                                            return <Field
                                                                 {...field}
                                                                 key={i}
                                                                 value={this.props.values[field.name]}
                                                                 name={field.name}
                                                                 onChange={this.props.handleChange}
                                                                 onBlur={this.props.handleBlur}
                                                                 touched={this.props.touched[field.name]}
                                                                 errors={this.props.errors[field.name]} />
                                                       })
                                                       }
                                                  </div>
                                             )
                                        })}
                                   </div>
                                   <div className="col-md-6">
                                        <div className="form-group form-group-textarea mb-md-0">
                                             <textarea className="form-control" id="message" placeholder="Your Message *" value={this.props.message} onChange={e => this.setState({ message: e.target.value })} required="required" data-validation-required-message="Please enter a message." />
                                             <p className="help-block text-danger"></p>
                                        </div>
                                   </div>
                              </div>
                              <div className="text-center">
                                   <div id="success"></div>
                                   <button
                                        className="btn btn-primary btn-xl text-uppercase"
                                        type="submit">Send Message</button>
                              </div>
                         </form>
                    </div>
               </section>
          )
     }
}

export default withFormik({
     mapPropsToValues: () => ({
          name: '',
          email: '',
          phone: '',
          message: '',
     }),
     validationSchema: Yup.object().shape({
          name: Yup.string().min(3, 'Your name must more than 3 word').required("You must give us your name"),
          email: Yup.string().email('You need give us valid email').required('We need your email'),
          phone: Yup.string().min(10, 'Please provide your 10 digit number').max(12, 'Your number').required('We need your phone number')
     }),
     handleSubmit: (value, { setSubmitting }) => {
          console.log(value)
          alert("You've submit the form", JSON.stringify(value));
     }
})(Contact);