import { storiesOf } from "@storybook/react";
import PlantList from "../components/PlantList";

const plants = [
  {
    id: 1,
    name: "Orchid",
    lastWatered: "2022-01-16",
    wateringIntervalInDays: 4,
  },
];

storiesOf("PlantList", module)
  .add("Populated array of plants", () => <PlantList plants={plants} />)
  .add("No plants", () => <PlantList />);
