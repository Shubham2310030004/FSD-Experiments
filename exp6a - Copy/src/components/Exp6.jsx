import axios from "axios";
import { useState } from "react";

export default function GithubFollowingTable() {
  const [result, setResult] = useState("Nothing");

  if (result === "Nothing") {
    axios.get("https://api.github.com/users/defunkt/following")
      .then((res) => {
        setResult(res.data);
        console.log(result);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }

  if (result !== "Nothing") {
    return (
      <div>
        Data
        <br /> <br />
        <table border={1}>
          <tr>
            <th>Login</th>
            <th>ID</th>
            <th>Node ID</th>
            <th>Avatar</th>
            <th>Gravatar ID</th>
            <th>URL</th>
            <th>HTML URL</th>
            <th>Followers URL</th>
            <th>Following URL</th>
            <th>Gists URL</th>
            <th>Starred URL</th>
            <th>Subscriptions URL</th>
            <th>Organizations URL</th>
            <th>Repos URL</th>
            <th>Events URL</th>
            <th>Received Events URL</th>
            <th>Type</th>
            <th>Site Admin</th>
          </tr>
          {result.map((user) => (
            <tr key={user.id}>
              <td>{user.login}</td>
              <td>{user.id}</td>
              <td>{user.node_id}</td>
              <td><img src={user.avatar_url} alt={user.login} width={50} /></td>
              <td>{user.gravatar_id || "N/A"}</td>
              <td><a href={user.url} target="_blank" rel="noopener noreferrer">API URL</a></td>
              <td><a href={user.html_url} target="_blank" rel="noopener noreferrer">Profile</a></td>
              <td><a href={user.followers_url} target="_blank" rel="noopener noreferrer">Followers</a></td>
              <td><a href={user.following_url} target="_blank" rel="noopener noreferrer">Following</a></td>
              <td><a href={user.gists_url} target="_blank" rel="noopener noreferrer">Gists</a></td>
              <td><a href={user.starred_url} target="_blank" rel="noopener noreferrer">Starred</a></td>
              <td><a href={user.subscriptions_url} target="_blank" rel="noopener noreferrer">Subscriptions</a></td>
              <td><a href={user.organizations_url} target="_blank" rel="noopener noreferrer">Organizations</a></td>
              <td><a href={user.repos_url} target="_blank" rel="noopener noreferrer">Repos</a></td>
              <td><a href={user.events_url} target="_blank" rel="noopener noreferrer">Events</a></td>
              <td><a href={user.received_events_url} target="_blank" rel="noopener noreferrer">Received Events</a></td>
              <td>{user.type}</td>
              <td>{user.site_admin ? "Yes" : "No"}</td>
            </tr>
          ))}
        </table>
      </div>
    );
  } else {
    return <div>Data is fetching</div>;
  }
}