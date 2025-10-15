const FilterCoins = ({searchTerm, onFilterCoins}) => {
    return (
        <div className="filter">
            <input 
                type="text"
                placeholder="Filter coins by name or symbol"
                value={searchTerm}
                onChange={(e) => onFilterCoins(e.target.value)}
            />
        </div>
    );
}
 
export default FilterCoins;