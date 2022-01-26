export default function CityHistoryListItem(props) {
  // Always showing, Props: previousCity
  const { city, onClick } = props;
  return <button onClick={onClick}>{city}</button>;
}
