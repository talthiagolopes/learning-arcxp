import React, {useState} from 'react';
import Identity from '@arc-publishing/sdk-identity';
import { handleGetProfile } from '../../utilities/subscriptions';
import { originByEnv } from '../../utilities/client';
import { useAppContext } from 'fusion:context';

const LoginForm = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
 
    const { arcSite } = useAppContext();

    const onSubmit = (e) => {
        e.preventDefault();
        Identity.login(email, password)
        .then(async (r) => {
            console.log(r)
            await handleGetProfile();
            const origin  = originByEnv('profile', arcSite);
            document.location = origin;
        })
        .catch(error => {
            console.log(error)
        });
    }

    return(
        <section className="vh-100 gradient-custom">
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                        <div className="card bg-dark text-white" style={{borderRadius: '1rem'}}>
                            <div className="card-body p-5 text-center">
                                <form className="mb-md-5 mt-md-4 pb-5" autoComplete="off" onSubmit={onSubmit}>
 
                                    <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                                    <p className="text-white-50 mb-5">Please enter your email and password!</p>
 
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
                                    <hr/>
                                    <div className="form-white mb-4">
                                        <input 
                                            type="password"
                                            id="typePasswordX"
                                            className="form-control form-control-lg"
                                            value={password}
                                            onChange={e => setPassword(e.target.value)}
                                            required
                                        />
                                        <label 
                                            htmlFor="typePasswordX">Password
                                        </label>
                                    </div>
 
                                    <button className="btn btn-outline-light btn-lg px-5" type="submit">Login</button>
 
                                </form>
 
                                <div>
                                    <p className="mb-0">Don't have an account? <a href="#!" className="text-white-50 fw-bold" onClick={props.toogleLogin}>Sign Up</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
 }

export default LoginForm;