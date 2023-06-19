import React, { Component } from 'react'
import hokeySports from '../Image/hokey.jpg'

export class NewsItem extends Component {
    
    constructor(){
        super();
    }
    
    render() {
        let { title, description } = this.props;
        return (
            <div className='border w-[290px] h-[310px] rounded-lg my-2'>
                <div className="card" style={{ width: "18rem" }}>
                    <img src={hokeySports} className="rounded-lg" alt="..." />
                    <div className="p-2">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <button className='h-10 w-24 border bg-blue-500  text-white rounded-lg'>Read More</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem