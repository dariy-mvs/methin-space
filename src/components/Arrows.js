import React from 'react';
import './Arrows.css';
import PropTypes from 'prop-types';

export default function Arrows({ arrowFunction }) {
  return (
    <ul
      className="arrows_box"
      onClick={arrowFunction}
      role="presentation"
    >
      <li className="arrows_box_item">
        <button type="button">
          <svg
            className="arrow arrow_left"
            version="1.0"
            xmlns="http://www.w3.org/2000/svg"
            width="640.000000pt"
            height="640.000000pt"
            viewBox="0 0 640.000000 640.000000"
            preserveAspectRatio="xMidYMid meet"
          >
            <g
              transform="translate(0.000000,640.000000) scale(0.100000,-0.100000)"
              fill="#cc3333"
              stroke="none"
            >
              <path d="M713 5404 c4 -6 416 -504 917 -1105 500 -601 910 -1096 910 -1099 0
            -3 -94 -118 -208 -256 -820 -982 -1609 -1931 -1617 -1944 -7 -12 -5 -12 11 1
            10 9 134 101 274 206 140 104 732 547 1315 983 583 436 1124 841 1202 899 79
            58 142 109 140 113 -1 4 -290 223 -642 486 -1385 1035 -2281 1705 -2294 1716
            -11 8 -13 8 -8 0z"
              />
              <path d="M3652 4328 c495 -596 910 -1093 920 -1105 l20 -21 -898 -1079 c-493
            -593 -909 -1091 -923 -1107 -14 -16 -19 -25 -11 -20 15 8 429 317 1935 1444
            424 316 825 616 892 665 67 50 122 92 122 95 0 3 -196 152 -437 331 -461 344
            -2141 1599 -2375 1775 -76 57 -140 104 -142 104 -3 0 401 -487 897 -1082z"
              />
            </g>
          </svg>
        </button>
      </li>
      <li className="arrows_box_item">
        <button type="button">
          <svg
            className="arrow arrow_right"
            version="1.0"
            xmlns="http://www.w3.org/2000/svg"
            width="640.000000pt"
            height="640.000000pt"
            viewBox="0 0 640.000000 640.000000"
            preserveAspectRatio="xMidYMid meet"
          >

            <g
              transform="translate(0.000000,640.000000) scale(0.100000,-0.100000)"
              fill="#cc3333"
              stroke="none"
            >
              <path d="M713 5404 c4 -6 416 -504 917 -1105 500 -601 910 -1096 910 -1099 0
            -3 -94 -118 -208 -256 -820 -982 -1609 -1931 -1617 -1944 -7 -12 -5 -12 11 1
            10 9 134 101 274 206 140 104 732 547 1315 983 583 436 1124 841 1202 899 79
            58 142 109 140 113 -1 4 -290 223 -642 486 -1385 1035 -2281 1705 -2294 1716
            -11 8 -13 8 -8 0z"
              />
              <path d="M3652 4328 c495 -596 910 -1093 920 -1105 l20 -21 -898 -1079 c-493
            -593 -909 -1091 -923 -1107 -14 -16 -19 -25 -11 -20 15 8 429 317 1935 1444
            424 316 825 616 892 665 67 50 122 92 122 95 0 3 -196 152 -437 331 -461 344
            -2141 1599 -2375 1775 -76 57 -140 104 -142 104 -3 0 401 -487 897 -1082z"
              />
            </g>
          </svg>
        </button>
      </li>
    </ul>
  );
}
Arrows.propTypes = {
  arrowFunction: PropTypes.func,
};
Arrows.defaultProps = {
  arrowFunction: () => {
    alert('??????-???? ?????????? ???? ??????...');
  },
};
