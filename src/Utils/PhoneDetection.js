import {
//   mobileModel,
  isIOS,
  isMobileOnly,
  mobileVendor,
  isAndroid
} from "react-device-detect";

export default function PhoneDetection() {
  const width = window.screen.width;
  const height = window.screen.height;
  const brand = mobileVendor;
  const model = mobileModel;
  const Orientation = () => {
    if (window.screen.orientation.type === "portrait-primary") {
      return "Portrait";
    }
    if (window.screen.orientation.type === "landscape-primary") {
      return "Landscape";
    }
  };
  const DetectModel = () => {
    if (brand === "Apple") {
      if (height === 812 || width === 812) {
        return "X";
      }
      if (height === 896 || width === 896) {
        return "XR";
      }
      if (height === 667 || width === 667) {
        return "6/7/8";
      }
      if (height === 736 || width === 736) {
        return "6/7/8 Plus";
      }
      if (height === 568 || width === 812) {
        return "5/SE/5S";
      }
      if (height === 896 || width === 896) {
        return "XR";
      }
    }
    if (brand === "Google") {
      if (height === 731 || width === 731) {
        return "2";
      }
      if (height === 823 || width === 823) {
        return "2 XL";
      }
    }
    if (brand === "Samsung") {
      if (height === 640 || width === 640) {
        return "S5";
      }
    }
    // ((height === 812 || height === 896) || (width === 812 || width === 896)) &&
  };
  var detectModel = DetectModel();
  var orientation = Orientation();

  if (
    isMobileOnly &&
    (brand === "Apple" ||
      brand === "Samsung" ||
      brand === "Google" ||
      brand === "LG" ||
      brand === "Huaweii" ||
      brand === "Motorola") &&
    (isIOS || isAndroid)
  ) {
    console.log(brand, model, detectModel, orientation);
    if (detectModel === "X") {
      return true;
    }
  } else {
    return false;
  }
}
