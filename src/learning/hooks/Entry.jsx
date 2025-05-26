import React from "react";
import Page from "./contextHook/App";
import Counter from "./useRefhook/App";

import FirstProblem from "../Interviews/FirstProblem";
const Entry = () => {

    return <>
        <>
            <span>UseContext hooks example</span>
            <Page />
            <span>useRef example</span>
            <Counter />

            <FirstProblem />
        </>
    </>
}

export default Entry