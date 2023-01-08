import React, { useLayoutEffect, useRef, useState } from 'react'
import gsap from 'gsap';
import { SlowMo } from 'gsap/all';
import loaderStatus from '../../core/store/loader-status';

import styles from './loader.module.scss';

import LoaderImage from '../loader-image/LoaderImage';


export default function Loader() {

  const [imagesReady, setImagesReady] = useState(false);

  const wrap = useRef();
  const loadingRef = useRef();
  const svg = useRef();
  const svgBg = useRef();

  const curve = "M0 502S175 272 500 272s500 230 500 230V0H0Z";
  const flat = "M0 2S175 1 500 1s500 1 500 1V0H0Z";

  function openImages() {
    setImagesReady('open')
  }

  function closeImages() {
    setImagesReady('close')
  }

  function changeLoaderStatus() {
    loaderStatus.changeStatus();
  }

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline();
      gsap.registerPlugin(SlowMo);
      tl.from(loadingRef.current, {
        y: 100,
        delay: 0.5,
        opacity: 0,
        ease: 'power1.out',
        onComplete: openImages
      })
      .to(loadingRef.current, {
        onComplete: closeImages,
        y: -60,
        duration: 3,
        ease: 'linear',
      })
      .to(loadingRef.current, {
        y: -80,
        duration: 1,
        ease: 'linear',

        // top: -150,
        // opacity: 0,
        // ease: 'power2.out',
        // onStart: closeImages,
      })
      .to(loadingRef.current, {
        y: -100,
        duration: 0.5,
        ease: 'linear',

        // top: -150,
        opacity: 0,
        // ease: 'power2.out',
        // onStart: closeImages,
      })
      // .to(svg.current, {
      //   delay: 1.5,
      //   duration: .8,
      //   attr: { d: curve },
      //   ease: "power2.easeIn",
      // }, '-=1.3')
      .to(svg.current, {
        duration: .8,
        attr: { d: flat },
        ease: "power2.easeOut",
      })
      .to(svgBg.current, {
        // delay: 1.5,
        duration: .8,
        attr: { d: curve },
        ease: "power2.easeIn",
      })
      .to(svgBg.current, {
        duration: .8,
        attr: { d: flat },
        ease: "power2.easeOut",
        onComplete: changeLoaderStatus
      }, '-=0.5')
      // .to(svg.current, {
      //   opacity: 0,
      //   duration: 0
      // })
    }, wrap)
    return () => ctx.revert();
  },[]);

  return (
      <div ref={wrap} className={styles.wrap}>
        <svg id={styles.svg} viewBox="0 0 1000 1000" preserveAspectRatio="none">
          <path ref={svg} d="M0,1005S175,995,500,995s500,5,500,5V0H0Z"></path>
        </svg>
        <svg id={styles.svgBg} viewBox="0 0 1000 1000" preserveAspectRatio="none">
          <path ref={svgBg} d="M0,1005S175,995,500,995s500,5,500,5V0H0Z"></path>
        </svg>
        <LoaderImage left='20vw' top='45vh' imagesReady={imagesReady} url={'https://sun9-79.userapi.com/impg/3XxW1dpijzEdSFsDVAi8g1c6_3zsY-xJ_08Hvw/ngjS91CMqMQ.jpg?size=1440x2160&quality=96&sign=c6f9d8d0e494d52f95beae13d11af8a4&type=album'}/>
        <LoaderImage left='80vw' top='60vh' imagesReady={imagesReady} url={'https://sun9-51.userapi.com/impg/LjvyKpOC_WGXREOuACIs5O4I-Kg3p4CKe85nfw/HVLL0e-CU30.jpg?size=1160x1544&quality=95&sign=6a77e2c2d05010e97f9f532b1891264a&type=album'} />
        <LoaderImage left='50vw' top='75vh' imagesReady={imagesReady} url={'https://sun9-19.userapi.com/impg/0zsA9q8IQWR3SdFqjlOq_MOLWeWXH1eBa8v4Xg/IeZoNZ9oQ-Q.jpg?size=956x1276&quality=96&sign=fd3b16ef2ab4a7783ada26365270d9b7&type=album'}/>
      
        <div className={styles.loading} ref={loadingRef}>I'm Danya. Welcome to my personal web/page.</div>
      </div>
  )
}