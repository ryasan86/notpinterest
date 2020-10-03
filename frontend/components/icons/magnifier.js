import React from 'react'

const MagnifierIcon = props => {
    switch (props.name) {
        case 'magnifier-texture':
            return (
                <svg
                    width='52'
                    height='51'
                    viewBox='0 0 52 51'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                    xmlnsXlink='http://www.w3.org/1999/xlink'>
                    <path
                        fillRule='evenodd'
                        clipRule='evenodd'
                        d='M37.4091 33.499L50.5341 46.3896C51.4436 47.2823 51.4436 48.738 50.5341 49.6317C50.0792 50.0786 49.4789 50.3021 48.8833 50.3021C48.2901 50.3021 47.6875 50.0786 47.2331 49.6317L34.1081 36.7411C30.5147 39.5599 25.9583 41.25 21 41.25C9.40332 41.25 0 32.0146 0 20.625C0 9.23541 9.40332 0 21 0C32.5966 0 42 9.23541 42 20.625C42 25.4948 40.2791 29.9698 37.4091 33.499ZM4.66666 20.625C4.66666 29.4846 11.9793 36.6667 21 36.6667C30.0207 36.6667 37.3333 29.4846 37.3333 20.625C37.3333 11.7654 30.0207 4.58334 21 4.58334C11.9793 4.58334 4.66666 11.7654 4.66666 20.625Z'
                        fill='url(#pattern0)'
                    />
                    <defs>
                        <pattern
                            id='pattern0'
                            patternContentUnits='objectBoundingBox'
                            width='1'
                            height='1'>
                            <use
                                xlinkHref='#image0'
                                transform='translate(-0.0396438) scale(0.0107929 0.010989)'
                            />
                        </pattern>
                        <image
                            id='image0'
                            width='100'
                            height='91'
                            xlinkHref='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABbCAYAAACFziAsAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDE0IDc5LjE1Njc5NywgMjAxNC8wOC8yMC0wOTo1MzowMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MDBEQjRDQUE5Nzc2MTFFNDlENTQ4NDIzRjNCMkJCNkQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MDBEQjRDQUI5Nzc2MTFFNDlENTQ4NDIzRjNCMkJCNkQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDowMERCNENBODk3NzYxMUU0OUQ1NDg0MjNGM0IyQkI2RCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDowMERCNENBOTk3NzYxMUU0OUQ1NDg0MjNGM0IyQkI2RCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PripuHIAACzgSURBVHja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'
                        />
                    </defs>
                </svg>
            )

        case 'magnifier':
        default:
            return (
                <svg
                    {...props}
                    enableBackground='new 0 0 96 96'
                    height='96px'
                    id='magnifying_glass'
                    version='1.1'
                    viewBox='0 0 96 96'
                    width='96px'
                    xmlSpace='preserve'
                    xmlns='http://www.w3.org/2000/svg'
                    xmlnsXlink='http://www.w3.org/1999/xlink'>
                    <path
                        fill='currentColor'
                        d='M90.63,84.971l-22.5-22.5C73.05,56.311,76,48.5,76,40C76,20.12,59.88,4,40,4S4,20.12,4,40  s16.12,36,36,36c8.5,0,16.311-2.95,22.471-7.87l22.5,22.5c0.779,0.78,1.812,1.17,2.829,1.17c1.021,0,2.05-0.39,2.83-1.17  C92.189,89.07,92.189,86.529,90.63,84.971z M40,68c-15.464,0-28-12.536-28-28s12.536-28,28-28s28,12.536,28,28S55.464,68,40,68z'
                        id='_x3C_Path_x3E_'
                    />
                </svg>
            )
    }
}
export default MagnifierIcon
