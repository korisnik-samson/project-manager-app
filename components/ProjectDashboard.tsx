import React from 'react'
import TaskBoard from "@/components/TaskBoard";

const ProjectDashboard = () => {
    return (
        <section>
            <div>
                {/* Project Name */}
                <div></div>

                {/* Project Members */}
                <div></div>
            </div>

            <div>
                {/* Filter buttons */}
                <div></div>

                {/* Share & View options */}
                <div></div>
            </div>


            {/* Rendering Task boards */}
            <div>
                {/* Traverse each board for each state */}
                <TaskBoard />
            </div>
        </section>
    );
}

export default ProjectDashboard;