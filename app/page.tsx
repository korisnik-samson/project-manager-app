import React from 'react';
import LeftSideBar from "@/components/LeftSideBar";
import NavBar from "@/components/NavBar";
import Dashboard from "@/components/Dashboard";

export default function Home() {
    return (
        <main className="flex flex-col min-h-screen border-4 border-red-800">
            <NavBar />
        </main>
    );
}
