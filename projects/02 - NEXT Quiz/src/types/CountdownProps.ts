export interface CountdownProps {
  key: number,
  duration: number,
  timeout: () => void;
}