// class App extends Component {
//   render() {
//     return (
//       <div>
//         <h1 className="red-color">Hello</h1>
//       </div>
//     );
//   }
// }

// function App() {
//   return (
//     <div>
//       <h1 className="red-color">Salom</h1>
//     </div>
//   );
// }

// const App = function () {
//   return (
//     <div>
//       <h1 className="red-color">Privet</h1>
//     </div>
//   );
// };
import { Component } from "react";
import "./style.css";
import Card from "./Card.jsx";

// Images
import cart from "./assets/cart.png";
import heart from "./assets/heart.png";
import search from "./assets/search.png";

// Icons
// import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
// import { faHeart } from "@fortawesome/free-solid-svg-icons";
// import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const App = () => {
  return (
    <div className="container">
      <div className="raw1">
        <Card
          title="Barberton Daisy"
          price="$119.00"
          img="https://s3-alpha-sig.figma.com/img/586c/8523/1ab58d21463d86aa3768f5c6c78f8a1f?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pR7fTzY-QPUBPaQZUp8m2OXhSVjAA2I4xmJtV-1edLk2x1aOwJs1McY52nflKAf7v0N-ebjKHEnBD8Q2Vjp8cMLhc-eCixJXP1HSAYHZpQ5BF7dC5eyc3iobKJXjRXmP1RTFME4Dv2ctXSJz3T47LOEoTfKp1U-V7rLnhnwTNRl2DB51iUaLBz51QCmAphtqqZbBQ3tg65bQ0ip8EcCm9bXx7z-~0LJRREEnJ11spEjg2pIdJdm9R6UQ34sCSpD2GpjPOPR~tevueDairsom5WLHZzo~E-fNxRFAqcgQD-U3ckqCNm6Qc5VjMi1uFpHikTt5x8kGzT1zQReHEtfAeQ__"
        />
        <Card
          title="Angel Wing Begonia"
          price="$169.00"
          img="https://s3-alpha-sig.figma.com/img/4826/f3a4/1a2148d881d8376b26471cced915b1bb?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=n6bLSx9sBWQN3t-KNa5Lg4935wRkg5NGIlcmJIU687aXzUdwA0UGBjN~FIvqlZ8MhYObCsQ5OB1sedw1C-ZSxFPwQF-WrIjUFXA3F3HoSgaiQcNZ3SlC2lbOLD8dso9gO83wltQRwvuPluHWEYmN1hDEPkcq-pnHwppgL1k~WcjlrrdwCV4cvl4gAAM5gZFUwCjidd868WaRivW6BjkYWh0pe-KclaIxeMkWnXsUA6URL1PK1gHeI-HxufZpU8HOWxp21yvCq-Uv1qC767fHShi05AK2Mh-nDJcUZ-73mmiFDm5Jm3wwMplifOoeDBrSOuaM1-kk7vmLcmmvWZIhSg__"
        />
        <Card
          title="African Violet"
          price="$199.00"
          img="https://s3-alpha-sig.figma.com/img/7c59/7aa9/1ee5df5d1fd65d8184246c0c9918f920?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jFH~C7S-T0J4pRKLrfdVvJwBrdZE-rV8SVDeWV~w8i00dqAc~nhmkEra4sIK6JId6ssjcNma6~Dn-IOT06r9InQGFM5vPObxL93~fF0WDANvxV1nXIfkhy2ST6c5WeBMFB3GUE~58CTM06VGAPI7KMBWEosqqbGVtnOmLouLU8BBubg1-H0ptiKKWgWiVp8iXXwh1KvOQAnuJQpJp9njS0-Z6JojxFIp-hzP-1yzDdf3A7Ezpe4Y1tjXpik4DOj7R7wYQqnFXSo7BlB1lmgHgFOzxvOD7tvESrcwpGSw1x152O-PE7QhCzPXyPjuQIj2WuzVu03pABh3Xx1Xs0opJQ__"
        />
      </div>
      <div className="raw2 raw1">
        <Card
          title="Beach Spider Lily"
          price="$129.00"
          img="https://s3-alpha-sig.figma.com/img/4575/e3df/52fa214db1f3ce519277860c13b11e21?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gMonoNy05aREQsBOQVubpKNHK63GkbjD7mhg5osAgQ4Mu3DH6Xq4-hYFNjc3TfuDnNi4DJwEM51EzVrJqC7Wc6gybagGNeFkiomi8dOodySGdOh-igogMxaXnZQ0Wv~KHdfV2Hbc7Oi0oJQ3U2cazAKyPuV1lWxg-TQJlghBzJCqLzsGnkeiQtU9i-FwEuxuK8RHiTnazvpH4XdYrZH1kpzZMGxCDxCL0zqf0UTK9H7IyeZP03ZDj8umiSy3Z7Ots~jxPr-E7I08~ZBSdIqJ7qaF64RSLSllrNjSndIyEdyqrvcuZIhFNvsV9h9314SEoYxLUq8f7qyBHxrs4Esh6A__"
        />
        <Card
          title="Blushing Bromeliad"
          price="$139.00"
          img="https://s3-alpha-sig.figma.com/img/9531/c63d/3f618aefdf1ccb10a5aa0e2d00f45d0b?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iYXgOEoClbl5-pu~IlboO9twvMp7AL60Bm~QsDgG8s5csBbRPNSJMmSDFsKtVy6JI~g1r7cKno~ufRe26k7ccrrcJH2mc57uLXgGq5sI1ZdmUJ1h6sv0vQh8SDEkEbxGINzoLrS~6ReGkrrdAA2UiLoKsEhyxZQJ9YiFzUDqnj2XtrfliOjG-QEw6DBhW-HPauDKcXqc-RnXW-S6~f3BNvnSkPJfmvyO1YziQyVGXLiof-9EzMtkZbrM0LvAaZV6XBsc7xqW9QK6MYxmYX3gVnNH8d~FvfKLNTZyudaP2aZdk0jROEjaCNCKDVSR5p~jZNmkw71-Lg1ol~K7jCOXrQ__"
        />
        <Card
          title="Aluminum Plant"
          price="$179.00"
          img="https://s3-alpha-sig.figma.com/img/744c/96db/a60207fabc5a7d29f8801ecf6b4e2aed?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AsK1MqG6ipQyFAr70yFS0BwHMZy0OaJswlZy5VnGPKsTaut~aAFVMbIgsjQCcV2BdkHN8P7lhK5SLkUm8GgFt~x3o3G4h7YJDsW7yk1LCBVSxegiT2-0LOgq1EYKSajKo04CUHqjXYOI7PGNQQW8mmRMxSw7SlJdwQHnDmkpMKFUYYg7cWtIyYock0X4Lm1jNWP-dE~VVFB05BIvgx2TfDkszJSPEigwTaRGzFtgHqh63bUEdVS3332hM-fugZ-j1ZLsQy1TdJbQtUmjJuBwJS2Q3Dl3nuJ7k2Vv6a8Gy~nkvynSeBfTliMnxPG1umlh5i6c2K8n1f5-WYVfZvJJTQ__"
        />
      </div>
      <div className="raw3 raw1">
        <Card
          title="Bird's Nest Fern"
          price="$99.00"
          img="https://s3-alpha-sig.figma.com/img/9957/e153/a59c050946e77e8fc7e11525e87c4678?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XXKFdbCGe-fdkp7AAkRtyo3eUgosNKMyZv7Ms03gTvn~sjXn4HQF8~8YEMO8jmTXf0ZxcyUNI1mhQpTCkzTRrF05dwsibxJ9DmdnRO6ueIkYpq-3SCvYjLf24XO8MB5p9SBAPdVsaupxmifxy59dtEGcTUZjR5wmveGDSKiY58OPSIovmqovaUg45LFy~BguBipQfNd0CKIRy7aPZYUSC26IGUxYT06i3k7x6AYHC06cre~CK7-KtGi5M3ugYuQvr7iuz75uqWghg2RqTfcSMRN4nHcVpw~wbbP00yIEJazdZO3hRSCWmkBkBbLi8X1c7Ur8dOWI7H5SZyuhJuVhAQ__"
        />
        <Card
          title="Broadleaf Lady Palm"
          price="$59.00"
          img="https://s3-alpha-sig.figma.com/img/78e9/e6c1/90effae17498640571679183299f774e?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mG5-px-j9yZl-Iw1R085VZqIOazj~7XK~aCjnca40V7NcWRpfGhPJUDPlgykGcMDfp94xNWKUpQgxcC5zj0BReOaKnpQS2~F9qH2xaWZnyzlaI0KlxUagCpVBWRtxu66iKmsCzErDKp1r3-ZDoVEageTIjIXx01q1ScBurL6bkYoC3VnyNv2USkA1gGEJFv~ezFeYitJqTov7TITXi5VM~GEnL4UFZrOgkZz~4ktCFEm3nudQaFvrq0sJg7zFlO9b0IpBLNKRorov-uxIrCRBMaO9Sv5n1xc1cWEdo7jSkenueov~fly~5ufnLDxPuFJbc2B36C8~vP6r-aaUjahjw__"
        />
        <Card
          title="Chinese Evergreen"
          price="$39.00"
          img="https://s3-alpha-sig.figma.com/img/5219/e659/b8a1d488abd136ce27f86ab3da3ceb37?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lrIebm-qCsb2tcLD7sl60A3b9n1qN-Y45PWudFA0yopQHNKvM8x-sVGP3VOqn6xzE-hPZ2BusfE7QILv4EfWwdD4-4CkjHEaRs4x2x3~~h0Qq73Ce5DY12PdSu9SD2ivf~EC1u-pJp~raonoaB1xIrbBcam9A60bANr4gLZAjFlIQNTsLOIevfnzSfUmJqf3cKjfkU~Rrwj434rqWqMhE1JUyP0aSdzgefKmtZTZuc6If3TlfvMI6CkqjSfzVJSeLsmPyi8r7F1FJwXU0ZC~sY0QULmikrnHuZS2jC8hU7LEt3ll~bsOqQ8gcJSSOHEJyArfK6vT~fiC0oOo47Ov1A__"
        />
      </div>
    </div>
  );
};

export default App;
