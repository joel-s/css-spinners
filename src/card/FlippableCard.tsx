import styled from "styled-components";
import {useState} from "react";

const Card = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 90vmin;
  width: 90vmin;
  margin: auto;
  perspective: 200vmin;
  transition: transform 1000ms, z-index 1000ms;
  will-change: transform, z-index;
`;

const Face = styled.div`
  height: 100%;
  width: 100%;
  border-radius: 5%;
  transition: transform 1000ms;
  will-change: transform;
  backface-visibility: hidden;
`;

const Front = styled(Face)`
  background-color: white;
`;

const Back = styled(Face)`
  position: absolute;
  top: 0;
  left: 0;
  background-color: hsl(200deg, 100%, 60%);
`;

const Background = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  background-color: white;
  z-index: 50;
`;

export default function FlippableCard({ children, xOffset, yOffset } :
    { children: JSX.Element, xOffset: number, yOffset: number }) {
  const [isOpen, setIsOpen] = useState(false);
  const [inTransition, setInTransition] = useState(false)
  const flip = () => {
    setInTransition(true);
    setIsOpen(!isOpen);
  }

  return (
    <>
      <Card onClick={flip} onTransitionEnd={() => setInTransition(false)} style={{
        transform: isOpen
          ? 'translateX(0) translateY(0) translateZ(0)'
          : `translateX(${xOffset*70}vmin) translateY(${yOffset*70}vmin) translateZ(-500vmin)`,
        zIndex: isOpen ? 100 : 1,
      }}>
        <Front style={{
          transform: isOpen
            ? 'rotateY(0deg)'
            : 'rotateY(180deg)',
        }}>
          {(isOpen || inTransition) && children}
        </Front>
        <Back style={{
          transform: isOpen
            ? 'rotateY(-180deg)'
            : 'rotateY(0deg)',
        }} />
      </Card>
      {isOpen && <Background role="button" onClick={flip} />}
    </>
  );
}
