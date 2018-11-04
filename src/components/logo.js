import React from 'react'
import styled from 'styled-components'

import theme from '../theme'

const Logo = (props) => (
  <>
    <Mark {...props} width="42px" height="37px" viewBox="0 0 42 37">
      <path transform="translate(-24, -27)" d="M32.6499132,53.3358858 C32.6499132,53.1905905 34.3796421,52.9 34.9971306,52.9 C38.3300461,52.9 40.0588235,55.0760761 40.0588235,55.2213714 C40.0588235,55.3666667 39.9351355,55.3666667 39.9351355,55.3666667 C39.5640716,55.3666667 35.6117647,53.6231234 32.6470588,53.3347682 C32.7707468,53.4744752 32.6470588,53.3347682 32.6470588,53.3347682 M41.2941176,47.84141 C41.2941176,47.9666667 41.1652967,47.9666667 41.1652967,47.9666667 C41.0364757,47.9666667 39.4935967,47.2151269 38.3351988,46.5888437 C36.7913289,45.9625605 35.1176471,45.5867906 35.1176471,45.5867906 C38.0765659,45.2110207 40.0068988,46.0878171 41.0364757,47.5908968 C41.1652967,47.7161534 41.2941176,47.7161534 41.2941176,47.84141 M42.5282228,41.6877611 C42.5282228,41.8 42.2191021,41.8 42.2191021,41.8 C42.2191021,41.8 39.9054521,40.5653716 37.7427957,39.4455723 C37.5882353,39.4455723 37.5882353,39.3333333 37.5882353,39.3333333 C40.3679443,39.5578112 42.3760403,40.6767472 42.5294118,41.6860343 M47.4705882,41.5861176 C48.0700777,40.084812 50.4645769,39.4406874 52.11202,39.3333333 L52.4117647,39.3333333 C51.9621476,39.9774579 49.1168785,40.5125767 47.6204606,41.8 C47.6204606,41.6926459 47.4705882,41.6926459 47.4705882,41.5852918 M54.8813622,45.524113 C54.6237615,45.8741974 51.1511068,46.7494086 48.8346827,49.2 C48.8346827,49.2 48.7058824,49.0249578 48.7058824,48.8499155 C50.2495046,44.9989862 53.9817415,45.524113 54.8823529,45.524113 M50.036916,53.7980339 C50.036916,53.7980339 51.6449593,51.5586821 56.2223572,51.6707359 C56.4700416,51.6707359 57.0892526,51.7827897 57.3331264,51.7827897 C57.3331264,51.7827897 57.4569686,51.8948435 57.085442,51.8948435 C55.7250832,52.0068973 52.5080441,53.237765 51.8897857,53.5730644 C51.394417,53.797172 50.4055847,54.1333333 50.0340581,54.1333333 C49.9102159,54.1333333 49.9102159,54.0212795 50.0340581,53.797172 M62.7936672,58.8832968 C61.0252847,60.3419389 55.9914709,61.5333333 52.5898489,61.5333333 C51.9088959,61.5333333 51.227943,61.5333333 50.6852758,61.4007295 C50.276704,61.4007295 49.8681323,61.2681257 49.4595605,61.1355218 C49.0509887,61.002918 47.8284162,60.7397504 47.1474632,59.8115236 C46.7388915,59.1485044 46.1941291,57.2940908 47.2836538,56.4994879 C48.9158457,55.1734495 50.5490852,56.7646955 52.5898489,56.4994879 C57.4874722,55.9690725 57.3512816,53.0548483 60.8890942,51.2004347 C54.3582314,49.4765849 49.0509887,51.5982462 47.8284162,53.9820551 C46.7388915,55.9711126 46.1941291,55.1754896 46.1941291,54.5124704 L46.1941291,52.9212245 C46.1941291,52.2602454 46.1941291,50.8026232 47.4198444,50.0080203 C48.6455598,49.2123973 48.9158457,49.7428126 51.5013718,49.6102088 C55.1753749,49.3450011 55.7190897,46.1625091 57.8960439,44.7059071 C55.7190897,44.8385109 50.0043228,42.453682 47.1474632,48.2831504 C47.0112726,48.6809619 46.3303197,49.0787734 46.0579385,49.4765849 C46.0579385,47.2223198 45.9217479,46.5613407 46.0579385,45.6331138 C46.0579385,45.1026985 46.4665103,43.6460964 47.2836538,43.5134926 C47.8284162,43.3808888 49.0520363,43.3808888 49.7329893,43.2482849 C51.5013718,42.8504734 53.5421354,40.9960598 53.4059448,38.3460233 C51.9130864,39.0090424 47.966702,37.8156079 46.4707007,42.3190381 C46.3345102,42.5842457 46.062129,43.3798687 45.9259384,43.6450764 C45.9259384,43.1146611 45.6535572,40.1994168 45.7897478,39.0070024 C45.9259384,38.8743985 48.5104168,36.8853411 46.7430819,33.838513 C46.062129,32.5124747 45.1087948,30.9242888 45.1087948,30.9242888 C45.1087948,30.9242888 44.1554607,32.5134947 43.4745077,33.838513 C41.70403,36.8884011 44.2916512,38.8743985 44.4278418,39.0070024 L44.4278418,42.9810372 C44.2916512,44.0418679 43.7468889,41.3897912 43.0659359,40.4636045 C42.2487923,39.4027738 41.2996487,38.7397546 39.6664092,38.6071508 C38.713075,38.474547 38.5768844,38.6071508 36.9457401,38.3419431 C38.8503132,44.1724316 41.7071728,43.111601 43.3404123,43.5094125 C44.0213653,43.6420163 44.2937465,45.1006585 44.4299371,45.7636776 C44.5661277,46.6919044 44.4299371,49.340921 44.4299371,49.340921 C43.2042217,48.6779018 41.7061252,44.1744717 38.0352649,44.4386593 C35.1784053,44.5712632 33.001451,44.4386593 32.8652604,44.3060555 C34.7719287,47.4885475 36.1338347,50.4027717 42.2550781,49.4745449 C43.4807934,49.341941 44.1617464,51.1983947 44.297937,51.5962062 C44.4341276,52.2592253 44.4341276,53.3180159 44.297937,54.5104304 C44.1617464,55.7038649 43.4807934,54.6430342 42.6636498,53.9800151 C41.9826969,53.1843921 39.1268849,50.4027717 34.2303092,51.0657908 C31.5064973,51.4636023 31.9150691,51.3309985 29.6029719,51.0657908 C30.6924966,52.3918292 33.6834516,58.3528814 39.2620279,55.9680525 C42.3912687,54.6420142 44.7044135,56.6310717 43.4797458,59.6768797 C43.2073646,60.3398988 42.390221,60.8703142 41.0304103,61.2681257 C40.6218386,61.4007295 40.3494574,61.4007295 39.9408856,61.5333333 L37.6277407,61.5333333 C35.3156435,61.5333333 32.3225933,61.002918 30.0115437,60.207295 C28.9220189,59.8094835 27.9686848,59.2790682 27.2877318,58.8812567 C26.7429694,58.3508414 26.4705882,57.9530299 26.4705882,57.820426 C26.4705882,52.7865806 29.3305907,46.1614891 33.2748798,40.5982483 C36.9520259,35.2961351 41.7124109,30.791685 44.9767947,29.4666667 C48.2432737,30.792705 52.8695634,35.1635313 56.6787096,40.5951883 C60.6240463,46.1604691 63.4819535,52.7845405 63.4819535,57.819406 C63.6181441,58.0846137 63.4819535,58.4824252 62.8010006,58.8802367 M45.5216031,38.0980042 C45.3610148,38.0980042 45.0398383,37.8385444 45.0398383,37.8385444 C45.0398383,37.8385444 45.0398383,37.060165 45.2004266,36.1540515 C45.3610148,34.8567526 45.2004266,33.0435278 45.3610148,33.1732577 C45.8427795,33.5624474 46.3245442,35.5064 46.163956,36.1540515 C46.163956,36.6729711 46.0033678,38.1 45.5216031,38.1 M58.63635,39.3336737 C54.5445,33.4986617 49.63785,28.7254891 45.273,27.1327299 L44.8635,27 L44.454,27.1327299 C40.22775,28.7254891 35.319,33.4986617 31.22715,39.3336737 C27.13635,45.1686857 24,52.0655371 24,57.8995281 C24,59.0940975 24.819,60.153895 25.6359,60.8175446 C28.3638,62.9391815 33.40905,64 37.5009,64 C38.3178,64 39.1368,64 39.81825,63.8672701 C42.27315,63.4690803 44.31855,62.8054306 45,62.9381605 C45.6825,62.9381605 47.5914,63.4690803 50.18175,63.8672701 C50.86425,64 51.68325,64 52.50015,64 C55.227,64 58.36335,63.4690803 60.95475,62.5399707 C62.31975,62.009051 63.4086,61.4781313 64.3641,60.8144816 C65.3196,60.150832 66,59.0889925 66,57.8944231 C65.8635,52.0604321 62.72715,45.1625597 58.63635,39.3295897"></path>
    </Mark>
    {props.simple ? null : <Title {...props}>Ligonier Ministries</Title>}
  </>
)

const Mark = styled('svg')`
  left: 0;
  position: fixed;
  top: 2px;
  transform: scale(0.5);
  z-index: ${p => p.theme.index.logoMark};
  @media (min-width: ${p => p.theme.breakpoints.small}) {
    left: 25px;
    top: 25px;
    transform: scale(0.9);
  }
  path {
    fill: ${p => p.inverted ? p.theme.colors.white : theme.colors.black};
    transition: ${p => p.theme.transition};
  }
`

const Title = styled('p')`
  display: none;
  @media (min-width: ${p => p.theme.breakpoints.medium}) {
    color: ${p => p.inverted ? p.theme.colors.white : theme.colors.black};
    display: block;
    font-size: 10px;
    font-weight: 600;
    left: 90px;
    letter-spacing: 0.35em;
    position: fixed;
    right: auto;
    text-align: left;
    text-transform: uppercase;
    top: 38px;
    transition: ${p => p.theme.transition};
    z-index: ${p => p.theme.index.logoTitle};
  }
`

export default Logo