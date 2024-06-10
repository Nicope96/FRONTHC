import React, { useState, useEffect } from 'react';
import { Upload } from "@aws-sdk/lib-storage";
import { S3Client } from "@aws-sdk/client-s3";

const AudioRecorder = () => {
    const [recording, setRecording] = useState(false);
    const [mediaRecorder, setMediaRecorder] = useState(null);
    const [audioURL, setAudioURL] = useState("");
    const [audioBlob, setAudioBlob] = useState(null);

    useEffect(() => {
        async function getMedia() {
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            const recorder = new MediaRecorder(stream);
            recorder.ondataavailable = (event) => {
                setAudioBlob(event.data);
            };
            setMediaRecorder(recorder);
        }
        getMedia();
    }, []);

    const startRecording = () => {
        if (mediaRecorder) {
            mediaRecorder.start();
            setRecording(true);
        }
    };

    const stopRecording = () => {
        if (mediaRecorder) {
            mediaRecorder.stop();
            setRecording(false);
            mediaRecorder.onstop = async () => {
                const blob = new Blob([audioBlob], { type: 'audio/wav' });
                const url = URL.createObjectURL(blob);
                setAudioURL(url);
                await uploadToS3(blob);
            };
        }
    };

    const uploadToS3 = async (blob) => {
        try {
            const target = {
                Bucket: "iuc-historia-clinica-private-dev",
                Key: "raw_audios/test4.wav",
                Body: blob,
            };
           
           
            const parallelUploads3 = new Upload({
                client: new S3Client({ region: "us-east-1", credentials: creds }),
                params: target,
            });
            parallelUploads3.on("httpUploadProgress", (progress) => {
                console.log(progress);
            });
            await parallelUploads3.done();
            console.log("Upload completed successfully");
        } catch (e) {
            console.error("Error uploading to S3", e);
        }
    };

    const downloadAudio = () => {
        const a = document.createElement("a");
        a.href = audioURL;
        a.download = "recording.wav";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    };

    return (
        <div>
            <h1>Grabadora de audio</h1>
            <button onClick={startRecording} disabled={recording}>Start Recording</button>
            <button onClick={stopRecording} disabled={!recording}>Stop Recording</button>
            {audioURL && <button onClick={downloadAudio}>Download</button>}
        </div>
    );
};

export default AudioRecorder;
