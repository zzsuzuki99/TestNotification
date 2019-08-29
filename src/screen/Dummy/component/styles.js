import { StyleSheet } from 'react-native';
import Screen, * as AppValues from '../../../utils/AppValues';

module.exports = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppValues.COLOR_TEXT_GRAY_FA
  },
  containerContent: {
    padding: Screen.width(3),
    flex: 1
  },
  containerTitle: {},
  titleHeader: {
    color: AppValues.COLOR_TEXT_GRAY_8E,
    fontSize: 10,
    fontWeight: 'bold',
    marginEnd: 10
  },
  iconCreatePage: {
    width: 37,
    height: 37,
    borderRadius: 23,
    borderColor: AppValues.COLOR_TEXT_BLUE,
    borderWidth: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    marginEnd: 10
  },
  textCreatePage: {
    color: AppValues.COLOR_TEXT_BLUE,
    fontSize: 13
  },
  containerAction: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: AppValues.COLOR_BG_WHITE,
    padding: Screen.width(3),
    marginVertical: Screen.width(3),
    borderRadius: 8,
    borderWidth: 0.5,
    borderColor: 'rgba(224,224,224,0.3)'
  },
  containerIcon: {
    width: 36,
    height: 36,
    borderRadius: 18,
    borderColor: AppValues.COLOR_TEXT_BLUE,
    borderWidth: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: AppValues.COLOR_BG_WHITE
  },
  textAction: {
    color: AppValues.COLOR_TEXT_BLUE,
    fontSize: AppValues.SIZE_TEXT_SMALLER
  },
  itemSparator: {
    backgroundColor: 'transparent',
    width: '100%',
    height: Screen.width(1)
  }
});
