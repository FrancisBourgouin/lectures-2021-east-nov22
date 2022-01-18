export default function PlantListItem(props) {
  const { name, lastWatered, wateringIntervalInDays } = props;

  const differenceInDays = (lastWatered) => {
    const today = new Date();
    const lastWateredDate = new Date(lastWatered);

    const diffInMs = today.getTime() - lastWateredDate.getTime();
    const diffInDays = diffInMs / 1000 / 86400;

    return Math.floor(diffInDays);
  };

  const isWellWatered = differenceInDays(lastWatered) < wateringIntervalInDays;

  return (
    <article style={{ color: isWellWatered ? "green" : "red" }}>
      <h1>{name}</h1>
      <p>Last watered on: {lastWatered}</p>
    </article>
  );
}
