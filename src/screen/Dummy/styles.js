import { StyleSheet } from 'react-native';
import Screen, * as AppValues from '../../utils/AppValues';

// Style of ConfirmDepartmental

export default StyleSheet.create({
  unselectIcon: {
    backgroundColor: AppValues.COLOR_PRIMARY,
    width: Screen.width(10),
    height: Screen.width(10),
    borderRadius: Screen.width(5),
    borderWidth: 1,
    borderColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: Screen.width(2)
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: AppValues.COLOR_BG_WHITE,
    borderColor: AppValues.COLOR_LINE,
    borderWidth: 0.5
  },
  selectedIcon: {
    backgroundColor: 'white',
    borderRadius: Screen.width(5),
    width: Screen.width(10),
    height: Screen.width(10),
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: Screen.width(2)
  }
});
