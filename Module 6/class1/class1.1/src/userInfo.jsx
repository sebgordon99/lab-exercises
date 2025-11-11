const UserInfo = (user) => {
  console.log(user);
  return (
    <div className="UserInfo">
      {" "}
      {/* the user info is one aspect of the comment */}
      <img className="Avatar" src={user.avatarUrl} alt={user.name} />
      <div className="UserInfo-name">{user.name}</div>
    </div>
  );
};

export const Comment = (props) => {
  return (
    <div className="Comment componentBox">
      <UserInfo user={props.author} />{" "}
      {/* here we pass the author prop down to the UserInfo component */}
      <div className="Comment-text">{props.text}</div>
      <div className="Comment-date">{props.date.toLocaleString()}</div>
    </div>
  );
};
