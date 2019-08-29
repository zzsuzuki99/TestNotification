import React, { Component } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { CardFeedback, ModalCalendar, Icon } from 'hop-components';
// import { Calendar } from 'react-native-calendars';
import {
  SIZE_ICON,
  COLOR_TEXT_BLUE
  //   COLOR_TEXT_GRAY_TITLE,
  //   COLOR_BG_WHITE,
  //   COLOR_PRIMARY,
  //   COLOR_TEXT_GRAY_8E
} from '../../../utils/AppValues';
import styles from './styles';

const arrDate = {
  '2019-03-12': { disabled: false, disableTouchEvent: false },
  '2019-03-14': { disabled: false, disableTouchEvent: false },
  '2019-03-16': { disabled: false, disableTouchEvent: false },
  '2019-03-20': { disabled: false, disableTouchEvent: false },
  '2019-03-22': { disabled: false, disableTouchEvent: false },
  '2019-03-27': { disabled: false, disableTouchEvent: false }
};

class TestCalendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };
    this.typeModal = -1;
    this.onDayPress = this.onDayPress.bind(this);
  }

  onDayPress(day) {
    console.log('CALENDAR', day.dateString);
    // onDayPressDay();
  }

  renderItem = ({ item }) => (
    <CardFeedback
      item={item}
      onPressComment={() => {}}
      onPressLike={() => {}}
      onPressShare={() => {}}
    />
  );

  render() {
    const { modal } = this.state;
    return (
      <View style={{ flex: 1, backgroundColor: 'red' }}>
        <View style={styles.containerAction}>
          <View style={{}}>
            <TouchableOpacity
              activeOpacity={0.5}
              style={{ flex: 1, flexDirection: 'row' }}
              onPress={() => {
                this.setState({ modal: true });
              }}
            >
              <View style={styles.iconCreatePage}>
                <Icon
                  icon="plus"
                  size={SIZE_ICON.SMALL}
                  color={COLOR_TEXT_BLUE}
                  typeIcon="Feather"
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <ModalCalendar
          visible={modal}
          onPressClose={() => this.setState({ modal: false })}
          displayClose
          center
          arrDate={arrDate}
          maxDate="2019-05-01"
          //   disabledByDefault={false}
          onDayPress={date => console.warn('date', date)}
        />
      </View>
    );
  }
}

export default TestCalendar;
