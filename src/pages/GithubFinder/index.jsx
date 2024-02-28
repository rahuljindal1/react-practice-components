import { useState } from "react";
import classes from "./styles.module.css";
import { searchUser } from "./db";
import { toast } from "react-toastify";
import Card from "./Card";

export default function GithubFinder() {
  const [keyword, setKeyword] = useState("");
  const [user, setUser] = useState({});

  const searchHandler = (e) => {
    const value = e.target.value;
    setKeyword(value.trim());
  };

  const searchGithubUser = async () => {
    if (!keyword) {
      return;
    }

    try {
      const githubUser = await searchUser(keyword);
      if (!githubUser) {
        return toast.error("No user found with the given username");
      }

      setUser(githubUser);
    } catch (error) {
      return toast.error("No user found with the given username");
    }
  };

  return (
    <div className={classes.container}>
      <header className={classes.title}>Github Finder</header>
      <main className={classes.mainSection}>
        <div className={classes.searchContainer}>
          <input
            name="github-search"
            onChange={searchHandler}
            value={keyword}
            placeholder="Enter Github Username ( eg. rahuljindal1 )"
            onKeyUp={(e) => {
              if (e.key === "Enter") {
                searchGithubUser();
              }
            }}
            required
          />
          <button
            title={!keyword ? "Please provide username in search box" : ""}
            disabled={!keyword}
            onClick={searchGithubUser}
          >
            Search Account
          </button>
        </div>
        {Object.keys(user).length > 0 && <Card user={user} />}
      </main>
    </div>
  );
}
