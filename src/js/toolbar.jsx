import propTypes from 'prop-types';

const Toolbar = ({ filters, selected, onSelectFilter }) => {    

    return (
        <div className="toolbar-container">
            { filters.map(filter => (
                <button
                    key={ filter }
                    onClick={() => onSelectFilter(filter)}
                    style={{fontWeight: filter === selected ? 'bold' : 'normal',

                    }}
                >
                    {filter}
                </button>
            ))}
        </div>
    );
};


Toolbar.propTypes = {
    filters: propTypes.arrayOf(propTypes.string).isRequired,
    selected: propTypes.string.isRequired,
    onSelectFilter: propTypes.func.isRequired,
};

export default Toolbar;