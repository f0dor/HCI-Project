import "../custom.css";
import Image from 'next/image'

type ProjectCardProps = {
    side: string;
};

const ProjectCard = ({ side }: ProjectCardProps) => {
    if (side == "left") {
        return (
            <div className="text-white font-roboto-mono flex flex-row items-center custom-background margin-project">
                <Image src="/images/projectphoto.jpg" alt="Project photo" width={200} height={200} className="project-image" />
                <div className="flex flex-col justify-between margin-project-text">
                    <h1 className="py-1 text-center text-lg text-logo-font-color ">DEVICE FOR ACCURATE MEASUREMENT OF SPEED AND TIME IN SPORTS ACTIVITIES</h1>
                    <p className="py-2 text-sm">This project describes the development of a device for accurate measurement of speed
                        and time in sports activities using the ESP32-C3 micro controller and BLE technology.
                        The device enables users to track their sports performance with a maximum error of +/- 50 milliseconds.</p>
                    <a href="https://github.com/f0dor/Strukture-Podataka" className="py-2 flex flex-row">
                        <Image src="/images/github.png" alt="git" width={25} height={25} />
                        <span> &nbsp;github</span>
                    </a>
                </div>
            </div>
        ); 
        //remove the if statement, it does not go left right no more-----------------------------------------------
    } else {
        return (
            <div className="text-white font-roboto-mono  flex flex-row items-center custom-background margin-project">
                <Image src="/images/projectphoto.jpg" alt="Project photo" width={200} height={200} className="project-image" />
                <div className="flex flex-col justify-between margin-project-text">
                    <h1 className="py-1 text-center text-lg text-logo-font-color ">DEVICE FOR ACCURATE MEASUREMENT OF SPEED AND TIME IN SPORTS ACTIVITIES</h1>
                    <p className="py-2 text-sm">This project describes the development of a device for accurate measurement of speed
                        and time in sports activities using the ESP32-C3 micro controller and BLE technology.
                        The device enables users to track their sports performance with a maximum error of +/- 50 milliseconds.</p>
                    <a href="https://github.com/f0dor/Strukture-Podataka" className="py-2 flex flex-row">
                        <Image src="/images/github.png" alt="git" width={25} height={25} />
                        <span> &nbsp;github</span>
                    </a>
                </div>
            </div>
        );
    }
};

export default ProjectCard;