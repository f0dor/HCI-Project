import "../custom.css";
import Image from 'next/image'

const ProjectCard = () => {
    return (
        <div className="text-white font-roboto-mono py-5 flex flex-wrap custom-background margin-project">
            <div className="flex flex-row ">
                <Image src="/images/projectphoto.jpg" alt="Hero section image" width={200} height={200} style={{height:'100%', width:'100%'}} />
                <div className="flex flex-col justify-center items-center margin-project-text">
                    <h1 className="py-1 text-center">DEVICE FOR ACCURATE MEASUREMENT OF SPEED AND TIME IN SPORTS ACTIVITIES</h1>
                    <p className="py-1">This project describes the development of a device for accurate measurement of speed 
                    and time in sports activities using the ESP32-C3 micro controller and BLE technology.
                        The device enables users to track their sports performance with a maximum error of +/- 50 milliseconds.</p>
                    <Image src="/images/github.png" alt="Hero section image" width={50} height={50} className="py-1"/>
                </div>
            </div>


        </div>
    );
};



export default ProjectCard;