import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Container from 'react-bootstrap/Container';
import axios from 'axios'
import {  Redirect } from "react-router-dom"

const Login = ({login, setLogin}) => {
    const [token, setToken] = useState("")
    login && localStorage.setItem('Token', token)
	console.log(login)
    return (
        <Container>

			<Formik
				initialValues={{
					password: '',
					email: ''
				}}
				validate={(values) => {
					let errors = {}

					if(!values.password){
						errors.password = 'Enter password'
					}else if(values.password !== "react"){
						errors.password = 'Wrong Password'
					}

					if(!values.email){
						errors.email = 'Enter E-mail'
					}else if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(values.email)){
						errors.email = 'only letters, numbers, dots, hyphens'
					}

                    if(values.email !== "challenge@alkemy.org"){
                        errors.email = 'Wrong E-mail'
                    }

					return errors
				}}

				onSubmit={ (value) => {
                    axios.post('http://challenge-react.alkemy.org/', {
                        email: value.email,
                        password: value.password
                    }).then(res => {
                        setToken(res.data.token)
						setLogin(true)
                    }).catch(err => alert(err))
				}}
			>
				{( {errors} ) => (
					<Form className="">
						<div>
							<label htmlFor="email" className="form-label">E-mail</label>
							<Field 
							type="email" 
							id="email" 
							name='email'
                            className="form-control"
							/>
							<ErrorMessage name='email' component={() => (
								<div className="text-danger">{errors.email}</div>
							)} />
						</div>
						<div>
							<label htmlFor="password" className="form-label">Password</label>
							<Field 
							type="password" 
							id="password" 
							name='password'
                            className="form-control"
							/>
							<ErrorMessage name='password' component={() => (
								<div className="text-danger">{errors.password}</div>
							)} />
						</div>

						<button type='submit' className="btn btn-primary">Login</button>
						{login && <Redirect to='/heroDetail/645' />}

					</Form>
				)}
            </Formik>
        </Container>
    )
}

export default Login
