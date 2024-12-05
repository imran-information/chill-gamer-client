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
                element: <UpdateProfile></UpdateProfile>
            },
            {
                path: '/add-review',
                element: <AddReview></AddReview>
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
                element: <MyReviews></MyReviews>,
                loader: () => fetch('http://localhost:5000/my-reviews')
            }

        ]
    }
])

export default router;