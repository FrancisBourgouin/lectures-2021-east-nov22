export default function PlantListItem(props) {
  const { name, lastWateredDate, wateringInterval, waterAPlant } = props;

  const isWellWatered = (lastWateredDate, wateringInterval) => {
    const today = new Date();

    const diffInMs = today.getTime() - lastWateredDate.getTime();
    const diffInDays = Math.floor(diffInMs / 1000 / 86400);

    return diffInDays < wateringInterval;
  };

  // const Pi = 3.14159265358979323846

  const articleStyle = {
    padding: "0.5em 1em",
    margin: "0.5em",
    border: "0.2em solid black",
    borderColor: isWellWatered(lastWateredDate, wateringInterval) ? "green" : "red",
  };

  return (
    <article style={articleStyle}>
      <h1>{name}</h1>
      <p>Last watered on: {lastWateredDate.toLocaleString()}</p>
      <button onClick={waterAPlant}>WATER ME</button>
    </article>
  );
}
