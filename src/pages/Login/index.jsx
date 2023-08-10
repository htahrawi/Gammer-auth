import React, { useState } from 'react';
import Container from '../../components/Container';
import Input from '../../components/Inputs';
import { H1, Body } from '../../components/Typography';
import IconButton from '../../components/IconButton';
import Or from '../../components/Or';
import Button from '../../components/Button';
import './style.css';
import ICONS from '../../constants/icons';
import LogoGammer from '../../components/Logo';
import { PATHS } from '../../router/paths';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../contexts/AuthContext';
const Login = () => {

    const navigate = useNavigate();
    const { login, isLoading } = useAuthContext();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    })
    const handleSubmit = async (e) => {
        e.preventDefault();
        login(formData)
        navigate(PATHS.HOME, {replace: true})
    }
    // const handleInputChange = ({ target: { value, name } }) => {
    //     console.log(name);
    //     console.log(value);
    //     setFormData((prev => ({ ...prev, [name]: value })))
    // }
    const emailHandler = (e) => {
        e.preventDefault();
        setFormData(preState => ({ ...preState, 'email': e.target.value }))
    }
    const passwordHandler = (e) => {
        e.preventDefault();
        setFormData(preState => ({ ...preState, 'password': e.target.value }))
    }
    return (
        <div>
            <main className='login_page'>
                <div className='login_left'>
                    <LogoGammer
                        path1={'M65.72 35.2194C61.3051 44.4024 51.9151 50.7411 41.0447 50.7411C25.9324 50.7411 13.6815 38.4902 13.6815 23.3779C13.6815 13.4769 18.9401 4.80403 26.8167 -1.19638e-05C11.5515 2.86225 0 16.2603 0 32.3564C0 50.5384 14.7394 65.2778 32.9214 65.2778C50.1388 65.2778 64.2691 52.0608 65.72 35.2194Z'}
                        path2={'M79.0933 75.915C71.1335 82.275 59.9242 83.9152 50.1291 79.2021C36.5112 72.6496 30.7836 56.2983 37.3361 42.6804C41.6291 33.7585 50.128 28.2234 59.3087 27.3096C44.3119 23.2698 28.0933 30.3344 21.1142 44.8389C13.2307 61.2229 20.1217 80.8955 36.5057 88.779C52.0201 96.2441 70.4835 90.4613 79.0933 75.915Z'}
                        color={'#1565D8'}
                        ClassName={'login_logo'}
                    />
                    <p className='quts_mark'>“</p>
                    <p className='quts_text'>
                        I always observe the people who pass by when I ride an escalator.
                        I'll never see most of them again, so I imagine a lot of things
                        about their lives... about the day ahead of them.
                    </p>
                    <h5 className='author'>Hideo Kojima</h5>
                    <img src='/assets/game.png' alt='gear' className='gear_img' />
                </div>

                <div className='login_right'>
                    <Container>
                        <div className='titles'>
                            <H1 text='Join the game!' />
                            <Body text='Go inside the best gamers social network!' />
                        </div>

                        <div className='icons_box'>
                            <div className='line'></div>
                            {ICONS.map((item) => (
                                <IconButton
                                    icon={item.src}
                                    alt={item.alt}
                                    link={item.link}
                                    key={item.id}
                                />
                            ))}
                        </div>
                        <Or />
                        <form onSubmit={handleSubmit}>
                            <Input
                                label='Enter Your Email'
                                type='email'
                                id='email'
                                placeholder='Write your email'
                                onChange={emailHandler}
                            />
                            <Input
                                label='Enter your password'
                                type='password'
                                id='password'
                                placeholder='•••••••••'
                                onChange={passwordHandler}
                            />
                            <Button
                                text={`${isLoading ? 'Looooading' : 'login'}`}
                                className='btn btn-primary mt '
                            />
                            <p className='create_account'>
                                Don’t have an account?{' '}
                                {/* <span onClick={handleRegisterClick}>Register</span> */}
                                <span onClick={() => { navigate(PATHS.SIGNUP) }}>Register</span>
                            </p>
                        </form>
                    </Container>
                </div>
            </main>
        </div>
    );
}

export default Login;