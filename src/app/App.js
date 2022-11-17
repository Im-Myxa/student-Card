import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import CreateStudentCard from "./components/createStudentCard";
import EditStudentCard from "./components/editStudentCard";
import StudentCard from "./components/studentCard";

function App() {
    return (
        <>
            <Switch>
                <Route path="/" exact component={StudentCard} />
                <Route path="/create" component={CreateStudentCard} />
                <Route path="/edit" exact component={EditStudentCard} />

                <Redirect to="/" />
            </Switch>
        </>
    );
}

export default App;
