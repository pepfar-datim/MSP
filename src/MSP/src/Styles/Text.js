import styled from 'styled-components';
import * as color_palette from './Colors';

export const H1 = styled.h1`
    font-family: 'EB Garamond', serif;
    color: ${color_palette.PRIMARY_TEXT};
    font-size: 35px;
    font-weight: 400;
    text-transform: uppercase

`;

export const H2 = styled.h2`
    font-family: 'Oswald', sans-serif;
    color: ${color_palette.SECONDARY_BLUE};
    font-size: 24px;

`;
export const H3 = styled.h3`
    font-family: 'Oswald', sans-serif;
    color: ${color_palette.PRIMARY_RED};
    font-size: 19px;

`;
export const H4 = styled.h4`
    font-family: 'Roboto', sans-serif;
    color: ${color_palette.PRIMARY_TEXT};
    font-size: 19px;
    padding-top: 10px;
    padding-bottom: 5px;

`;