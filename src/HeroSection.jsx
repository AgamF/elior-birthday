import './HeroSection.css';
import { Component } from 'react';
import linkedInIcon from './icons8-linkedin-64.png';
import ytIcon from './icons8-youtube-64.png';

class HeroSection extends Component {
    constructor() {
        super();
        this.state = {
            isDefaultText: true
        }
    }

    changeText = () => {
        this.setState({isDefaultText: false})
    }

    changeBack = () => {
        this.setState({isDefaultText: true})
    }

    render() {
        const { isDefaultText } = this.state;
        if (isDefaultText) {
            return (
                <div className='hero-wrapper'>
                    <div className='text-container'>
                        <h1 className='animate__animated animate__fadeInDown'>Elior Farajpur.</h1>
                        <p className='animate__animated animate__fadeInUp'>The product is the people.</p>
                    </div>
                    <div className='animate__animated animate__fadeInUp'>
                        <button onClick={this.changeText}>Change text</button>
                    </div>
                    <div className='links-wrapper'>
                        <div>
                            <a href='https://il.linkedin.com/in/elior-farajpur-644604175'><img src={linkedInIcon}/></a>
                            <p>My Linkedin</p>
                        </div>
                        <div>
                            <a href='https://www.youtube.com/user/elior379'><img src={ytIcon}/></a>
                            <p>My Youtube</p>
                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                <div className='hero-wrapper'>
                    <div className='text-container'>
                        <h1>Elior Farajpur.</h1>
                        <p id='text'>Get Vaccinated.</p>
                    </div>
                    <div>
                        <button onClick={this.changeBack}>Change text</button>
                    </div>
                    <div className='links-wrapper'>
                        <div>
                            <a href='https://il.linkedin.com/in/elior-farajpur-644604175'><img src={linkedInIcon}/></a>
                            <p>My Linkedin</p>
                        </div>
                        <div>
                            <a href='https://www.youtube.com/user/elior379'><img src={ytIcon}/></a>
                            <p>My Youtube</p>
                        </div>
                    </div>
                </div>
            )
        }
    }
}

export default HeroSection;