import { theme } from './theme';

type BreakpointKey = keyof typeof theme.breakpoints;

export const media = {
  up: (breakpoint: BreakpointKey) => `@media (min-width: ${theme.breakpoints[breakpoint]})`,
  down: (breakpoint: BreakpointKey) => `@media (max-width: ${theme.breakpoints[breakpoint]})`,
  between: (min: BreakpointKey, max: BreakpointKey) =>
    `@media (min-width: ${theme.breakpoints[min]}) and (max-width: ${theme.breakpoints[max]})`,
};

export default media;
