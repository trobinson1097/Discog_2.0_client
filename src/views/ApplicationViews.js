import React from "react"
import { Route, Routes } from "react-router-dom"
import { Login } from "../components/auth/Login"
import { Register } from "../components/auth/Register"
import { Authorized } from "./Authorized"

export const ApplicationViews = () => {
    return <>
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route element={<Authorized />}>
                {/* Add Routes here */}
                    {/* <Route exact path="/" element={<GameList />} />
                    <Route exact path="/events" element={<EventList />} />
                    <Route exact path="/games/new" element={<GameForm />} />
                    <Route exact path="/events/new" element={<EventForm />} />
                    <Route exact path="/events/update/:eventId" element={<UpdateEvent />} />
                    <Route exact path="/games/update/:gameId" element={<UpdateGame />} /> */}
            </Route>
        </Routes>
    </>
    
}
