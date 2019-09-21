import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    
`;

const Color = styled.div`
    width: 30px;
    height: 30px;
    ${(props) => `background-color: ${props.color};`}
    display: inline-block;
`;

const Cell = styled.td`
    padding: 10px;
    text-align: center;
    vertical-align: middle;
    border-left: 1px solid #eee;
    border-bottom: 1px solid #eee;

    &:last-child {
        border-right: 1px solid #eee;
    }

    &:first-child {
        border-top: 1px solid #eee;
    }

    font-family: "Gentium Book Basic", times, serif;
    font-size: 16px;
    line-height: 20px;
    color: #333;

    @media (prefers-color-scheme: dark) {
        color: #fff;
    }

    ${(props) => props.monospace && `font-family: monospace;`}
    ${(props) => props.bold && `font-weight: bold;`}
    ${(props) => props.wide && `min-width: 340px;`}

    @media all and (max-width: 1000px) {
        font-size: 10px;
        line-height: 14px;
        ${(props) => props.narrow && `max-width: 120px;`}
        ${(props) => props.wide && `min-width: 200px;`}

        word-break: break-all;
    }
`;

const Row = styled.tr`
    &:first-child {
        border-top: 1px solid #eee;
    }
`;

const Table = styled.table`
    @media all and (max-width: 1000px) {
        width: 100%;
        margin: 0 auto;
    }

    @media all and (max-width: 600px) {
        width: 95%;
        margin: 0 auto;
    }
