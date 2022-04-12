import { FC } from "react"
import { Container } from "react-bootstrap"
import { Link, Routes, Route, BrowserRouter } from "react-router-dom"
import MainNavigation from "../components/shared/MainNavigation"
import { Home, Tvshows, TvshowDetails, UpcomingShows, CreateUpcomingShow } from "../pages"

const Routing: FC = () => {
    return (
        <BrowserRouter>
            <MainNavigation/>
                <Container>
                    <Routes>
                        <Route path="/" element={<Home/>}></Route>
                        <Route path="tvshows" element={<Tvshows/>}></Route>
                        <Route path="tvshow-details/:id" element={<TvshowDetails/>}></Route>
                        <Route path="upcomingshows" element={<UpcomingShows/>}></Route>
                        <Route path="create-upcomingshow" element={<CreateUpcomingShow/>}></Route>
                    </Routes>
                </Container>
        </BrowserRouter>
    )
}

export default Routing;