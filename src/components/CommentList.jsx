import Comment from "./Comment";
import "./CommentList.css";

const CommentList = ({ comments = [], blogId }) => {
	return (
		<div className="CommentList">
			<h3 className="title">Comments</h3>
			{comments.length ? (
				<ul>
					{comments.map((c) => (
						<Comment key={c.id} {...c} blogId={blogId} />
					))}
				</ul>
			) : (
				<p>Sorry, there are no comments yet...</p>
			)}
		</div>
	);
};

export default CommentList;
