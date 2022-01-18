import PlantListItem from "./PlantListItem";

export default function PlantList(props) {
  const { plants } = props;
  // const parsedPlantListItems = [];
  // for (const plant of plants) {
  //   parsedPlantListItems.push(<PlantListItem {...plant} />);
  // }
  const parsedPlants =
    Array.isArray(plants) &&
    plants.map((plant) => <PlantListItem key={plant.id} {...plant} />);
  return (
    <section>
      {Array.isArray(plants) && <h1>ALL THE PLANTS</h1>}
      {!Array.isArray(plants) && <h1>THERE IS NO PLANTS</h1>}
      {parsedPlants}
    </section>
  );
}
