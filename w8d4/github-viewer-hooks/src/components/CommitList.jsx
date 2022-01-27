import CommitListItem from "./CommitListItem";

export default function CommitList(props) {
  const { commitData } = props;

  const parsedCommits =
    Array.isArray(commitData) &&
    commitData.map((commit) => <CommitListItem key={commit.sha} {...commit} />);

  return <section>{parsedCommits}</section>;
}
