import React from "react";



const List = (props) => {
    return (
        <>
            <div className="list__style">
                <i onClick={() => {
                    props.onSelect(props.id)
                }}>❌</i>
                <li>{props.text}</li>
            </div>
        </>

    );
};
export default List;