import { useEffect, useReducer } from "react";
import RepoCard from "../RepoCard";
import classes from "./styles.module.css";
import { FaExternalLinkAlt } from "react-icons/fa";
import { searchUserPublicRepos } from "../db";

const initialRepoState = {
  repos: [],
  showRepos: false,
};

const repoActions = {
  SET_REPOS: "set_repos",
  SET_SHOW_REPOS: "set_show_repos",
};

const repoReducer = (state, action) => {
  switch (action.type) {
    case repoActions.SET_SHOW_REPOS:
      return {
        ...state,
        showRepos:
          action.payload !== undefined ? action.payload : !state.showRepos,
      };
    case repoActions.SET_REPOS:
      return { ...state, repos: action.payload };
    default:
  }
};

export default function Card({ user }) {
  const [repoState, dispatch] = useReducer(repoReducer, initialRepoState);
  console.log(repoState);

  const visitRepo = () => {
    window.open(user.html_url, "_blank");
  };

  const formatDate = (date) => {
    const options = { day: "numeric", month: "long", year: "numeric" };
    return new Date(date).toLocaleDateString("en-IN", options);
  };

  const publicReposClickHandler = async () => {
    if (!repoState.showRepos) {
      await getUserPublicRepos();
    } else {
      dispatch({ type: repoActions.SET_REPOS, payload: [] });
    }
    dispatch({ type: repoActions.SET_SHOW_REPOS });
  };

  const getUserPublicRepos = async () => {
    try {
      const userRepos = await searchUserPublicRepos(user.login);
      dispatch({ type: repoActions.SET_REPOS, payload: userRepos });
    } catch (error) {
      dispatch({ type: repoActions.SET_REPOS, payload: [] });
    }
  };

  useEffect(() => {
    dispatch({ type: repoActions.SET_SHOW_REPOS, payload: false });
    dispatch({ type: repoActions.SET_REPOS, payload: [] });
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
              className={`${classes.stat} ${
                repoState.showRepos ? classes.active : ""
              }`}
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
      {repoState.showRepos && (
        <>
          <div className={classes.separator} />
          <div className={classes.reposCard}>
            <RepoCard repos={repoState.repos} />
          </div>
        </>
      )}
    </div>
  );
}
