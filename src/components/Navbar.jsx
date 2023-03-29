import React from "react";
import { useSelector } from "react-redux";
import { store } from "../store";


export default function Navbar() {
    const {amount} = useSelector((store) => store.cart);

    return (
        <div>
            <h2>PRODUCT</h2>
        </div>
    )
}