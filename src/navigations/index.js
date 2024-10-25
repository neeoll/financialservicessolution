export const navigationTo = (navigation, name, data = {}) => {
  navigation.navigate(name, data);
};

export const navigationReset = (navigation, name, data = {}) => {
  navigation.reset({
    index: 0,
    routes: [{name: name}],
  });
};
export const navigationBack = navigation => {
  navigation.goBack();
};
