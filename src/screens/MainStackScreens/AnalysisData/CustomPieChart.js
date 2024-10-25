import {Text, View} from 'react-native';
import {PieChart} from 'react-native-gifted-charts';
import {Fonts, wp} from '../../../constants';
import colors from '../../../constants/colors';

export default CustomPieChart = ({color, value}) => {
  const pieData = [
    {value: value, color: color},
    {value: 30, color: 'lightgray'},
  ];
  return (
    <PieChart
      donut
      innerRadius={wp(6)}
      radius={wp(10)}
      innerCircleColor={colors.BLACK}
      data={pieData}
      centerLabelComponent={() => {
        return (
          <Text
            style={{
              fontSize: wp(4),
              fontFamily: Fonts.POPPINS_SEMI_BOLD,
              color: colors.WHITE,
            }}>
            {`${value}%`}
          </Text>
        );
      }}
    />
  );
};
