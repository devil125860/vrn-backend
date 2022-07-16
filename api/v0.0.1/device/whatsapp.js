const express = require("express");
const router = express.Router();

const Whatsapp = require("../../../models/Whatsapp");

router.post("/", async (req, res) => {
  try {

    console.log("Whatsapp", req.body[0].imei);

    // await Whatsapp.updateMany({},req.body, {
    //   upsert: true,
    //   overwrite: true,
    // }).catch((e) => {
    //   throw { message: "Duplicate entry found!", writeErrors: e.writeErrors };
    // });

   const resdata=await Whatsapp.bulkWrite(
      req.body.map((data) => ({
        updateOne: {
          filter: { uid: data.uid },
          update: { $set: data },
          upsert: true ,
        },
      })),
      {ordered:false}
    )
    // .catch(err=>{
    //   console.log("/api/v0.0.1/device/whatsapp.js (xinj-11)", err.message);
    //   // throw { message: err.message };
    // })
    // console.log("wt res",resdata)
    res.status(200).json({resdata});
  } catch (e) {
    console.log("/api/v0.0.1/device/whatsapp.js (xinj-11)", e.writeErrors); //xinj-11
    res.status(500).json(e.writeErrors || "Internal server error!");
  }
});

module.exports = router;


// const test =async(dtx)=>{

//   console.log("datax",dtx.map((data) => ({
//     updateOne: {
//       filter: { uid: data.uid },
//       update: { $set: data },
//       options: { upsert: true },
//     },
//   })))

//   Whatsapp.bulkWrite(
//     dtx.map((data) => ({
//       updateOne: {
//         filter: { uid: data.uid },
//         update: { $set: data },
//         upsert: true ,
//       },
//     })),
//     {ordered:false}
//   ).catch(err=>{
//     console.log("wt error",err)
//   })
// }

