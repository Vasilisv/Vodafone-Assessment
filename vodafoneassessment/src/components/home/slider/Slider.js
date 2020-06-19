import React, {Component} from "react";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import {Slide} from "react-slideshow-image";

import "./Slider.css";




class Slider extends Component {


    state = {
        error: false,
        slides: [
            {
                title: "",
                subtitle: "",
                image: ""
            },
            {
                title: "",
                subtitle: "",
                image: ""
            },
            {
                title: "",
                subtitle: "",
                image: ""
            }
        ]
    }

    
    
    componentDidMount() {
        const slides = axios.get('https://voda-react-assessment.herokuapp.com/slider')
        .then(response => {
            let slides = [];
            response.data.map((element) => {
                let newObj = {
                    title: element.title,
                    subtitle: element.subtitle,
                    image: element.image
                }
                slides.push(newObj);
            });
            this.setState({slides});
        })
            .catch(error => {
                this.setState({error: true});
                toast.error("Error.");
            });
    }
    

    render() {
        const properties = {
            duration: 5000,
            transitionDuration: 500,
            infinite: true,
            indicators: true,
            arrows: true,
            pauseOnHover: true,
        }

        return (
            <div className="slide-container">
                <Slide className="each-slide" {...properties}>
                    <div className="each-slide">
                        <h2>{this.state.slides[0].title}</h2> <br/>
                        <span>{this.state.slides[0].subtitle}</span> <br/> <br/>
                        <img src={this.state.slides[0].image} width="1500" height="330"/>
                    </div>
                    <div className="each-slide">
                        <h2>{this.state.slides[1].title}</h2> <br/>
                        <span>{this.state.slides[1].subtitle}</span> <br/> <br/>
                        <img src={this.state.slides[1].image} width="1500" height="330"/>
                    </div>
                    <div className="each-slide">
                        <h2>{this.state.slides[2].title}</h2> <br/>
                        <span>{this.state.slides[2].subtitle}</span> <br/> <br/>
                        <img src={this.state.slides[2].image} width="1500" height="330"/>
                    </div>
                </Slide>

                {this.state.error ?
                    <ToastContainer
                        position="top-right"
                        autoClose={5000}
                        hideProgressBar
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnVisibilityChange
                        draggable
                        pauseOnHover
                    /> : null}
            </div>
        );
    }
}

export default Slider;