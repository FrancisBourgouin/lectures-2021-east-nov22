export default function CommitListItem(props) {
  const { commit } = props;
  return <div>{commit.message}</div>;
}
