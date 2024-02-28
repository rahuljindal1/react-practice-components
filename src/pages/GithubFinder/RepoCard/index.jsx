import RepoCardItem from "./RepoCardItem.jsx/index.jsx";
import classes from "./styles.module.css";

export default function RepoCard({ repos }) {
  return (
    <div className={classes.container}>
      <div className={classes.title}>Public Repos</div>
      {repos.length > 0 && (
        <div className={classes.reposContainer}>
          {repos.map((repo) => (
            <RepoCardItem key={repo.id} repo={repo} />
          ))}
        </div>
      )}
      {repos.length <= 0 && (
        <div style={{ textAlign: "center", marginTop: "12px" }}>
          No Public Repos Found
        </div>
      )}
    </div>
  );
}
