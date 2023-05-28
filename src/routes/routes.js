
import { Error404 } from "../Pages/Error404";
import {HomePage} from "../Pages/Home/HomePage";

import TourPage from "../Pages/Tour/TourPage";
import {BlogPage} from '../Pages/Blog/BlogPage'
import TourCartPage from "../Pages/TourCart/TourCart";
import TourProgram_one from "../Pages/TourProgrammPage/TourOne/TourProgram_one";
import ReviewPage from "../Pages/Review/ReviewPage";

import {HOME_ROUTE, 
    REVIEW_ROUTE, 
    TOUR_ROUTE,
    BLOG_ROUTE,
    TOUR_PROGRAM_ROUTE,
    TOUR_CART_ROUTE,
    ABOUT_US_ROUTE,
    CONTACT_US_ROUTE
    } from "../utils/routes";


export const routes = [
    {
      path: HOME_ROUTE,
      element: <HomePage />,
    },
  {
    path: TOUR_PROGRAM_ROUTE,
    element: <TourProgram_one />,
  },
  {
    path: TOUR_CART_ROUTE,
    element: <TourCartPage />,
  },
 
  {
    path: BLOG_ROUTE,
    element: <BlogPage />,
  },
  {
    path: TOUR_ROUTE,
    element: <TourPage />
  },
  {
    path: REVIEW_ROUTE,
    element: <ReviewPage />
  },
  {
    path: ABOUT_US_ROUTE,
    element: <BlogPage />
  },
  {
    path: CONTACT_US_ROUTE,
    element: <BlogPage />
  },
  {
    path: '*',
    element: <Error404 />,
  },
];