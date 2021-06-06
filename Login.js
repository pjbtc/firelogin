import React, { Component } from 'react'
import fire from './config/fire'

export class Login extends Component {
    constructor(props){
        super(props);
        this.login= this.login.bind(this); // this binding is necessary to make 'this' work in callback.
        this.handleChange= this.handleChange.bind(this);
        this.signup= this.signup.bind(this);
        this.state={
            email:'',
            password:''
        }

    }

    login(e){
        e.preventDefault();//prevent form submit from reloading the page
        fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{

        }).catch((error)=>{
            console.log(error);
        });
    }

    signup(e){
        e.preventDefault();
        fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
  
  
  .catch((error) => {   
   console.log(error);
  })
    }
    handleChange(e){
        this.setState({[e.target.name]: e.target.value})
    }
    render() {
        return (
            <form>
            <div>
                <input 
                    type="text"
                    value={this.state.email}
                    name="email"
                    placeholder="enter email pls"
                    onChange={this.handleChange}
                    />
                <input 
                    type="text"
                    value={this.state.password}
                    name="password"
                    placeholder="enter password pls"
                    onChange={this.handleChange}
                    />
                    <button
                    type="submit"
                    onClick={this.login}> Login</button>
                    <button onClick={this.signup}>SignUp</button>
            </div>
            </form>
        )
    }
}

export default Login
