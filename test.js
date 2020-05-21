//React Components
const Controls = ({
  sessionLength,
  setSessionLength,
  breakLength,
  setBreakLength,
}) => {
  const setItem = (type, item) => {
    //type can be increment or decremenet
    //item can be break or length
    switch (type) {
      case 'increment':
        if (item === 'break') {
          const br = parseInt(breakLength);
          if (br < 60) {
            setBreakLength(br + 1);
          }
        } else {
          const sl = parseInt(sessionLength);
          if (sl < 60) {
            setSessionLength(sl + 1);
          }
        }
        return;
      case 'decrement':
        if (item === 'break') {
          const br = parseInt(breakLength);
          if (br > 1) {
            setBreakLength(br - 1);
          }
        } else {
          const sl = parseInt(sessionLength);
          if (sl > 1) {
            setSessionLength(sl - 1);
          }
        }
        return;
      default:
        return;
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="row">
            <div className="col text-md" id="break-label">
              Break Length
            </div>
          </div>
          <div className="row">
            <div className="col">
              <button
                id="break-decrement"
                onClick={() => setItem('decrement', 'break')}
              >
                <i class="fas fa-arrow-down"></i>
              </button>
            </div>
            <div className="col" id="break-length">
              {breakLength}
            </div>
            <div className="col sm-8">
              <button
                id="break-increment"
                onClick={() => setItem('increment', 'break')}
              >
                <i class="fas fa-arrow-up"></i>{' '}
              </button>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="row">
            <div className="col text-md" id="session-label">
              Session Length
            </div>
          </div>
          <div className="row">
            <div className="col">
              <button
                id="session-decrement"
                onClick={() => setItem('decrement', 'session')}
              >
                <i class="fas fa-arrow-down"></i>
              </button>
            </div>
            <div className="col" id="session-length">
              {sessionLength}
            </div>
            <div className="col">
              {' '}
              <button
                id="session-increment"
                onClick={() => setItem('increment', 'session')}
              >
                <i class="fas fa-arrow-up"></i>{' '}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ClockElement = ({ timer, startTimer, resetTimer, runtitle }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <p id="timer-label">{runtitle}</p>
        </div>
      </div>
      <div className="row">
        <div className="col text-lg">
          <p id="time-left"> {timer}</p>
        </div>

        <button
          id="start_stop"
          className="control-btn"
          onClick={() => startTimer()}
        >
          <i class="fas fa-play"></i>
          <i class="fas fa-pause"></i>{' '}
        </button>

        <button id="reset" className="control-btn" onClick={() => resetTimer()}>
          <i class="fas fa-undo"></i>{' '}
        </button>
      </div>
    </div>
  );
};

const App = () => {
  const [timer, setTimer] = React.useState('25:00');
  const [breakLength, setBreakLength] = React.useState('5');
  const [sessionLength, setSessionLength] = React.useState('25');
  const [startTime, setStartTime] = React.useState('');
  const [timerRun, setTimerRun] = React.useState(false);
  const [runtitle, setRuntitle] = React.useState('Countdown');

  React.useEffect(() => {
    let stuffToSet = `${sessionLength}:00`;
    var newArr = stuffToSet.split('');
    if (stuffToSet.split('').length === 4) {
      newArr.unshift('0');
      setTimer(newArr.join(''));
    } else {
      setTimer(`${sessionLength}:00`);
    }
  }, [sessionLength]);

  //Global var for clock interval
  var intervalId;

  const stopTimer = () => {
    for (var i = 1; i < 99999; i++) window.clearInterval(i);
  };

  const playSound = () => {
    var x = document.getElementById('beep');

    x.play();
  };

  const startTimer = (runTime) => {
    var timer = runTime,
      minutes,
      seconds;

    //Check it's not already running
    if (intervalId) {
      clearInterval(intervalId);
    }

    let onABreak = false;

    //run timer
    intervalId = setInterval(function () {
      minutes = parseInt(timer / 60, 10);
      seconds = parseInt(timer % 60, 10);

      minutes = minutes < 10 ? '0' + minutes : minutes;
      seconds = seconds < 10 ? '0' + seconds : seconds;

      setTimer(minutes + ':' + seconds);

      if (--timer < 0) {
        playSound();
        if (onABreak) {
          timer = runTime + 1;
          onABreak = false;
          setRuntitle('Countdown');
        } else {
          timer = breakLength * 60;
          onABreak = true;
          setRuntitle('Break');
        }
      }
    }, 1000);
  };

  const resetTimer = () => {
    stopTimer();
    setTimer('25:00');
    setSessionLength('25');
    setBreakLength('5');
    setTimerRun(false);
    setRuntitle('Countdown');

    var x = document.getElementById('beep');
    x.pause();
  };

  const playOrPause = () => {
    if (timerRun === true) {
      stopTimer();
      setTimerRun(false);
    } else {
      setTimerRun(true);
      const seshSplit = timer.split(':');
      const finalTime = parseInt(seshSplit[0]) * 60 + parseInt(seshSplit[1]);

      startTimer(finalTime - 1);
    }
  };

  return (
    <div className="wrapper text-monospace text-center">
      <ClockElement
        startTimer={playOrPause}
        timer={timer}
        resetTimer={resetTimer}
        runtitle={runtitle}
      />
      <Controls
        breakLength={breakLength}
        sessionLength={sessionLength}
        setBreakLength={(val) => setBreakLength(val)}
        setSessionLength={(val) => setSessionLength(val)}
      />
      <div className="text-center">
        <div className="grill" />
        <div className="grill" />
        <div className="grill" />{' '}
      </div>
      <audio
        id="beep"
        preload="auto"
        src="http://www.youthworkresource.com/resources/alarm.wav"
        type="audio/wav"
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
