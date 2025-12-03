import React from 'react'
import useMacbookStore from "../store/index.js";
import clsx from "clsx";
import {Canvas} from "@react-three/fiber";
import {Box, OrbitControls} from "@react-three/drei";
import MacbookModel14 from "./models/Macbook-14.jsx";
import StudioLights from "./three/StudioLights.jsx";
import ModelSwitcher from "./three/ModelSwitcher.jsx";
import useMediaQuery from "react-responsive";

const ProductViewer = () => {
    const{color,scale,setColor,setScale}=useMacbookStore();

    const isMobile = useMediaQuery({query:'(max-width: 1024px)'});

    return (
        <section id="product-viewer">
            <h2>Take a closer Look.</h2> {/*// a random comment*/}

            <div className="controls">
                <p className="info">MacBookPro {scale} in {color}</p>
                <div className="flex-center gap-5 mt-5">
                    <div className="color-control">
                        {/*<div className="bg-neutral-300"/>*/}
                        {/*<div className="bg-neutral-900"/>*/}

                        <div onClick={() => setColor('#adb5bd')} className={clsx('bg-neutral-300', color =='#adb5bd' && 'active')}/>
                        <div onClick={() => setColor('#2e2c2e')} className={clsx('bg-neutral-900', color =='#2e2c2e' && 'active')}/>
                    </div>
                    <div className="size-control">
                        <div onClick={() => setScale(0.06)} className={clsx(scale == 0.06? 'bg-white text-black' :'bg-transparent text-white')}>
                            <p>14"</p>
                        </div>

                        <div onClick={() => setScale(0.08)} className={clsx(scale == 0.08? 'bg-white text-black' :'bg-transparent text-white')}>
                            <p>16"</p>
                        </div>
                        {/*<div>14"</div>*/}
                        {/*<div>16"</div>*/}
                    </div>
                </div>
            </div>

            <Canvas id="canvas" camera={{position:[0,2,5], fov:50, near:0.1,far:100}}>
                {/*<Box position ={[0,0,0]} scale={10*scale} material-color={color}/>*/}
                {/*<ambientLight intensity={0.5}/>*/}
                <StudioLights/>
                <MacbookModel14 scale={0.06} position={[0,0,0]} />
                <OrbitControls enableZoom={false}/>
            </Canvas>
        </section>
    )
}
export default ProductViewer
