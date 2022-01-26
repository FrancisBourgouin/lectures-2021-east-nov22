import CityHistoryListItem from "./CityHistoryListItem";

export default function CityHistoryList(props) {
  // Showing when previousCities.length > 1, Props: previousCities
  const { previousCities, updateCurrentCity } = props;

  const parsedItems =
    Array.isArray(previousCities) &&
    previousCities.map((city) => (
      <CityHistoryListItem
        key={city}
        city={city}
        onClick={() => updateCurrentCity({ cityName: city })}
      />
    ));

  return (
    <section data-testid="cityHistoryList">
      <h1>Previously searched cities</h1>
      <div>{parsedItems}</div>
    </section>
  );
}
