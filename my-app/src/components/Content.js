import React, { Component } from 'react';
import PostItem from './PostItem';
import { savedPosts } from '../posts.json';
import css from "./css/Content.module.css";
import Loader from './Loader';

export class Content extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isLoaded: false
        }
    }

    getData() {
        setTimeout(() => {
            this.setState({
                isLoaded: true
            })
        }, 2000)
    }

    componentDidMount() {
        this.getData()
    }

    render() {
        return (
            <div>
                <div className={css.TitleBar}>
                    <h1>My Photos</h1>
                </div>
                <div className={css.SearchResults}>
                    {
                        this.state.isLoaded == false ? <Loader /> : <PostItem savedPosts={savedPosts}/>
                    }
                </div>
            </div>
        )
    }
}

export default Content