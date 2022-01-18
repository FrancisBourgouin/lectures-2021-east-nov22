import { storiesOf } from "@storybook/react";
import PlantListItem from "../components/PlantListItem";

const wellWatered = {
  id: 1,
  name: "Orchid",
  lastWatered: "2022-01-16",
  wateringIntervalInDays: 4,
};

const badlyWatered = {
  id: 1,
  name: "Orchid",
  lastWatered: "2022-01-01",
  wateringIntervalInDays: 4,
};
storiesOf("PlantListItem", module)
  .add("Well Watered Plant", () => <PlantListItem {...wellWatered} />)
  .add("Badly Watered Plant", () => <PlantListItem {...badlyWatered} />);
