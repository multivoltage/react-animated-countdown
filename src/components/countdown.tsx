import { Box } from "./card";
import { getRemamingRangeTimes } from "../utils";
import styled from "styled-components";

interface Props {
  startDate: Date;
  endDate: Date;
}
export default function Countown({ startDate, endDate }: Props) {
  const { days, hours, minutes, seconds } = getRemamingRangeTimes(
    startDate,
    endDate
  );

  return (
    <Container>
      <Box labelNumber={days} labelPeriod="days" />
      <Box labelNumber={hours} labelPeriod="hours" />
      <Box labelNumber={minutes} labelPeriod="minutes" />
      <Box labelNumber={seconds} labelPeriod="seconds" />
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 1rem;

  @media (min-width: 768px) {
    grid-column-gap: 2rem;
  }
`;
