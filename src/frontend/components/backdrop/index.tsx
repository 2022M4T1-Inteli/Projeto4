import React from 'react'

import { Backdrop as BackdropStyle } from './style'
import { AnimatePresence } from 'framer-motion'

interface Props {
    show: boolean
    click: () => void
}

const backdropVariant = {
    hidden: {
        opacity: 0,
        // backdropFilter: 'blur(0)',

        transition: {
            duration: 0.4
        }
    },
    visible: {
        opacity: 1,
        // backdropFilter: 'blur(1rem)',

        transition: {
            duration: 0.4
        }
    }
}

const Backdrop: React.FC<Props> = props => {
    return (
        <AnimatePresence>
            {props.show && (
                <BackdropStyle
                    variants={backdropVariant}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    onClick={props.click}
                />
            )}
        </AnimatePresence>
    )
}

export default Backdrop
