const CardList = (props) => {
    const CardItems = props.CardItems;
    const handleDelete = props.handleDelete;
    return(
        <div className="card">
        {CardItems.map( (item) => (
            <div className="cardItems" key={item.id}>
                <div className="image">
                    <img src={item.src} alt="" />
                </div>
                <div className="text">
                    <h3>Card {item.id}</h3>
                    {item.text}<br/>
                    <button className="btn" onClick={() => handleDelete(item.id)}>Delete</button>
                </div>

            </div>
        )

        )}
    </div>
    );
};

export default CardList;