import React from 'react';
import useWebAnimations from '@wellyshen/use-web-animations';
import styles from './NavBar.module.css';
import { FaBars } from 'react-icons/fa';

const NavBar = () => {
    const { ref: refP } = useWebAnimations({
        id: 'charP',
        keyframes: { color: [ '#A800ff', '#0079FF', '#00F11D', '#FFEF00', '#FF7F00', '#FF0900', '#A800ff' ] },
        timing: { duration: 5000, iterations: Infinity },
    });
    const { ref: refR } = useWebAnimations({
        id: 'charR',
        keyframes: { color: [ '#0079FF', '#00F11D', '#FFEF00', '#FF7F00', '#FF0900', '#A800ff', '#0079FF' ] },
        timing: { duration: 5000, iterations: Infinity },
    });
    const { ref: refO } = useWebAnimations({
        id: 'charO',
        keyframes: { color: [ '#00F11D', '#FFEF00', '#FF7F00', '#FF0900', '#A800ff', '#0079FF', '#00F11D' ] },
        timing: { duration: 5000, iterations: Infinity },
    });
    const { ref: refJ } = useWebAnimations({
        id: 'charJ',
        keyframes: { color: [ '#FFEF00', '#FF7F00', '#FF0900', '#A800ff', '#0079FF', '#00F11D', '#FFEF00' ] },
        timing: { duration: 5000, iterations: Infinity },
    });
    const { ref: refE } = useWebAnimations({
        id: 'charE',
        keyframes: { color: [ '#FF7F00', '#FF0900', '#A800ff', '#0079FF', '#00F11D', '#FFEF00', '#FF7F00' ] },
        timing: { duration: 5000, iterations: Infinity },
    });
    const { ref: refC } = useWebAnimations({
        id: 'charC',
        keyframes: { color: [ '#FF0900', '#A800ff', '#0079FF', '#00F11D', '#FFEF00', '#FF7F00', '#FF0900' ] },
        timing: { duration: 5000, iterations: Infinity },
    });
    const { ref: refT } = useWebAnimations({
        id: 'charT',
        keyframes: { color: [ '#A800ff', '#0079FF', '#00F11D', '#FFEF00', '#FF7F00', '#FF0900', '#A800ff' ] },
        timing: { duration: 5000, iterations: Infinity },
    });
    const { ref: ref_ } = useWebAnimations({
        id: 'char_',
        keyframes: { color: [ '#0079FF', '#00F11D', '#FFEF00', '#FF7F00', '#FF0900', '#A800ff', '#0079FF' ] },
        timing: { duration: 5000, iterations: Infinity },
    });
    const { ref: ref4 } = useWebAnimations({
        id: 'char4',
        keyframes: { color: [ '#00F11D', '#FFEF00', '#FF7F00', '#FF0900', '#A800ff', '#0079FF', '#00F11D' ] },
        timing: { duration: 5000, iterations: Infinity },
    });
    const { ref: refB } = useWebAnimations({
        id: 'charB',
        keyframes: { color: [ '#FFEF00', '#FF7F00', '#FF0900', '#A800ff', '#0079FF', '#00F11D', '#FFEF00' ] },
        timing: { duration: 5000, iterations: Infinity },
    });
    return (
        <div className={styles.NavBar}>
            <span className={styles.charP} ref={refP}>P</span>
            <span className={styles.charR} ref={refR}>r</span>
            <span className={styles.charO} ref={refO}>o</span>
            <span className={styles.charJ} ref={refJ}>j</span>
            <span className={styles.charE} ref={refE}>e</span>
            <span className={styles.charC} ref={refC}>c</span>
            <span className={styles.charT} ref={refT}>t</span>
            <span className={styles.char_} ref={ref_}>_</span>
            <span className={styles.char4} ref={ref4}>4</span>
            <span className={styles.charB} ref={refB}>B</span>
            <div className={styles.btnContainer}>
                <span className={styles.menuBtn}><FaBars /></span>
            </div>
        </div>
    )
};

export default NavBar
