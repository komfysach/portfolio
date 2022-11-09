import React, { useRef, useEffect, useCallback } from 'react'
import type {FC} from 'react'
import { useMotionValue } from 'framer-motion'
import {
    motion, useTransform
} from 'framer-motion'

const Eyes: FC = () => {
    const eyeRef = useRef<SVGPathElement>(null)

    const cursorX = useMotionValue(0)
    const cursorY = useMotionValue(0)

    const irisRotationX = useTransform(cursorX, [-10, 168.9], [-40, 40]);
    const irisRotationY = useTransform(cursorY, [0, 110.08], [-15, 15]);
    const pupilRotationX = useTransform(cursorX, [0, 160], [-6, 6]);
    const pupilRotationY = useTransform(cursorY, [-50, 200], [-6, 6]);

    const mouseMoveHandler = useCallback(
        (event: MouseEvent) => {
        const rect = eyeRef.current?.getBoundingClientRect();

        cursorX.set(event.clientX - (rect?.left ?? 0));
        cursorY.set(event.clientY - (rect?.top ?? 0));
        },
        [cursorX, cursorY]
    );

    useEffect(() => {
        window.addEventListener("mousemove", mouseMoveHandler);

        return () => window.removeEventListener("mousemove", mouseMoveHandler);
    }, [mouseMoveHandler]);


  return (
    <>
     <svg fill='none' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 312 312" className='flex bg-transparent'>
        <g clipPath="url(#a)">
        <motion.g
          style={{
            translateX: irisRotationX,
            translateY: irisRotationY
          }}
        >
          <path
            d="M155.166 181.02c13.919 0 25.202-11.283 25.202-25.202 0-13.919-11.283-25.203-25.202-25.203-13.919 0-25.202 11.284-25.202 25.203 0 13.919 11.283 25.202 25.202 25.202Z"
            stroke="#fff"
            strokeWidth="3"
          />
          <motion.path
            d="M155.674 162.992a6.917 6.917 0 1 0 0-13.834 6.917 6.917 0 0 0 0 13.834Z"
            stroke="#fff"
            strokeWidth="3"
            style={{
              translateX: pupilRotationX,
              translateY: pupilRotationY
            }}
          />
        </motion.g>
        <path
          d="M157.24 209.3c-33.126 1.022-66.996-15.373-88.654-52.322 18.162-30.428 48.555-50.806 80.751-53.502 32.171-2.694 66.513 12.239 92.601 53.247-19.027 33.113-51.571 51.555-84.698 52.577Z"
          stroke="#fff"
          strokeWidth="4"
          ref={eyeRef}
        />
        <mask
          id="b"
          style={{ maskType: "alpha" }}
          maskUnits="userSpaceOnUse"
          x="66"
          y="101"
          width="179"
          height="111"
        >
          <path
            d="M66.27 156.968c36.744-62.934 124.991-84.926 177.999-.302-38.551 68.721-134.027 76.855-178 .302Z"
            fill="#C4C4C4"
          />
        </mask>
        <g mask="url(#b)">
          <motion.path
            d="M66 156.797c36.745-62.933 124.992-84.926 178-.301-38.552 68.72-134.027 76.855-178 .301Z"
            fill="#a5d1d4"
            style={{ originX: "top", scaleY: 0 }}
            animate={{ scaleY: [0, 1, 0] }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeOut",
              duration: 0.8,
              delay: 5,
              repeatDelay: 17
            }}
          />
        </g>
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h312v312H0z" />
        </clipPath>
      </defs>
    </svg>
    <svg fill='none' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 312 312" className='flex bg-transparent'>
        <g clipPath="url(#a)">
        <motion.g
          style={{
            translateX: irisRotationX,
            translateY: irisRotationY
          }}
        >
          <path
            d="M155.166 181.02c13.919 0 25.202-11.283 25.202-25.202 0-13.919-11.283-25.203-25.202-25.203-13.919 0-25.202 11.284-25.202 25.203 0 13.919 11.283 25.202 25.202 25.202Z"
            stroke="#fff"
            strokeWidth="3"
          />
          <motion.path
            d="M155.674 162.992a6.917 6.917 0 1 0 0-13.834 6.917 6.917 0 0 0 0 13.834Z"
            stroke="#fff"
            strokeWidth="3"
            style={{
              translateX: pupilRotationX,
              translateY: pupilRotationY
            }}
          />
        </motion.g>
        <path
          d="M157.24 209.3c-33.126 1.022-66.996-15.373-88.654-52.322 18.162-30.428 48.555-50.806 80.751-53.502 32.171-2.694 66.513 12.239 92.601 53.247-19.027 33.113-51.571 51.555-84.698 52.577Z"
          stroke="#fff"
          strokeWidth="4"
          ref={eyeRef}
        />
        <mask
          id="b"
          style={{ maskType: "alpha" }}
          maskUnits="userSpaceOnUse"
          x="66"
          y="101"
          width="179"
          height="111"
        >
          <path
            d="M66.27 156.968c36.744-62.934 124.991-84.926 177.999-.302-38.551 68.721-134.027 76.855-178 .302Z"
            fill="#C4C4C4"
          />
        </mask>
        <g mask="url(#b)">
          <motion.path
            d="M66 156.797c36.745-62.933 124.992-84.926 178-.301-38.552 68.72-134.027 76.855-178 .301Z"
            fill="#a5d1d4"
            style={{ originX: "top", scaleY: 0 }}
            animate={{ scaleY: [0, 1, 0] }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeOut",
              duration: 0.8,
              delay: 5,
              repeatDelay: 17
            }}
          />
        </g>
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h312v312H0z" />
        </clipPath>
      </defs>
    </svg>
    </>
  )
}

export default Eyes