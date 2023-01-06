import type { SvgIconProps } from '@mui/material';
import { SvgIcon } from '@mui/material';

export const CheckedIcon: React.FC<SvgIconProps> = props => {
  return (
    <SvgIcon
      data-testid="checked-icon"
      width="27"
      height="27"
      viewBox="0 0 27 27"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g transform="translate(1 1)" fill="none" fillRule="evenodd">
        <rect stroke="#84BD00" strokeWidth="1.5" fill="#FFF" width="25" height="25" rx="7" />
        <path
          d="m9.419 12.428 2.657 2.553 4.43-5.673s.503-.452.987-.26c.433.172.647.732.407 1.138-.024.038-.031.047-.058.084l-5.008 6.413a.703.703 0 0 1-.224.198.88.88 0 0 1-.957-.047c-.036-.028-.043-.036-.077-.065l-3.338-3.207a.682.682 0 0 1-.195-.295c-.18-.481.229-1.09.812-1.073.035 0 .069.005.104.01.268.049.32.098.46.224z"
          fill="#84BD00"
        />
      </g>
    </SvgIcon>
  );
};

export const UncheckedIcon: React.FC<SvgIconProps> = props => {
  return (
    <SvgIcon
      data-testid="unchecked-icon"
      width="27"
      height="27"
      viewBox="0 0 27 27"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect
        width="25"
        height="25"
        rx="7"
        transform="translate(1 1)"
        fill="#FFF"
        stroke="#c4c4c4"
        strokeWidth="1.5"
        fillRule="evenodd"
      />
    </SvgIcon>
  );
};
