import React, { Component } from 'react';
import PostItem from './PostItem';
import { savedPosts } from '../posts.json';
import css from "./css/Content.module.css";
import Loader from './Loader';

export class Content extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isLoaded: false,
            posts: []
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
        this.setState({
            posts: savedPosts
        })
    }

    handleChange = (event) => {
        const name = event.target.value.toLowerCase()
        const filteredPosts = savedPosts.filter(post => {
            return post.name.toLowerCase().includes(name)
        })
        this.setState({
            posts: filteredPosts
        })
    }

    render() {
        return (
            <div>
                <div className={css.TitleBar}>
                    <h1>My Photos</h1>
                    <form>
                        <label htmlFor="searchInput">Search:</label>
                        <input
                            onChange={(event) => this.handleChange(event)}
                            type="search"
                            id="searchInput"
                        />
                        <h4>posts found: {this.state.posts.length}</h4>
                    </form>
                </div>
                <div className={css.SearchResults}>
                    {
                        this.state.isLoaded == false ? <Loader /> : <PostItem savedPosts={this.state.posts}/>
                    }
                </div>
            </div>
        )
    }
}

export default Content