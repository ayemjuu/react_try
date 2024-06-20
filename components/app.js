import Banner from "./banner.js";
import HouseList from "./houseList.js";

const App  =() => {

    const jsx = <div>hi</div>

    return (
        <>
            {jsx}
            <Banner>
                <div>HHHAHAHAHHA</div>
            </Banner>

     {/* <Banner headerText ="ahahahhahahahha" /> */}

            <HouseList></HouseList>
        </>
    );
};

export default App;