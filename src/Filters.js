import './Filters.css';

function Filters(props) {
  return (
    <div>
      <div>
        <h2>Filters</h2>
        <button className = "filterButton" onClick={() => props.listReset()}>reset</button>

        <h3>Drink Type</h3>
        <button className = "filterButton" onClick={() => props.filterRender("type", "tea")}>tea</button>
        <button className = "filterButton" onClick={() => props.filterRender("type", "coffee")}>coffee</button>
        <button className = "filterButton" onClick={() => props.filterRender("type", "juice")}>juice</button>
        <button className = "filterButton" onClick={() => props.filterRender("type", "milk")}>milk</button>

        <h3>Caffienated</h3>
        <button className = "filterButton" onClick={() => props.filterRender("caffeine", "yes")}>yes</button>
        <button className = "filterButton" onClick={() => props.filterRender("caffeine", "no")}>no</button>

        <h2>Sort by</h2>
        <button className = "sortButton" onClick={() => props.sortList("abc")}>alphabetically</button>
        <button className = "sortButton" onClick={() => props.sortList("cheapest")}>price low to high</button>
        <button className = "sortButton" onClick={() => props.sortList("priciest")}>price high to low</button>

      </div>
    </div>
  );
}

export default Filters;
