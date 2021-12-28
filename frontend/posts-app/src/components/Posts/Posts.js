import React, { useEffect, useState } from "react";
import NewPost from "./NewPost";
import Post from "./Post";

const DUMMY_POSTS = [
  {
    id: 1,
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi cum eveniet id iusto maxime molestiae optio, placeat qui totam voluptas. Dolore ex maiores saepe? Eius et nam quaerat sunt veniam?",
    author: "plaun",
  },
  {
    id: 2,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit odit, ratione minus numquam, eveniet adipisci doloribus illo nulla officiis sit dignissimos modi in consequatur perferendis iure repellat quasi.",
    author: "plaun",
  },
  {
    id: 3,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis ad ut commodi veniam eveniet suscipit omnis eius itaque at provident sunt, earum, beatae dolore alias ullam eaque delectus ex tempore.",
    author: "plaun",
  },
  {
    id: 4,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam beatae officiis obcaecati rerum, facilis quis totam doloremque similique voluptas minima ipsam, laborum harum neque est laudantium mollitia, architecto qui quibusdam.",
    author: "plaun",
  },
];

const Posts = (props) => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch("http://192.168.0.107:8000/api/posts/");

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const responseData = await response.json();

      const loadedPosts = [];

      for (let post of responseData) {
        loadedPosts.push(post);
      }

      setPosts(loadedPosts);
      setIsLoading(false);
    };

    fetchPosts().catch((error) => {
      setIsLoading(false);
      setHttpError(error.message);
    });
  }, [didSubmit]);

  const submitHandler = async (postData) => {
    setIsSubmitting(true);

    await fetch("http://192.168.0.107:8000/api/posts/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: postData.text, author: "1" }),
    });
    setIsSubmitting(false);
    setDidSubmit(true);
  };

  const postsData = posts.map((post) => (
    <Post key={post.id} text={post.text} author={post.author} />
  ));

  let content = postsData;
  if (isLoading) {
    content = <p className="text-center">Loading...</p>;
  }
  if (httpError) {
    content = <p className="text-center text-danger">{httpError}</p>;
  }

  const isSubmittingModalContent = (
    <React.Fragment>
      <div className="modal-header">
        <h5 className="modal-title">Your post is being submitted</h5>
      </div>
      <div className="modal-body">
        Please wait, your post is currently being sent to our server :)
      </div>
    </React.Fragment>
  );

  const didSubmitModalContent = (
    <React.Fragment>
      <div className="modal-header">
        <h5 className="modal-title">Woo-Hoo</h5>
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
        ></button>
      </div>
      <div className="modal-body">Success. The post has been created.</div>
    </React.Fragment>
  );

  return (
    <div className="container mt-5">
      <div
        className="modal fade"
        tabIndex="-1"
        id="create-post-form"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            {!isSubmitting && !didSubmit && (
              <NewPost onSubmit={submitHandler} />
            )}
            {isSubmitting && isSubmittingModalContent}
            {!isSubmitting && didSubmit && didSubmitModalContent}
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="d-grid gap-2">
            <button className="btn btn-lg btn-outline-primary">
              Load Posts
            </button>
            <button
              className="btn btn-lg btn-outline-primary"
              data-bs-toggle="modal"
              data-bs-target="#create-post-form"
            >
              Create Post
            </button>
          </div>
        </div>
        <div className="col-md-8">
          <div className="row">{content}</div>
        </div>
      </div>
    </div>
  );
};

export default Posts;
