import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleLg">Blog Application</span>
        <span className="headerTitleSm">Using MERN STACK</span>
      </div>
      <img
        className="headerImg"
        // src="https://images.pexels.com/photos/1167355/pexels-photo-1167355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        src="https://images.unsplash.com/photo-1512386233331-f023884a92e8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1195&q=80"
        alt=""
      />
    </div>
  );
}
