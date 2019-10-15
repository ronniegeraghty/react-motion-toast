cd react-motion-toast
yarn build
echo COMPLETED BUILD
cd ../test-app
yarn add ../react-motion-toast
echo INSTALLED NEW MODULE VERSION
npm run start
