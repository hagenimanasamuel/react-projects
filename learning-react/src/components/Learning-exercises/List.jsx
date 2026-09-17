import { useState } from "react";
// import "./list.css";
export default function List() {
    const [listType, setListType] = useState("ol");
    const items = ["food", "drink", "cabages", "Milk"];
    let ListTypeText = listType;
    return (
        <>
            <h1>List Items</h1>
            <button onClick={() => setListType(listType === 'ol' ? 'ul': 'ol')}>Change List type</button>
            {<ListTypeText>
                {
                    items.map((item, index) => (
                        <li key={index} className="listItem">{item}</li>
                    ))
                }
            </ListTypeText>
            }
        </>
    )
}