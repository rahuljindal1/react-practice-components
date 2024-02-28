import classes from "./styles.module.css";

export default function RepoCardItem({ repo }) {
  const visitRepo = () => {
    window.open(repo.html_url, "_blank");
  };

  const showEllipsisedContent = (content, maxCharacter) => {
    if (!content) {
      return "";
    }

    if (content.length < maxCharacter) {
      return content;
    }
    return `${content.slice(0, maxCharacter)}...`;
  };

  return (
    <div className={classes.container}>
      <div onClick={visitRepo} title={repo.name} className={classes.repoName}>
        {showEllipsisedContent(repo.name, 20)}
      </div>
      <div title={repo.description} className={classes.repoDescription}>
        {showEllipsisedContent(repo.description, 100)}
      </div>
    </div>
  );
}
