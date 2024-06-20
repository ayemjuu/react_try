import HouseRow from "./houseRow";

const houses = [
    {
        id:1,
        address: "hatdog",
        country: "new zealand",
        price: 99999,
    },
    {
        id:2,
        address: "cheese burger",
        country: "new york",
        price: 1234,
    },
]




const HouseList = () => {


    return (
        // react fragment
        //dapat isa yung parent
        <> 
            <div className="row mb-2">
                <h5 className="themeFontColor text-center">
                    Razzer Mantis Speed
                </h5>
            </div>

            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Address</th>
                        <th>Country</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {houses.map(h => <HouseRow key = {h.id} house={h} />)}
                    {/* {houses.map(h => (
                        <tr key ={h.id}>
                            <td>{h.address}</td>
                            <td>{h.country}</td>
                            <td>{h.price}</td>
                        </tr>
                    ))} */}

                </tbody>
            </table>
        </>
    )
};

export default HouseList;