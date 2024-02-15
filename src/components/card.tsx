import styled from "styled-components";
import { animated, useSpring, easings } from "@react-spring/web";
import { useEffect, useState } from "react";
import { usePrevious } from "../hooks/usePrevious";

interface Props {
  labelNumber: number;
  labelPeriod: string;
}

export const Box: React.FC<Props> = ({ labelNumber, labelPeriod }) => {
  const [mounted, setMounted] = useState(true);

  const [props] = useSpring(
    () => ({
      from: { rotateX: "0deg" },
      to: { rotateX: "180deg" },
      delay: 0,
      reset: true,
      config: {
        easing: easings.steps(2),
      },
    }),
    [labelNumber, mounted]
  );

  useEffect(() => {
    setMounted(true);
  }, []);

  // with this hook we can avoid card render new number before start animation for backface
  const previous = usePrevious(labelNumber);

  return (
    <Container>
      <Card className="card">
        <Content style={props}>
          <ContentFront>
            <span>{labelNumber}</span>
            <LabelPeriod>{labelPeriod}</LabelPeriod>
          </ContentFront>
          <ContentBack>
            <span>{previous}</span>
            <LabelPeriod>{labelPeriod}</LabelPeriod>
          </ContentBack>
        </Content>
      </Card>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  width: 100%;
`;

const LabelPeriod = styled.span`
  font-size: 14px;
  line-height: 1;
  @media (min-width: 768px) {
    font-size: 32px;
  }
`;

const Content = styled(animated.div)`
  position: absolute;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  perspective: 500px;
`;

const Card = styled.div`
  top: 50%;
  left: 50%;
  width: 100%;
  aspect-ratio: 1 / 1;
  perspective: 500px;
`;

export const ContentShared = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  text-align: center;
  font-size: 24px;
  @media (min-width: 768px) {
    font-size: 80px;
  }
  line-height: 1;
  backface-visibility: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;

  border-radius: 14px;
  background: #9c27b0;
  border: 3px solid #009688;
  @media (min-width: 768px) {
    border-width: 6px;
  }
`;

const ContentFront = styled(ContentShared)`
  transform: rotateX(180deg);
`;

const ContentBack = styled(ContentShared)``;
