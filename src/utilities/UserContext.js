import { createContext } from "react";

const UserContext = createContext(   // the data passed in here is the dafulat data
    {
        loggedInUser :"DefaultValue"
    }
);

export default UserContext;