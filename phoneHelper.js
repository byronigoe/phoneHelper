// console.log("Phone Helper");
var __phoneNumberRegex = /(^|\D)((?:(?:\+?1[\s\.-]?)?\(?[2-9]\d\d\)?[\s\.-]?)?[2-9]\d{2}[\s\.-]?\d{4})($|\D)/g;
var __commentRegex = /\/\*[\W\w]*\*\//;
var __cssRegex = /[#.][\w -]*\{[\W\w]*\}/;

var na_state = {
  "201": "NJ",
  "202": "DC",
  "203": "CT",
  "204": "MB",
  "205": "AL",
  "206": "WA",
  "207": "ME",
  "208": "ID",
  "209": "CA",
  "210": "TX",
  "212": "NY",
  "213": "CA",
  "214": "TX",
  "215": "PA",
  "216": "OH",
  "217": "IL",
  "218": "MN",
  "219": "IN",
  "220": "OH",
  "223": "PA",
  "224": "IL",
  "225": "LA",
  "226": "ON",
  "227": "MD",
  "228": "MS",
  "229": "GA",
  "231": "MI",
  "234": "OH",
  "235": "MO",
  "236": "BC",
  "239": "FL",
  "240": "MD",
  "248": "MI",
  "249": "ON",
  "250": "BC",
  "251": "AL",
  "252": "NC",
  "253": "WA",
  "254": "TX",
  "256": "AL",
  "257": "BC",
  "260": "IN",
  "262": "WI",
  "263": "QC",
  "267": "PA",
  "269": "MI",
  "270": "KY",
  "272": "PA",
  "274": "WI",
  "276": "VA",
  "279": "CA",
  "281": "TX",
  "283": "OH",
  "289": "ON",
  "301": "MD",
  "302": "DE",
  "303": "CO",
  "304": "WV",
  "305": "FL",
  "306": "SK",
  "307": "WY",
  "308": "NE",
  "309": "IL",
  "310": "CA",
  "312": "IL",
  "313": "MI",
  "314": "MO",
  "315": "NY",
  "316": "KS",
  "317": "IN",
  "318": "LA",
  "319": "IA",
  "320": "MN",
  "321": "FL",
  "323": "CA",
  "324": "FL",
  "325": "TX",
  "326": "OH",
  "327": "AR",
  "329": "NY",
  "330": "OH",
  "331": "IL",
  "332": "NY",
  "334": "AL",
  "336": "NC",
  "337": "LA",
  "339": "MA",
  "340": "VI",
  "341": "CA",
  "343": "ON",
  "346": "TX",
  "347": "NY",
  "350": "CA",
  "351": "MA",
  "352": "FL",
  "353": "WI",
  "354": "QC",
  "360": "WA",
  "361": "TX",
  "363": "NY",
  "364": "KY",
  "365": "ON",
  "367": "QC",
  "368": "AB",
  "369": "CA",
  "380": "OH",
  "382": "ON",
  "385": "UT",
  "386": "FL",
  "401": "RI",
  "402": "NE",
  "403": "AB",
  "404": "GA",
  "405": "OK",
  "406": "MT",
  "407": "FL",
  "408": "CA",
  "409": "TX",
  "410": "MD",
  "412": "PA",
  "413": "MA",
  "414": "WI",
  "415": "CA",
  "416": "ON",
  "417": "MO",
  "418": "QC",
  "419": "OH",
  "423": "TN",
  "424": "CA",
  "425": "WA",
  "428": "NB",
  "430": "TX",
  "431": "MB",
  "432": "TX",
  "434": "VA",
  "435": "UT",
  "436": "OH",
  "437": "ON",
  "438": "QC",
  "440": "OH",
  "442": "CA",
  "443": "MD",
  "445": "PA",
  "447": "IL",
  "448": "FL",
  "450": "QC",
  "458": "OR",
  "463": "IN",
  "464": "IL",
  "468": "QC",
  "469": "TX",
  "470": "GA",
  "472": "NC",
  "474": "SK",
  "475": "CT",
  "478": "GA",
  "479": "AR",
  "480": "AZ",
  "484": "PA",
  "501": "AR",
  "502": "KY",
  "503": "OR",
  "504": "LA",
  "505": "NM",
  "506": "NB",
  "507": "MN",
  "508": "MA",
  "509": "WA",
  "510": "CA",
  "512": "TX",
  "513": "OH",
  "514": "QC",
  "515": "IA",
  "516": "NY",
  "517": "MI",
  "518": "NY",
  "519": "ON",
  "520": "AZ",
  "530": "CA",
  "531": "NE",
  "534": "WI",
  "539": "OK",
  "540": "VA",
  "541": "OR",
  "548": "ON",
  "551": "NJ",
  "557": "MO",
  "559": "CA",
  "561": "FL",
  "562": "CA",
  "563": "IA",
  "564": "WA",
  "567": "OH",
  "570": "PA",
  "571": "VA",
  "572": "OK",
  "573": "MO",
  "574": "IN",
  "575": "NM",
  "579": "QC",
  "580": "OK",
  "581": "QC",
  "582": "PA",
  "584": "MB",
  "585": "NY",
  "586": "MI",
  "587": "AB",
  "601": "MS",
  "602": "AZ",
  "603": "NH",
  "604": "BC",
  "605": "SD",
  "606": "KY",
  "607": "NY",
  "608": "WI",
  "609": "NJ",
  "610": "PA",
  "612": "MN",
  "613": "ON",
  "614": "OH",
  "615": "TN",
  "616": "MI",
  "617": "MA",
  "618": "IL",
  "619": "CA",
  "620": "KS",
  "623": "AZ",
  "624": "NY",
  "626": "CA",
  "628": "CA",
  "629": "TN",
  "630": "IL",
  "631": "NY",
  "636": "MO",
  "639": "SK",
  "640": "NJ",
  "641": "IA",
  "645": "FL",
  "646": "NY",
  "647": "ON",
  "650": "CA",
  "651": "MN",
  "656": "FL",
  "657": "CA",
  "659": "AL",
  "660": "MO",
  "661": "CA",
  "662": "MS",
  "667": "MD",
  "669": "CA",
  "672": "BC",
  "678": "GA",
  "679": "MI",
  "680": "NY",
  "681": "WV",
  "682": "TX",
  "683": "ON",
  "684": "AS",
  "686": "VA",
  "689": "FL",
  "701": "ND",
  "702": "NV",
  "703": "VA",
  "704": "NC",
  "705": "ON",
  "706": "GA",
  "707": "CA",
  "708": "IL",
  "709": "NL",
  "712": "IA",
  "713": "TX",
  "714": "CA",
  "715": "WI",
  "716": "NY",
  "717": "PA",
  "718": "NY",
  "719": "CO",
  "720": "CO",
  "724": "PA",
  "725": "NV",
  "726": "TX",
  "727": "FL",
  "728": "FL",
  "730": "IL",
  "731": "TN",
  "732": "NJ",
  "734": "MI",
  "737": "TX",
  "738": "CA",
  "740": "OH",
  "742": "ON",
  "743": "NC",
  "747": "CA",
  "753": "ON",
  "754": "FL",
  "757": "VA",
  "760": "CA",
  "762": "GA",
  "763": "MN",
  "765": "IN",
  "769": "MS",
  "770": "GA",
  "771": "DC",
  "772": "FL",
  "773": "IL",
  "774": "MA",
  "775": "NV",
  "778": "BC",
  "779": "IL",
  "780": "AB",
  "781": "MA",
  "782": "NS&PE",
  "785": "KS",
  "786": "FL",
  "787": "PR",
  "801": "UT",
  "802": "VT",
  "803": "SC",
  "804": "VA",
  "805": "CA",
  "806": "TX",
  "807": "ON",
  "808": "HI",
  "810": "MI",
  "812": "IN",
  "813": "FL",
  "814": "PA",
  "815": "IL",
  "816": "MO",
  "817": "TX",
  "818": "CA",
  "819": "QC",
  "820": "CA",
  "821": "SC",
  "825": "AB",
  "826": "VA",
  "828": "NC",
  "830": "TX",
  "831": "CA",
  "832": "TX",
  "835": "PA",
  "838": "NY",
  "839": "SC",
  "840": "CA",
  "843": "SC",
  "845": "NY",
  "847": "IL",
  "848": "NJ",
  "850": "FL",
  "854": "SC",
  "856": "NJ",
  "857": "MA",
  "858": "CA",
  "859": "KY",
  "860": "CT",
  "861": "IL",
  "862": "NJ",
  "863": "FL",
  "864": "SC",
  "865": "TN",
  "870": "AR",
  "872": "IL",
  "873": "QC",
  "878": "PA",
  "879": "NL",
  "901": "TN",
  "902": "NS&PE",
  "903": "TX",
  "904": "FL",
  "905": "ON",
  "906": "MI",
  "907": "AK",
  "908": "NJ",
  "909": "CA",
  "910": "NC",
  "912": "GA",
  "913": "KS",
  "914": "NY",
  "915": "TX",
  "916": "CA",
  "917": "NY",
  "918": "OK",
  "919": "NC",
  "920": "WI",
  "924": "MN",
  "925": "CA",
  "928": "AZ",
  "929": "NY",
  "930": "IN",
  "931": "TN",
  "934": "NY",
  "936": "TX",
  "937": "OH",
  "938": "AL",
  "939": "PR",
  "940": "TX",
  "941": "FL",
  "942": "ON",
  "943": "GA",
  "945": "TX",
  "947": "MI",
  "948": "VA",
  "949": "CA",
  "951": "CA",
  "952": "MN",
  "954": "FL",
  "956": "TX",
  "959": "CT",
  "970": "CO",
  "971": "OR",
  "972": "TX",
  "973": "NJ",
  "975": "MO",
  "978": "MA",
  "979": "TX",
  "980": "NC",
  "983": "CO",
  "984": "NC",
  "985": "LA",
  "986": "ID",
  "989": "MI"
};

var na_time = {
  "AB": "M",
  "AK": "K",
  "AL": "C",
  "AR": "C",
  "AS": "S",
  "AZ": "M",
  "BC": "P",
  "CA": "P",
  "CO": "M",
  "CT": "E",
  "DC": "E",
  "DE": "E",
  "FL": "E",
  "GA": "E",
  "HI": "H",
  "IA": "C",
  "ID": "M",
  "IL": "C",
  "IN": "E",
  "KS": "C",
  "KY": "E",
  "LA": "C",
  "MA": "E",
  "MB": "C",
  "MD": "E",
  "ME": "E",
  "MI": "E",
  "MN": "C",
  "MO": "C",
  "MS": "C",
  "MT": "M",
  "NB": "A",
  "NC": "E",
  "ND": "C",
  "NE": "C",
  "NH": "E",
  "NJ": "E",
  "NL": "A",
  "NM": "M",
  "NS&PE": "A",
  "NV": "P",
  "NY": "E",
  "OH": "E",
  "OK": "C",
  "ON": "E",
  "OR": "P",
  "PA": "E",
  "PR": "A",
  "QC": "E",
  "RI": "E",
  "SC": "E",
  "SD": "C",
  "SK": "M",
  "TN": "C",
  "TX": "C",
  "UT": "M",
  "VA": "E",
  "VI": "A",
  "VT": "E",
  "WA": "P",
  "WI": "C",
  "WV": "E",
  "WY": "M",
  "YT&NT&NU": "P"
};

var phoneNumberRegEx = /(?:^|[\s\(])(?:\+?1\s*(?:[.-]\s*)?)?(?:\(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*\)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})(?!\.\S|[^\s\)x\.])/
var phoneNumberRegExMatcher = new RegExp(phoneNumberRegEx)

