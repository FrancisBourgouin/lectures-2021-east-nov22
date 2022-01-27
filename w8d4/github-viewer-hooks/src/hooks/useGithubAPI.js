import { useState, useEffect } from "react";
import axios from "axios";
export default function useGithubAPI() {
  const [state, setState] = useState({
    repo: "",
    owner: "",
    commitData: undefined,
  });
  const { repo, owner, commitData } = state;

  useEffect(() => {
    if (owner && repo) {
      axios.get(`https://api.github.com/repos/${owner}/${repo}/commits`).then((res) => {
        const newState = { ...state };
        newState.commitData = res.data;

        setState(newState);
      });
    }
  }, [repo, owner]);

  const updateRepoAndOwner = (formData) => {
    // this.setState({...this.state, ...formData})

    const newState = { ...state };
    newState.repo = formData.repo;
    newState.owner = formData.owner;

    setState(newState);
  };

  return [commitData, updateRepoAndOwner];
}
