import Sidebar from "../components/Dashboard/Sidebar/Sidebar";

const Dashboard = () => {
    return (
        <div className="relative min-h-screen md:flex">
            {/* sidebar  */}
            <Sidebar />
            <div className="flex-1 md:ml-64">
                <div className="p-5">
                    {/* use outlet  for route other pages */}

                </div>
            </div>
        </div>
    );
};

export default Dashboard;