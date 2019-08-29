# yarn install
cd android && ./gradlew clean && cd ..
npm run build:android
react-native run-android --variant=release
