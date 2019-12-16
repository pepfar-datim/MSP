import styled from 'styled-components';
import * as color_palette from './Colors';

export const PRIMARY = styled.button`
    font-family: 'Oswald', sans-serif;
    color: white;
    font-size: 16px;
    background-color: ${color_palette.PRIMARY_RED};
    border: 0;
    padding: 0.5em 1em;
    min-width: 150px;
    max-height: 50px;
    margin: 0.5em;

    &:hover{
        background-color: ${color_palette.SECONDARY_RED};
    }

`;
export const PRIMARY_OUTLINE = styled.button`
    font-family: 'Oswald', sans-serif;
    color: ${color_palette.PRIMARY_RED};
    font-size: 16px;
    border: 2px solid ${color_palette.PRIMARY_RED};
    padding: 0.5em 1em;
    min-width: 150px;
    max-height: 50px;
    margin: 0.5em;
    background-color: white;

    &:hover{
        background-color: ${color_palette.PRIMARY_RED};
        color: white;
    }

`;

export const SECONDARY = styled.button`
    font-family: 'Roboto', sans-serif;
    color: white;
    font-size: 14px;
    background-color: ${color_palette.PRIMARY_BLUE};
    border: 0;
    padding: 0.5em 1em;
    min-width: 100px;
    max-height: 40px;
    margin: 0 0.5em;

    &:hover{
        background-color: ${color_palette.SECONDARY_BLUE};
    }

`;

export const SECONDARY_OUTLINE = styled.button`
    font-family: 'Roboto', sans-serif;
    color: ${color_palette.PRIMARY_BLUE};
    font-size: 14px;
    border: 2px solid ${color_palette.PRIMARY_BLUE};
    padding: 0.5em 1em;
    min-width: 100px;
    max-height: 40px;
    margin: 0 0.5em;
    background-color: white;

    &:hover{
        background-color: ${color_palette.PRIMARY_BLUE};
        color: white;
    }

`;

