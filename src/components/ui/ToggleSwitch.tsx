import styled from 'styled-components';

interface ToggleSwitchProps {
  checked: boolean;
  onChange: () => void;
  label: string;
}

const ToggleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
`;

const ToggleLabel = styled.label`
  cursor: pointer;
  font-size: 0.875rem;
  color: var(--text-color);
`;

const Switch = styled.div`
  position: relative;
  width: 50px;
  height: 24px;
`;

const Slider = styled.div<{ $checked: boolean }>`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${({ $checked }) => ($checked ? 'var(--primary-color)' : '#ccc')};
  transition: var(--transition);
  border-radius: 34px;
  
  &:before {
    position: absolute;
    content: "";
    height: 16px;
    width: 16px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    transition: var(--transition);
    border-radius: 50%;
    transform: ${({ $checked }) => ($checked ? 'translateX(26px)' : 'translateX(0)')};
  }
`;

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  opacity: 0;
  width: 0;
  height: 0;
`;

const ToggleSwitch = ({ checked, onChange, label }: ToggleSwitchProps) => {
  return (
    <ToggleContainer>
      <Switch>
        <HiddenCheckbox checked={checked} onChange={onChange} />
        <Slider $checked={checked} />
      </Switch>
      <ToggleLabel onClick={onChange}>{label}</ToggleLabel>
    </ToggleContainer>
  );
};

export default ToggleSwitch;
