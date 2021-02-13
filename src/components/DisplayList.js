import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { updateLink } from "../linkaction";
import "../App.css";

function DisplayList({ type, title, updateLink }) {
  updateLink(process.env.PUBLIC_URL);
  console.log(process.env.PUBLIC_URL);
  const posts = require(`../posts/${type}/${type}.json`);
  return (
    <div className="App">
      <h1>{title}</h1>
      <div>
        <ul id="wall">
          {posts.map((post, i) => (
            <li key={i}>
              <Link to={`${process.env.PUBLIC_URL}/${type}/${post.date}`}>
                {post.date}&nbsp;{post.title}
              </Link>
              &nbsp;-&nbsp;&#91;{post.category}&#93;&nbsp;
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateLink: (link) => dispatch(updateLink(link)),
  };
};

export default connect(null, mapDispatchToProps)(DisplayList);
