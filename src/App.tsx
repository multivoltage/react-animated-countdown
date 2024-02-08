import { format } from "date-fns";
import { generateFutureDay } from "./utils";
import useTimer from "./hooks/useTimer";
import { useRef, useState } from "react";
import Countown from "./components/countdown";

export default function App() {
  const futureDate = useRef(generateFutureDay());
  const [now, setNow] = useState(new Date());

  const {} = useTimer(1000, () => {
    // refresh now
    setNow(new Date());
  });

  return (
    <main>
      <h1>Animated Countdown</h1>
      <p>
        from <br />
        <b>{format(now, "HH:mm:ss - dd LLLL yyyy")}</b>
        <br />
        to <br />
        <b>{format(futureDate.current, "HH:mm:ss - dd LLLL yyyy")}</b>
        <br />
        there are:
      </p>

      <Countown startDate={now} endDate={futureDate.current} />
    </main>
  );
}
