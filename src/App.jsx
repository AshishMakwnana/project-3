import React from "react";
import Card from "./Card";
import data from "./Sdata"
import "./App.css"



function App() {

    return (
        <>
            <h1 className="heading__title">List of Netflix seriese</h1>
            {
                {/* map methodes  */}
                data.map((val) => {
                    return (
                        <Card
                            imgsrc={val.imgsrc}
                            title={val.title}
                            sname={val.sname}
                            link={val.link}
                        />
                    )
                })
            }
        </>
    )
}

export default App;