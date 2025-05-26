import { useState, useRef } from "react";
import Webcam from 'react-webcam';


export const useWebcamCapture = () => {
    const webcamRef = useRef(null);
    const [capturedImg, setCaptureimg] = useState(null);
    const [isCameraOpen, setIscameraOpen] = useState(false);
    const [cameraError, setCameraError] = useState(null);


    const startCamera = () => {
        setIscameraOpen(true);

    }
    const stopCamera = () => {
        setIscameraOpen(false);
    }

    const captureImage = () => {
        if (webcamRef && webcamRef.current) {
            const imgSrc = webcamRef.current.getScreenshot();
            console.log(imgSrc)
            setCaptureimg(imgSrc);
            setIscameraOpen(false);
        }else{
            setCameraError("camera not initialised")
        }

        // stopCamera();
    }
    const handleCameraError =(err)=>{
        console.log(err)
        setCameraError(err.message || 'failed to access camera?')
        setIscameraOpen(false)
    }

    const clearImage = () => {
        setCaptureimg(null)
    }

    return {
        isCameraOpen,
        capturedImg,
        startCamera,
        stopCamera,
        captureImage,
        clearImage,
        handleCameraError,
        webcamRef,
    }
}