`;

export const lightModeData = [{"name":"label","hexString":"#000000ff","rgbaString":"rgba(0.0, 0.0, 0.0, 1.0)"},{"name":"secondaryLabel","hexString":"#3c3c4399","rgbaString":"rgba(60.0, 60.0, 67.0, 0.6)"},{"name":"tertiaryLabel","hexString":"#3c3c434c","rgbaString":"rgba(60.0, 60.0, 67.0, 0.3)"},{"name":"quaternaryLabel","hexString":"#3c3c432d","rgbaString":"rgba(60.0, 60.0, 67.0, 0.18)"},{"name":"systemFill","hexString":"#78788033","rgbaString":"rgba(120.0, 120.0, 128.0, 0.2)"},{"name":"secondarySystemFill","hexString":"#78788028","rgbaString":"rgba(120.0, 120.0, 128.0, 0.16)"},{"name":"tertiarySystemFill","hexString":"#7676801e","rgbaString":"rgba(118.0, 118.0, 128.0, 0.12)"},{"name":"quaternarySystemFill","hexString":"#74748014","rgbaString":"rgba(116.0, 116.0, 128.0, 0.08)"},{"name":"placeholderText","hexString":"#3c3c434c","rgbaString":"rgba(60.0, 60.0, 67.0, 0.3)"},{"name":"systemBackground","hexString":"#ffffffff","rgbaString":"rgba(255.0, 255.0, 255.0, 1.0)"},{"name":"secondarySystemBackground","hexString":"#f2f2f7ff","rgbaString":"rgba(242.0, 242.0, 247.0, 1.0)"},{"name":"tertiarySystemBackground","hexString":"#ffffffff","rgbaString":"rgba(255.0, 255.0, 255.0, 1.0)"},{"name":"systemGroupedBackground","hexString":"#f2f2f7ff","rgbaString":"rgba(242.0, 242.0, 247.0, 1.0)"},{"name":"secondarySystemGroupedBackground","hexString":"#ffffffff","rgbaString":"rgba(255.0, 255.0, 255.0, 1.0)"},{"name":"tertiarySystemGroupedBackground","hexString":"#f2f2f7ff","rgbaString":"rgba(242.0, 242.0, 247.0, 1.0)"},{"name":"separator","hexString":"#3c3c4349","rgbaString":"rgba(60.0, 60.0, 67.0, 0.29)"},{"name":"opaqueSeparator","hexString":"#c6c6c8ff","rgbaString":"rgba(198.0, 198.0, 200.0, 1.0)"},{"name":"link","hexString":"#007affff","rgbaString":"rgba(0.0, 122.0, 255.0, 1.0)"},{"name":"darkText","hexString":"#000000ff","rgbaString":"rgba(0.0, 0.0, 0.0, 1.0)"},{"name":"lightText","hexString":"#ffffff99","rgbaString":"rgba(255.0, 255.0, 255.0, 0.6)"},{"name":"systemBlue","hexString":"#007affff","rgbaString":"rgba(0.0, 122.0, 255.0, 1.0)"},{"name":"systemGreen","hexString":"#34c759ff","rgbaString":"rgba(52.0, 199.0, 89.0, 1.0)"},{"name":"systemIndigo","hexString":"#5856d6ff","rgbaString":"rgba(88.0, 86.0, 214.0, 1.0)"},{"name":"systemOrange","hexString":"#ff9500ff","rgbaString":"rgba(255.0, 149.0, 0.0, 1.0)"},{"name":"systemPink","hexString":"#ff2d55ff","rgbaString":"rgba(255.0, 45.0, 85.0, 1.0)"},{"name":"systemPurple","hexString":"#af52deff","rgbaString":"rgba(175.0, 82.0, 222.0, 1.0)"},{"name":"systemRed","hexString":"#ff3b30ff","rgbaString":"rgba(255.0, 59.0, 48.0, 1.0)"},{"name":"systemTeal","hexString":"#5ac8faff","rgbaString":"rgba(90.0, 200.0, 250.0, 1.0)"},{"name":"systemYellow","hexString":"#ffcc00ff","rgbaString":"rgba(255.0, 204.0, 0.0, 1.0)"},{"name":"systemGray","hexString":"#8e8e93ff","rgbaString":"rgba(142.0, 142.0, 147.0, 1.0)"},{"name":"systemGray2","hexString":"#aeaeb2ff","rgbaString":"rgba(174.0, 174.0, 178.0, 1.0)"},{"name":"systemGray3","hexString":"#c7c7ccff","rgbaString":"rgba(199.0, 199.0, 204.0, 1.0)"},{"name":"systemGray4","hexString":"#d1d1d6ff","rgbaString":"rgba(209.0, 209.0, 214.0, 1.0)"},{"name":"systemGray5","hexString":"#e5e5eaff","rgbaString":"rgba(229.0, 229.0, 234.0, 1.0)"},{"name":"systemGray6","hexString":"#f2f2f7ff","rgbaString":"rgba(242.0, 242.0, 247.0, 1.0)"}];
export const darkModeData = [{"name":"label","hexString":"#ffffffff","rgbaString":"rgba(255.0, 255.0, 255.0, 1.0)"},{"name":"secondaryLabel","hexString":"#ebebf599","rgbaString":"rgba(235.0, 235.0, 245.0, 0.6)"},{"name":"tertiaryLabel","hexString":"#ebebf54c","rgbaString":"rgba(235.0, 235.0, 245.0, 0.3)"},{"name":"quaternaryLabel","hexString":"#ebebf52d","rgbaString":"rgba(235.0, 235.0, 245.0, 0.18)"},{"name":"systemFill","hexString":"#7878805b","rgbaString":"rgba(120.0, 120.0, 128.0, 0.36)"},{"name":"secondarySystemFill","hexString":"#78788051","rgbaString":"rgba(120.0, 120.0, 128.0, 0.32)"},{"name":"tertiarySystemFill","hexString":"#7676803d","rgbaString":"rgba(118.0, 118.0, 128.0, 0.24)"},{"name":"quaternarySystemFill","hexString":"#7676802d","rgbaString":"rgba(118.0, 118.0, 128.0, 0.18)"},{"name":"placeholderText","hexString":"#ebebf54c","rgbaString":"rgba(235.0, 235.0, 245.0, 0.3)"},{"name":"systemBackground","hexString":"#000000ff","rgbaString":"rgba(0.0, 0.0, 0.0, 1.0)"},{"name":"secondarySystemBackground","hexString":"#1c1c1eff","rgbaString":"rgba(28.0, 28.0, 30.0, 1.0)"},{"name":"tertiarySystemBackground","hexString":"#2c2c2eff","rgbaString":"rgba(44.0, 44.0, 46.0, 1.0)"},{"name":"systemGroupedBackground","hexString":"#000000ff","rgbaString":"rgba(0.0, 0.0, 0.0, 1.0)"},{"name":"secondarySystemGroupedBackground","hexString":"#1c1c1eff","rgbaString":"rgba(28.0, 28.0, 30.0, 1.0)"},{"name":"tertiarySystemGroupedBackground","hexString":"#2c2c2eff","rgbaString":"rgba(44.0, 44.0, 46.0, 1.0)"},{"name":"separator","hexString":"#54545899","rgbaString":"rgba(84.0, 84.0, 88.0, 0.6)"},{"name":"opaqueSeparator","hexString":"#38383aff","rgbaString":"rgba(56.0, 56.0, 58.0, 1.0)"},{"name":"link","hexString":"#0984ffff","rgbaString":"rgba(9.0, 132.0, 255.0, 1.0)"},{"name":"darkText","hexString":"#000000ff","rgbaString":"rgba(0.0, 0.0, 0.0, 1.0)"},{"name":"lightText","hexString":"#ffffff99","rgbaString":"rgba(255.0, 255.0, 255.0, 0.6)"},{"name":"systemBlue","hexString":"#0a84ffff","rgbaString":"rgba(10.0, 132.0, 255.0, 1.0)"},{"name":"systemGreen","hexString":"#30d158ff","rgbaString":"rgba(48.0, 209.0, 88.0, 1.0)"},{"name":"systemIndigo","hexString":"#5e5ce6ff","rgbaString":"rgba(94.0, 92.0, 230.0, 1.0)"},{"name":"systemOrange","hexString":"#ff9f0aff","rgbaString":"rgba(255.0, 159.0, 10.0, 1.0)"},{"name":"systemPink","hexString":"#ff375fff","rgbaString":"rgba(255.0, 55.0, 95.0, 1.0)"},{"name":"systemPurple","hexString":"#bf5af2ff","rgbaString":"rgba(191.0, 90.0, 242.0, 1.0)"},{"name":"systemRed","hexString":"#ff453aff","rgbaString":"rgba(255.0, 69.0, 58.0, 1.0)"},{"name":"systemTeal","hexString":"#64d2ffff","rgbaString":"rgba(100.0, 210.0, 255.0, 1.0)"},{"name":"systemYellow","hexString":"#ffd60aff","rgbaString":"rgba(255.0, 214.0, 10.0, 1.0)"},{"name":"systemGray","hexString":"#8e8e93ff","rgbaString":"rgba(142.0, 142.0, 147.0, 1.0)"},{"name":"systemGray2","hexString":"#636366ff","rgbaString":"rgba(99.0, 99.0, 102.0, 1.0)"},{"name":"systemGray3","hexString":"#48484aff","rgbaString":"rgba(72.0, 72.0, 74.0, 1.0)"},{"name":"systemGray4","hexString":"#3a3a3cff","rgbaString":"rgba(58.0, 58.0, 60.0, 1.0)"},{"name":"systemGray5","hexString":"#2c2c2eff","rgbaString":"rgba(44.0, 44.0, 46.0, 1.0)"},{"name":"systemGray6","hexString":"#1c1c1eff","rgbaString":"rgba(28.0, 28.0, 30.0, 1.0)"}];

const DataTable = (props) => {
    return (
        <Table>
            <tbody>
                <Row>
                    <Cell monospace bold>Name</Cell>
                    <Cell monospace bold>Color</Cell>
                    <Cell monospace bold>Hex String</Cell>
                    <Cell monospace bold>RGBA</Cell>
                </Row>
                {props.data.map(function(color) {
                    return (
                        <Row key={color.name}>
                            <Cell narrow monospace>{color.name}</Cell>
                            <Cell><Color color={color.rgbaString}/></Cell>
                            <Cell monospace>{color.hexString}</Cell>
                            <Cell monospace wide>{color.rgbaString}</Cell>
                        </Row>
                    );
                })}
            </tbody>
        </Table>
    );
};

const IOS13SystemColorTable = (props) => {
    return (
        <Container>
            <h3>Light Mode</h3>
            <DataTable data={lightModeData} />

            <h3>Dark Mode</h3>
            <DataTable data={darkModeData} />
        </Container>
    );
};
export default IOS13SystemColorTable;