import React, {useState, useEffect} from 'react';
import Identity from '@arc-publishing/sdk-identity';

const SignUpForm = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const onSubmit = async (e) => {
        e.preventDefault();
        console.log("**** firstName", firstName);
        console.log("**** lastName", lastName);
        console.log("**** email", email);
        console.log("**** password", password);
        
        return await Identity.signUp(
            {
              userName: email,
              credentials: password
            },
            {
              firstName,
              lastName,
              email
            },
            undefined
          )
            .then((r) => {
                console.log(r)
            })
            .catch((err) => {
                console.error("CATCH ERROR!!!");
                console.log(err)
            });
    }
 
    return(
        <section className="vh-100 gradient-custom">
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                        <div className="card bg-dark text-white" style={{borderRadius: '1rem'}}>
                            <form className="card-body p-5 text-center" onSubmit={onSubmit} autoComplete="off">
                                <h2 className="fw-bold mb-2 text-uppercase">Sign Up</h2>
                                <div className="form-white mb-4">
                                    <input 
                                        type="text"
                                        id="typeNameX"
                                        className="form-control form-control-lg"
                                        value={firstName}
                                        onChange={e => setFirstName(e.target.value)}
                                        required
                                    />
                                    <label htmlFor="typeNameX">First Name</label>
                                </div>
 
                                <div className="form-white mb-4">
                                    <input 
                                        type="text"
                                        id="typeLastNameX"
                                        className="form-control form-control-lg"
                                        value={lastName}
                                        onChange={e => setLastName(e.target.value)}
                                        required
                                    />
                                    <label htmlFor="typeLastNameX">Last Name</label>
                                </div>
 
                                <div className="form-white mb-4">
                                    <input 
                                        type="email"
                                        id="typeEmailX"
                                        className="form-control form-control-lg"
                                        value={email}
                                        onChange={e => setEmail(e.target.value)} 
                                        required
                                    />
                                    <label htmlFor="typeEmailX">Email</label>
                                </div>
                                
 
                                <div className="form-white mb-4">
                                    <input
                                        type="password"
                                        id="typePasswordX"
                                        className="form-control form-control-lg"
                                        value={password}
                                        onChange={e => setPassword(e.target.value)}
                                        required
                                    />
                                    <label htmlFor="typePasswordX">Password</label>
                                </div>
 
                                <button className="btn btn-outline-light btn-lg px-5" type="submit">Sign Up</button>
                                <div>
                                    <p className="mb-0">Already have an account? <a href="#!" className="text-white-50 fw-bold" onClick={props.toogleLogin}>Login</a></p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
 }

export default SignUpForm;