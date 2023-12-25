import { memo, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './countdown-timer.css';
import { msToTime } from '../../lib/helpers/msToTime';

export const CountdownTimer = memo((props) => {
    const { countdownTime, onFinish, paused, interval = 1000 } = props;
    const [displayValue, setDisplayValue] = useState(countdownTime);

    useEffect(() => {
        if (!paused) {
            const countInterval = setInterval(() => {
                setDisplayValue((prev) => prev - 1000);
            }, interval);

            if (displayValue <= 0) {
                clearInterval(countInterval);
                if (onFinish) {
                    onFinish();
                }
            }

            return () => {
                clearInterval(countInterval);
            };
        }
    }, [displayValue, interval, onFinish, paused]);

    return <p className="countdown-timer">{msToTime(displayValue)}</p>;
});

CountdownTimer.propTypes = {
    countdownTime: PropTypes.string,
    interval: PropTypes.number,
    onFinish: PropTypes.func,
    paused: PropTypes.bool,
};

CountdownTimer.displayName = 'CountdownTimer';
