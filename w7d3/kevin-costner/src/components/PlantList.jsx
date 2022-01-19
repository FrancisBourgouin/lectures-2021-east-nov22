import PlantListItem from "./PlantListItem";

export default function PlantList(props) {
  const { plants, waterAPlant } = props;

  // const listOfPlantsIsAnArray = Array.isArray(listOfPlants);
  const parsedPlants =
    Array.isArray(plants) &&
    plants.map((plant) => (
      <PlantListItem
        key={plant.id}
        {...plant}
        waterAPlant={() => waterAPlant(plant.id)}
      />
    ));

  return <section>{parsedPlants}</section>;
}
