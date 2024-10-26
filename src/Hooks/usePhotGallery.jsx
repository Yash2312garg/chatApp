import {useState,useRef} from "react";
import Webcam from 'react-webcam';


export const useWebcamCapture = ()=>{
    const webcamRef = useRef(null);
    const [capturedImg,setCaptureimg] = useState(null);
    const [isCameraOpen,setIscameraOpen] = useState(false);
    

    const startCamera=()=>{
        setIscameraOpen(true);

    }
    const stopCamera = ()=>{
        setIscameraOpen(false);
        setCaptureimg(null);
    }

    const captureImage = () =>{
        const imgSrc = webcamRef.current.getScreenshot();
        console.log(imgSrc)
        setCaptureimg(imgSrc);
        // stopCamera();
    }

    
    return {
        isCameraOpen,
        capturedImg,
        startCamera,
        stopCamera,
        captureImage,
        webcamRef,
    }


}
