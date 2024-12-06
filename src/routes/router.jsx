import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import UpdateProfile from "../components/UpdateProfile";
import AddReview from "../pages/AddReview";
import AllReviews from "../pages/AllReviews";
import ReviewDetails from "../pages/ReviewDetails";
import HighestRatedDetails from "../pages/HighestRatedDetails";
import MyReviews from "../pages/MyReviews";
import UpdateReviews from "../pages/UpdateReviews";
import GameWatchLists from "../pages/GameWatchLists";
import PrivateRout from "./PrivateRouts.jsx/PrivateRout";
import NotFound from "../pages/NotFound";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/signIn',
                element: <SignIn></SignIn>
            },
            {
                path: '/signUp',
                element: <SignUp></SignUp>
            },
            {
                path: '/update-profile',
                element: <PrivateRout>
                    <UpdateProfile></UpdateProfile>
                </PrivateRout>
            },
            {
                path: '/add-review',
                element: <PrivateRout>
                    <AddReview></AddReview>
                </PrivateRout>
            },
            {
                path: '/all-reviews',
                element: <AllReviews></AllReviews>,
                loader: () => fetch('http://localhost:5000/reviews')
            },
            {
                path: '/review-details/:id',
                element: <ReviewDetails></ReviewDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/reviews/${params.id}`)
            },
            {
                path: '/explore-details/:id',
                element: <HighestRatedDetails></HighestRatedDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/explore-details/${params.id}`)
            },
            {
                path: '/my-reviews',
                element: <PrivateRout>
                    <MyReviews></MyReviews>
                </PrivateRout>,
                loader: () => fetch('http://localhost:5000/my-reviews')
            },
            {
                path: '/update-review/:id',
                element: <UpdateReviews></UpdateReviews>,
                loader: ({ params }) => fetch(`http://localhost:5000/my-reviews/${params.id}`)
            },
            {
                path: '/game-watch-lists',
                element: <PrivateRout>
                    <GameWatchLists></GameWatchLists>
                </PrivateRout>,
                loader: async () => {
                    // const allReviews = await fetch('http://localhost:5000/reviews')
                    const allWatchLists = await fetch('http://localhost:5000/watchLists')
                    return allWatchLists;
                },

            },
            {
                path: '*',
                element: <NotFound></NotFound>
            }

        ]
    }
])

export default router;