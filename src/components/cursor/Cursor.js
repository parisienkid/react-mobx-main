import styles from './cursor.module.scss';
import gsap from 'gsap';
import Expo from 'gsap';

import { useLayoutEffect, useRef, useEffect, useState, useCallback } from 'react';

function Cursor() {

    function useTicker(callback, paused) {
        useLayoutEffect(() => {
            if (!paused && callback) {
            gsap.ticker.add(callback);
            }
            return () => {
            gsap.ticker.remove(callback);
            };
        }, [callback, paused]);
    }

    const EMPTY = {};

    function useInstance(value = {}) {
        const ref = useRef(EMPTY);
        if (ref.current === EMPTY) {
            ref.current = typeof value === "function" ? value() : value;
        }
        return ref.current;
    }

    function getScale(diffX, diffY) {
        const distance = Math.sqrt(Math.pow(diffX, 2) + Math.pow(diffY, 2));
        return Math.min(distance / 735, 0.35);
    }
      
      // Function For Mouse Movement Angle in Degrees
    function getAngle(diffX, diffY) {
        return (Math.atan2(diffY, diffX) * 180) / Math.PI;
    }

    const jellyRef = useRef(null);

    const pos = useInstance(() => ({ x: 0, y: 0 }));
    const vel = useInstance(() => ({ x: 0, y: 0 }));
    const set = useInstance();

    useLayoutEffect(() => {
        set.x = gsap.quickSetter(jellyRef.current, "x", "px");
        set.y = gsap.quickSetter(jellyRef.current, "y", "px");
        set.r = gsap.quickSetter(jellyRef.current, "rotate", "deg");
        set.sx = gsap.quickSetter(jellyRef.current, "scaleX");
        set.sy = gsap.quickSetter(jellyRef.current, "scaleY");
        set.width = gsap.quickSetter(jellyRef.current, "width","px");
      }, []);
    
      // Start Animation loop
    const loop = useCallback(() => {
        // Calculate angle and scale based on velocity
        var rotation = getAngle(vel.x, vel.y); // Mouse Move Angle
        var scale = getScale(vel.x, vel.y); // Blob Squeeze Amount

        // Set GSAP quick setter Values on Loop Function
        set.x(pos.x);
        set.y(pos.y);
        set.width(30 + (scale*150));
        set.r(rotation);
        set.sx(1 + scale);
        set.sy(1 - scale);
        // set.rt(-rotation);
    }, []);

    useLayoutEffect(() => {
        // Caluclate Everything Function
        const setFromEvent = (e) => {
          // Mouse X and Y
          const x = e.clientX;
          const y = e.clientY;
    
          // Animate Position and calculate Velocity with GSAP
          gsap.to(pos, {
            x: x,
            y: y,
            duration: 0.65,
            ease: Expo.ease,
            onUpdate: () => {
              vel.x = x - pos.x;
              vel.y = y - pos.y;
            }
          });
    
          loop();
        };
    
        window.addEventListener("mousemove", setFromEvent);
        return () => {
          window.removeEventListener("mousemove", setFromEvent);
        };
      }, []);
    
      useTicker(loop);


    return (
        <div ref={jellyRef} id='cursor' className={styles.cursor}></div>
    );
}

export default Cursor;