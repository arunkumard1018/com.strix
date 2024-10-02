"use client"
import { motion } from 'framer-motion';
import { ReactNode } from "react";


function MotionxInView({ children, x = -100, duration = 0.5 }:
    { children: ReactNode, x?: number, duration?: number }) {
    return (
        <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: x }}
            transition={{ duration: duration }}

        >{children}</motion.div>
    )
}

export {MotionxInView}