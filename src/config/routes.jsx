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
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "ask-question",
        element: <NewQuestion />,
      },
      {
        path: "questions",
        element: <QuestionsListing />,
      },
      {
        path: "question/:id",
        element: <QuestionDetail />,
      },
      {
        path: "add-snippet",
        element: <NewSnippet />,
      },
      {
        path: "snippets",
        element: <SnippetsListing />,
      },
      {
        path: "snippet/:id",
        element: <SnippetDetail />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
    ],
  },
]);

const SiteRouter = () => {
  return <RouterProvider router={router} />;
};

export default SiteRouter;
