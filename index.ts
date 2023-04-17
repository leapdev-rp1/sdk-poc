//initialise SDK
// import { LeapHostSdkFactory } from '@leapdev/leap-host';
// const sdk = LeapHostSdkFactory.getInstance();

// if (!!sdk) {
//     //this is the Sandbox ClientID, not the Live one yet
//     sdk.init('PJOYCRM8LHYMHXNV').then(() => {
//     //you can start calling APIs
//     console.log(sdk.leapContext);
//   });
// }


//-------------------------------------

//just a sample server-side code

let message: string = 'Hello, World!';

let heading = document.createElement('h1');
heading.textContent = message;
document.body.appendChild(heading);

console.log(message);

