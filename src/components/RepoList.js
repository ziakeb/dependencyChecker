import React from "react";
import useStyles from "./repoListStyles";
import DependencyTable from "./DependencyTable";
import axios from "axios";

import Dependency from "../models/dependency";
import RepoInputForm from "./RepoInputForm";
// const npmFetch = require('npm-registry-fetch')

const packages = [
  new Dependency("handlebars", "4.0.10", "4.0.11", "Yes"),
  new Dependency("webpack", "4.0.10", "4.0.11", null, "Yes"),
];

const RepoList = () => {
  const classes = useStyles();
  const [state, setState] = React.useState({
    packages: [],
    githubRepoUrl: "",
  });

  const loadDependency = async (e) => {
    e.preventDefault();
    let urlArr = state.githubRepoUrl.split("/");
    let owner = urlArr[3];
    let repo = urlArr[4];
    let requestUrl = `https://api.github.com/repos/${owner}/${repo}/contents`;
    let res = await axios.get(requestUrl);
    console.log(res.data);
    if (res.data) {
      console.log(res.data);
      let packJson = res.data.find((f) => f.name === "package.json");
      console.log({ packJson });
      let packageUrl = packJson.download_url;
      res = await axios.get(packageUrl);
      console.log(res.data);

      let dependencies = res.data.dependencies;
      console.log({ dependencies });

      let dependencyArr = [];

      for (let key in dependencies) {
        let pName = key;
        let current = dependencies[key];
        let npmRegistryUrl = `/${pName}`;
        let config = {
          method: "get",
          url: npmRegistryUrl,
        };

        let res = await axios(config, { withCredentials: true });
        let data = res.data;
        console.log({ data });
        let latest = data["dist-tags"].latest;
        let foundVersion = data.versions[current.substr(1)];

        let outdated = foundVersion.deprecated ? "Yes" : "No";

        let newDependency = new Dependency(pName, current, latest, outdated);
        dependencyArr.push(newDependency);
      }

      console.log({ dependencyArr });

      setState({
        ...state,
        packages: dependencyArr,
      });
    }
  };

  const handleChange = (e) => {
    console.log(e.target);
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <section className={classes.appHeader}>
        <h1>Github <span>Repo</span> Dependency Checker</h1>
        <h2>Enter github repository URL to check the dependencies and their status.</h2>
      </section>
      <RepoInputForm
        githubRepoUrl={state.githubRepoUrl}
        loadDependency={loadDependency}
        handleChange={handleChange}
      />
      <DependencyTable packages={state.packages} />
    </div>
  );
};

export default RepoList;
