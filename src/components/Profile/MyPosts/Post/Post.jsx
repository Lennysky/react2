import React from 'react';
import classes from './Post.module.css';

const Post = (props) => {


    return (
        <div className={classes.item}>
            <img
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXeIuKElSOTid6MF787c7UTMwFPgQa7oF1ew&usqp=CAU'/>
            {props.message}
            <div>
                {props.likeCounts}
            </div>
            <div>
                <span>like</span>
            </div>
        </div>
    )
}

export default Post;