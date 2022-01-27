import { Component } from "react";

class RepoForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      owner: "",
      repo: "",
    };
    // this.setState

    // this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount() {
    console.log("YO YO YO");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("CHANGE", prevProps, prevState);
  }

  componentWillUnmount() {}

  handleChange = (event) => {
    const { name, value } = event.target;

    const newState = { ...this.state };
    newState[name] = value;

    this.setState(newState);
  };

  handleSubmit = (event) => {
    event.preventDefault();

    this.props.onSubmit(this.state);
  };

  render() {
    const { repo, owner } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" name="repo" value={repo} onChange={this.handleChange} />
        <input type="text" name="owner" value={owner} onChange={this.handleChange} />
        <button>Search Commits</button>
      </form>
    );
  }
}

export default RepoForm;
