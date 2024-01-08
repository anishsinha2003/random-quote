import React, { useState, useEffect, useRef } from 'react';
import './App.css';

const PomodoroTimer = () => {
  const [breakLength, setBreakLength] = useState(5);
  const [sessionLength, setSessionLength] = useState(25);
  const [timerLabel, setTimerLabel] = useState('Session');
  const [timeLeft, setTimeLeft] = useState(sessionLength * 60);
  const [running, setRunning] = useState(false);
  const [reset, setReset] = useState(false);

  const beepRef = useRef(null);

  useEffect(() => {
    if (reset) {
      resetTimer();
    }
  }, [reset]);

  useEffect(() => {
    if (running) {
      const timer = setInterval(() => {
        setTimeLeft((prevTime) => {
          if (prevTime === 0) {
            beepRef.current.play();
            if (timerLabel === 'Session') {
              setTimerLabel('Break');
              setTimeLeft(breakLength * 60);
            } else {
              setTimerLabel('Session');
              setTimeLeft(sessionLength * 60);
            }
          }
          return prevTime - 1;
        });
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [running, breakLength, sessionLength, timerLabel]);

  const resetTimer = () => {
    setBreakLength(5);
    setSessionLength(25);
    setTimerLabel('Session');
    setTimeLeft(25 * 60);
    setRunning(false);
    beepRef.current.pause();
    beepRef.current.currentTime = 0;
  };

  const handleBreakDecrement = () => {
    if (breakLength > 1) {
      setBreakLength((prevLength) => prevLength - 1);
      if (timerLabel === 'Break') {
        setTimeLeft((prevTime) => Math.min(prevTime, (breakLength - 1) * 60));
      }
    }
  };

  const handleBreakIncrement = () => {
    if (breakLength < 60) {
      setBreakLength((prevLength) => prevLength + 1);
      if (timerLabel === 'Break') {
        setTimeLeft((prevTime) => Math.min(prevTime, (breakLength + 1) * 60));
      }
    }
  };

  const handleSessionDecrement = () => {
    if (sessionLength > 1) {
      setSessionLength((prevLength) => prevLength - 1);
      if (timerLabel === 'Session') {
        setTimeLeft((prevTime) => Math.min(prevTime, (sessionLength - 1) * 60));
      }
    }
  };

  const handleSessionIncrement = () => {
    if (sessionLength < 60) {
      setSessionLength((prevLength) => prevLength + 1);
      if (timerLabel === 'Session') {
        setTimeLeft((prevTime) => Math.min(prevTime, (sessionLength + 1) * 60));
      }
    }
  };

  const handleStartStop = () => {
    setRunning((prevRunning) => !prevRunning);
  };

  const handleReset = () => {
    setReset(true);
    setTimeout(() => setReset(false), 0);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <div id="pomodoro-timer" className="pomodoro-timer">
      <div id="break-label" className="label">
        Break Length
        <button id="break-decrement" onClick={handleBreakDecrement}>
          -
        </button>
        <span id="break-length">{breakLength}</span>
        <button id="break-increment" onClick={handleBreakIncrement}>
          +
        </button>
      </div>
      <div id="session-label" className="label">
        Session Length
        <button id="session-decrement" onClick={handleSessionDecrement}>
          -
        </button>
        <span id="session-length">{sessionLength}</span>
        <button id="session-increment" onClick={handleSessionIncrement}>
          +
        </button>
      </div>
      <div id="timer-label">{timerLabel}</div>
      <div id="time-left">{formatTime(timeLeft)}</div>
      <audio id="beep" ref={beepRef} src="path/to/beep-sound.mp3" />
      <button id="start_stop" onClick={handleStartStop}>
        Start/Stop
      </button>
      <button id="reset" onClick={handleReset}>
        Reset
      </button>
    </div>
  );
};

export default PomodoroTimer;
