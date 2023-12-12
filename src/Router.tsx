import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Quiz from "./Quiz";
import History from "./History";
import Frame from "./Frame";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "",
                element: <Frame />,
                    children: [
                    {
                        path: "",
                        element: <Quiz />,
                    },
                    {
                        path: "/history",
                        element: <History />,
                    }
                ]
            }
        ]
    }
], {basename: "/2023_history_quiz"});

export default router;