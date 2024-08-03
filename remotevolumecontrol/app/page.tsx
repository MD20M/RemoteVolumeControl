"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import {Slider, Checkbox} from "@nextui-org/react";
import audio from 'win-audio';

const speaker = audio.speaker;
speaker.start(200);


export default function Home() {
  const [volume, setVolume] = useState(speaker.get());
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    speaker.set(volume);
  }, [volume]);

  useEffect(() => {
    if (isMuted){
      speaker.mute();
    }
    else {
      speaker.unmute();
    }
  },[isMuted]);

  

  return (
    <main>
      <h1>Remote volume control by MD20M</h1>
      <br></br>
      <Slider 
      label="Select a value" 
      showTooltip={true}
      step={0.01} 
      formatOptions={{style: "percent"}}
      maxValue={1}
      minValue={0}
      onChange={setVolume}
      marks={[
        { value: 0, label: "0%" },
        { value: 0.1, label: "10%" },
        { value: 0.2, label: "20%" },
        { value: 0.3, label: "30%" },
        { value: 0.4, label: "40%" },
        { value: 0.5, label: "50%" },
        { value: 0.6, label: "60%" },
        { value: 0.7, label: "70%" },
        { value: 0.8, label: "80%" },
        { value: 0.9, label: "90%" },
        { value: 1, label: "100%" },
      ]}
      defaultValue={0.2}
      className="max-w-md"
    />
    <br></br>
    <Checkbox isSelected={isMuted} onValueChange={setIsMuted}>
        {isMuted ? "Muted" : "Unmuted"}
      </Checkbox>
    </main>
  );
}
