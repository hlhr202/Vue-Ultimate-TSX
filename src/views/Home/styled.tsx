import styleWithProps from '@/lib/styled-components';

const styled = styleWithProps({
    color: { type: String, required: false, default: 'black' },
});

export const Button = styled.span<{}>`
    color: blue;
`;

export const HomeWrapper = styled.p`
    background: #555;
    color: #fff;
    .text {
        color: ${props => props.color!};
    }
    ${Button} & {
        // Currently Not supported in vue
        background: black;
        color: white;
    }
`;
