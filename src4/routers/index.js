import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Navigation from "./Routers"; 

export default function index() {
    return (
        <NavigationContainer>
            <Navigation />
        </NavigationContainer>
    )
}