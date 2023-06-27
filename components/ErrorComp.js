import { useRouteError } from "react-router-dom";

const ErrorComp = () => {
    const error = useRouteError();
    console.log(error);
    return (
        <>
            <h1>OOPs Something Went Wrong!!!</h1>
            <h2>{"status : "+error.status+" "+error.statusText}</h2>
        </>
    );
};

export default ErrorComp;