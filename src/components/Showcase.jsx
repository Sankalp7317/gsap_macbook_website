import React from 'react'
import gsap from 'gsap'
import useMediaQuery from "react-responsive";
import {useGSAP} from "@gsap/react";

const Showcase = () => {
    const isTable = useMediaQuery({query:'(max-width: 1024px)'});

    useGSAP(()=>{
        if(isTable) {
            const timeline = gsap.timeline({
                scrollTrigger: {
                    trigger: '#showcase',
                    start: 'top top',
                    end: 'bottom top',
                    scrub: true,
                    pin: true
                }
            });
            timeline
                .to('.mask img',{
                transform: 'scale(1.1)'
            }).
            to('.content', {opacity: 1, y: 0, ease: 'power1.in'});
        }
        },[isTable])

    return (
        <section id="showcase">
            <div className="media">
                <video src="/videos/game.mp4" loop muted  playsInline/>
                <div className="mask">
                    <img src="/mask-logo.svg" alt=""/>
                </div>
            </div>

            <div className="content ">
                <div className="wrapper">
                    <div className="lg:max-w-md">
                        <h2>Rocket Chip</h2>

                        <div className="space-y-5 mt-7 pe-10">
                            <p>
                                Introducing {" "}
                                <span className="text-white">
                                    M4, the next generation of Apple Silicon
                                </span>
                                .M4 powers
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
                            </p>
                            <p className="text-primary">Learn More About Apple</p>
                        </div>
                    </div>

                    <div className="max-w-3xs space-y-14">
                        <div className="space-y-2">
                            <p>Up to</p>
                            <h3>4x faster</h3>
                            <p>pro rendering than M2</p>
                        </div>
                        <div className="space-y-2">
                            <p>Up to</p>
                            <h3>1.5x faster</h3>
                            <p>CPU performance than M2</p>
                        </div>
                    </div>

                </div>
            </div>

        </section>
    )
}
export default Showcase
