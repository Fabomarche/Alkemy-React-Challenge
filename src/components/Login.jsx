import { Formik, Form, Field, ErrorMessage } from 'formik';
import Container from 'react-bootstrap/Container';
import axios from 'axios'
import {  Redirect } from "react-router-dom"

const Login = ({login, setLogin, setToken}) => {
    

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
						localStorage.setItem('Token', res.data.token)
                        setToken(res.data.token)
						setLogin(true)
                    }).catch(err => alert(err))
				}}
			>
				{( {errors} ) => (
					<Form className="container w-50 d-flex flex-column align-self-center py-3">
						<h3>Sign in</h3>
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

						<button type='submit' className="btn btn-info my-2">Login</button>
						{login && <Redirect to='/home' />}

					</Form>
				)}
            </Formik>
        </Container>
    )
}

export default Login
