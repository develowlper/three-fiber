import { RoundedBox } from '@react-three/drei';
import { forwardRef } from 'react';

const Cube = forwardRef(({ color = '#11FFEE', ...meshProps }, ref) => {
  return (
    <>
      <mesh ref={ref} {...meshProps}>
        <RoundedBox>
          <meshPhongMaterial color={color} />
        </RoundedBox>
      </mesh>
    </>
  );
});

export default Cube;
