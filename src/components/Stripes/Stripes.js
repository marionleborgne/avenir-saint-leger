import React from 'react';

const viewBox = '0 0 1366 768';

class StripesHighlight extends React.Component {

  render() {
    const { width, height, flipped } = this.props;
    const path = (
      <svg xmlns='http://www.w3.org/2000/svg'
        viewBox={viewBox}
        preserveAspectRatio='none'
        width={width} height={height}
      >
        <style type='text/css'>
          {`.bg{fill:#ffffff;}
          .st0{fill:#338DC9;}
          .st1{fill:#66AAD7;}
          .st2{fill:#99C6E4;}
          .st3{fill:#CCE3F2;}`}
        </style>
        <g>
          <polygon className='bg' points='1366,768 0,768 0,0 1366,0 	' />
        </g>
        <g>
          <polygon className='st0' points='1366,768 0,768 0,0 1366,658 	' />
        </g>
        <g>
          <polygon className='st1' points='1366,768 0,768 0,100 1366,678 	' />
        </g>
        <g>
          <polygon className='st2' points='1366,768 0,768 0,200 1366,698 	' />
        </g>
        <g>
          <polygon className='st3' points='1366,768 0,768 0,300 1366,718 	' />
        </g>
      </svg>
    );

    const flippedPath = (
      <svg xmlns='http://www.w3.org/2000/svg'
        viewBox={viewBox}
        preserveAspectRatio='none'
        width={width} height={height}
      >
        <style type='text/css'>
          {`.bg{fill:#ffffff;}
          .st0{fill:#338DC9;}
          .st1{fill:#66AAD7;}
          .st2{fill:#99C6E4;}
          .st3{fill:#CCE3F2;}`}
        </style>
        <g>
          <polygon className='bg' points='1366,768 0,768 0,0 1366,0 	' />
        </g>
        <g>
          <polygon className='st0' points='0,658 1366,0 1366,768 0,768 	' />
        </g>
        <g>
          <polygon className='st1' points='0,678 1366,100 1366,768 0,768 	' />
        </g>
        <g>
          <polygon className='st2' points='0,698 1366,200 1366,768 0,768 	' />
        </g>
        <g>
          <polygon className='st3' points='0,718 1366,300 1366,768 0,768 	' />
        </g>
      </svg>
    );

    return flipped ? flippedPath : path;
  }
}

export default StripesHighlight;
