import React from "react";
import TextField from "@material-ui/core/TextField";
import useStyles from "./repoListStyles";

function RepoInputForm(props) {
  const { handleChange, loadDependency, githubRepoUrl } = props;

  const classes = useStyles();

  return (
    <div>
      <form onSubmit={loadDependency}>
        <TextField
          name="githubRepoUrl"
          className={classes.textField}
          placeholder="repository url"
          fullWidth
          variant="filled"
          value={githubRepoUrl}
          onChange={handleChange}
        />
      </form>
    </div>
  );
}
export default RepoInputForm;
