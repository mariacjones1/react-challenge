import React, { Component } from 'react';
import PostItem from './PostItem';
import { savedPosts } from '../posts.json';
import css from "./css/Content.module.css";

export class Content extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <div className={css.TitleBar}>
                    <h1>My Photos</h1>
                </div>
                <div className={css.SearchResults}>
                    <PostItem savedPosts={savedPosts}/>
                </div>
            </div>
        )
    }
}

export default Content