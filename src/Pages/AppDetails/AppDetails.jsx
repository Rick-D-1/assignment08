import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, LabelList } from 'recharts';
import { toast } from 'react-toastify';
import Downloadimg from '../../assets/icon-downloads.png';
import Ratingimg from '../../assets/icon-ratings.png';
import Reviewimg from '../../assets/icon-review.png';

const AppDetails = () => {
    const { id } = useParams();
    const Appid = parseInt(id);
    const data = useLoaderData();
    const singleApp = data.find(app => app.id === Appid);

    const [isInstalled, setIsInstalled] = useState(false);

    useEffect(() => {
        const installedApps = JSON.parse(localStorage.getItem("installedApps")) || [];
        const alreadyInstalled = installedApps.find(app => app.id === Appid);
        setIsInstalled(!!alreadyInstalled);
    }, [Appid]);

    const handleInstall = () => {
        const installedApps = JSON.parse(localStorage.getItem("installedApps")) || [];
        const alreadyInstalled = installedApps.find(app => app.id === Appid);

        if (alreadyInstalled) {
            toast.warning("App already installed!");
            return;
        }

        installedApps.push(singleApp);
        localStorage.setItem("installedApps", JSON.stringify(installedApps));
        toast.success("App installed successfully!");
        setIsInstalled(true);
    };

    if (!singleApp) {
        return <p className="text-center text-red-500 my-10">App not found!</p>;
    }

    const reviewData = singleApp.ratings || [];

    const formatNumber = (num) => {
        if (num >= 1_000_000_000) return (num / 1_000_000_000).toFixed(1) + 'B';
        if (num >= 1_000_000) return (num / 1_000_000).toFixed(1) + 'M';
        if (num >= 1_000) return (num / 1_000).toFixed(1) + 'K';
        return num;
    };

    return (
        <div className="my-10 max-w-[1440px] mx-auto">
            <div className="bg-base-100 shadow-sm flex flex-col md:flex-row gap-7 p-8 rounded-xl">
                <figure className="md:w-[200px] flex-shrink-0 flex justify-center items-center">
                    <img src={singleApp.image} alt={singleApp.title} className="w-[120px] md:w-[160px] h-auto" />
                </figure>

                <div className="w-full">
                    <h2 className="text-3xl font-bold">{singleApp.title}</h2>
                    <p className="text-lg text-gray-500 font-semibold pb-2">
                        Developed by <span className="text-purple-500">{singleApp.companyName}</span>
                    </p>

                    <div className="flex flex-wrap gap-10 border-t pt-5 border-gray-300">
                        <div>
                            <img src={Downloadimg} alt="Downloads" />
                            <p className="text-gray-700">Downloads</p>
                            <h1 className="text-3xl font-bold">{formatNumber(singleApp.downloads)}</h1>
                        </div>
                        <div>
                            <img src={Ratingimg} alt="Rating" />
                            <p className="text-gray-700">Average Ratings</p>
                            <h1 className="text-3xl font-bold">{singleApp.ratingAvg}</h1>
                        </div>
                        <div>
                            <img src={Reviewimg} alt="Reviews" />
                            <p className="text-gray-700">Total Reviews</p>
                            <h1 className="text-3xl font-bold">{formatNumber(singleApp.reviews)}</h1>
                        </div>
                    </div>

                    <button
                        onClick={handleInstall}
                        disabled={isInstalled}
                        className={`px-5 py-2 mt-5 text-lg font-semibold rounded-lg w-[235px] shadow-md transition 
              ${isInstalled ? 'bg-gray-400 text-white cursor-not-allowed' : 'bg-[#00D390] text-white hover:bg-[#00b57c]'}`}
                    >
                        {isInstalled ? 'Installed' : `Install Now (${singleApp.size} MB)`}
                    </button>
                </div>
            </div>

            <div className="mt-10 px-5">
                <h2 className="text-2xl font-bold mb-5">Ratings</h2>
                <ResponsiveContainer width="100%" height={300}>
                    <BarChart
                        data={reviewData}
                        layout="vertical"
                        margin={{ top: 5, right: 50, left: 50, bottom: 5 }}
                    >
                        <XAxis type="number" />
                        <YAxis dataKey="name" type="category" />
                        <Tooltip formatter={(value) => formatNumber(value)} />
                        <Bar dataKey="count" fill="#FFA500" radius={[0, 5, 5, 0]}>
                            <LabelList dataKey="count" position="right" formatter={(v) => formatNumber(v)} />
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>
            </div>

            <div className="mt-10 px-5">
                <h2 className="text-2xl font-bold mb-5">Description</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                    {singleApp.description}
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                    This app provides an intuitive interface and ensures seamless functionality. Whether it's communication, productivity, or entertainment, {singleApp.title} offers a smooth experience optimized for both beginners and professionals.
                </p>
                <p className="text-gray-700 leading-relaxed">
                    Stay productive, connected, and entertained — download now and explore what {singleApp.companyName} brings to your digital lifestyle.
                </p>
            </div>
        </div>
    );
};

export default AppDetails;
