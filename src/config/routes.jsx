import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home";
import NewQuestion from "../pages/NewQuestion";
import NewSnippet from "../pages/NewSnippet";
import Profile from "../pages/Profile";
import QuestionDetail from "../pages/QuestionDetail";
import Layout from "./../components/Layout";
import QuestionsListing from "./../pages/QuestionsListing";
import SnippetDetail from "./../pages/SnippetDetail";
import SnippetsListing from "./../pages/SnippetsListing";

const router = createBrowserRouter([
  {
    path: "/codeeter-forum/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "codeeter-forum/ask-question",
        element: <NewQuestion />,
      },
      {
        path: "codeeter-forum/questions",
        element: <QuestionsListing />,
      },
      {
        path: "codeeter-forum/question/:id",
        element: <QuestionDetail />,
      },
      {
        path: "codeeter-forum/add-snippet",
        element: <NewSnippet />,
      },
      {
        path: "codeeter-forum/snippets",
        element: <SnippetsListing />,
      },
      {
        path: "codeeter-forum/snippet/:id",
        element: <SnippetDetail />,
      },
      {
        path: "codeeter-forum/profile",
        element: <Profile />,
      },
    ],
  },
]);

const SiteRouter = () => {
  return <RouterProvider router={router} />;
};

export default SiteRouter;