var linkClass = "phone-helper";

linkPhoneNumbers(document.body);
document.body.addEventListener("DOMNodeInserted", OnNodeInserted, false);

function linkPhoneNumbers(node) {
    for (var i = 0; i < node.childNodes.length; ++i) {
        var child = node.childNodes[i];
        if (child.nodeName == "SCRIPT" || child.nodeName == "NOSCRIPT"
                || child.nodeName == "OBJECT" || child.nodeName == "EMBED"
                || child.nodeName == "APPLET" || child.nodeName == "IFRAME") {
            continue;
        }
        if (child.nodeName == "DIV") {
          // console.log("div");
          if (child.hasAttribute("contenteditable")) {
            // console.log("editable div");
            continue;
          }
          // if (child.hasAttribute("data-msg-id")) {
          //   // console.log("data-msg-id div");
          //   continue;
          // }
        }
        if (child.parentElement && (child.parentElement.nodeName == "DIV" &&
          child.parentElement.hasAttribute("contenteditable")) ||
          (child.parentElement.parentElement &&
            child.parentElement.parentElement.nodeName == "DIV" &&
            child.parentElement.parentElement.hasAttribute("contenteditable"))) {
            // console.log("parent contenteditable");
            continue;
        }

        if (child.childNodes.length > 0) {
            linkPhoneNumbers(child);
        } else if (child.nodeType == 3) {
            var phoneNumbers = phoneNumberRegExMatcher.exec(child.nodeValue);
            if (phoneNumbers) {
                var nextChild = child.nextSibling;
                if (nextChild && nextChild.class == linkClass) {
                    continue;
                }

                var phoneNumber = "+1" + (phoneNumbers[1] ? phoneNumbers[1] : phoneNumbers[2]) + phoneNumbers[3] + phoneNumbers[4];
                var formattedPhoneNumber = "(" + (phoneNumbers[1] ? phoneNumbers[1] : phoneNumbers[2]) + ") " + phoneNumbers[3] + "-" + phoneNumbers[4];

                var stripped = phoneNumber.substring(2);

                var title = "";

                //stripped = stripped.replace(/[\.-]+/g,"");
                // console.log("stripped: " + stripped + ", " + stripped.substring(0,3));
                if (stripped.length == 10) {
                  // US number
                  var state = na_state[stripped.substring(0,3)];
                  if (state) {
                    title = "State: " + state + " Time: " + na_time[state];
                  } else {
                    title = "Unknown";
                  }
                } else {
                  title = "International";
                }

                var image = document.createElement("img");
                image.src = chrome.runtime.getURL("icon48.png");
                image.style.width = "1em";
                image.style.height = "1em";

                var link = document.createElement("a");
                link.href = "tel:" + phoneNumber;
                link.title = title;
                link.class = linkClass;
                link.style.marginLeft = "0.25em";
                link.appendChild(image);

                child.splitText(phoneNumbers.index + phoneNumbers[0].length);
                node.insertBefore(link, node.childNodes[++i]);
            }
        }
    }
}

var linking = false;

function OnNodeInserted(event) {
    if (linking) return;
    linking = true;
    linkPhoneNumbers(event.target)
    linking = false;
}
