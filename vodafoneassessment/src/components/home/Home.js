import React, {Component} from "react";

import Slider from "../home/slider/Slider";
import Section from "../home/sections/Section";
import axios from 'axios';
import { ArrowRightOutlined, SearchOutlined } from '@ant-design/icons';

import './Home.css';

class Home extends Component {

    state = {
        home: "",
        page2: "",
        error: false,
        components: [
            {value: "Homepage"},
            {value: "All"},
            {value: "Section 1"},
            {value: "Section 2"},
            {value: "Page 2"}
        ],
        isSearchFocus: false,
        search: ""

    }

    componentDidMount() {
        const components = axios.get('https://voda-react-assessment.herokuapp.com/menu')
        .then(response => {
            this.setState({
                home: response.data[0].title,
                page2: response.data[1].title
            });

        })
            
    }

    render() {
        let filteredComponents = this.state.components.filter((element) => {
            return element.value.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
        });
        return (
         <div>
             <nav>
                 <ul className="nav-links">
                     <li>
                         <label>
                             {this.state.home}
                         </label>
                         <li className="activeComponent1"></li>
                     </li>
                     <li>
                         <label
                             onClick={() => this.props.history.push('/page2')}>
                             {this.state.page2}
                         </label>
                     </li>
                 </ul>
             </nav>
             <div className="search-box">
                 <label className="search-btn">
                     {this.state.isSearchFocus ?
                            <ArrowRightOutlined icon={ArrowRightOutlined} /> :
                            <SearchOutlined icon={SearchOutlined} />  }
                 </label> 
                 <input
                     type="text"
                     className="search"
                     placeholder="type to search..."
                     value={this.state.search}
                     onBlur={() => this.setState({isSearchFocus: false})}
                     onClick={() => this.setState({isSearchFocus: true})}
                     onChange={(event) =>
                         this.setState({search: event.target.value.substr(0, 20)})}/>
                 <div className="components">
                     <ul>
                         {filteredComponents.map((element, index) => {
                             return <li
                                 className={element.value === "All" ||
                                 element.value === "Section 1" ||
                                 element.value === "Section 2" ? "setTab" : null}
                                 key={index}>
                                 {element.value}
                             </li>;
                         })}
                     </ul>
                 </div>
             </div>
             <Slider />
             <Section />
         </div>
        )
    }
}

export default Home;