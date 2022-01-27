import { Component } from "react";
import axios from "axios";

import CommitList from "./components/CommitList";
import RepoForm from "./components/RepoForm";

import "./App.css";

// Github commit viewer (repo, owner)

// Form with repo & owner <- State (controlled form) Class Component
// CommitList / CommitListItem <- No State Functional Components
// App <- State (commitData) Class Component
class App extends Component {
  constructor() {
    super();

    this.state = {
      repo: "",
      owner: "",
      commitData: undefined,
    };
  }

  componentDidUpdate(prevProps, prevState) {
    const { owner, repo } = this.state;
    if (prevState.owner !== owner || prevState.repo !== repo) {
      axios.get(`https://api.github.com/repos/${owner}/${repo}/commits`).then((res) => {
        const newState = { ...this.state };
        newState.commitData = res.data;

        this.setState(newState);
      });
    }
  }

  updateRepoAndOwner = (formData) => {
    // this.setState({...this.state, ...formData})

    const newState = { ...this.state };
    newState.repo = formData.repo;
    newState.owner = formData.owner;

    this.setState(newState);
  };

  render() {
    const { commitData, repo, owner } = this.state;

    return (
      <div className="App">
        <h1>Classy Github Commit Viewer</h1>
        <RepoForm onSubmit={this.updateRepoAndOwner} />
        {commitData && <CommitList commitData={commitData} />}
      </div>
    );
  }
}

export default App;
