# Div

Div component for reactriot2017/groundbreakers

```javascript
const Div = styled.div`
  ${({ block }) => block && css`display: block;`}
  ${({ inline }) => inline && css`display: inline-block;`}
  ${({ noOverflow }) => noOverflow && css`overflow: hidden;`}
  ${({ textRight }) => textRight && css`text-align: right;`}
  ${({ textCenter }) => textCenter && css`text-align: center;`}
  ${({ textLeft }) => textLeft && css`text-align: left;`}
  ${({ marginBottom }) => marginBottom && css`margin-bottom: ${marginBottom};`}
  ${({ marginTop }) => marginTop && css`margin-top: ${marginTop};`}
  ${({ marginLeft }) => marginLeft && css`margin-left: ${marginLeft};`}
  ${({ marginRight }) => marginRight && css`margin-right: ${marginRight};`}
  ${({ paddingBottom }) => paddingBottom && css`padding-bottom: ${paddingBottom};`}
  ${({ paddingTop }) => paddingTop && css`padding-top: ${paddingTop};`}
  ${({ paddingLeft }) => paddingLeft && css`padding-left: ${paddingLeft};`}
  ${({ paddingRight }) => paddingRight && css`padding-right: ${paddingRight};`}
  ${({ zIndex }) => zIndex && css`z-index: ${zIndex};`}
  ${({ height }) => height && css`height: ${height};`}
  ${({ width }) => width && css`width: ${width};`}
  ${({ backgroundColor }) => backgroundColor && css`background-color: ${backgroundColor};`}

  ${({ hideInTablet }) => hideInTablet && css`
    ${media.tablet`
      display: none;
    `}
  `}

  ${({ showInTablet }) => showInTablet && css`
    display: none;
    ${media.tablet`
      display: block;
    `}
  `}
`;
```
