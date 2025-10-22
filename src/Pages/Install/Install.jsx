import React, { useState, useEffect } from "react";
import { IoMdDownload } from "react-icons/io";
import { FaStar } from "react-icons/fa";

const Install = () => {
    const [installedApps, setInstalledApps] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem("installedApps")) || [];
        setInstalledApps(saved);
    }, []);

    const handleSearch = (e) => {
        const term = e.target.value.toLowerCase();
        setSearchTerm(term);
        setLoading(true);

        setTimeout(() => {
            const saved = JSON.parse(localStorage.getItem("installedApps")) || [];
            const filtered = saved.filter((app) =>
                app.title.toLowerCase().includes(term)
            );
            setInstalledApps(filtered);
            setLoading(false);
        }, 500);
    };

    const formatNumber = (num) => {
        if (num >= 1_000_000_000) return (num / 1_000_000_000).toFixed(1) + "B";
        if (num >= 1_000_000) return (num / 1_000_000).toFixed(1) + "M";
        if (num >= 1_000) return (num / 1_000).toFixed(1) + "K";
        return num;
    };

    return (
        <div className="max-w-[1440px] mx-auto my-10 px-5">
            <div className="text-center mb-10">
                <h1 className="text-4xl font-bold text-[#0F172A]">
                    Your Installed Apps
                </h1>
                <p className="text-gray-500">
                    Explore All Trending Apps on the Market developed by us
                </p>
            </div>

            <div className="flex justify-end mb-5">
                <input
                    type="text"
                    placeholder="Search installed apps..."
                    value={searchTerm}
                    onChange={handleSearch}
                    className="border border-gray-300 rounded-md px-4 py-2 w-full md:w-80 focus:outline-none focus:ring-2 focus:ring-[#9F62F2]"
                />
            </div>

            {loading ? (
                <div className="flex flex-col justify-center items-center py-20">
                    <div
                        className="w-16 h-16 border-4 border-t-transparent rounded-full animate-spin"
                        style={{
                            borderColor: "#9F62F2",
                            borderTopColor: "transparent",
                            borderRightColor: "#632EE3",
                        }}
                    ></div>
                    <p className="mt-4 text-[#632EE3] font-semibold animate-pulse">
                        Searching...
                    </p>
                </div>
            ) : installedApps.length === 0 ? (
                <p className="text-center text-gray-500 mt-10 text-lg">
                    No apps found.
                </p>
            ) : (
                <div className="space-y-4">
                    {installedApps.map((app) => (
                        <div
                            key={app.id}
                            className="flex justify-between items-center bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition"
                        >
                            <div className="flex items-center gap-5">
                                <div className="w-14 h-14 bg-gray-100 rounded-lg flex justify-center items-center overflow-hidden">
                                    {app.image ? (
                                        <img
                                            src={app.image}
                                            alt={app.title}
                                            className="w-full h-full object-cover rounded-lg"
                                        />
                                    ) : (
                                        <span className="text-gray-400 text-sm">No Img</span>
                                    )}
                                </div>

                                <div>
                                    <h2 className="text-lg font-semibold text-[#0F172A]">
                                        {app.title}
                                    </h2>
                                    <div className="flex items-center gap-4 text-gray-500 text-sm">
                                        <p className="flex items-center gap-1">
                                            <IoMdDownload className="text-cyan-600 text-lg" />
                                            {formatNumber(app.downloads)}
                                        </p>
                                        <p className="flex items-center gap-1">
                                            <FaStar className="text-yellow-500 text-lg" />
                                            {app.ratingAvg}
                                        </p>
                                        <p>{app.size} MB</p>
                                    </div>
                                </div>
                            </div>
                            <button className="px-5 py-2 bg-[#00D390] hover:bg-[#00b57c] text-white font-semibold rounded-md">
                                Uninstall
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Install;