// test( [
//   {
//     imei: '3a9ddce149b2176d',
//     uid: 1,
//     title: 'test',
//     message: 'hdufuffiifififfiit',
//     type: 'Read',
//     recordDate: '28 August 2021 16:14',
//     seq_id: 0.4722222,
//     rect: 151,
//     triggerName: 'wifi connected'
//   },
//   {
//     imei: '3a9ddce149b2176d',
//     uid: 2,
//     title: 'test',
//     message: 'ysydudud',
//     type: 'Read',
//     recordDate: '01 JANUARY 1970 16:14',
//     seq_id: 0.4722222,
//     rect: 211,
//     triggerName: 'wifi connected'
//   },
//   {
//     imei: '3a9ddce149b2176d',
//     uid: 3,
//     title: 'test',
//     message: 'er6ryfufi',
//     type: 'Read',
//     recordDate: '01 JANUARY 1970 16:14',
//     seq_id: 0.4722222,
//     rect: 277,
//     triggerName: 'wifi connected'
//   },
//   {
//     imei: '3a9ddce149b2176d',
//     uid: 4,
//     title: 'test',
//     message: 'hffugugugigigig',
//     type: 'Read',
//     recordDate: '01 JANUARY 1970 16:14',
//     seq_id: 0.4722222,
//     rect: 343,
//     triggerName: 'wifi connected'
//   },
//   {
//     imei: '3a9ddce149b2176d',
//     uid: 5,
//     title: 'test',
//     message: 'hcycychuguguguy',
//     type: 'Read',
//     recordDate: '01 JANUARY 1970 16:14',
//     seq_id: 0.4722222,
//     rect: 409,
//     triggerName: 'wifi connected'
//   },
//   {
//     imei: '3a9ddce149b2176d',
//     uid: 6,
//     title: 'test',
//     message: 'chhchcuciguguguyugu',
//     type: 'Read',
//     recordDate: '01 JANUARY 1970 16:14',
//     seq_id: 0.4722222,
//     rect: 475,
//     triggerName: 'wifi connected'
//   },
//   {
//     imei: '3a9ddce149b2176d',
//     uid: 7,
//     title: 'test',
//     message: 'gxxfxt gcgchchcb  bhxjcjcjc',
//     type: 'Read',
//     recordDate: '01 JANUARY 1970 16:14',
//     seq_id: 0.4722222,
//     rect: 541,
//     triggerName: 'wifi connected'
//   },
//   {
//     imei: '3a9ddce149b2176d',
//     uid: 8,
//     title: 'test',
//     message: 'hhhhhhhuuuuuu',
//     type: 'Read',
//     recordDate: '01 JANUARY 1970 16:14',
//     seq_id: 0.4722222,
//     rect: 607,
//     triggerName: 'wifi connected'
//   },
//   {
//     imei: '3a9ddce149b2176d',
//     uid: 9,
//     title: 'test',
//     message: 'yuuuhnuu',
//     type: 'Read',
//     recordDate: '01 JANUARY 1970 16:14',
//     seq_id: 0.4722222,
//     rect: 673,
//     triggerName: 'wifi connected'
//   },
//   {
//     imei: '3a9ddce149b2176d',
//     uid: 10,
//     title: 'test',
//     message: 'huheuuu',
//     type: 'Read',
//     recordDate: '01 JANUARY 1970 16:14',
//     seq_id: 0.4722222,
//     rect: 739,
//     triggerName: 'wifi connected'
//   },
//   {
//     imei: '3a9ddce149b2176d',
//     uid: 11,
//     title: 'test',
//     message: 'hyy',
//     type: 'Read',
//     recordDate: '01 JANUARY 1970 18:17',
//     seq_id: 0.4722222,
//     rect: 805,
//     triggerName: 'wifi connected'
//   },
//   {
//     imei: '3a9ddce149b2176d',
//     uid: 12,
//     title: 'test',
//     message: 'dydifitiu',
//     type: 'Read',
//     recordDate: '01 JANUARY 1970 18:17',
//     seq_id: 0.4722222,
//     rect: 871,
//     triggerName: 'wifi connected'
//   },
//   {
//     imei: '3a9ddce149b2176d',
//     uid: 13,
//     title: 'test',
//     message: 'ururiffi',
//     type: 'Read',
//     recordDate: '01 JANUARY 1970 18:18',
//     seq_id: 0.4722222,
//     rect: 937,
//     triggerName: 'wifi connected'
//   },
//   {
//     imei: '3a9ddce149b2176d',
//     uid: 14,
//     title: 'test',
//     message: 'dhduhdud',
//     type: 'Read',
//     recordDate: '01 JANUARY 1970 18:18',
//     seq_id: 0.4722222,
//     rect: 1003,
//     triggerName: 'wifi connected'
//   },
//   {
//     imei: '3a9ddce149b2176d',
//     uid: 15,
//     title: 'test',
//     message: 'urir',
//     type: 'Read',
//     recordDate: '01 JANUARY 1970 18:18',
//     seq_id: 0.4722222,
//     rect: 1069,
//     triggerName: 'wifi connected'
//   },
//   {
//     imei: '3a9ddce149b2176d',
//     uid: 16,
//     title: 'test',
//     message: '7rtitiogfystfigotifkhl',
//     type: 'Read',
//     recordDate: '01 JANUARY 1970 18:19',
//     seq_id: 0.4722222,
//     rect: 1135,
//     triggerName: 'wifi connected'
//   },
//   {
//     imei: '3a9ddce149b2176d',
//     uid: 17,
//     title: 'test',
//     message: 'kfcnchdihlchrutiy',
//     type: 'Read',
//     recordDate: '01 JANUARY 1970 18:19',
//     seq_id: 0.4722222,
//     rect: 1201,
//     triggerName: 'wifi connected'
//   },
//   {
//     imei: '3a9ddce149b2176d',
//     uid: 18,
//     title: 'test',
//     message: 'fur7ritifififti',
//     type: 'Read',
//     recordDate: '01 JANUARY 1970 18:19',
//     seq_id: 0.4722222,
//     rect: 1267,
//     triggerName: 'wifi connected'
//   },
//   {
//     imei: '3a9ddce149b2176d',
//     uid: 19,
//     title: 'test',
//     message: '45312207',
//     type: 'Read',
//     recordDate: '01 JANUARY 1970 18:32',
//     seq_id: 0.4722222,
//     rect: 1333,
//     triggerName: 'wifi connected'
//   },
//   {
//     imei: '3a9ddce149b2176d',
//     uid: 20,
//     title: 'test',
//     message: '28 August 2021',
//     type: 'Divider',
//     recordDate: '28 August 2021 00:00',
//     seq_id: 0.33333334,
//     rect: 0,
//     triggerName: 'wifi connected'
//   },
//   {
//     imei: '3a9ddce149b2176d',
//     uid: 21,
//     title: 'test',
//     message: 'ola',
//     type: 'Read',
//     recordDate: '28 August 2021 11:32',
//     seq_id: 0.33333334,
//     rect: 376,
//     triggerName: 'wifi connected'
//   },
//   {
//     imei: '3a9ddce149b2176d',
//     uid: 22,
//     title: 'test',
//     message: 'amigo',
//     type: 'Read',
//     recordDate: '28 August 2021 11:32',
//     seq_id: 0.33333334,
//     rect: 442,
//     triggerName: 'wifi connected'
//   },
//   {
//     imei: '3a9ddce149b2176d',
//     uid: 23,
//     title: 'test',
//     message: 'what is up',
//     type: 'Read',
//     recordDate: '28 August 2021 11:32',
//     seq_id: 0.33333334,
//     rect: 508,
//     triggerName: 'wifi connected'
//   },
//   {
//     imei: '3a9ddce149b2176d',
//     uid: 24,
//     title: 'test',
//     message: 'ttru',
//     type: 'Read',
//     recordDate: '28 August 2021 16:13',
//     seq_id: 0.33333334,
//     rect: 574,
//     triggerName: 'wifi connected'
//   },
//   {
//     imei: '3a9ddce149b2176d',
//     uid: 25,
//     title: 'test',
//     message: 'hddyd',
//     type: 'Read',
//     recordDate: '28 August 2021 16:13',
//     seq_id: 0.33333334,
//     rect: 640,
//     triggerName: 'wifi connected'
//   },
//   {
//     imei: '3a9ddce149b2176d',
//     uid: 26,
//     title: 'test',
//     message: 'hcchchfucu',
//     type: 'Read',
//     recordDate: '28 August 2021 16:13',
//     seq_id: 0.33333334,
//     rect: 706,
//     triggerName: 'wifi connected'
//   },
//   {
//     imei: '3a9ddce149b2176d',
//     uid: 27,
//     title: 'test',
//     message: 'ufufuf',
//     type: 'Read',
//     recordDate: '28 August 2021 16:13',
//     seq_id: 0.33333334,
//     rect: 772,
//     triggerName: 'wifi connected'
//   },
//   {
//     imei: '3a9ddce149b2176d',
//     uid: 28,
//     title: 'dfgthyjukiljhgfgdgtyuio;lkjhgjhkl;',
//     message: 'hchduf',
//     type: 'Read',
//     recordDate: '29 August 2021 16:13',
//     seq_id: 0.33333334,
//     rect: 838,
//     triggerName: 'wifi connected'
//   },
//   {
//     imei: '3a9ddce149b2176d',
//     uid: 29,
//     title: 'test',
//     message: 'xhxhudhxhxudif',
//     type: 'DEleted',
//     recordDate: '28 August 2021 16:13',
//     seq_id: 0.33333334,
//     rect: 904,
//     triggerName: 'wifi connected'
//   },
//   {
//     imei: '3a9ddce149b2176d',
//     uid: 30,
//     title: 'test',
//     message: 'hshshdhdud',
//     type: 'Read',
//     recordDate: '29 August 2021 16:13',
//     seq_id: 0.33333334,
//     rect: 970,
//     triggerName: 'wifi connected'
//   },
//   {
//     imei: '3a9ddce149b2176d',
//     uid: 31,
//     title: 'test',
//     message: 'gzhdudydudududirirur',
//     type: 'Read',
//     recordDate: '28 August 2021 16:13',
//     seq_id: 0.33333334,
//     rect: 1036,
//     triggerName: 'wifi connected'
//   },
//   {
//     imei: '3a9ddce149b2176d',
//     uid: 32,
//     title: 'test',
//     message: 'hdhdududururruududud',
//     type: 'Read',
//     recordDate: '28 August 2021 16:14',
//     seq_id: 0.33333334,
//     rect: 1102,
//     triggerName: 'wifi connected'
//   },
//   {
//     imei: '3a9ddce149b2176d',
//     uid: 33,
//     title: 'test',
//     message: 'ysysysudydudduruurirur',
//     type: 'Read',
//     recordDate: '28 August 2021 16:14',
//     seq_id: 0.33333334,
//     rect: 1168,
//     triggerName: 'wifi connected'
//   },
//   {
//     imei: '3a9ddce149b2176d',
//     uid: 34,
//     title: 'test',
//     message: 'gssyudydurur7t7t7titut',
//     type: 'Read',
//     recordDate: '28 August 2021 16:14',
//     seq_id: 0.33333334,
//     rect: 1234,
//     triggerName: 'wifi connected'
//   },
//   {
//     imei: '3a9ddce149b2176d',
//     uid: 35,
//     title: 'test',
//     message: 'hxududduifififufufufufufuf',
//     type: 'Read',
//     recordDate: '28 August 2021 16:14',
//     seq_id: 0.33333334,
//     rect: 1300,
//     triggerName: 'wifi connected'
//   },

// ]);