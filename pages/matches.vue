<template>
  <div>
    <slider/>
    <modal-cpmponent :show="show" :match="match" @modalClosed="modalClosed"/>
    <h1>Matches</h1>
    <div class="row">
      <div v-for="(match, index) in MatchList" :key="index" class="col-6">
        <match-card @showModal="showModal" :match="match"/>
      </div>
    </div>
  </div>
</template>
<script>
import MatchCard from '../components/MatchCard.vue';
import ModalCpmponent from '../components/modalComponent.vue';
import Slider from '../components/slider.vue';
export default {
  components: { MatchCard, ModalCpmponent, Slider },
  // middleware: "authenticated",
  layout: "custom",
  methods: {
    showModal(val) {
      console.log('val', val),
      this.match=val;
      this.show=true;
    },
    modalClosed() {
      console.log('hide')
      this.show=false
    },
  },
//   async mounted() {
//     try {
//       this.MatchList = await this.$axios
//         .$post(
// "http://localhost:3001/matches/getMatches");
//     } catch (error) {
//       console.log("error", error);
//     }
//   },
  async fetch() {},
  data() {
    return {
      match:{},
      MatchList: [
    {
        "id": "d30e7c08-c1be-402e-a1e1-edd83dc63cf6",
        "name": "Sussex vs Worcestershire, County Div 2",
        "status": "Match not started",
        "venue": "County Ground, Hove",
        "date": "2023-06-11",
        "dateTimeGMT": "2023-06-11T10:00:00",
        "teams": [
            "Sussex",
            "Worcestershire"
        ],
        "teamInfo": [
            {
                "name": "Sussex",
                "shortname": "SUSS",
                "img": "https://g.cricapi.com/iapi/1134-637889091814592518.webp?w=48"
            },
            {
                "name": "Worcestershire",
                "shortname": "WRCS",
                "img": "https://g.cricapi.com/iapi/1138-637889091123850841.webp?w=48"
            }
        ],
        "series_id": "07e4c424-5e5a-48ec-abb2-b15c1ea9781f",
        "fantasyEnabled": false,
        "bbbEnabled": false,
        "hasSquad": true,
        "matchStarted": false,
        "matchEnded": false
    },
    {
        "id": "64e0af94-fb4c-4396-abd9-2ccad647b165",
        "name": "Derbyshire vs Yorkshire, County Div 2",
        "status": "Match not started",
        "venue": "Queen's Park, Chesterfield",
        "date": "2023-06-11",
        "dateTimeGMT": "2023-06-11T10:00:00",
        "teams": [
            "Derbyshire",
            "Yorkshire"
        ],
        "teamInfo": [
            {
                "name": "Derbyshire",
                "shortname": "DERB",
                "img": "https://g.cricapi.com/iapi/1117-637889091569915358.webp?w=48"
            },
            {
                "name": "Yorkshire",
                "shortname": "YRK",
                "img": "https://g.cricapi.com/iapi/1139-637885552795894277.webp?w=48"
            }
        ],
        "series_id": "07e4c424-5e5a-48ec-abb2-b15c1ea9781f",
        "fantasyEnabled": false,
        "bbbEnabled": false,
        "hasSquad": true,
        "matchStarted": false,
        "matchEnded": false
    },
    {
        "id": "c8ffab5c-f138-4057-a09c-580b47e946bb",
        "name": "Gloucestershire vs Leicestershire, County Div 2",
        "status": "Match not started",
        "venue": "County Ground, Bristol",
        "date": "2023-06-11",
        "dateTimeGMT": "2023-06-11T10:00:00",
        "teams": [
            "Gloucestershire",
            "Leicestershire"
        ],
        "teamInfo": [
            {
                "name": "Gloucestershire",
                "shortname": "GLOU",
                "img": "https://g.cricapi.com/iapi/1121-637885550747990018.webp?w=48"
            },
            {
                "name": "Leicestershire",
                "shortname": "LECS",
                "img": "https://g.cricapi.com/iapi/1126-637889090878436462.webp?w=48"
            }
        ],
        "series_id": "07e4c424-5e5a-48ec-abb2-b15c1ea9781f",
        "fantasyEnabled": false,
        "bbbEnabled": false,
        "hasSquad": true,
        "matchStarted": false,
        "matchEnded": false
    },
    {
        "id": "45748c1e-a172-4bfc-8921-9a31a907e3d7",
        "name": "Durham vs Glamorgan, County Div 2",
        "status": "Match not started",
        "venue": "Riverside Ground, Chester-le-Street",
        "date": "2023-06-11",
        "dateTimeGMT": "2023-06-11T10:00:00",
        "teams": [
            "Durham",
            "Glamorgan"
        ],
        "teamInfo": [
            {
                "name": "Durham",
                "shortname": "DURH",
                "img": "https://g.cricapi.com/iapi/1118-637889090599643548.webp?w=48"
            },
            {
                "name": "Glamorgan",
                "shortname": "GLAM",
                "img": "https://g.cricapi.com/iapi/1120-637889090390357869.webp?w=48"
            }
        ],
        "series_id": "07e4c424-5e5a-48ec-abb2-b15c1ea9781f",
        "fantasyEnabled": false,
        "bbbEnabled": false,
        "hasSquad": true,
        "matchStarted": false,
        "matchEnded": false
    },
    {
        "id": "cd3e3e3f-9ddb-4334-8524-2465754f3e90",
        "name": "Nottinghamshire vs Warwickshire, County Div 1",
        "status": "Match not started",
        "venue": "Trent Bridge, Nottingham",
        "date": "2023-06-11",
        "dateTimeGMT": "2023-06-11T10:00:00",
        "teams": [
            "Nottinghamshire",
            "Warwickshire"
        ],
        "teamInfo": [
            {
                "name": "Nottinghamshire",
                "shortname": "NOT",
                "img": "https://g.cricapi.com/iapi/1130-637889092060873937.webp?w=48"
            },
            {
                "name": "Warwickshire",
                "shortname": "WRKS",
                "img": "https://g.cricapi.com/iapi/1137-637885552592685258.webp?w=48"
            }
        ],
        "series_id": "a02fe535-9179-4d64-970b-c00014482057",
        "fantasyEnabled": false,
        "bbbEnabled": false,
        "hasSquad": true,
        "matchStarted": false,
        "matchEnded": false
    },
    {
        "id": "65ce8daf-ac88-4d42-9a22-a7ff08949e58",
        "name": "Essex vs Somerset, County Div 1",
        "status": "Match not started",
        "venue": "County Ground, Chelmsford",
        "date": "2023-06-11",
        "dateTimeGMT": "2023-06-11T10:00:00",
        "teams": [
            "Essex",
            "Somerset"
        ],
        "teamInfo": [
            {
                "name": "Essex",
                "shortname": "ESX",
                "img": "https://g.cricapi.com/iapi/1119-637885549753088458.webp?w=48"
            },
            {
                "name": "Somerset",
                "shortname": "SOM",
                "img": "https://g.cricapi.com/iapi/1131-637885552070524344.webp?w=48"
            }
        ],
        "series_id": "a02fe535-9179-4d64-970b-c00014482057",
        "fantasyEnabled": false,
        "bbbEnabled": false,
        "hasSquad": true,
        "matchStarted": false,
        "matchEnded": false
    },
    {
        "id": "beeeb05d-4e02-4854-ba27-7cb5219821df",
        "name": "Lancashire vs Hampshire, County Div 1",
        "status": "Match not started",
        "venue": "Trafalgar Road Ground, Southport",
        "date": "2023-06-11",
        "dateTimeGMT": "2023-06-11T10:00:00",
        "teams": [
            "Lancashire",
            "Hampshire"
        ],
        "teamInfo": [
            {
                "name": "Hampshire",
                "shortname": "HAM",
                "img": "https://g.cricapi.com/iapi/1122-637885550993657486.webp?w=48"
            },
            {
                "name": "Lancashire",
                "shortname": "LNCS",
                "img": "https://g.cricapi.com/iapi/1125-637885551497331567.webp?w=48"
            }
        ],
        "series_id": "a02fe535-9179-4d64-970b-c00014482057",
        "fantasyEnabled": false,
        "bbbEnabled": false,
        "hasSquad": true,
        "matchStarted": false,
        "matchEnded": false
    },
    {
        "id": "3c2192a4-4771-415c-abc3-c32357ad74c6",
        "name": "Kent vs Surrey, County Div 1",
        "status": "Match not started",
        "venue": "St Lawrence Ground, Canterbury",
        "date": "2023-06-11",
        "dateTimeGMT": "2023-06-11T10:00:00",
        "teams": [
            "Kent",
            "Surrey"
        ],
        "teamInfo": [
            {
                "name": "Kent",
                "shortname": "KENT",
                "img": "https://g.cricapi.com/iapi/1124-637885551212175895.webp?w=48"
            },
            {
                "name": "Surrey",
                "shortname": "SUR",
                "img": "https://g.cricapi.com/iapi/1133-637885552361099530.webp?w=48"
            }
        ],
        "series_id": "a02fe535-9179-4d64-970b-c00014482057",
        "fantasyEnabled": false,
        "bbbEnabled": false,
        "hasSquad": true,
        "matchStarted": false,
        "matchEnded": false
    },
    {
        "id": "71936d23-14d4-4b83-b873-13ea60c9a1a5",
        "name": "Sussex vs Surrey, South Group",
        "matchType": "t20",
        "status": "Match not started",
        "venue": "County Ground, Hove",
        "date": "2023-06-09",
        "dateTimeGMT": "2023-06-09T18:00:00",
        "teams": [
            "Sussex",
            "Surrey"
        ],
        "teamInfo": [
            {
                "name": "Surrey",
                "shortname": "SUR",
                "img": "https://g.cricapi.com/iapi/1133-637885552361099530.webp?w=48"
            },
            {
                "name": "Sussex",
                "shortname": "SUSS",
                "img": "https://g.cricapi.com/iapi/1134-637889091814592518.webp?w=48"
            }
        ],
        "series_id": "37fa8107-2df7-4779-81f6-d19969429dfe",
        "fantasyEnabled": false,
        "bbbEnabled": false,
        "hasSquad": true,
        "matchStarted": false,
        "matchEnded": false
    },
    {
        "id": "7089abd1-cc0e-4d36-b154-dee7924fbb6f",
        "name": "Yorkshire vs Worcestershire, North Group",
        "matchType": "t20",
        "status": "Match not started",
        "venue": "Headingley, Leeds",
        "date": "2023-06-09",
        "dateTimeGMT": "2023-06-09T17:30:00",
        "teams": [
            "Yorkshire",
            "Worcestershire"
        ],
        "teamInfo": [
            {
                "name": "Worcestershire",
                "shortname": "WRCS",
                "img": "https://g.cricapi.com/iapi/1138-637889091123850841.webp?w=48"
            },
            {
                "name": "Yorkshire",
                "shortname": "YRK",
                "img": "https://g.cricapi.com/iapi/1139-637885552795894277.webp?w=48"
            }
        ],
        "series_id": "37fa8107-2df7-4779-81f6-d19969429dfe",
        "fantasyEnabled": false,
        "bbbEnabled": false,
        "hasSquad": true,
        "matchStarted": false,
        "matchEnded": false
    },
    {
        "id": "7ced36b4-a11f-4603-9a49-ff14ef3bd7c4",
        "name": "Derbyshire vs Nottinghamshire, North Group",
        "matchType": "t20",
        "status": "Match not started",
        "venue": "County Ground, Derby",
        "date": "2023-06-09",
        "dateTimeGMT": "2023-06-09T17:30:00",
        "teams": [
            "Derbyshire",
            "Nottinghamshire"
        ],
        "teamInfo": [
            {
                "name": "Derbyshire",
                "shortname": "DERB",
                "img": "https://g.cricapi.com/iapi/1117-637889091569915358.webp?w=48"
            },
            {
                "name": "Nottinghamshire",
                "shortname": "NOT",
                "img": "https://g.cricapi.com/iapi/1130-637889092060873937.webp?w=48"
            }
        ],
        "series_id": "37fa8107-2df7-4779-81f6-d19969429dfe",
        "fantasyEnabled": false,
        "bbbEnabled": false,
        "hasSquad": true,
        "matchStarted": false,
        "matchEnded": false
    },
    {
        "id": "33db4c3f-ffdc-4e2d-b7ba-0cd3f0fd8df2",
        "name": "Glamorgan vs Essex, South Group",
        "matchType": "t20",
        "status": "Match not started",
        "venue": "Sophia Gardens, Cardiff",
        "date": "2023-06-09",
        "dateTimeGMT": "2023-06-09T17:30:00",
        "teams": [
            "Glamorgan",
            "Essex"
        ],
        "teamInfo": [
            {
                "name": "Essex",
                "shortname": "ESX",
                "img": "https://g.cricapi.com/iapi/1119-637885549753088458.webp?w=48"
            },
            {
                "name": "Glamorgan",
                "shortname": "GLAM",
                "img": "https://g.cricapi.com/iapi/1120-637889090390357869.webp?w=48"
            }
        ],
        "series_id": "37fa8107-2df7-4779-81f6-d19969429dfe",
        "fantasyEnabled": false,
        "bbbEnabled": false,
        "hasSquad": true,
        "matchStarted": false,
        "matchEnded": false
    },
    {
        "id": "038f8ea4-2947-46db-a292-ec0ba949ae4e",
        "name": "Gloucestershire vs Somerset, South Group",
        "matchType": "t20",
        "status": "Match not started",
        "venue": "County Ground, Bristol",
        "date": "2023-06-09",
        "dateTimeGMT": "2023-06-09T17:30:00",
        "teams": [
            "Gloucestershire",
            "Somerset"
        ],
        "teamInfo": [
            {
                "name": "Gloucestershire",
                "shortname": "GLOU",
                "img": "https://g.cricapi.com/iapi/1121-637885550747990018.webp?w=48"
            },
            {
                "name": "Somerset",
                "shortname": "SOM",
                "img": "https://g.cricapi.com/iapi/1131-637885552070524344.webp?w=48"
            }
        ],
        "series_id": "37fa8107-2df7-4779-81f6-d19969429dfe",
        "fantasyEnabled": false,
        "bbbEnabled": false,
        "hasSquad": true,
        "matchStarted": false,
        "matchEnded": false
    },
    {
        "id": "e2a79e19-68d8-42ad-8362-75b1e09d233f",
        "name": "Warwickshire vs Northamptonshire, North Group",
        "matchType": "t20",
        "status": "Match not started",
        "venue": "Edgbaston, Birmingham",
        "date": "2023-06-09",
        "dateTimeGMT": "2023-06-09T17:30:00",
        "teams": [
            "Warwickshire",
            "Northamptonshire"
        ],
        "teamInfo": [
            {
                "name": "Northamptonshire",
                "shortname": "NOR",
                "img": "https://g.cricapi.com/iapi/1129-637885551856435418.webp?w=48"
            },
            {
                "name": "Warwickshire",
                "shortname": "WRKS",
                "img": "https://g.cricapi.com/iapi/1137-637885552592685258.webp?w=48"
            }
        ],
        "series_id": "37fa8107-2df7-4779-81f6-d19969429dfe",
        "fantasyEnabled": false,
        "bbbEnabled": false,
        "hasSquad": true,
        "matchStarted": false,
        "matchEnded": false
    },
    {
        "id": "84a227a0-827c-431f-bc28-09d3a4685acc",
        "name": "Leicestershire vs Durham, North Group",
        "matchType": "t20",
        "status": "Match not started",
        "venue": "Grace Road, Leicester",
        "date": "2023-06-09",
        "dateTimeGMT": "2023-06-09T17:30:00",
        "teams": [
            "Leicestershire",
            "Durham"
        ],
        "teamInfo": [
            {
                "name": "Durham",
                "shortname": "DURH",
                "img": "https://g.cricapi.com/iapi/1118-637889090599643548.webp?w=48"
            },
            {
                "name": "Leicestershire",
                "shortname": "LECS",
                "img": "https://g.cricapi.com/iapi/1126-637889090878436462.webp?w=48"
            }
        ],
        "series_id": "37fa8107-2df7-4779-81f6-d19969429dfe",
        "fantasyEnabled": false,
        "bbbEnabled": false,
        "hasSquad": true,
        "matchStarted": false,
        "matchEnded": false
    },
    {
        "id": "f5ce1dd1-716a-4465-a5cd-e9ae17d1c87c",
        "name": "Kent vs Hampshire, South Group",
        "matchType": "t20",
        "status": "Match not started",
        "venue": "St Lawrence Ground, Canterbury",
        "date": "2023-06-09",
        "dateTimeGMT": "2023-06-09T17:30:00",
        "teams": [
            "Kent",
            "Hampshire"
        ],
        "teamInfo": [
            {
                "name": "Hampshire",
                "shortname": "HAM",
                "img": "https://g.cricapi.com/iapi/1122-637885550993657486.webp?w=48"
            },
            {
                "name": "Kent",
                "shortname": "KENT",
                "img": "https://g.cricapi.com/iapi/1124-637885551212175895.webp?w=48"
            }
        ],
        "series_id": "37fa8107-2df7-4779-81f6-d19969429dfe",
        "fantasyEnabled": false,
        "bbbEnabled": false,
        "hasSquad": true,
        "matchStarted": false,
        "matchEnded": false
    },
    {
        "id": "c9ec8793-81be-41b2-b5c8-147f331d8361",
        "name": "Nottinghamshire vs Durham, North Group",
        "matchType": "t20",
        "status": "Match not started",
        "venue": "Trent Bridge, Nottingham",
        "date": "2023-06-08",
        "dateTimeGMT": "2023-06-08T17:30:00",
        "teams": [
            "Nottinghamshire",
            "Durham"
        ],
        "teamInfo": [
            {
                "name": "Durham",
                "shortname": "DURH",
                "img": "https://g.cricapi.com/iapi/1118-637889090599643548.webp?w=48"
            },
            {
                "name": "Nottinghamshire",
                "shortname": "NOT",
                "img": "https://g.cricapi.com/iapi/1130-637889092060873937.webp?w=48"
            }
        ],
        "series_id": "37fa8107-2df7-4779-81f6-d19969429dfe",
        "fantasyEnabled": false,
        "bbbEnabled": false,
        "hasSquad": true,
        "matchStarted": false,
        "matchEnded": false
    },
    {
        "id": "e09b1a07-a4ec-424a-ac7e-89cc3b988257",
        "name": "Middlesex vs Sussex, South Group",
        "matchType": "t20",
        "status": "Match not started",
        "venue": "Lord's, London",
        "date": "2023-06-08",
        "dateTimeGMT": "2023-06-08T17:15:00",
        "teams": [
            "Middlesex",
            "Sussex"
        ],
        "teamInfo": [
            {
                "name": "Middlesex",
                "shortname": "MDX",
                "img": "https://g.cricapi.com/iapi/1127-637889091340507643.webp?w=48"
            },
            {
                "name": "Sussex",
                "shortname": "SUSS",
                "img": "https://g.cricapi.com/iapi/1134-637889091814592518.webp?w=48"
            }
        ],
        "series_id": "37fa8107-2df7-4779-81f6-d19969429dfe",
        "fantasyEnabled": false,
        "bbbEnabled": false,
        "hasSquad": true,
        "matchStarted": false,
        "matchEnded": false
    },
    {
        "id": "ede43d1c-1bc7-4771-8f03-21f163e84e8e",
        "name": "Namibia vs Karnataka, 5th Match",
        "matchType": "odi",
        "status": "Match not started",
        "venue": "Wanderers Cricket Ground, Windhoek",
        "date": "2023-06-11",
        "dateTimeGMT": "2023-06-11T07:30:00",
        "teams": [
            "Namibia",
            "Karnataka"
        ],
        "teamInfo": [
            {
                "name": "Karnataka",
                "shortname": "KAR",
                "img": "https://g.cricapi.com/iapi/38-637897796420763611.png?w=48"
            },
            {
                "name": "Namibia",
                "shortname": "NAM",
                "img": "https://g.cricapi.com/iapi/53-637877082656229722.webp?w=48"
            }
        ],
        "series_id": "d2d3482d-7e79-4ed1-9e2f-865b1d16e20c",
        "fantasyEnabled": false,
        "bbbEnabled": false,
        "hasSquad": true,
        "matchStarted": false,
        "matchEnded": false
    },
    {
        "id": "c62b22db-32eb-4e38-be51-3130651645da",
        "name": "Namibia vs Karnataka, 4th Match",
        "matchType": "odi",
        "status": "Match not started",
        "venue": "Wanderers Cricket Ground, Windhoek",
        "date": "2023-06-09",
        "dateTimeGMT": "2023-06-09T07:30:00",
        "teams": [
            "Namibia",
            "Karnataka"
        ],
        "teamInfo": [
            {
                "name": "Karnataka",
                "shortname": "KAR",
                "img": "https://g.cricapi.com/iapi/38-637897796420763611.png?w=48"
            },
            {
                "name": "Namibia",
                "shortname": "NAM",
                "img": "https://g.cricapi.com/iapi/53-637877082656229722.webp?w=48"
            }
        ],
        "series_id": "d2d3482d-7e79-4ed1-9e2f-865b1d16e20c",
        "fantasyEnabled": false,
        "bbbEnabled": false,
        "hasSquad": true,
        "matchStarted": false,
        "matchEnded": false
    },
    {
        "id": "e09b2507-81a0-4166-9621-c3bdf5877e13",
        "name": "Namibia vs Karnataka, 3rd Match",
        "matchType": "odi",
        "status": "Match not started",
        "venue": "Wanderers Cricket Ground, Windhoek",
        "date": "2023-06-07",
        "dateTimeGMT": "2023-06-07T07:30:00",
        "teams": [
            "Namibia",
            "Karnataka"
        ],
        "teamInfo": [
            {
                "name": "Karnataka",
                "shortname": "KAR",
                "img": "https://g.cricapi.com/iapi/38-637897796420763611.png?w=48"
            },
            {
                "name": "Namibia",
                "shortname": "NAM",
                "img": "https://g.cricapi.com/iapi/53-637877082656229722.webp?w=48"
            }
        ],
        "series_id": "d2d3482d-7e79-4ed1-9e2f-865b1d16e20c",
        "fantasyEnabled": false,
        "bbbEnabled": false,
        "hasSquad": true,
        "matchStarted": false,
        "matchEnded": false
    },
    {
        "id": "a94c7eba-22f0-46e8-9b01-b68ab15eb7e4",
        "name": "Namibia vs Karnataka, 2nd Match",
        "matchType": "odi",
        "status": "Namibia won by 5 wkts",
        "venue": "Wanderers Cricket Ground, Windhoek",
        "date": "2023-06-04",
        "dateTimeGMT": "2023-06-04T07:30:00",
        "teams": [
            "Namibia",
            "Karnataka"
        ],
        "teamInfo": [
            {
                "name": "Karnataka",
                "shortname": "KAR",
                "img": "https://g.cricapi.com/iapi/38-637897796420763611.png?w=48"
            },
            {
                "name": "Namibia",
                "shortname": "NAM",
                "img": "https://g.cricapi.com/iapi/53-637877082656229722.webp?w=48"
            }
        ],
        "score": [
            {
                "r": 360,
                "w": 4,
                "o": 50,
                "inning": "Karnataka Inning 1"
            },
            {
                "r": 362,
                "w": 5,
                "o": 49.5,
                "inning": "Namibia Inning 1"
            }
        ],
        "series_id": "d2d3482d-7e79-4ed1-9e2f-865b1d16e20c",
        "fantasyEnabled": true,
        "bbbEnabled": false,
        "hasSquad": true,
        "matchStarted": true,
        "matchEnded": true
    },
    {
        "id": "0a6f2f5b-6f47-4118-825b-207e802a0ef8",
        "name": "Namibia vs Karnataka, 1st Match",
        "matchType": "odi",
        "status": "Karnataka won by 9 wkts",
        "venue": "Wanderers Cricket Ground, Windhoek",
        "date": "2023-06-02",
        "dateTimeGMT": "2023-06-02T07:30:00",
        "teams": [
            "Namibia",
            "Karnataka"
        ],
        "teamInfo": [
            {
                "name": "Karnataka",
                "shortname": "KAR",
                "img": "https://g.cricapi.com/iapi/38-637897796420763611.png?w=48"
            },
            {
                "name": "Namibia",
                "shortname": "NAM",
                "img": "https://g.cricapi.com/iapi/53-637877082656229722.webp?w=48"
            }
        ],
        "score": [
            {
                "r": 171,
                "w": 10,
                "o": 41.1,
                "inning": "Namibia Inning 1"
            },
            {
                "r": 172,
                "w": 1,
                "o": 35.5,
                "inning": "Karnataka Inning 1"
            }
        ],
        "series_id": "d2d3482d-7e79-4ed1-9e2f-865b1d16e20c",
        "fantasyEnabled": true,
        "bbbEnabled": false,
        "hasSquad": true,
        "matchStarted": true,
        "matchEnded": true
    },
    {
        "id": "c816e663-367e-4fd7-984a-04acb438cc14",
        "name": "Hampshire vs Somerset, South Group",
        "matchType": "t20",
        "status": "Match not started",
        "venue": "The Rose Bowl, Southampton",
        "date": "2023-06-07",
        "dateTimeGMT": "2023-06-07T18:00:00",
        "teams": [
            "Hampshire",
            "Somerset"
        ],
        "teamInfo": [
            {
                "name": "Hampshire",
                "shortname": "HAM",
                "img": "https://g.cricapi.com/iapi/1122-637885550993657486.webp?w=48"
            },
            {
                "name": "Somerset",
                "shortname": "SOM",
                "img": "https://g.cricapi.com/iapi/1131-637885552070524344.webp?w=48"
            }
        ],
        "series_id": "37fa8107-2df7-4779-81f6-d19969429dfe",
        "fantasyEnabled": false,
        "bbbEnabled": false,
        "hasSquad": true,
        "matchStarted": false,
        "matchEnded": false
    },
    {
        "id": "ea1c5a14-a0bb-4da4-8056-e82489e27484",
        "name": "Kent vs Essex, South Group",
        "matchType": "t20",
        "status": "Match not started",
        "venue": "St Lawrence Ground, Canterbury",
        "date": "2023-06-07",
        "dateTimeGMT": "2023-06-07T17:30:00",
        "teams": [
            "Kent",
            "Essex"
        ],
        "teamInfo": [
            {
                "name": "Essex",
                "shortname": "ESX",
                "img": "https://g.cricapi.com/iapi/1119-637885549753088458.webp?w=48"
            },
            {
                "name": "Kent",
                "shortname": "KENT",
                "img": "https://g.cricapi.com/iapi/1124-637885551212175895.webp?w=48"
            }
        ],
        "series_id": "37fa8107-2df7-4779-81f6-d19969429dfe",
        "fantasyEnabled": false,
        "bbbEnabled": false,
        "hasSquad": true,
        "matchStarted": false,
        "matchEnded": false
    }
],
      results: ["win", "loose", "tie"],
      teams: ["teams1", "team2"],
      show:false,
    };
  },
};
</script>
<style scoped>
h1{
    text-align: center;
}
</style>
