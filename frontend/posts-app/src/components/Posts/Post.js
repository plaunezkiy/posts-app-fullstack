import React from "react";
import Card from "../UI/Card/Card";
import styles from "./Post.module.css";

const Post = (props) => {
  //<img src="" className="card-img-top" alt="..." >
  return (
    <div className="col-xl-4 col-md-6 mb-4">
      <div className="card">
        <div className="card-img-top bg-dark text-white">Image Cap</div>
        <div className="card-body">
          <h5 className="card-title">{props.author}</h5>
          <p className="card-text">{props.text}</p>
          <a className="btn btn-primary">Read more from this author</a>
        </div>
      </div>
    </div>
  );
};

export default Post;
