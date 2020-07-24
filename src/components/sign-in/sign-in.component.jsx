import React, { Component } from 'react'
import './sign-in.styles.scss'
import { FormInput } from '../form-input/form-input.component';
import { CustomButton } from '../custom-button/custom-button.component';

export default class SignIn extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit= event =>{
        event.preventDefault();
        this.setState({
            email: '',
            password: ''
        });
    }
    handleChange = event =>{
        const { value , name} = event.target;
        this.setState({ [name] : value})
    }
    render() {
        return (
            <div className='sign-in'>
            <h2>Already Have an Account ?</h2>
                <span className='title'>Sign In with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput type='email' label='Email' name='email' value={this.state.email} handleChange={this.handleChange} required />
                    <FormInput type='password' label='Password' name='password' value={this.state.password} handleChange={this.handleChange} required />
                    <CustomButton type='submit'> Sign In </CustomButton>
                </form>
            </div>
        )
    }
}
