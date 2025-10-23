import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { IoMdDownload } from "react-icons/io";
import { FaStar } from "react-icons/fa";

const Install = () => {
    const [installedApps, setInstalledApps] = useState([]);
    const [allApps, setAllApps] = useState([]);
    const [sortBy, setSortBy] = useState("default");

    useEffect(() => {
        const savedApps = JSON.parse(localStorage.getItem("installedApps")) || [];
        setInstalledApps(savedApps);
        setAllApps(savedApps);
    }, []);

    const handleUninstall = (id) => {
        const updated = installedApps.filter(app => app.id !== id);
        setInstalledApps(updated);
        setAllApps(updated);
        localStorage.setItem("installedApps", JSON.stringify(updated));
        toast.info("App uninstalled successfully!");
    };

    const handleSort = (order) => {
        setSortBy(order);
        let sorted = [...installedApps];

        if (order === "size") {
            sorted.sort((a, b) => Number(a.size) - Number(b.size));
        } else if (order === "downloads") {
            sorted.sort((a, b) => Number(b.downloads) - Number(a.downloads));
        } else if (order === "default") {
            sorted = [...allApps];
        }

        setInstalledApps(sorted);
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
                <h1 className="text-4xl font-bold text-[#0F172A]">Your Installed Apps</h1>
                <p className="text-gray-500">
                    Explore All Trending Apps on the Market developed by us
                </p>
            </div>

            <div className="flex justify-between items-center mb-5 border-b pb-3">
                <h2 className="font-semibold text-gray-700">
                    {installedApps.length} Apps Found
                </h2>
                <select
                    onChange={(e) => handleSort(e.target.value)}
                    value={sortBy}
                    className="border border-gray-300 rounded-md px-3 py-1 text-gray-600"
                >
                    <option value="default">Sort By</option>
                    <option value="size">Low-High</option>
                    <option value="downloads">High-Low</option>
                </select>
            </div>

            {installedApps.length === 0 ? (
                <p className="text-center text-gray-500 mt-10 text-lg">
                    No apps installed yet.
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
                                        <p className="flex items-center">
                                            <span className="text-cyan-600 text-lg">
                                                <IoMdDownload />
                                            </span>
                                            {formatNumber(app.downloads)}
                                        </p>
                                        <p className="flex items-center">
                                            <span className="text-lg text-yellow-500">
                                                <FaStar />
                                            </span>
                                            {app.ratingAvg}
                                        </p>
                                        <p>{app.size} MB</p>
                                    </div>
                                </div>
                            </div>

                            <button
                                onClick={() => handleUninstall(app.id)}
                                className="px-5 py-2 bg-[#00D390] hover:bg-[#00b57c] text-white font-semibold rounded-md"
                            >
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
