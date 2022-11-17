import { PositionalAudio } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense, useEffect, useRef, useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { setMusicTheme } from "../../modules/webrtc";

export default function AudioZone(params) {
  const audioref = useRef();
  const webrtcRedux = useSelector((state) => state.webrtc);
  const dispatch = useDispatch();
  const [initAudio, setInitAudio] = useState(0);

  useEffect(() => {
    if (webrtcRedux.bgmCheck) {
      console.log("bgm on");
    } else {
      console.log("bgm off");
    }
  }, [webrtcRedux.bgmCheck]);

  useEffect(() => {
    if (initAudio < 5) {
      dispatch(setMusicTheme((webrtcRedux.musicTheme + 1) % 5));
      setInitAudio(initAudio + 1);
      console.log(webrtcRedux.musicTheme);
      console.log(initAudio);
    }
  }, [initAudio]);

  // const musicList = [
  //   <PositionalAudio
  //     ref={audioref}
  //     autoplay
  //     loop
  //     url="https://re-verse-bucket.s3.ap-northeast-2.amazonaws.com/bgm/Sweet-Mood_AdobeStock_452607713_preview.m4a"
  //     distance={2}
  //   />,
  //   <PositionalAudio
  //     ref={audioref}
  //     autoplay
  //     loop
  //     url="https://re-verse-bucket.s3.ap-northeast-2.amazonaws.com/bgm/TheCats.m4a"
  //     distance={2}
  //   />,
  //   <PositionalAudio
  //     ref={audioref}
  //     autoplay
  //     loop
  //     url="https://re-verse-bucket.s3.ap-northeast-2.amazonaws.com/bgm/A-Picnic-With-My-Family_AdobeStock_452603097_preview.m4a"
  //     distance={2}
  //   />,
  //   <PositionalAudio
  //     ref={audioref}
  //     autoplay
  //     loop
  //     url="https://re-verse-bucket.s3.ap-northeast-2.amazonaws.com/bgm/We-Wish-You-A-Merry-Christmas_AdobeStock_353746933_preview.m4a"
  //     distance={2}
  //   />,
  //   <PositionalAudio
  //     ref={audioref}
  //     autoplay
  //     loop
  //     url="https://re-verse-bucket.s3.ap-northeast-2.amazonaws.com/bgm/Emotional-Cinematic-Music-Box_AdobeStock_528505763_preview.m4a"
  //     distance={2}
  //   />,
  // ];

  return (
    <group>
      <mesh
        rotation={[-0.5 * Math.PI, 0, 0]}
        position={[0, 1, 0]}
        receiveShadow
      >
        <planeGeometry args={[20, 20]} />
        <meshBasicMaterial color="green" opacity={0} transparent />
      </mesh>

      <group>
        {/* {webrtcRedux.bgmCheck && musicList[webrtcRedux.musicTheme]} */}
        {webrtcRedux.bgmCheck && webrtcRedux.musicTheme === 0 ? (
          <PositionalAudio
            ref={audioref}
            autoplay
            loop
            url="https://re-verse-bucket.s3.ap-northeast-2.amazonaws.com/bgm/A-Picnic-With-My-Family_AdobeStock_452603097_preview.m4a"
            distance={2}
          />
        ) : null}
        {webrtcRedux.bgmCheck && webrtcRedux.musicTheme === 1 ? (
          <PositionalAudio
            ref={audioref}
            autoplay
            loop
            url="https://re-verse-bucket.s3.ap-northeast-2.amazonaws.com/bgm/We-Wish-You-A-Merry-Christmas_AdobeStock_353746933_preview.m4a"
            distance={2}
          />
        ) : null}
        {webrtcRedux.bgmCheck && webrtcRedux.musicTheme === 2 ? (
          <PositionalAudio
            ref={audioref}
            autoplay
            loop
            url="https://re-verse-bucket.s3.ap-northeast-2.amazonaws.com/bgm/Sweet-Mood_AdobeStock_452607713_preview.m4a"
            distance={2}
          />
        ) : null}
        {webrtcRedux.bgmCheck && webrtcRedux.musicTheme === 3 ? (
          <PositionalAudio
            ref={audioref}
            autoplay
            loop
            url="https://re-verse-bucket.s3.ap-northeast-2.amazonaws.com/bgm/Emotional-Cinematic-Music-Box_AdobeStock_528505763_preview.m4a"
            distance={2}
          />
        ) : null}
        {webrtcRedux.bgmCheck && webrtcRedux.musicTheme === 4 ? (
          <PositionalAudio
            ref={audioref}
            autoplay
            loop
            url="https://re-verse-bucket.s3.ap-northeast-2.amazonaws.com/bgm/TheCats.m4a"
            distance={2}
          />
        ) : null}
      </group>
    </group>
  );
}
