import { useEffect, useState } from "react";
import RepoCard from "../RepoCard";
import classes from "./styles.module.css";
import { FaExternalLinkAlt } from "react-icons/fa";
import { searchUserPublicRepos } from "../db";

export default function Card({ user }) {
  const [repos, setRepos] = useState([]);
  const [showRepos, setShowRepos] = useState(false);

  const visitRepo = () => {
    window.open(user.html_url, "_blank");
  };

  const formatDate = (date) => {
    const options = { day: "numeric", month: "long", year: "numeric" };
    return new Date(date).toLocaleDateString("en-IN", options);
  };

  const publicReposClickHandler = async () => {
    if (!showRepos) {
      await getUserPublicRepos();
    } else {
      setRepos([]);
    }
    setShowRepos((prevState) => !prevState);
  };

  const getUserPublicRepos = async () => {
    try {
      const userRepos = await searchUserPublicRepos(user.login);
      setRepos(userRepos);
    } catch (error) {
      setRepos([]);
    }
  };

  useEffect(() => {
    setShowRepos(false);
    setRepos([]);
  }, [user.login]);

  return (
    <div className={classes.container}>
      <div className={classes.profileCard}>
        <img
          className={classes.profileImage}
          src={user.avatar_url}
          alt="Github profile"
        />
        <div className={classes.contentContainer}>
          <div className={classes.nameWrapper} onClick={visitRepo}>
            <div className={classes.username}>{user.login}</div>
            <FaExternalLinkAlt />
          </div>
          <div className={classes.statsContainer}>
            <div
              onClick={publicReposClickHandler}
              className={`${classes.stat} ${showRepos ? classes.active : ""}`}
            >
              <div className={classes.statName}>Public Repos</div>
              <div className={classes.statValue}>{user.public_repos || 0}</div>
            </div>
            <div className={classes.stat}>
              <div className={classes.statName}>Followers</div>
              <div className={classes.statValue}>{user.followers || 0}</div>
            </div>
            <div className={classes.stat}>
              <div className={classes.statName}>Following</div>
              <div className={classes.statValue}>{user.following || 0}</div>
            </div>
          </div>
          <div>User joined on {<b>{formatDate(user.created_at)}</b>}</div>
        </div>
      </div>
      {showRepos && (
        <>
          <div className={classes.separator} />
          <div className={classes.reposCard}>
            <RepoCard repos={repos} />
          </div>
        </>
      )}
    </div>
  );
}
