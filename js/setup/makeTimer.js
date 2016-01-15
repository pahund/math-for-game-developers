/**
 * makeTimer.js
 *
 * The timer is a simple function that returns the delta between the previous call to the function and the current time
 * in milliseconds. It is used for animating sprites. The time delta returned is limited to the maximum set in the
 * config to avoid jumping when the game loop is slowed down or interrupted for some reason.
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 10 Jan 2016
 */
import { maxTimeDelta } from "../config";

export default () => {
    let timestamp = Date.now();
    return () => {
        const now = Date.now(),
            delta = now - timestamp;
        timestamp = now;
        return delta > maxTimeDelta ? maxTimeDelta : delta
    };
}
