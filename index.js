import { NativeModules } from 'react-native';

const { ArchMidtrans } = NativeModules;

export default {
  checkOut: function (optionConect, transRequest, itemDetails, creditCardOptions, mapUserDetail,
    optionColorTheme, optionFont, resultCheckOut) {
    ArchMidtrans.checkOut(
    optionConect,
    transRequest,
    itemDetails,
    creditCardOptions,
    mapUserDetail,
    optionColorTheme,
    optionFont,
    resultCheckOut);
  },
};
