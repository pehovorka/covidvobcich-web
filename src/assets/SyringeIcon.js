import PropTypes from "prop-types";

export function SyringeIcon({ color, size }) {
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      width={size}
      height={size}
      fill={color}
    >
      <g>
        <g>
          <path
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="66.667"
            d="m256.1,336.8"
            strokeMiterlimit="10"
          />
          <path d="m201.6,67.8c-8-8-20.9-8-28.9,0l-42.3,42.3-30.5-30.5 25-25c8-8 8-21 0-29-8-8-21-8-29,0l-78.8,78.8c-8,8-8,21 0,29 8,8 21,8 29,0l25-25 30.5,30.5-42.3,42.3c-8,8-8,20.9 0,28.9l189.1,189.1c3.8,3.8 9,6 14.4,6 0.1,0 0.2,0 0.3,0l106.8-1.5 96.4,96.4c8,8 20.9,8 28.9,0 8-8 8-20.9 0-28.9l-96.6-96.6-1.9-103.6c-0.1-5.3-2.2-10.3-6-14.1l-189.1-189.1zm155.9,295.3l-85.2,1.2 31.5-31.5c8-8 8-20.9 0-28.9-8-8-20.9-8-28.9,0l-32,32.1-28.3-28.3 32.1-32.1c8-8 8-20.9 0-28.9-8-8-20.9-8-28.9,0l-32.1,32.1-28.2-28.2 32.1-32.1c8-8 8-20.9 0-28.9-8-8-20.9-8-28.9,0l-32.1,32.1-26.1-26.1 84.6-84.6 168.9,168.9 1.5,83.2z" />
        </g>
      </g>
    </svg>
  );
}

SyringeIcon.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number,
};

SyringeIcon.defaultProps = {
  size: 20,
};
