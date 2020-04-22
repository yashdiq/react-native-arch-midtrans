import { NativeModules } from 'react-native';

const { ArchMidtrans } = NativeModules;

export default {
  checkOut: function (optionConect: ?object,
                      transRequest: ?object,
                      itemDetails: ?object,
                      creditCardOptions: ?object,
                      mapUserDetail: ?object,
                      optionColorTheme: ?object,
                      optionFont: ?object,
                      resultCheckOut) {
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
