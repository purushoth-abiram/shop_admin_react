interface propsEdit {
    width?: number;
    height?: number;
}

export const EditIcon = ({ width = 33, height = 33 }: propsEdit) => {
    return (<svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 33.182 33.182">
        <g id="Edit" transform="translate(-1.5 -1.318)">
            <path id="Path_314" data-name="Path 314" d="M16.5,6H6A3,3,0,0,0,3,9V30a3,3,0,0,0,3,3H27a3,3,0,0,0,3-3V19.5" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
            <path id="Path_315" data-name="Path 315" d="M27.75,3.75a3.182,3.182,0,0,1,4.5,4.5L18,22.5,12,24l1.5-6Z" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
        </g>
    </svg>
    )
}