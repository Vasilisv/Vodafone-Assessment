import React, {Component} from "react";


import { Row } from 'antd';
import { EyeOutlined } from '@ant-design/icons';
import "./Section1.css"



class Section1 extends Component {

    render() {
        return (
            <div className="container">

                <div className="box1">
                    <div className="icon">
                        <i>
                          
                            <EyeOutlined className="Eye" icon={EyeOutlined} />
                            <h5 className="title">{this.props.images[0].title}</h5>
                        </i>
                    </div>
                    <div className="content1">
                        <img src={this.props.images[0].imgSource} />
                    </div>
                </div>

                <Row gutter={[16, 24]}>
                   
                <div className="box">
                    <div className="icon">
                        <i>
                            <EyeOutlined className="Eye" icon={EyeOutlined} />
                            <h5 className="title">{this.props.images[1].title}</h5>
                        </i>
                    </div>
                    <div className="content">
                        <img src={this.props.images[1].imgSource} />
                    </div>
                </div>
                

                    
                <div className="box">
                    <div className="icon">
                        <i>
                            <EyeOutlined className="Eye" icon={EyeOutlined} />
                            <h5 className="title">{this.props.images[2].title}</h5>
                        </i>
                    </div>
                    <div className="content">
                        <img src={this.props.images[2].imgSource} />
                    </div>
                        </div>
                      

                <div className="box">
                    <div className="icon">
                        <i>
                            <EyeOutlined className="Eye" icon={EyeOutlined} />
                            <h5 className="title">{this.props.images[3].title}</h5>
                        </i>
                    </div>
                    <div className="content">
                        <img src={this.props.images[3].imgSource} />
                    </div>
                        </div>

               
                <div className="box">
                    <div className="icon">
                        <i>
                            <EyeOutlined className="Eye" icon={EyeOutlined} />
                            <h5 className="title">{this.props.images[4].title}</h5>
                        </i>
                    </div>
                    <div className="content">
                        <img src={this.props.images[4].imgSource} />
                    </div>
                        </div>
                     
                </Row>
                
                   
             
               
            </div>
        );
    }
}

export default Section1;