import "../custom.css";
import Image from 'next/image'

const ProjectCard = () => {
    return (
        <div className="text-white font-roboto-mono py-5 flex flex-row items-center custom-background margin-project">
                <Image src="/images/projectphoto.jpg" alt="Hero section image" width={200} height={200} className="project-image" />
                <div className="flex flex-col justify-center items-center margin-project-text" style={{ height: '100%', width: '50%'}}>
                    <h1 className="py-1 text-center text-lg pb-5">DEVICE FOR ACCURATE MEASUREMENT OF SPEED AND TIME IN SPORTS ACTIVITIES</h1>
                    <p className="py-1 text-sm">This project describes the development of a device for accurate measurement of speed 
                    and time in sports activities using the ESP32-C3 micro controller and BLE technology.
                        The device enables users to track their sports performance with a maximum error of +/- 50 milliseconds.</p>
                    <Image src="/images/github.png" alt="Hero section image" width={50} height={50} className="py-1"/>
                </div>
        </div>
    );
};



export default ProjectCard;