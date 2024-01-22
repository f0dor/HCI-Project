import React from 'react';
import Image from 'next/image'


const RecentWorkElement = () => {
    return (
        <div className='p-3 margin-recent'>
            <Image src="/images/projectphoto.jpg" alt="Project photo" width={200} height={200} className='recent-image'></Image>
            <h1 className='text-white font-roboto-mono'>DEVICE FOR ACCURATE MEASUREMENT OF SPEED AND TIME IN SPORTS ACTIVITIES</h1>
            <a href="https://github.com/f0dor/Strukture-Podataka" className="py-2 flex flex-row">
                        <Image src="/images/github.png" alt="git" width={25} height={25}  style = {{backgroundColor: "white", borderRadius: "8px"}}/>
                        <span className='text-white'> &nbsp;github</span>
            </a>
        </div>
    );
}


const RecentWork = () => {
    return (
        <div>
            <div className="flex bg-nav-font-color mx-20"><span className="mx-auto text-white">Some of my recent work</span></div>
            <div className='grid col-span-3 grid-cols-3 my-20'>
                <RecentWorkElement/>
                <RecentWorkElement/>
                <RecentWorkElement/>
            </div>
        </div>
    );
};

export default RecentWork;
