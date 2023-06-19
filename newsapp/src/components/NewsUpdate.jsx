import React, { Component } from 'react'
import NewsItem from './NewsItem'


export class NewsUpdate extends Component {
    render() {
        return (
            <>
                <div>
                    <div className='container mx-auto my-3 flex-col'>
                        <p className='text-2xl font-semibold flex justify-start pl-36'> Sports Top Headlines </p>
                        <div className=" flex gap-16 justify-center my-3">
                            <div className="">
                                <NewsItem
                                    title='mySubject'
                                    description='myDetails'
                                    
                                    />
                            </div>
                            <div className="">
                                <NewsItem title='mySubject' description='myDetails' />
                            </div>
                            <div className="">
                                <NewsItem title='mySubject' description='myDetails' />
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default NewsUpdate